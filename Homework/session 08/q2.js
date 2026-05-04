console.log("╔══════════════════════════════════════╗");
console.log("║        ARRAY METHODS                 ║");
console.log("╚══════════════════════════════════════╝\n");

// ===== forEach - Loop Through Items =====

console.log(">>> forEach() - Loop Through Every Item:\n");

let skills = ["HTML", "CSS", "JavaScript", "React"];

console.log("Traditional for loop:");
for (let i = 0; i < skills.length; i++) {
    console.log("  " + i + ": " + skills[i]);
}

console.log("\nforEach with arrow function:");
skills.forEach(skill => console.log("  - " + skill));

console.log("\nforEach with index:");
skills.forEach((skill, index) => {
    console.log("  " + (index + 1) + ". " + skill);
});

// ===== map - Transform Every Item =====

console.log("\n>>> map() - Transform Each Item:\n");

let prices = [100, 200, 300, 400];

// Add 14% tax to each price
let pricesWithTax = prices.map(price => price * 1.14);
console.log("Original prices:", prices);
console.log("With 14% tax:", pricesWithTax);

// Convert skills to uppercase
let upperSkills = skills.map(s => s.toUpperCase());
console.log("\nOriginal:", skills);
console.log("Uppercase:", upperSkills);

// Create objects from array
let skillObjects = skills.map((skill, index) => ({
    id: index + 1,
    name: skill,
    level: "Intermediate"
}));
console.log("\nAs objects:", skillObjects);

// ===== filter - Keep Matching Items =====

console.log("\n>>> filter() - Keep Items That Pass Test:\n");

let scores = [85, 42, 96, 60, 73, 55, 90, 30];

// Filter passing scores (>= 70)
let passingScores = scores.filter(score => score >= 70);
console.log("All scores:", scores);
console.log("Passing (>=70):", passingScores);

// Filter skills with length > 3
let longSkills = skills.filter(s => s.length > 3);
console.log("\nSkills:", skills);
console.log("Length > 3:", longSkills);

// Filter even numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evens = numbers.filter(n => n % 2 === 0);
console.log("\nNumbers:", numbers);
console.log("Even:", evens);

// ===== find - Get First Match =====

console.log("\n>>> find() - Get First Matching Item:\n");

let products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 300 },
    { name: "Phone", price: 700 }
];

// Find first expensive product
let expensive = products.find(p => p.price > 600);
console.log("First product > $600:", expensive);

// Find by name
let phone = products.find(p => p.name === "Phone");
console.log("First Phone:", phone);

// When not found
let notFound = products.find(p => p.name === "TV");
console.log("TV (not found):", notFound);  // undefined

// ===== Combining Methods =====

console.log("\n========== Combining Methods ==========\n");

let transactions = [
    { type: "income", amount: 5000 },
    { type: "expense", amount: 1500 },
    { type: "income", amount: 2000 },
    { type: "expense", amount: 800 },
    { type: "income", amount: 1000 },
    { type: "expense", amount: 300 }
];

// Get total income
let income = transactions
    .filter(t => t.type === "income")
    .map(t => t.amount)
    .reduce((sum, amount) => sum + amount, 0);

// Get total expenses
let expenses = transactions
    .filter(t => t.type === "expense")
    .map(t => t.amount)
    .reduce((sum, amount) => sum + amount, 0);

console.log("Transactions:", transactions);
console.log("Total Income:", income);
console.log("Total Expenses:", expenses);
console.log("Balance:", income - expenses);

// ===== Real-World: Project Manager =====

console.log("\n========== Real-World: Project Manager ==========\n");

let projects = [
    { name: "Calculator", status: "completed", tech: "JavaScript" },
    { name: "Todo App", status: "in-progress", tech: "React" },
    { name: "Portfolio", status: "completed", tech: "HTML/CSS" },
    { name: "Weather App", status: "planning", tech: "JavaScript" },
    { name: "E-commerce", status: "in-progress", tech: "Node.js" }
];

// Get completed projects
let completed = projects.filter(p => p.status === "completed");
console.log("Completed projects:", completed.map(p => p.name).join(", "));

// Get JavaScript projects
let jsProjects = projects.filter(p => p.tech === "JavaScript");
console.log("JavaScript projects:", jsProjects.map(p => p.name).join(", "));

// Find specific project
let todoApp = projects.find(p => p.name === "Todo App");
console.log("Todo App status:", todoApp ? todoApp.status : "Not found");

// Get all project names
let projectNames = projects.map(p => p.name);
console.log("All projects:", projectNames.join(", "));

// Count by status
let completedCount = projects.filter(p => p.status === "completed").length;
let inProgressCount = projects.filter(p => p.status === "in-progress").length;
console.log("\nStats: " + completedCount + " completed, " + inProgressCount + " in progress");

// ===== Practice Exercises =====

console.log("\n========== Practice Exercises ==========\n");

// Exercise 1: Filter skills with more than 3 characters
let mySkills = ["HTML", "CSS", "JS", "Git", "Figma"];
let filtered = mySkills.filter(s => s.length > 3);
console.log("Skills > 3 chars:", filtered);

// Exercise 2: Convert all skills to uppercase
let upper = mySkills.map(s => s.toUpperCase());
console.log("Uppercase:", upper);

// Exercise 3: Get first skill starting with 'G'
let startsWithG = mySkills.find(s => s.startsWith("G"));
console.log("Starts with G:", startsWithG);

// ===== Method Comparison =====

console.log("\n========== Method Comparison ==========\n");

console.log("┌────────────┬─────────────────────────────────────────┐");
console.log("│ Method     │ Purpose                                 │");
console.log("├────────────┼─────────────────────────────────────────┤");
console.log("│ forEach    │ Loop - no return, just do something     │");
console.log("│ map        │ Transform - returns NEW array           │");
console.log("│ filter     │ Filter - returns subset as NEW array    │");
console.log("│ find       │ Find - returns FIRST match (single)     │");
console.log("│ reduce     │ Reduce - returns single combined value  │");
console.log("└────────────┴─────────────────────────────────────────┘");

// ===== Chaining Demo =====

console.log("\n>>> Method Chaining:\n");

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = nums
    .filter(n => n % 2 === 0)    // [2, 4, 6, 8, 10]
    .map(n => n * 2)              // [4, 8, 12, 16, 20]
    .filter(n => n > 10);         // [12, 16, 20]

console.log("Original:", nums);
console.log("Even → Double → > 10:", result);

// ============ Expected Output ============
// ╔══════════════════════════════════════╗
// ║        ARRAY METHODS                 ║
// ╚══════════════════════════════════════╝
//
// >>> forEach() - Loop Through Every Item:
// ...
