// ============ Solution ============

console.log("╔══════════════════════════════════════╗");
console.log("║      TEMPERATURE CONVERTER           ║");
console.log("╚══════════════════════════════════════╝\n");

// ===== Method 1: Direct Conversion =====

// Celsius to Fahrenheit: (C × 9/5) + 32
let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;

console.log(">>> Celsius to Fahrenheit:");
console.log("    " + celsius + "°C = " + fahrenheit + "°F");

// Fahrenheit to Celsius: (F - 32) × 5/9
fahrenheit = 77;
celsius = (fahrenheit - 32) * 5/9;

console.log("\n>>> Fahrenheit to Celsius:");
console.log("    " + fahrenheit + "°F = " + celsius.toFixed(2) + "°C");

// ===== Method 2: Using Functions =====

function celsiusToFahrenheit(c) {
    return (c * 9/5) + 32;
}

function fahrenheitToCelsius(f) {
    return (f - 32) * 5/9;
}

console.log("\n========== Using Functions ==========");

// Test multiple temperatures
let temps = [0, 25, 37, 100];

console.log("\n>>> Celsius to Fahrenheit:");
for (let i = 0; i < temps.length; i++) {
    let c = temps[i];
    let f = celsiusToFahrenheit(c);
    console.log("    " + c + "°C = " + f + "°F");
}

console.log("\n>>> Fahrenheit to Celsius:");
let fTemps = [32, 68, 98.6, 212];
for (let i = 0; i < fTemps.length; i++) {
    let f = fTemps[i];
    let c = fahrenheitToCelsius(f);
    console.log("    " + f + "°F = " + c.toFixed(2) + "°C");
}

// ===== Method 3: With User Input (Browser) =====
// Uncomment to use in browser console

/*
let input = prompt("Enter temperature (e.g., 25C or 77F):");
let temp = Number(input.slice(0, -1));
let unit = input.slice(-1).toUpperCase();

if (unit === "C") {
    let result = celsiusToFahrenheit(temp);
    alert(temp + "°C = " + result.toFixed(2) + "°F");
} else if (unit === "F") {
    let result = fahrenheitToCelsius(temp);
    alert(temp + "°F = " + result.toFixed(2) + "°C");
} else {
    alert("Invalid unit! Use C or F.");
}
*/

// ===== Arithmetic Operators Demo =====
console.log("\n========== Arithmetic Operators ==========");

let a = 10;
let b = 3;

console.log("a = " + a + ", b = " + b);
console.log("a + b = " + (a + b));      // Addition: 13
console.log("a - b = " + (a - b));      // Subtraction: 7
console.log("a * b = " + (a * b));      // Multiplication: 30
console.log("a / b = " + (a / b));      // Division: 3.33...
console.log("a % b = " + (a % b));      // Modulo (remainder): 1
console.log("a ** b = " + (a ** b));    // Power: 1000

// ===== Type Conversion Demo =====
console.log("\n========== Type Conversion ==========");

// The bug: string concatenation instead of addition
let numStr = "25";
console.log("String '25' + 5 = " + (numStr + 5));     // "255" - BUG!
console.log("Number('25') + 5 = " + (Number(numStr) + 5)); // 30 - CORRECT!

// Converting to different types
console.log("\n>>> Converting to Number:");
console.log("    Number('42') = " + Number("42"));       // 42
console.log("    Number('3.14') = " + Number("3.14"));   // 3.14
console.log("    Number('hello') = " + Number("hello")); // NaN
console.log("    parseInt('42px') = " + parseInt("42px")); // 42
console.log("    parseFloat('3.14abc') = " + parseFloat("3.14abc")); // 3.14

console.log("\n>>> Converting to String:");
console.log("    String(42) = " + String(42));           // "42"
console.log("    (42).toString() = " + (42).toString()); // "42"
console.log("    42 + '' = " + (42 + ""));               // "42"

console.log("\n>>> Converting to Boolean:");
console.log("    Boolean(1) = " + Boolean(1));           // true
console.log("    Boolean(0) = " + Boolean(0));           // false
console.log("    Boolean('') = " + Boolean(""));         // false
console.log("    Boolean('hello') = " + Boolean("hello")); // true

// ===== Comparison Operators =====
console.log("\n========== Comparison Operators ==========");

console.log("5 == '5': " + (5 == "5"));    // true (loose equality - converts)
console.log("5 === '5': " + (5 === "5"));  // false (strict equality - no conversion)
console.log("5 != '5': " + (5 != "5"));    // false
console.log("5 !== '5': " + (5 !== "5"));  // true
console.log("10 > 5: " + (10 > 5));        // true
console.log("10 >= 10: " + (10 >= 10));    // true
console.log("3 < 5: " + (3 < 5));          // true
console.log("5 <= 5: " + (5 <= 5));        // true

console.log("\n>>> BEST PRACTICE: Always use === (strict equality)");

// ============ Expected Output ============
// ╔══════════════════════════════════════╗
// ║      TEMPERATURE CONVERTER           ║
// ╚══════════════════════════════════════╝
//
// >>> Celsius to Fahrenheit:
//     25°C = 77°F
//
// >>> Fahrenheit to Celsius:
//     77°F = 25.00°C
//
// ========== Using Functions ==========
//
// >>> Celsius to Fahrenheit:
//     0°C = 32°F
//     25°C = 77°F
//     37°C = 98.6°F
//     100°C = 212°F
//
// >>> Fahrenheit to Celsius:
//     32°F = 0.00°C
//     68°F = 20.00°C
//     98.6°F = 37.00°C
//     212°F = 100.00°C
//
// ========== Arithmetic Operators ==========
// a = 10, b = 3
// a + b = 13
// a - b = 7
// a * b = 30
// a / b = 3.333...
// a % b = 1
// a ** b = 1000
//
// ========== Type Conversion ==========
// String '25' + 5 = 255
// Number('25') + 5 = 30
//
// >>> Converting to Number:
//     Number('42') = 42
//     Number('3.14') = 3.14
//     Number('hello') = NaN
//     parseInt('42px') = 42
//     parseFloat('3.14abc') = 3.14
//
// >>> Converting to String:
//     String(42) = 42
//     (42).toString() = 42
//     42 + '' = 42
//
// >>> Converting to Boolean:
//     Boolean(1) = true
//     Boolean(0) = false
//     Boolean('') = false
//     Boolean('hello') = true
//
// ========== Comparison Operators ==========
// 5 == '5': true
// 5 === '5': false
// 5 != '5': false
// 5 !== '5': true
// 10 > 5: true
// 10 >= 10: true
// 3 < 5: true
// 5 <= 5: true
//
// >>> BEST PRACTICE: Always use === (strict equality)
