console.log("╔══════════════════════════════════════╗");
console.log("║          CLICK COUNTER               ║");
console.log("╚══════════════════════════════════════╝\n");

// ===== Basic Click Counter =====

console.log(">>> Basic Click Counter:\n");

// State variable
let count = 0;

// Select elements
const countDisplay = document.querySelector("#count");
const incrementBtn = document.querySelector("#incrementBtn");
const resetBtn = document.querySelector("#resetBtn");

// Update display function
function updateDisplay() {
    countDisplay.textContent = count;
    
    // Optional: Add color based on value
    if (count > 0) {
        countDisplay.style.color = "green";
    } else if (count < 0) {
        countDisplay.style.color = "red";
    } else {
        countDisplay.style.color = "black";
    }
    
    console.log("Count updated:", count);
}

// Increment event
incrementBtn.addEventListener("click", () => {
    count++;
    updateDisplay();
});

// Reset event
resetBtn.addEventListener("click", () => {
    count = 0;
    updateDisplay();
    console.log("Counter reset!");
});

// ===== Complete Counter with All Features =====

console.log("\n>>> Complete Counter (+, -, Reset):\n");

const decrementBtn = document.querySelector("#decrementBtn");

// Decrement event
decrementBtn.addEventListener("click", () => {
    count--;
    updateDisplay();
});

// ===== Event Object =====

console.log("\n>>> Event Object:\n");

const infoBtn = document.querySelector("#infoBtn");

infoBtn.addEventListener("click", (event) => {
    console.log("Event type:", event.type);
    console.log("Target element:", event.target);
    console.log("Timestamp:", event.timeStamp);
    console.log("Mouse position:", event.clientX, event.clientY);
});

// ===== Multiple Ways to Add Events =====

console.log("\n>>> Multiple Ways to Add Events:\n");

// Method 1: addEventListener (RECOMMENDED)
document.querySelector("#btn1").addEventListener("click", () => {
    console.log("Method 1: addEventListener");
});

// Method 2: onclick property
document.querySelector("#btn2").onclick = function() {
    console.log("Method 2: onclick property");
};

// Method 3: Inline HTML (NOT RECOMMENDED)
// <button onclick="handleClick()">Click</button>

// Method 4: Named function
function handleClick() {
    console.log("Method 4: Named function");
}
document.querySelector("#btn4").addEventListener("click", handleClick);

// ===== Removing Event Listeners =====

console.log("\n>>> Removing Event Listeners:\n");

// Must use named function to remove
function temporaryHandler() {
    console.log("This only runs once!");
    document.querySelector("#tempBtn").removeEventListener("click", temporaryHandler);
}

document.querySelector("#tempBtn").addEventListener("click", temporaryHandler);

// ===== Event Bubbling =====

console.log("\n>>> Event Bubbling:\n");

const outer = document.querySelector(".outer");
const inner = document.querySelector(".inner");

outer.addEventListener("click", () => {
    console.log("Outer clicked!");
});

inner.addEventListener("click", (e) => {
    console.log("Inner clicked!");
    // e.stopPropagation(); // Uncomment to stop bubbling
});

// ===== Event Delegation =====

console.log("\n>>> Event Delegation:\n");

// Instead of adding listener to each button:
const buttonContainer = document.querySelector(".button-container");

buttonContainer.addEventListener("click", (e) => {
    // Check if clicked element is a button
    if (e.target.matches("button")) {
        console.log("Button clicked:", e.target.textContent);
    }
});

// ===== Real-World: Like Button =====

console.log("\n>>> Real-World: Like Button:\n");

let likes = 0;
const likeBtn = document.querySelector(".like-btn");
const likesCount = document.querySelector(".likes-count");

likeBtn.addEventListener("click", () => {
    if (likeBtn.classList.contains("liked")) {
        // Unlike
        likes--;
        likeBtn.classList.remove("liked");
        likeBtn.textContent = "♡ Like";
    } else {
        // Like
        likes++;
        likeBtn.classList.add("liked");
        likeBtn.textContent = "♥ Liked";
    }
    likesCount.textContent = likes;
    console.log("Likes:", likes);
});

// ===== Real-World: Double Click =====

console.log("\n>>> Double Click Event:\n");

const card = document.querySelector(".card");

card.addEventListener("dblclick", () => {
    card.classList.toggle("expanded");
    console.log("Card double-clicked!");
});

// ===== Keyboard Events =====

