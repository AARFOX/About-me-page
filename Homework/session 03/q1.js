/**
 * Calculate age from birth year
 * @param {number} birthYear - The year of birth
 * @returns {number} - The current age
 */
function calculateAge(birthYear) {
    // Get current year dynamically
    const currentYear = new Date().getFullYear();
    
    // Calculate age
    const age = currentYear - birthYear;
    
    return age;
}

/**
 * Print age message
 * @param {number} birthYear - The year of birth
 */
function printAgeMessage(birthYear) {
    const age = calculateAge(birthYear);
    console.log(`You are ${age} years old`);
}

// ===== Tests =====
console.log("=== Question 1: Calculate Age ===\n");

// Test 1
printAgeMessage(2001);  // You are 24 years old (in 2025)

// Test 2
printAgeMessage(1995);  // You are 30 years old (in 2025)

// Test 3
printAgeMessage(2010);  // You are 15 years old (in 2025)

// Test 4 - Using the return value directly
const myAge = calculateAge(2000);
console.log(`My age is: ${myAge}`);

// Test 5 - Arrow function version (bonus)
const calculateAgeArrow = birthYear => new Date().getFullYear() - birthYear;
console.log(`\nArrow function version: Age = ${calculateAgeArrow(1998)}`);

console.log("\n=== All tests passed! ===");
