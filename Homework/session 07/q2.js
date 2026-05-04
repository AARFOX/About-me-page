console.log("╔══════════════════════════════════════╗");
console.log("║        ARROW FUNCTIONS               ║");
console.log("╚══════════════════════════════════════╝\n");

// ===== Traditional vs Arrow Function =====

console.log(">>> Traditional vs Arrow:");

// Traditional function expression
const addTraditional = function(a, b) {
    return a + b;
};

// Arrow function (full form)
const addArrow1 = (a, b) => {
    return a + b;
};

// Arrow function (short form - implicit return)
const addArrow2 = (a, b) => a + b;

console.log("Traditional: " + addTraditional(5, 3));
console.log("Arrow (full): " + addArrow1(5, 3));
console.log("Arrow (short): " + addArrow2(5, 3));

// ===== Arrow Function Variations =====

console.log("\n>>> Arrow Function Variations:\n");

// No parameters - need empty ()
const getPI = () => 3.14159;
console.log("getPI(): " + getPI());

// One parameter - can skip ()
const double = n => n * 2;
console.log("double(5): " + double(5));

const greet = name => "Hello, " + name + "!";
console.log("greet('Ahmed'): " + greet("Ahmed"));

// Multiple parameters - need ()
const multiply = (a, b) => a * b;
console.log("multiply(4, 5): " + multiply(4, 5));

// Multi-line body - need {} and return
const calculateTotal = (price, tax, discount) => {
    let subtotal = price + (price * tax);
    let total = subtotal - discount;
    return total;
};
console.log("calculateTotal(100, 0.14, 10): " + calculateTotal(100, 0.14, 10));

// ===== Default Parameters =====

console.log("\n╔══════════════════════════════════════╗");
console.log("║       DEFAULT PARAMETERS             ║");
console.log("╚══════════════════════════════════════╝\n");

// Function with default parameters
const welcomeUser = (name = "Guest", role = "Visitor") => {
    return "Welcome, " + name + "! You are logged in as " + role + ".";
};

console.log(">>> Default Parameters Examples:\n");
console.log("No arguments: " + welcomeUser());
console.log("Name only: " + welcomeUser("Ahmed"));
console.log("Both arguments: " + welcomeUser("Sara", "Admin"));

// Default with calculation
const calculateInterest = (principal, rate = 0.05, years = 1) => {
    return principal * rate * years;
};

console.log("\n>>> Interest Calculator:");
console.log("$1000, default rate & years: $" + calculateInterest(1000));
console.log("$1000, 10% rate, default years: $" + calculateInterest(1000, 0.10));
console.log("$1000, 10% rate, 5 years: $" + calculateInterest(1000, 0.10, 5));

// ===== Practical Arrow Functions =====

console.log("\n========== Practical Examples ==========\n");

// isEligible - Arrow function
const isEligible = age => age >= 18;

console.log(">>> isEligible() - Arrow Function:");
console.log("Age 25: " + isEligible(25)); // true
console.log("Age 16: " + isEligible(16)); // false
console.log("Age 18: " + isEligible(18)); // true

// formatProfile - Arrow function
const formatProfile = (name, role, city) => `${name} | ${role} | ${city}`;

console.log("\n>>> formatProfile() - Template Literal:");
console.log(formatProfile("Ahmed", "Frontend Developer", "Cairo"));
console.log(formatProfile("Sara", "Designer", "Dubai"));

// calculateProjectCost - Arrow function with default
const calculateProjectCost = (hours, rate = 50) => hours * rate;

console.log("\n>>> calculateProjectCost() - Default Rate:");
console.log("10 hours @ default rate: $" + calculateProjectCost(10));
console.log("10 hours @ $100/hr: $" + calculateProjectCost(10, 100));

// ===== Object Destructuring in Parameters =====

console.log("\n========== Advanced Patterns ==========\n");

// Default object parameter
const createUser = (user = {}) => {
    const name = user.name || "Anonymous";
    const email = user.email || "No email";
    const age = user.age || 0;
    
    return {
        name: name,
        email: email,
        age: age,
        createdAt: new Date().toISOString()
    };
};

console.log(">>> createUser() with Object Defaults:");
console.log(createUser());
console.log(createUser({ name: "Ahmed", email: "ahmed@test.com", age: 25 }));

// ===== Comparison Table =====

console.log("\n========== Syntax Comparison ==========\n");

console.log("┌────────────────────────────────────────────────────┐");
console.log("│ Type              │ Syntax                        │");
console.log("├───────────────────┼────────────────────────────────┤");
console.log("│ Declaration       │ function name(a, b) { ... }   │");
console.log("│ Expression        │ const name = function(a) { }  │");
console.log("│ Arrow (full)      │ const name = (a, b) => { }    │");
console.log("│ Arrow (short)     │ const name = a => a * 2       │");
console.log("│ Arrow (no params) │ const name = () => value      │");
console.log("└────────────────────────────────────────────────────┘");

// ===== When to Use What =====

console.log("\n>>> Best Practices:\n");
console.log("1. Use arrow functions for short, simple functions");
console.log("2. Use traditional functions for methods in objects");
console.log("3. Use default parameters for optional arguments");
console.log("4. Keep arrow functions readable - use {} if complex");

// ===== Common Mistakes =====

console.log("\n========== Common Mistakes ==========\n");

// Mistake 1: Forgetting return in multi-line arrow
// const broken = (a, b) => { a + b }; // Returns undefined!
const correct = (a, b) => { return a + b; };
console.log("Multi-line arrow needs return: " + correct(5, 3));

// Mistake 2: Object literal without parentheses
// const broken = () => { name: "Ahmed" }; // Returns undefined!
const correctObject = () => ({ name: "Ahmed" });
console.log("Return object literal: " + JSON.stringify(correctObject()));

// Mistake 3: Default parameter order
const wrongOrder = (a = 1, b) => a + b; // Bad practice
const rightOrder = (b, a = 1) => a + b; // Good practice
console.log("Defaults should be last: " + rightOrder(5));

// ============ Expected Output ============
// ╔══════════════════════════════════════╗
// ║        ARROW FUNCTIONS               ║
// ╚══════════════════════════════════════╝
//
// >>> Traditional vs Arrow:
// Traditional: 8
// Arrow (full): 8
// Arrow (short): 8
//
// >>> Arrow Function Variations:
// getPI(): 3.14159
// double(5): 10
// greet('Ahmed'): Hello, Ahmed!
// multiply(4, 5): 20
// ...
