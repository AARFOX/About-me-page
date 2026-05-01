/**
 * Session 03 - Question 3
 * Topic: String Manipulation & Template Literals
 * 
 * Task: Build a function called buildProfile that:
 * - Takes name, title, and skills
 * - Returns a formatted profile string
 */

// ===== Solution =====

/**
 * Build a formatted profile string
 * @param {string} name - User's name
 * @param {string} title - User's job title
 * @param {string} skills - User's skills (comma-separated)
 * @returns {string} - Formatted profile
 */
function buildProfile(name, title, skills) {
    // Using template literals for clean string formatting
    const profile = `
╔══════════════════════════════════════╗
║         PORTFOLIO PROFILE            ║
╠══════════════════════════════════════╣
║  Name:  ${name.padEnd(26)}║
║  Title: ${title.padEnd(26)}║
║  Skills: ${skills.padEnd(25)}║
╚══════════════════════════════════════╝`;
    
    return profile;
}

/**
 * Build a short profile card
 * @param {string} name - User's name
 * @param {string} title - User's job title
 * @param {string} city - User's city
 * @returns {string} - Short profile
 */
function buildShortProfile(name, title, city) {
    return `${name} | ${title} | ${city}`;
}

/**
 * Build an HTML profile card (bonus)
 * @param {string} name - User's name
 * @param {string} title - User's job title
 * @param {string} skills - User's skills
 * @returns {string} - HTML card
 */
function buildHTMLProfile(name, title, skills) {
    const skillsArray = skills.split(', ');
    
    const skillsHTML = skillsArray
        .map(skill => `<span class="skill">${skill}</span>`)
        .join('\n        ');
    
    return `
<div class="profile-card">
    <h2 class="name">${name}</h2>
    <p class="title">${title}</p>
    <div class="skills">
        ${skillsHTML}
    </div>
</div>`;
}

// ===== Tests =====
console.log("=== Question 3: Build Profile ===\n");

// Test 1 - Full profile
const profile1 = buildProfile(
    "Ahmed",
    "Frontend Developer",
    "HTML, CSS, JavaScript"
);
console.log(profile1);

// Test 2
const profile2 = buildProfile(
    "Sara",
    "Full Stack Developer",
    "HTML, CSS, JS, Node.js, MongoDB"
);
console.log(profile2);

// Test 3 - Short profile
const shortProfile = buildShortProfile(
    "Omar",
    "Backend Developer",
    "Cairo"
);
console.log("\nShort Profile:", shortProfile);

// Test 4 - Arrow function version (bonus)
const buildProfileArrow = (name, title, skills) => 
    `${name} - ${title} | Skills: ${skills}`;

console.log("\nArrow function:", buildProfileArrow("Ali", "UI Designer", "Figma, Adobe XD"));

// Test 5 - HTML Profile
console.log("\n--- HTML Profile Card ---");
const htmlProfile = buildHTMLProfile(
    "Ahmed M.",
    "Frontend Developer",
    "HTML, CSS, JavaScript, Git"
);
console.log(htmlProfile);

// Test 6 - Using with other functions
const developerName = "Mohamed";
const developerTitle = "Web Developer";
const developerSkills = "HTML, CSS, JavaScript, React";

console.log("\n--- Combined Test ---");
const age = 2025 - 2000; // Using calculateAge logic
const fullProfile = buildProfile(developerName, developerTitle, developerSkills);
console.log(`Age: ${age} years old`);
console.log(fullProfile);

console.log("\n=== All tests passed! ===");

// ===== Bonus: Export functions for use in other files =====
// export { buildProfile, buildShortProfile, buildHTMLProfile };
