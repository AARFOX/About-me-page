/**
 * Calculator - Session 02 Assignment
 * Course: Web Development & Freelancing
 * Instructor: Ahmed M. Ezzeldeen
 * 
 * Features:
 * - Basic operations: +, -, *, /, %
 * - Error handling: division by zero, invalid operations
 * - History of calculations
 * - Clean and modern UI
 */

// ===== State Variables =====
let currentOperand = '';
let previousOperand = '';
let operation = null;
let shouldResetScreen = false;
let history = [];

// ===== DOM Elements =====
const currentOperandDisplay = document.getElementById('currentOperand');
const previousOperandDisplay = document.getElementById('previousOperand');
const errorMessage = document.getElementById('errorMessage');
const historyContainer = document.getElementById('history');

// ===== Helper Functions =====

/**
 * Display an error message to the user
 * @param {string} message - The error message to display
 */
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.add('show');
    
    // Hide error after 3 seconds
    setTimeout(() => {
        errorMessage.classList.remove('show');
    }, 3000);
}

/**
 * Update the calculator display
 */
function updateDisplay() {
    currentOperandDisplay.textContent = currentOperand || '0';
    
    if (operation) {
        const operatorSymbol = getOperatorSymbol(operation);
        previousOperandDisplay.textContent = `${previousOperand} ${operatorSymbol}`;
    } else {
        previousOperandDisplay.textContent = '';
    }
}

/**
 * Get the display symbol for an operator
 * @param {string} op - The operator
 * @returns {string} - The display symbol
 */
function getOperatorSymbol(op) {
    const symbols = {
        '+': '+',
        '-': '−',
        '*': '×',
        '/': '÷',
        '%': '%'
    };
    return symbols[op] || op;
}

/**
 * Format a number for display
 * @param {number} num - The number to format
 * @returns {string} - The formatted number
 */
function formatNumber(num) {
    if (isNaN(num)) return 'Error';
    
    // Handle very large or very small numbers
    if (Math.abs(num) > 999999999999) {
        return num.toExponential(4);
    }
    
    // Round to avoid floating point errors
    const rounded = Math.round(num * 1000000000) / 1000000000;
    
    // Format with commas for thousands
    return rounded.toLocaleString('en-US', { maximumFractionDigits: 10 });
}

/**
 * Add calculation to history
 * @param {string} expression - The calculation expression
 * @param {string} result - The result
 */
function addToHistory(expression, result) {
    history.unshift({ expression, result });
    
    // Keep only last 10 calculations
    if (history.length > 10) {
        history.pop();
    }
    
    renderHistory();
}

/**
 * Render history to the DOM
 */
function renderHistory() {
    historyContainer.innerHTML = history.map(item => `
        <div class="history-item">
            ${item.expression} = ${item.result}
        </div>
    `).join('');
}

// ===== Calculator Functions =====

/**
 * Append a number to the current operand
 * @param {string} number - The number to append
 */
function appendNumber(number) {
    if (shouldResetScreen) {
        currentOperand = '';
        shouldResetScreen = false;
    }
    
    // Limit the number of digits
    if (currentOperand.replace(/[^0-9]/g, '').length >= 15) {
        showError('Maximum digits reached!');
        return;
    }
    
    currentOperand += number;
    updateDisplay();
}

/**
 * Append a decimal point to the current operand
 */
function appendDecimal() {
    if (shouldResetScreen) {
        currentOperand = '';
        shouldResetScreen = false;
    }
    
    // Check if decimal already exists
    if (currentOperand.includes('.')) {
        showError('Decimal point already exists!');
        return;
    }
    
    // Add decimal (with 0 if needed)
    if (currentOperand === '') {
        currentOperand = '0';
    }
    currentOperand += '.';
    updateDisplay();
}

/**
 * Append an operator and prepare for the next operand
 * @param {string} op - The operator to append
 */
function appendOperator(op) {
    // If there's a pending operation, calculate it first
    if (operation && !shouldResetScreen) {
        calculate();
    }
    
    // Use the current operand or 0
    if (currentOperand === '') {
        currentOperand = '0';
    }
    
    previousOperand = currentOperand;
    operation = op;
    shouldResetScreen = true;
    updateDisplay();
}

/**
 * Perform the calculation and display the result
 */
function calculate() {
    // Check if we have all required values
    if (!operation || currentOperand === '' || previousOperand === '') {
        return;
    }
    
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    let result;
    
    // Perform the operation
    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            // ===== Error Handling: Division by Zero =====
            if (current === 0) {
                showError('Cannot divide by zero! 🚫');
                clearAll();
                return;
            }
            result = prev / current;
            break;
        case '%':
            result = prev % current;
            break;
        default:
            showError('Invalid operation!');
            return;
    }
    
    // Check for invalid results
    if (!isFinite(result)) {
        showError('Invalid calculation result!');
        clearAll();
        return;
    }
    
    // Format and display result
    const formattedResult = formatNumber(result);
    const expression = `${formatNumber(prev)} ${getOperatorSymbol(operation)} ${formatNumber(current)}`;
    
    // Add to history
    addToHistory(expression, formattedResult);
    
    // Update display
    currentOperand = result.toString();
    operation = null;
    previousOperand = '';
    shouldResetScreen = true;
    updateDisplay();
}

/**
 * Clear all calculator state
 */
function clearAll() {
    currentOperand = '';
    previousOperand = '';
    operation = null;
    shouldResetScreen = false;
    updateDisplay();
}

/**
 * Delete the last character from the current operand
 */
function deleteLast() {
    if (shouldResetScreen) {
        return;
    }
    
    currentOperand = currentOperand.slice(0, -1);
    
    // If empty, show 0
    if (currentOperand === '' || currentOperand === '-') {
        currentOperand = '';
    }
    
    updateDisplay();
}

/**
 * Clear the calculation history
 */
function clearHistory() {
    history = [];
    renderHistory();
}

// ===== Keyboard Support =====
document.addEventListener('keydown', (e) => {
    // Numbers
    if (e.key >= '0' && e.key <= '9') {
        appendNumber(e.key);
    }
    // Operators
    else if (e.key === '+') appendOperator('+');
    else if (e.key === '-') appendOperator('-');
    else if (e.key === '*') appendOperator('*');
    else if (e.key === '/') {
        e.preventDefault(); // Prevent browser quick find
        appendOperator('/');
    }
    else if (e.key === '%') appendOperator('%');
    // Decimal
    else if (e.key === '.') appendDecimal();
    // Equals
    else if (e.key === 'Enter' || e.key === '=') {
        e.preventDefault();
        calculate();
    }
    // Clear
    else if (e.key === 'Escape') clearAll();
    // Delete
    else if (e.key === 'Backspace') deleteLast();
});

// ===== Initialize =====
updateDisplay();

// ===== Console Welcome Message =====
console.log('%c🧮 Calculator - Session 02 Project', 'font-size: 20px; font-weight: bold; color: #4ecca3;');
console.log('%cCourse: Web Development & Freelancing', 'font-size: 14px; color: #888;');
console.log('%cInstructor: Ahmed M. Ezzeldeen', 'font-size: 14px; color: #888;');
console.log('%c─────────────────────────────', 'color: #333;');
console.log('Features:');
console.log('✅ Basic operations: +, -, *, /, %');
console.log('✅ Error handling (division by zero)');
console.log('✅ Calculation history');
console.log('✅ Keyboard support');
console.log('✅ Modern responsive design');
