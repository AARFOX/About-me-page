/**
 * Session 08 - Question 1
 * Topic: Arrays - Creating, Accessing, Adding, Removing
 * 
 * Exercise: Skills Manager
 * - Create and manipulate arrays
 * - Add and remove items
 * - Access by index
 */

// ============ Solution ============

console.log("╔══════════════════════════════════════╗");
console.log("║         ARRAYS BASICS                ║");
console.log("╚══════════════════════════════════════╝\n");

// ===== Creating Arrays =====

console.log(">>> Creating Arrays:\n");

// Array of strings
let skills = ["HTML", "CSS", "JavaScript"];
console.log("Skills:", skills);

// Array of numbers
let scores = [85, 92, 78, 96, 88];
console.log("Scores:", scores);

// Mixed array (not recommended, but possible)
let mixed = ["Ahmed", 25, true, null];
console.log("Mixed:", mixed);

// Empty array
let emptyArray = [];
console.log("Empty array:", emptyArray);

// ===== Accessing Array Items =====

console.log("\n>>> Accessing Items (Zero-based Index):\n");

let techStack = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

console.log("techStack:", techStack);
console.log("Length:", techStack.length);
console.log("First item [0]:", techStack[0]);       // HTML
console.log("Second item [1]:", techStack[1]);      // CSS
console.log("Third item [2]:", techStack[2]);       // JavaScript
console.log("Last item [length-1]:", techStack[techStack.length - 1]); // Node.js

// Accessing non-existent index
console.log("Index 10 (doesn't exist):", techStack[10]); // undefined

// ===== Modifying Array Items =====

console.log("\n>>> Modifying Items:\n");

let languages = ["JavaScript", "Python", "Java"];
console.log("Original:", languages);

languages[1] = "TypeScript";  // Change Python to TypeScript
console.log("After changing [1]:", languages);

languages[0] = languages[0].toUpperCase(); // Modify existing
console.log("After uppercase [0]:", languages);

// ===== Adding Items =====

console.log("\n>>> Adding Items:\n");

let projects = ["Calculator", "Todo App"];
console.log("Original:", projects);

// push() - add to END
projects.push("Portfolio");
console.log("After push('Portfolio'):", projects);

// push multiple items
projects.push("Weather App", "Blog");
console.log("After push(2 items):", projects);

// unshift() - add to BEGINNING
projects.unshift("Clock App");
console.log("After unshift('Clock App'):", projects);

// ===== Removing Items =====

console.log("\n>>> Removing Items:\n");

let tasks = ["Task 1", "Task 2", "Task 3", "Task 4", "Task 5"];
console.log("Original:", tasks);

// pop() - remove from END
let removedLast = tasks.pop();
console.log("After pop():", tasks);
console.log("Removed:", removedLast);

// shift() - remove from BEGINNING
let removedFirst = tasks.shift();
console.log("After shift():", tasks);
console.log("Removed:", removedFirst);

// ===== Finding Items =====

console.log("\n>>> Finding Items:\n");

let fruits = ["apple", "banana", "orange", "grape"];

// indexOf() - find index of item
console.log("fruits:", fruits);
console.log("indexOf('banana'):", fruits.indexOf("banana"));  // 1
console.log("indexOf('mango'):", fruits.indexOf("mango"));    // -1 (not found)

// includes() - check if exists
console.log("includes('orange'):", fruits.includes("orange")); // true
console.log("includes('mango'):", fruits.includes("mango"));   // false

// ===== Array Length & Clearing =====

console.log("\n>>> Length & Clearing:\n");

let numbers = [1, 2, 3, 4, 5];
console.log("numbers:", numbers);
console.log("Length:", numbers.length);

// Clear array
numbers.length = 0;
console.log("After clearing:", numbers);

// ===== Joining Arrays =====

console.log("\n>>> Joining Arrays:\n");

let frontendSkills = ["HTML", "CSS", "JavaScript"];
let backendSkills = ["Node.js", "MongoDB"];

// concat() - merge arrays
let fullStackSkills = frontendSkills.concat(backendSkills);
console.log("Frontend:", frontendSkills);
console.log("Backend:", backendSkills);
console.log("Full Stack:", fullStackSkills);

// join() - convert to string
let skillString = frontendSkills.join(", ");
console.log("Joined with ',':", skillString);
console.log("Joined with ' | ':", frontendSkills.join(" | "));

// ===== Splice - The Powerful Method =====

console.log("\n>>> Splice() - Add/Remove Anywhere:\n");

let items = ["a", "b", "c", "d", "e"];
console.log("Original:", items);

// Remove 2 items starting at index 1
let removed = items.splice(1, 2);
console.log("splice(1, 2):", items);
console.log("Removed items:", removed);

// Insert items at index 1 (remove 0 items)
items.splice(1, 0, "x", "y");
console.log("splice(1, 0, 'x', 'y'):", items);

// ===== Slice - Extract Without Modifying =====

console.log("\n>>> Slice() - Extract Portion:\n");

let letters = ["a", "b", "c", "d", "e"];
console.log("Original:", letters);

let sliced = letters.slice(1, 4);  // From index 1 to 4 (not including 4)
console.log("slice(1, 4):", sliced);
console.log("Original unchanged:", letters);

let lastThree = letters.slice(-3);  // Last 3 items
console.log("slice(-3):", lastThree);

// ===== Reverse & Sort =====

console.log("\n>>> Reverse & Sort:\n");

let nums = [3, 1, 4, 1, 5, 9, 2, 6];
console.log("Original:", nums);

nums.reverse();
console.log("Reversed:", nums);

nums.sort();
console.log("Sorted (alphabetically):", nums);

// Numeric sort
nums.sort((a, b) => a - b);
console.log("Sorted (numerically):", nums);

// ===== Real-World Example: Skills Manager =====

console.log("\n========== Real-World: Skills Manager ==========\n");

let mySkills = ["HTML", "CSS"];

function addSkill(skill) {
    if (!mySkills.includes(skill)) {
        mySkills.push(skill);
        console.log("✅ Added:", skill);
    } else {
        console.log("⚠️ Already exists:", skill);
    }
}

function removeSkill(skill) {
    let index = mySkills.indexOf(skill);
    if (index !== -1) {
        mySkills.splice(index, 1);
        console.log("❌ Removed:", skill);
    } else {
        console.log("⚠️ Not found:", skill);
    }
}

function listSkills() {
    console.log("📋 My Skills:", mySkills.join(", "));
}

console.log("Initial skills:", mySkills);

addSkill("JavaScript");
addSkill("React");
addSkill("CSS");  // Already exists

listSkills();

removeSkill("React");
removeSkill("Python");  // Not found

listSkills();

// ============ Expected Output ============
// ╔══════════════════════════════════════╗
// ║         ARRAYS BASICS                ║
// ╚══════════════════════════════════════╝
//
// >>> Creating Arrays:
// Skills: [ 'HTML', 'CSS', 'JavaScript' ]
// Scores: [ 85, 92, 78, 96, 88 ]
// ...
