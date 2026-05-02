/**
 * Session 07 - Question 3
 * Topic: Callbacks & Scope
 * 
 * Exercise: Understanding Callbacks and Variable Scope
 * - Local vs Global scope
 * - Functions as arguments (callbacks)
 * - Higher-order functions
 */

// ============ Solution ============

console.log("╔══════════════════════════════════════╗");
console.log("║              SCOPE                   ║");
console.log("╚══════════════════════════════════════╝\n");

// ===== Global Scope =====

let globalName = "Ahmed";        // Global variable
let globalRole = "Developer";    // Global variable

function showGlobal() {
    // Can access global variables from inside a function
    console.log("Inside function:");
    console.log("  globalName: " + globalName);
    console.log("  globalRole: " + globalRole);
}

showGlobal();

console.log("\nOutside function:");
console.log("  globalName: " + globalName);
console.log("  globalRole: " + globalRole);

// ===== Local Scope =====

console.log("\n>>> Local Scope:\n");

function showLocal() {
    let localCity = "Cairo";      // Local variable - only exists here
    const localAge = 25;          // Local constant
    
    console.log("Inside showLocal():");
    console.log("  localCity: " + localCity);
    console.log("  localAge: " + localAge);
    console.log("  globalName: " + globalName); // Can still access global
}

showLocal();

// ❌ This would cause an error:
// console.log(localCity); // ReferenceError: localCity is not defined

console.log("\nOutside showLocal():");
console.log("  globalName is still accessible: " + globalName);
console.log("  localCity is NOT accessible (would cause error)");

// ===== Scope Shadowing =====

console.log("\n>>> Variable Shadowing:\n");

let userName = "Global Ahmed";

function shadowingExample() {
    let userName = "Local Ahmed"; // Shadows the global variable
    console.log("Inside function: " + userName); // "Local Ahmed"
}

shadowingExample();
console.log("Outside function: " + userName); // "Global Ahmed"

// ===== Block Scope (let & const) =====

console.log("\n>>> Block Scope (let & const):\n");

function blockScopeExample() {
    if (true) {
        let blockLet = "I'm in a block (let)";
        const blockConst = "I'm in a block (const)";
        var blockVar = "I'm function-scoped (var)";
        
        console.log("Inside block:");
        console.log("  blockLet: " + blockLet);
        console.log("  blockConst: " + blockConst);
        console.log("  blockVar: " + blockVar);
    }
    
    // blockLet and blockConst are NOT accessible here
    // console.log(blockLet);    // Error!
    // console.log(blockConst);  // Error!
    
    // But var IS accessible (function-scoped)
    console.log("Outside if-block:");
    console.log("  blockVar (var) is still accessible: " + blockVar);
}

blockScopeExample();

// ===== CALLBACKS =====

console.log("\n╔══════════════════════════════════════╗");
console.log("║            CALLBACKS                 ║");
console.log("╚══════════════════════════════════════╝\n");

// ===== Basic Callback =====

function runTwice(action) {
    console.log(">>> Running action twice:");
    action();
    action();
}

function sayHello() {
    console.log("  Hello!");
}

function sayGoodbye() {
    console.log("  Goodbye!");
}

runTwice(sayHello);
console.log();
runTwice(sayGoodbye);

// ===== Callback with Arguments =====

console.log("\n>>> Callback with Arguments:\n");

function calculate(a, b, operation) {
    return operation(a, b);
}

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

console.log("calculate(10, 5, add): " + calculate(10, 5, add));
console.log("calculate(10, 5, subtract): " + calculate(10, 5, subtract));
console.log("calculate(10, 5, multiply): " + calculate(10, 5, multiply));
console.log("calculate(10, 5, divide): " + calculate(10, 5, divide));

// ===== Inline Callbacks =====

console.log("\n>>> Inline Arrow Callbacks:\n");

// Passing arrow functions directly
console.log("Using inline arrow:");
console.log("  10 + 5 = " + calculate(10, 5, (a, b) => a + b));
console.log("  10 - 5 = " + calculate(10, 5, (a, b) => a - b));

// ===== Higher-Order Function Example =====

console.log("\n========== Higher-Order Functions ==========\n");

// Function that returns a function
function createGreeter(greeting) {
    return function(name) {
        return greeting + ", " + name + "!";
    };
}

const sayHi = createGreeter("Hi");
const sayHello2 = createGreeter("Hello");
const sayWelcome = createGreeter("Welcome");

console.log(">>> Function Factory:");
console.log(sayHi("Ahmed"));
console.log(sayHello2("Sara"));
console.log(sayWelcome("Omar"));

// Arrow function version
const createGreeterArrow = greeting => name => `${greeting}, ${name}!`;

const sayHey = createGreeterArrow("Hey");
console.log(sayHey("Ali"));

// ===== Real-World Callback Examples =====

console.log("\n========== Real-World Examples ==========\n");

// Async-style callback simulation
function processData(data, onSuccess, onError) {
    if (data && data.length > 0) {
        onSuccess(data);
    } else {
        onError("No data provided!");
    }
}

const handleSuccess = data => console.log("✅ Success: " + data.join(", "));
const handleError = error => console.log("❌ Error: " + error);

console.log(">>> Process Data Callback:");
processData(["Item 1", "Item 2", "Item 3"], handleSuccess, handleError);
processData([], handleSuccess, handleError);

// Array-style callback (preview for Session 08)
console.log("\n>>> Array Method Callbacks (Preview):");

const numbers = [1, 2, 3, 4, 5];

// forEach - execute function for each element
console.log("forEach:");
numbers.forEach((num, index) => {
    console.log("  Index " + index + ": " + num);
});

// map - transform each element
const doubled = numbers.map(num => num * 2);
console.log("\nmap (doubled): " + doubled.join(", "));

// filter - keep elements that pass the test
const evens = numbers.filter(num => num % 2 === 0);
console.log("filter (evens): " + evens.join(", "));

// find - find first matching element
const firstEven = numbers.find(num => num % 2 === 0);
console.log("find (first even): " + firstEven);

// ===== Callback Chain =====

console.log("\n>>> Callback Chain:\n");

function step1(value, callback) {
    console.log("Step 1: Processing " + value);
    callback(value + 10);
}

function step2(value, callback) {
    console.log("Step 2: Processing " + value);
    callback(value * 2);
}

function step3(value, callback) {
    console.log("Step 3: Processing " + value);
    callback(value - 5);
}

// Chain the callbacks
step1(5, function(result1) {
    step2(result1, function(result2) {
        step3(result2, function(result3) {
            console.log("Final result: " + result3);
        });
    });
});

// ===== Scope Summary =====

console.log("\n========== Scope Summary ==========\n");

console.log("┌─────────────────────────────────────────────────────────┐");
console.log("│ Scope Type    │ Where Declared        │ Accessible From │");
console.log("├───────────────┼───────────────────────┼─────────────────┤");
console.log("│ Global        │ Outside any function  │ Everywhere      │");
console.log("│ Function      │ Inside a function     │ That function   │");
console.log("│ Block (let)   │ Inside {} block       │ That block      │");
console.log("│ Block (const) │ Inside {} block       │ That block      │");
console.log("│ Function (var)│ Inside a function     │ Whole function  │");
console.log("└─────────────────────────────────────────────────────────┘");

// ============ Expected Output ============
// ╔══════════════════════════════════════╗
// ║              SCOPE                   ║
// ╚══════════════════════════════════════╝
//
// Inside function:
//   globalName: Ahmed
//   globalRole: Developer
//
// Outside function:
//   globalName: Ahmed
//   globalRole: Developer
// ...
