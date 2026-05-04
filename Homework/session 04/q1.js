// Create a user object
const user = {
    name: "Ahmed",
    age: 25,
    city: "Cairo",
    title: "Frontend Developer",
    email: "ahmed@example.com",
    isAvailable: true,
    skills: ["HTML", "CSS", "JavaScript"]
};

// ===== Accessing Properties =====

console.log("=== Question 1: Object Basics ===\n");

// 1. Dot Notation (most common)
console.log("📌 Dot Notation:");
console.log(`Name: ${user.name}`);
console.log(`Age: ${user.age}`);
console.log(`City: ${user.city}`);
console.log(`Title: ${user.title}`);

console.log("\n📌 Bracket Notation:");
// 2. Bracket Notation (useful for dynamic keys)
console.log(`Email: ${user["email"]}`);
console.log(`Available: ${user["isAvailable"]}`);

console.log("\n📌 Dynamic Key Access:");
// 3. Dynamic key access
const key = "name";
console.log(`Dynamic key "${key}": ${user[key]}`);

// ===== Modifying Properties =====

console.log("\n=== Modifying Properties ===");

// Change a value
user.age = 26;
console.log(`Updated age: ${user.age}`);

// Add a new property
user.phone = "+20 123 456 7890";
user.experience = 2;
console.log(`Added phone: ${user.phone}`);
console.log(`Added experience: ${user.experience} years`);

// ===== Checking Properties =====

console.log("\n=== Checking Properties ===");

// Check if property exists
console.log(`Has 'name': ${"name" in user}`);
console.log(`Has 'salary': ${"salary" in user}`);

// Get all keys
console.log("\nAll keys:", Object.keys(user));

// Get all values
console.log("All values:", Object.values(user));

// ===== Looping Through Object =====

console.log("\n=== Looping Through Object ===");

// Using for...in
console.log("Using for...in:");
for (let key in user) {
    if (typeof user[key] !== "function" && !Array.isArray(user[key])) {
        console.log(`  ${key}: ${user[key]}`);
    }
}

// Using Object.entries()
console.log("\nUsing Object.entries():");
Object.entries(user).forEach(([key, value]) => {
    if (typeof value !== "function" && !Array.isArray(value)) {
        console.log(`  ${key} => ${value}`);
    }
});

// ===== Display Full Object =====

console.log("\n=== Full User Object ===");
console.log(JSON.stringify(user, null, 2));

// ===== Bonus: Create Multiple Users =====

console.log("\n=== Bonus: Multiple Users ===");

const users = [
    { name: "Ahmed", age: 25, city: "Cairo" },
    { name: "Sara", age: 22, city: "Alexandria" },
    { name: "Omar", age: 28, city: "Giza" }
];

users.forEach((user, index) => {
    console.log(`User ${index + 1}: ${user.name}, ${user.age} years old, from ${user.city}`);
});

console.log("\n=== All tests passed! ===");
