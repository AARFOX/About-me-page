/**
 * Session 05 - Question 2
 * Topic: let vs const & Data Types
 * 
 * Exercise: Understanding Variable Behavior
 * - Practice the difference between let and const
 * - Explore all 5 basic data types
 */

// ============ Solution ============

console.log("========== Part 1: let vs const ==========");

// Using const for values that should never change
const PI = 3.14;
const COUNTRY = "Egypt";
const MAX_SIZE = 100;

console.log("PI:", PI);
console.log("COUNTRY:", COUNTRY);
console.log("MAX_SIZE:", MAX_SIZE);

// Using let for values that can change
let score = 0;
console.log("Initial score:", score);

score = 10;  // ✅ let allows reassignment
console.log("Updated score:", score);

score = 20;
console.log("Final score:", score);

// ❌ This would cause an error (uncomment to test):
// PI = 3.14159;  // TypeError: Assignment to constant variable

console.log("\n========== Part 2: All Data Types ==========");

// 1. String - text in quotes
let firstName = "Ahmed";
let lastName = "Mohamed";
let fullName = firstName + " " + lastName;  // String concatenation
console.log("String:", fullName, "| Type:", typeof fullName);

// 2. Number - integers and decimals
let integerNumber = 42;
let decimalNumber = 3.14159;
let negativeNumber = -10;
console.log("Integer:", integerNumber, "| Type:", typeof integerNumber);
console.log("Decimal:", decimalNumber, "| Type:", typeof decimalNumber);
console.log("Negative:", negativeNumber, "| Type:", typeof negativeNumber);

// 3. Boolean - true or false
let isLogged = true;
let hasPermission = false;
console.log("isLogged:", isLogged, "| Type:", typeof isLogged);
console.log("hasPermission:", hasPermission, "| Type:", typeof hasPermission);

// 4. Undefined - declared but not assigned
let notAssigned;
console.log("notAssigned:", notAssigned, "| Type:", typeof notAssigned);

// 5. Null - intentionally empty
let emptyValue = null;
console.log("emptyValue:", emptyValue, "| Type:", typeof emptyValue);
// Note: typeof null returns "object" - this is a known JavaScript quirk!

console.log("\n========== Part 3: Variable Naming ==========");

// ✅ Good variable names (camelCase convention)
let userName = "Ali";
let totalPrice = 150.50;
let isActive = true;
let itemCount = 5;

console.log("userName:", userName);
console.log("totalPrice:", totalPrice);
console.log("isActive:", isActive);
console.log("itemCount:", itemCount);

// ❌ Bad variable names (don't do this):
// let 1name = "test";      // Cannot start with digit
// let user-name = "test";  // Hyphen not allowed
// let let = "test";        // Reserved keyword

// ============ Expected Output ============
// PI: 3.14
// COUNTRY: Egypt
// MAX_SIZE: 100
// Initial score: 0
// Updated score: 10
// Final score: 20
// 
// String: Ahmed Mohamed | Type: string
// Integer: 42 | Type: number
// Decimal: 3.14159 | Type: number
// Negative: -10 | Type: number
// isLogged: true | Type: boolean
// hasPermission: false | Type: boolean
// notAssigned: undefined | Type: undefined
// emptyValue: null | Type: object
// 
// userName: Ali
// totalPrice: 150.5
// isActive: true
// itemCount: 5
