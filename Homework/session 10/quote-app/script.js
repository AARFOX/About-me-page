// DOM Elements
const quoteText = document.querySelector("#quote-text");
const quoteAuthor = document.querySelector("#quote-author");
const newQuoteBtn = document.querySelector("#new-quote");
const copyQuoteBtn = document.querySelector("#copy-quote");
const notification = document.querySelector("#notification");

// API Endpoint
const API_URL = "https://dummyjson.com/quotes/random";


async function fetchQuote() {
    // Show loading state
    quoteText.textContent = "Loading...";
    quoteAuthor.textContent = "";
    newQuoteBtn.classList.add("loading");

    try {
        // Step 1: Make the fetch request
        const response = await fetch(API_URL);

        // Step 2: Check if response is ok
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Step 3: Parse JSON data
        const data = await response.json();

        // Step 4: Display the quote
        displayQuote(data.quote, data.author);

    } catch (error) {
        // Handle any errors
        console.error("Error fetching quote:", error);
        showError("Could not load quote. Please try again.");
    } finally {
        // Remove loading state
        newQuoteBtn.classList.remove("loading");
    }
}

/**
 * Displays the quote and author on the page
 * @param {string} quote - The quote text
 * @param {string} author - The author name
 */
function displayQuote(quote, author) {
    // Add animation class for fade effect
    quoteText.style.animation = "none";
    quoteAuthor.style.animation = "none";

    // Trigger reflow to restart animation
    void quoteText.offsetWidth;

    // Set the content
    quoteText.textContent = `"${quote}"`;
    quoteAuthor.textContent = author;

    // Re-enable animation
    quoteText.style.animation = "fadeIn 0.5s ease";
    quoteAuthor.style.animation = "fadeIn 0.5s ease 0.1s";
}

/**
 * Shows an error message
 * @param {string} message - Error message to display
 */
function showError(message) {
    quoteText.textContent = message;
    quoteAuthor.textContent = "";
}

/**
 * Shows a notification message
 * @param {string} message - Message to display
 * @param {boolean} isError - Whether it's an error message
 */
function showNotification(message, isError = false) {
    notification.textContent = message;
    notification.classList.remove("error");
    if (isError) {
        notification.classList.add("error");
    }
    notification.classList.add("show");

    // Hide after 3 seconds
    setTimeout(() => {
        notification.classList.remove("show");
    }, 3000);
}

/**
 * Copies the current quote to clipboard
 */
async function copyQuote() {
    const quote = quoteText.textContent;
    const author = quoteAuthor.textContent;

    if (!quote || quote === "Loading..." || quote.includes("Could not load")) {
        showNotification("No quote to copy!", true);
        return;
    }

    const fullQuote = `${quote} ${author}`;

    try {
        // Modern clipboard API
        await navigator.clipboard.writeText(fullQuote);
        showNotification("Quote copied to clipboard!");
    } catch (error) {
        // Fallback for older browsers
        const textArea = document.createElement("textarea");
        textArea.value = fullQuote;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        document.body.appendChild(textArea);
        textArea.select();

        try {
            document.execCommand("copy");
            showNotification("Quote copied to clipboard!");
        } catch (err) {
            showNotification("Failed to copy quote", true);
        }

        document.body.removeChild(textArea);
    }
}

/**
 * Initialize the app
 */
function init() {
    // Event listeners
    newQuoteBtn.addEventListener("click", fetchQuote);
    copyQuoteBtn.addEventListener("click", copyQuote);

    // Fetch initial quote on page load
    fetchQuote();

    // Keyboard shortcut: Press 'N' for new quote
    document.addEventListener("keydown", (e) => {
        if (e.key.toLowerCase() === "n" && !e.ctrlKey && !e.metaKey) {
            fetchQuote();
        }
    });
}

// Start the app when DOM is ready
document.addEventListener("DOMContentLoaded", init);
