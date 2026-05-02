/**
 * Session 07 - Question 1
 * Topic: Function Declaration, Expression & Return Values
 * 
 * Exercise: Profile Formatter & Project Cost Calculator
 * - Practice function declarations
 * - Practice function expressions
 * - Understand return values
 */

// ============ Solution ============

console.log("╔══════════════════════════════════════╗");
console.log("║      FUNCTION DECLARATIONS           ║");
console.log("╚══════════════════════════════════════╝\n");

// ===== Function Declaration =====
// يمكن استدعاؤها من أي مكان في الملف (Hoisting)

function formatProfile(name, role, city) {
    return name + " | " + role + " | " + city;
}

// Test the function
console.log(">>> formatProfile():");
console.log(formatProfile("Ahmed", "Frontend Developer", "Cairo"));
console.log(formatProfile("Sara", "UI/UX Designer", "Dubai"));
console.log(formatProfile("Omar", "Backend Developer", "Riyadh"));

// ===== Function with Multiple Operations =====

function calculateProjectCost(hours, rate) {
    let subtotal = hours * rate;
    let tax = subtotal * 0.14; // 14% tax
    let total = subtotal + tax;
    return total;
}

console.log("\n>>> calculateProjectCost():");
console.log("10 hours @ $200/hr = $" + calculateProjectCost(10, 200));
console.log("20 hours @ $150/hr = $" + calculateProjectCost(20, 150));
console.log("5 hours @ $100/hr = $" + calculateProjectCost(5, 100));

// ===== Function Expression =====
// يجب تعريفها قبل الاستدعاء

const calculateAge = function(birthYear) {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
};

console.log("\n>>> calculateAge() (Function Expression):");
console.log("Born 1995: " + calculateAge(1995) + " years old");
console.log("Born 2000: " + calculateAge(2000) + " years old");
console.log("Born 1990: " + calculateAge(1990) + " years old");

// ===== Return vs No Return =====

console.log("\n========== Return Values ==========\n");

// Function WITH return - can store the result
function add(a, b) {
    return a + b;
}

let sum = add(5, 3);
console.log("add(5, 3) = " + sum);
console.log("add(10, 20) + 5 = " + (add(10, 20) + 5)); // Can use in calculations

// Function WITHOUT return - returns undefined
function greet(name) {
    console.log("Hello, " + name + "!");
    // No return statement
}

let result = greet("Ahmed");
console.log("Return value of greet(): " + result); // undefined

// ===== Multiple Return Statements =====

console.log("\n========== Multiple Returns ==========\n");

function getGrade(score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
}

console.log("Score 95: Grade " + getGrade(95));
console.log("Score 85: Grade " + getGrade(85));
console.log("Score 55: Grade " + getGrade(55));

// ===== Early Return Pattern =====

function isEligible(age) {
    // Early return - exit function early
    if (age < 0) {
        return "Invalid age!";
    }
    
    if (age >= 18) {
        return true;
    }
    
    return false;
}

console.log("\n>>> isEligible() (Early Return Pattern):");
console.log("Age 25: " + isEligible(25));
console.log("Age 16: " + isEligible(16));
console.log("Age -5: " + isEligible(-5));

// ===== Real-World Example: Tax Calculator =====

console.log("\n========== Real-World Examples ==========\n");

function calculateTax(income, taxRate) {
    if (income <= 0) {
        return 0;
    }
    return income * taxRate;
}

function calculateNetSalary(grossSalary, taxRate, bonus) {
    let tax = calculateTax(grossSalary, taxRate);
    return grossSalary - tax + bonus;
}

console.log(">>> Salary Calculator:");
let salary = 10000;
let taxRate = 0.15;
let bonus = 500;

console.log("Gross Salary: $" + salary);
console.log("Tax (15%): $" + calculateTax(salary, taxRate));
console.log("Bonus: $" + bonus);
console.log("Net Salary: $" + calculateNetSalary(salary, taxRate, bonus));

// ===== Comparison: Declaration vs Expression =====

console.log("\n========== Declaration vs Expression ==========\n");

// Declaration - can be called before definition (hoisting)
console.log("Declaration:", multiply(5, 3)); // Works!

function multiply(a, b) {
    return a * b;
}

// Expression - must be defined before calling
const divide = function(a, b) {
    if (b === 0) {
        return "Cannot divide by zero!";
    }
    return a / b;
};

console.log("Expression:", divide(10, 2));

// ❌ This would cause an error:
// console.log(subtract(5, 3)); // Error!
// const subtract = function(a, b) { return a - b; };

// ===== Template Literal Function =====

function createEmailTemplate(name, company, position) {
    return `
Dear ${name},

Thank you for applying to ${company} for the ${position} position.

We will review your application and get back to you soon.

Best regards,
HR Team
    `.trim();
}

console.log("\n>>> Email Template:");
console.log(createEmailTemplate("Ahmed Mohamed", "Tech Corp", "Frontend Developer"));

// ============ Expected Output ============
// ╔══════════════════════════════════════╗
// ║      FUNCTION DECLARATIONS           ║
// ╚══════════════════════════════════════╝
//
// >>> formatProfile():
// Ahmed | Frontend Developer | Cairo
// Sara | UI/UX Designer | Dubai
// Omar | Backend Developer | Riyadh
//
// >>> calculateProjectCost():
// 10 hours @ $200/hr = $2280
// 20 hours @ $150/hr = $3420
// 5 hours @ $100/hr = $570
// ...
