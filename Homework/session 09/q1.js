console.log("╔══════════════════════════════════════╗");
console.log("║       DOM SELECTION & TOGGLE         ║");
console.log("╚══════════════════════════════════════╝\n");

// ===== Selecting Elements =====

console.log(">>> Selecting Elements:\n");

// Select by CSS selector (most common)
const title = document.querySelector("h1");
const mainButton = document.querySelector(".main-btn");
const navigation = document.querySelector("#main-nav");

// querySelector returns the FIRST match
console.log("First h1:", title);
console.log("First .main-btn:", mainButton);
console.log("#main-nav:", navigation);

// Select multiple elements
const allButtons = document.querySelectorAll("button");
const allCards = document.querySelectorAll(".card");
const allLinks = document.querySelectorAll("nav a");

// querySelectorAll returns ALL matches as NodeList
console.log("\nAll buttons:", allButtons.length);
console.log("All cards:", allCards.length);
console.log("All links:", allLinks.length);

// ===== Other Selection Methods =====

console.log("\n>>> Other Selection Methods:\n");

// By ID
const header = document.getElementById("header");
console.log("getElementById:", header);

// By class (returns HTMLCollection)
const items = document.getElementsByClassName("item");
console.log("getElementsByClassName:", items.length + " items");

// By tag (returns HTMLCollection)
const paragraphs = document.getElementsByTagName("p");
console.log("getElementsByTagName:", paragraphs.length + " paragraphs");

// ===== Changing Content =====

console.log("\n>>> Changing Content:\n");

const demoElement = document.querySelector(".demo");

// textContent - plain text (safe, use this by default)
demoElement.textContent = "Hello from JavaScript!";
console.log("textContent set");

// innerHTML - can include HTML tags (use carefully)
demoElement.innerHTML = "<strong>Bold text!</strong>";
console.log("innerHTML set");

// Getting content
console.log("Current content:", demoElement.textContent);

// ===== Changing Styles =====

console.log("\n>>> Changing Styles (inline):\n");

const box = document.querySelector(".box");

// Direct style changes (inline styles)
box.style.backgroundColor = "blue";
box.style.color = "white";
box.style.padding = "20px";
box.style.borderRadius = "8px";

console.log("Style changed via JS");

// ===== classList - The Star Method =====

console.log("\n>>> classList Methods:\n");

const card = document.querySelector(".card");

// Add a class
card.classList.add("highlighted");
console.log("Added 'highlighted' class");

// Remove a class
card.classList.remove("highlighted");
console.log("Removed 'highlighted' class");

// Toggle - adds if missing, removes if present
card.classList.toggle("active");  // Adds (wasn't there)
console.log("Toggled 'active' (added)");

card.classList.toggle("active");  // Removes (was there)
console.log("Toggled 'active' (removed)");

// Check if class exists
const hasActive = card.classList.contains("active");
console.log("Has 'active' class?", hasActive);

// Replace a class
card.classList.replace("old-class", "new-class");

// ===== Real-World: Show/Hide Pattern =====

console.log("\n>>> Show/Hide Pattern:\n");

// CSS would have:
// .hidden { display: none; }
// .visible { display: block; }

const modal = document.querySelector(".modal");

// Show modal
function showModal() {
    modal.classList.remove("hidden");
    modal.classList.add("visible");
    console.log("Modal shown");
}

// Hide modal
function hideModal() {
    modal.classList.remove("visible");
    modal.classList.add("hidden");
    console.log("Modal hidden");
}

// Toggle modal
function toggleModal() {
    modal.classList.toggle("hidden");
    console.log("Modal toggled");
}

// ===== Loop Through Elements =====

console.log("\n>>> Loop Through Multiple Elements:\n");

const cards = document.querySelectorAll(".card");

// Using forEach
cards.forEach((card, index) => {
    card.textContent = `Card ${index + 1}`;
    console.log(`Updated card ${index + 1}`);
});

// ===== Real-World Example: Tab Navigation =====

console.log("\n>>> Tab Navigation Example:\n");

const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Remove active class from all buttons
        tabButtons.forEach(btn => btn.classList.remove("active"));
        
        // Add active class to clicked button
        button.classList.add("active");
        
        // Hide all content
        tabContents.forEach(content => content.classList.add("hidden"));
        
        // Show corresponding content
        const tabId = button.getAttribute("data-tab");
        const activeContent = document.getElementById(tabId);
        activeContent.classList.remove("hidden");
        
        console.log("Switched to tab:", tabId);
    });
});

// ===== Common Mistakes =====

console.log("\n>>> Common Mistakes to Avoid:\n");

// ❌ Mistake 1: Selecting before element exists
// This causes null error if script runs before DOM loads
// const element = document.querySelector(".not-exist");
// element.textContent = "Hello"; // Error!

// ✅ Fix: Check if element exists
const element = document.querySelector(".not-exist");
if (element) {
    element.textContent = "Hello";
} else {
    console.log("Element not found, skipping...");
}

// ❌ Mistake 2: Using innerHTML with user input (XSS vulnerability)
// const userInput = "<script>alert('XSS')</script>";
// element.innerHTML = userInput; // DANGEROUS!

// ✅ Fix: Use textContent for user input
// element.textContent = userInput; // Safe

// ===== DOM Ready Pattern =====

console.log("\n>>> DOM Ready Pattern:\n");

// Method 1: Script at end of body (recommended for now)

// Method 2: DOMContentLoaded event
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded!");
    // All your code here
});

// ===== Summary Table =====

console.log("\n========== Selection Summary ==========\n");

console.log("┌──────────────────────┬─────────────────────────────────┐");
console.log("│ Method               │ Returns                         │");
console.log("├──────────────────────┼─────────────────────────────────┤");
console.log("│ querySelector()      │ First matching element          │");
console.log("│ querySelectorAll()   │ All matching elements (NodeList)│");
console.log("│ getElementById()     │ Element by ID                   │");
console.log("│ getElementsByClassName() │ HTMLCollection (live)       │");
console.log("│ getElementsByTagName()   │ HTMLCollection (live)       │");
console.log("└──────────────────────┴─────────────────────────────────┘");

console.log("\n┌──────────────────────┬─────────────────────────────────┐");
console.log("│ Property/Method      │ Purpose                        │");
console.log("├──────────────────────┼─────────────────────────────────┤");
console.log("│ textContent          │ Get/set plain text             │");
console.log("│ innerHTML            │ Get/set HTML content           │");
console.log("│ style.property       │ Set inline styles              │");
console.log("│ classList.add()      │ Add a class                    │");
console.log("│ classList.remove()   │ Remove a class                 │");
console.log("│ classList.toggle()   │ Add/remove (flip) class        │");
console.log("│ classList.contains() │ Check if class exists          │");
console.log("└──────────────────────┴─────────────────────────────────┘");

// ============ Expected Output ============
// (When run in browser console)
// ╔══════════════════════════════════════╗
// ║       DOM SELECTION & TOGGLE         ║
// ╚══════════════════════════════════════╝
//
// >>> Selecting Elements:
// First h1: <h1>Hello</h1>
// First .main-btn: <button class="main-btn">Click</button>
// ...