console.log("\n>>> Keyboard Events:\n");

document.addEventListener("keydown", (e) => {
    console.log("Key pressed:", e.key);
    
    // Shortcut examples
    if (e.key === "Escape") {
        console.log("Escape pressed - close modal?");
    }
    
    if (e.ctrlKey && e.key === "s") {
        e.preventDefault(); // Prevent browser save dialog
        console.log("Ctrl+S pressed - save form?");
    }
});

// ===== Mouse Events =====

console.log("\n>>> Mouse Events:\n");

const hoverArea = document.querySelector(".hover-area");

hoverArea.addEventListener("mouseenter", () => {
    console.log("Mouse entered");
    hoverArea.style.backgroundColor = "lightblue";
});

hoverArea.addEventListener("mouseleave", () => {
    console.log("Mouse left");
    hoverArea.style.backgroundColor = "";
});

// ===== Complete Counter HTML =====

console.log("\n========== Complete Counter Code ==========\n");

const counterHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Click Counter</title>
    <style>
        .counter-container {
            text-align: center;
            padding: 2rem;
            font-family: Arial, sans-serif;
        }
        
        .counter-display {
            font-size: 4rem;
            font-weight: bold;
            margin: 1rem 0;
        }
        
        .counter-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
        }
        
        button {
            padding: 0.5rem 1.5rem;
            font-size: 1.5rem;
            cursor: pointer;
            border: none;
            border-radius: 8px;
            background: #667eea;
            color: white;
        }
        
        button:hover {
            background: #5a67d8;
        }
        
        #resetBtn {
            background: #e53e3e;
        }
        
        #resetBtn:hover {
            background: #c53030;
        }
        
        .positive { color: green; }
        .negative { color: red; }
        .zero { color: black; }
    </style>
</head>
<body>
    <div class="counter-container">
        <h2>Click Counter</h2>
        <div class="counter-display">
            <span id="count" class="zero">0</span>
        </div>
        <div class="counter-buttons">
            <button id="decrementBtn">-</button>
            <button id="resetBtn">Reset</button>
            <button id="incrementBtn">+</button>
        </div>
    </div>
    
    <script>
        let count = 0;
        
        const countDisplay = document.querySelector("#count");
        const decrementBtn = document.querySelector("#decrementBtn");
        const incrementBtn = document.querySelector("#incrementBtn");
        const resetBtn = document.querySelector("#resetBtn");
        
        function updateDisplay() {
            countDisplay.textContent = count;
            
            // Update color class
            countDisplay.classList.remove("positive", "negative", "zero");
            if (count > 0) {
                countDisplay.classList.add("positive");
            } else if (count < 0) {
                countDisplay.classList.add("negative");
            } else {
                countDisplay.classList.add("zero");
            }
        }
        
        incrementBtn.addEventListener("click", () => {
            count++;
            updateDisplay();
        });
        
        decrementBtn.addEventListener("click", () => {
            count--;
            updateDisplay();
        });
        
        resetBtn.addEventListener("click", () => {
            count = 0;
            updateDisplay();
        });
    </script>
</body>
</html>
`;

console.log("Complete counter HTML logged above.");
console.log("Copy and save as 'counter.html' to test!");

// ===== Event Listener Summary =====

console.log("\n========== Event Listener Summary ==========\n");

console.log("┌─────────────────┬────────────────────────────────────┐");
console.log("│ Event Type      │ When It Fires                      │");
console.log("├─────────────────┼────────────────────────────────────┤");
console.log("│ click           │ User clicks element                │");
console.log("│ dblclick        │ User double-clicks                 │");
console.log("│ input           │ User types in input (every key)    │");
console.log("│ change          │ Value changes (select, checkbox)   │");
console.log("│ submit          │ Form is submitted                  │");
console.log("│ keydown         │ Key is pressed down                │");
console.log("│ keyup           │ Key is released                    │");
console.log("│ mouseenter      │ Mouse enters element               │");
console.log("│ mouseleave      │ Mouse leaves element               │");
console.log("│ focus           │ Element receives focus             │");
console.log("│ blur            │ Element loses focus                │");
console.log("└─────────────────┴────────────────────────────────────┘");

// ============ Expected Output ============
// (When run in browser with HTML)
// ╔══════════════════════════════════════╗
// ║          CLICK COUNTER               ║
// ╚══════════════════════════════════════╝
//
// >>> Basic Click Counter:
// Count updated: 1
// Count updated: 2
// ...
