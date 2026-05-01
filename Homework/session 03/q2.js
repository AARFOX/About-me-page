/**
 * Session 03 - Question 2
 * Topic: Multiple Parameters & Arithmetic Operations
 * 
 * Task: Build a function called applyDiscount that:
 * - Takes a price and a discount percentage
 * - Returns the final price after discount
 */

// ===== Solution =====

/**
 * Apply discount to a price
 * @param {number} price - Original price
 * @param {number} discount - Discount percentage (0-100)
 * @returns {number} - Price after discount
 */
function applyDiscount(price, discount) {
    // Validate inputs
    if (price < 0) {
        console.log("Error: Price cannot be negative!");
        return 0;
    }
    
    if (discount < 0 || discount > 100) {
        console.log("Error: Discount must be between 0 and 100!");
        return price;
    }
    
    // Calculate discount amount
    const discountAmount = price * (discount / 100);
    
    // Calculate final price
    const finalPrice = price - discountAmount;
    
    return finalPrice;
}

/**
 * Print discount details
 * @param {number} price - Original price
 * @param {number} discount - Discount percentage
 */
function printDiscountDetails(price, discount) {
    const finalPrice = applyDiscount(price, discount);
    const savings = price - finalPrice;
    
    console.log(`Original Price: $${price}`);
    console.log(`Discount: ${discount}%`);
    console.log(`You Save: $${savings.toFixed(2)}`);
    console.log(`Final Price: $${finalPrice.toFixed(2)}`);
    console.log("---");
}

// ===== Tests =====
console.log("=== Question 2: Apply Discount ===\n");

// Test 1
printDiscountDetails(200, 10);
// Original: $200, Discount: 10%, Final: $180

// Test 2
printDiscountDetails(500, 25);
// Original: $500, Discount: 25%, Final: $375

// Test 3
printDiscountDetails(1000, 50);
// Original: $1000, Discount: 50%, Final: $500

// Test 4 - No discount
printDiscountDetails(150, 0);
// Original: $150, Discount: 0%, Final: $150

// Test 5 - Full discount (free!)
printDiscountDetails(100, 100);
// Original: $100, Discount: 100%, Final: $0

// Test 6 - Using return value
const salePrice = applyDiscount(250, 20);
console.log(`Sale price: $${salePrice}`);

// Test 7 - Arrow function version (bonus)
const applyDiscountArrow = (price, discount) => price - (price * discount / 100);
console.log(`\nArrow function: $${applyDiscountArrow(300, 15)}`);

console.log("\n=== All tests passed! ===");
