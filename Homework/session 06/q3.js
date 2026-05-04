console.log("╔══════════════════════════════════════╗");
console.log("║           FIZZBUZZ GAME              ║");
console.log("╚══════════════════════════════════════╝\n");

// ===== Method 1: Basic FizzBuzz with for loop =====

console.log(">>> Method 1: Basic FizzBuzz (1-20):\n");

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// ===== Method 2: FizzBuzz with switch =====

console.log("\n>>> Method 2: Using switch statement:\n");

for (let i = 1; i <= 15; i++) {
    let output;
    let divisibleBy3 = i % 3 === 0;
    let divisibleBy5 = i % 5 === 0;
    
    switch (true) {
        case divisibleBy3 && divisibleBy5:
            output = "FizzBuzz";
            break;
        case divisibleBy3:
            output = "Fizz";
            break;
        case divisibleBy5:
            output = "Buzz";
            break;
        default:
            output = i;
    }
    
    console.log(output);
}

// ===== Method 3: FizzBuzz with while loop =====

console.log("\n>>> Method 3: Using while loop:\n");

let count = 1;
while (count <= 15) {
    let result = "";
    
    if (count % 3 === 0) result += "Fizz";
    if (count % 5 === 0) result += "Buzz";
    
    console.log(result || count);
    count++;
}

// ===== Method 4: FizzBuzz in a function =====

console.log("\n>>> Method 4: FizzBuzz as a function:\n");

function fizzBuzz(start, end) {
    let results = [];
    
    for (let i = start; i <= end; i++) {
        if (i % 15 === 0) {          // Divisible by both 3 and 5
            results.push("FizzBuzz");
        } else if (i % 3 === 0) {    // Divisible by 3
            results.push("Fizz");
        } else if (i % 5 === 0) {    // Divisible by 5
            results.push("Buzz");
        } else {
            results.push(i);
        }
    }
    
    return results;
}

// Test the function
let results = fizzBuzz(1, 30);
console.log("FizzBuzz(1-30): " + results.join(", "));

// ===== Extended FizzBuzz: Custom Rules =====

console.log("\n========== Extended FizzBuzz ==========\n");

function extendedFizzBuzz(n, rules) {
    let output = [];
    
    for (let i = 1; i <= n; i++) {
        let result = "";
        
        // Check each rule
        for (let divisor in rules) {
            if (i % divisor === 0) {
                result += rules[divisor];
            }
        }
        
        output.push(result || i);
    }
    
    return output;
}

// Custom rules: 3=Fizz, 5=Buzz, 7=Bang
let customRules = {
    3: "Fizz",
    5: "Buzz",
    7: "Bang"
};

console.log("Extended FizzBuzz (3=Fizz, 5=Buzz, 7=Bang):");
let extended = extendedFizzBuzz(35, customRules);
console.log(extended.join(", "));

// ===== FizzBuzz Statistics =====

console.log("\n========== FizzBuzz Statistics ==========\n");

function fizzBuzzStats(n) {
    let stats = {
        numbers: 0,
        fizz: 0,
        buzz: 0,
        fizzBuzz: 0
    };
    
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            stats.fizzBuzz++;
        } else if (i % 3 === 0) {
            stats.fizz++;
        } else if (i % 5 === 0) {
            stats.buzz++;
        } else {
            stats.numbers++;
        }
    }
    
    return stats;
}

let stats = fizzBuzzStats(100);

console.log("Statistics for FizzBuzz(1-100):");
console.log("┌──────────────┬─────────┐");
console.log("│    Type      │  Count  │");
console.log("├──────────────┼─────────┤");
console.log("│ Numbers      │    " + stats.numbers + "   │");
console.log("│ Fizz         │    " + stats.fizz + "   │");
console.log("│ Buzz         │    " + stats.buzz + "   │");
console.log("│ FizzBuzz     │    " + stats.fizzBuzz + "   │");
console.log("└──────────────┴─────────┘");

// ===== Loop Patterns Demo =====

console.log("\n========== Loop Patterns ==========\n");

// for loop - when you know iterations
console.log(">>> for loop (countdown):");
for (let i = 5; i >= 1; i--) {
    console.log("    Count: " + i);
}
console.log("    Blast off! 🚀");

// while loop - when you don't know iterations
console.log("\n>>> while loop (find first number divisible by 7):");
let num = 1;
while (num % 7 !== 0 || num < 50) {
    num++;
}
console.log("    Found: " + num);

// do-while loop - run at least once
console.log("\n>>> do-while loop (run at least once):");
let x = 10;
do {
    console.log("    x = " + x);
    x++;
} while (x < 5);  // Condition is false, but runs once

// ===== Modulo Operator Deep Dive =====

console.log("\n========== Modulo Operator (%) ==========\n");

console.log(">>> Modulo is great for:");
console.log("    1. Even/Odd check: n % 2 === 0");
console.log("    2. Divisibility check: n % divisor === 0");
console.log("    3. Last digit: n % 10");
console.log("    4. Circular/wrap-around logic: n % length");

console.log("\n>>> Examples:");
console.log("    10 % 2 = " + (10 % 2) + " (even)");
console.log("    7 % 2 = " + (7 % 2) + " (odd)");
console.log("    15 % 3 = " + (15 % 3) + " (divisible by 3)");
console.log("    123 % 10 = " + (123 % 10) + " (last digit)");
console.log("    8 % 5 = " + (8 % 5) + " (remainder)");

// ===== Practical Examples =====

console.log("\n========== Practical Examples ==========\n");

// Check if number is even or odd
function isEven(n) {
    return n % 2 === 0;
}

console.log(">>> Even/Odd checker:");
for (let i = 1; i <= 5; i++) {
    console.log("    " + i + " is " + (isEven(i) ? "even" : "odd"));
}

// Sum of numbers using loop
console.log("\n>>> Sum of 1 to 10:");
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log("    Sum = " + sum);

// Find all multiples
console.log("\n>>> Multiples of 3 up to 20:");
let multiples = [];
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        multiples.push(i);
    }
}
console.log("    " + multiples.join(", "));

// ============ Expected Output ============
// ╔══════════════════════════════════════╗
// ║           FIZZBUZZ GAME              ║
// ╚══════════════════════════════════════╝
//
// >>> Method 1: Basic FizzBuzz (1-20):
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// ... (continues)
