/* =============================================
   Final Portfolio - JavaScript
   Merged from all Sessions (02-09)
   ============================================= */

// =============================================
// SESSION 05: Variables & Data Types
// =============================================

// Personal Information (Variables)
const fullName = "Mohamed Ahmed";        // String (const - won't change)
let jobTitle = "Full-Stack Developer";  // String (let - can change)
let age = 22;                            // Number
let city = "Cairo";                      // String
let country = "Egypt";                   // String
let isAvailable = true;                  // Boolean
let yearsOfExperience = 2;               // Number
let email = "mohamed@example.com";       // String

// Portfolio Version (const)
const PORTFOLIO_VERSION = "1.0.0";
const CREATION_YEAR = 2024;

// Log Data Types to Console
console.log("========== Portfolio Data ==========");
console.log("Name:", fullName, "| Type:", typeof fullName);
console.log("Age:", age, "| Type:", typeof age);
console.log("Available:", isAvailable, "| Type:", typeof isAvailable);
console.log("Portfolio Version:", PORTFOLIO_VERSION);


// =============================================
// SESSION 08: Arrays & Objects
// =============================================

// Skills Data (Array of Objects)
const skillsData = {
    frontend: [
        { name: "HTML5", level: "advanced" },
        { name: "CSS3", level: "advanced" },
        { name: "JavaScript", level: "intermediate" },
        { name: "React", level: "intermediate" },
        { name: "Responsive Design", level: "advanced" }
    ],
    backend: [
        { name: "Node.js", level: "intermediate" },
        { name: "Express.js", level: "intermediate" },
        { name: "MongoDB", level: "beginner" },
        { name: "REST API", level: "intermediate" }
    ],
    tools: [
        { name: "Git & GitHub", level: "intermediate" },
        { name: "VS Code", level: "advanced" },
        { name: "Chrome DevTools", level: "intermediate" },
        { name: "Postman", level: "intermediate" }
    ]
};

// Projects Data (Array of Objects)
const projectsData = [
    {
        id: 1,
        name: "Calculator App",
        description: "A fully functional calculator with error handling, keyboard support, and calculation history.",
        tags: ["HTML", "CSS", "JavaScript"],
        category: "frontend",
        icon: "🧮",
        github: "#",
        demo: "#"
    },
    {
        id: 2,
        name: "E-Commerce Platform",
        description: "Full-stack online store with user authentication, cart management, and payment integration.",
        tags: ["React", "Node.js", "MongoDB"],
        category: "fullstack",
        icon: "🛒",
        github: "#",
        demo: "#"
    },
    {
        id: 3,
        name: "Task Manager",
        description: "Collaborative task management application with real-time updates and team features.",
        tags: ["React", "PostgreSQL", "Socket.io"],
        category: "fullstack",
        icon: "📋",
        github: "#",
        demo: "#"
    },
    {
        id: 4,
        name: "Weather App",
        description: "Real-time weather application with city search, forecasts, and interactive charts.",
        tags: ["JavaScript", "API", "Chart.js"],
        category: "frontend",
        icon: "🌤️",
        github: "#",
        demo: "#"
    },
    {
        id: 5,
        name: "REST API Service",
        description: "Backend API service with authentication, rate limiting, and comprehensive documentation.",
        tags: ["Node.js", "Express", "JWT"],
        category: "backend",
        icon: "⚙️",
        github: "#",
        demo: "#"
    },
    {
        id: 6,
        name: "Portfolio Website",
        description: "Modern responsive portfolio showcasing projects and skills with smooth animations.",
        tags: ["HTML", "CSS", "JavaScript"],
        category: "frontend",
        icon: "💼",
        github: "#",
        demo: "#"
    }
];

// =============================================
// SESSION 06: Date Object & Control Flow
// =============================================

// Get Current Date and Time
const now = new Date();
const hour = now.getHours();
const minutes = now.getMinutes();
const day = now.getDay();        // 0-6 (Sunday-Saturday)
const date = now.getDate();
const month = now.getMonth();    // 0-11
const year = now.getFullYear();

// Time Greeting Function (Control Flow)
function getTimeGreeting() {
    let greeting;
    let icon;

    if (hour < 12) {
        greeting = "Good Morning!";
        icon = "☀️";
    } else if (hour < 17) {
        greeting = "Good Afternoon!";
        icon = "🌤️";
    } else if (hour < 21) {
        greeting = "Good Evening!";
        icon = "🌅";
    } else {
        greeting = "Good Night!";
        icon = "🌙";
    }

    return { greeting, icon };
}

// Day Name Function (Switch Statement)
function getDayName(dayIndex) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[dayIndex];
}

// Month Name Function
function getMonthName(monthIndex) {
    const months = ["January", "February", "March", "April", "May", "June", 
                    "July", "August", "September", "October", "November", "December"];
    return months[monthIndex];
}

// Update Hero Section with Date/Time
function updateHeroDateTime() {
    const { greeting, icon } = getTimeGreeting();
    
    document.getElementById("greeting").textContent = greeting;
    document.getElementById("greeting-icon").textContent = icon;
    document.getElementById("day-name").textContent = getDayName(day);
    document.getElementById("date-full").textContent = `${getMonthName(month)} ${date}, ${year}`;
}

// =============================================
// SESSION 07: Functions
// =============================================

// Function Declaration
function updateAboutSection() {
    document.getElementById("avatar").textContent = fullName.charAt(0);
    document.getElementById("full-name").textContent = fullName;
    document.getElementById("job-title").textContent = jobTitle;
    document.getElementById("location").textContent = `${city}, ${country}`;
    document.getElementById("age").textContent = `${age} years old`;
    document.getElementById("experience").textContent = `${yearsOfExperience}+ years`;
    document.getElementById("email").textContent = email;
    document.getElementById("contact-email").textContent = email;
    
    // Status with Conditional
    const statusEl = document.getElementById("status");
    statusEl.textContent = isAvailable ? "Available for work" : "Not available";
    statusEl.className = isAvailable ? "info-value status-available" : "info-value";
}

// Arrow Function
const renderSkills = () => {
    const container = document.getElementById("skills-container");
    
    // Categories with icons
    const categories = [
        { key: "frontend", title: "Frontend", icon: "🎨" },
        { key: "backend", title: "Backend", icon: "⚙️" },
        { key: "tools", title: "Tools", icon: "🛠️" }
    ];
    
    // Map through categories
    container.innerHTML = categories.map(cat => `
        <div class="skill-category">
            <h3>${cat.icon} ${cat.title}</h3>
            <div class="skill-list">
                ${skillsData[cat.key].map(skill => `
                    <span class="skill-tag ${skill.level}">${skill.name}</span>
                `).join("")}
            </div>
        </div>
    `).join("");
};

// Callback Function for Filtering
const filterProjects = (category) => {
    if (category === "all") {
        return projectsData;
    }
    return projectsData.filter(project => project.category === category);
};

// Render Projects Function
function renderProjects(category = "all") {
    const grid = document.getElementById("projects-grid");
    const filtered = filterProjects(category);
    
    grid.innerHTML = filtered.map(project => `
        <div class="project-card" data-category="${project.category}">
            <div class="project-image">${project.icon}</div>
            <div class="project-info">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
                </div>
                <div class="project-links">
                    <a href="${project.github}" target="_blank">GitHub →</a>
                    <a href="${project.demo}" target="_blank">Live Demo →</a>
                </div>
            </div>
        </div>
    `).join("");
}

// =============================================
// SESSION 09: DOM Selection & Events
// =============================================

// DOM Selection
const burgerBtn = document.querySelector(".burger-btn");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section[id]");
const filterBtns = document.querySelectorAll(".filter-btn");
const contactForm = document.getElementById("contact-form");
const calcFab = document.getElementById("calc-fab");
const calcModal = document.getElementById("calculator-modal");
const closeModal = document.querySelector(".close-modal");
const calcDisplay = document.getElementById("calc-display");
const calcBtns = document.querySelectorAll(".calc-btn");

// =============================================
// Navigation Events (Session 09)
// =============================================

// Burger Menu Toggle
burgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    burgerBtn.classList.toggle("active");
});

// Close Menu on Link Click
navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);
        
        // Close menu
        navMenu.classList.remove("open");
        burgerBtn.classList.remove("active");
        
        // Smooth scroll
        targetSection.scrollIntoView({ behavior: "smooth" });
    });
});

// Close Menu on Outside Click (Event Delegation)
document.addEventListener("click", (e) => {
    if (!navMenu.contains(e.target) && !burgerBtn.contains(e.target)) {
        navMenu.classList.remove("open");
        burgerBtn.classList.remove("active");
    }
});

// Close Menu on Escape Key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        navMenu.classList.remove("open");
        burgerBtn.classList.remove("active");
        calcModal.classList.remove("open");
    }
});

// Active Link on Scroll
window.addEventListener("scroll", () => {
    let current = "";
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

// =============================================
// Project Filter Events (Session 09)
// =============================================

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        // Remove active class from all
        filterBtns.forEach(b => b.classList.remove("active"));
        // Add active to clicked
        btn.classList.add("active");
        // Filter projects
        const category = btn.dataset.filter;
        renderProjects(category);
    });
});

// =============================================
// Contact Form Events (Session 09)
// =============================================

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Get form data
    const name = document.getElementById("name").value;
    const emailInput = document.getElementById("email-input").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    
    // Validation (Session 06: Control Flow)
    if (!name.trim()) {
        alert("Please enter your name");
        return;
    }
    
    if (!emailInput.trim()) {
        alert("Please enter your email");
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput)) {
        alert("Please enter a valid email");
        return;
    }
    
    if (!message.trim()) {
        alert("Please enter a message");
        return;
    }
    
    // Success
    console.log("Form Submitted:", { name, email: emailInput, subject, message });
    alert(`Thank you, ${name}! Your message has been sent successfully.`);
    
    // Reset form
    contactForm.reset();
});

// =============================================
// SESSION 02: Calculator
// =============================================

let calcValue = "";
let calcHistory = [];

// Open Calculator Modal
calcFab.addEventListener("click", () => {
    calcModal.classList.add("open");
});

// Close Calculator Modal
closeModal.addEventListener("click", () => {
    calcModal.classList.remove("open");
});

// Close on modal background click
calcModal.addEventListener("click", (e) => {
    if (e.target === calcModal) {
        calcModal.classList.remove("open");
    }
});

// Calculator Button Click
calcBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const value = btn.dataset.value;
        handleCalcButton(value);
    });
});

// Calculator Keyboard Support
document.addEventListener("keydown", (e) => {
    if (!calcModal.classList.contains("open")) return;
    
    const key = e.key;
    
    if (/[0-9]/.test(key)) {
        handleCalcButton(key);
    } else if (["+", "-", "*", "/", "."].includes(key)) {
        handleCalcButton(key);
    } else if (key === "Enter" || key === "=") {
        handleCalcButton("=");
    } else if (key === "Escape") {
        calcModal.classList.remove("open");
    } else if (key === "Backspace") {
        handleCalcButton("←");
    } else if (key.toLowerCase() === "c") {
        handleCalcButton("C");
    }
});

// Calculator Logic Function (Session 03: Functions)
function handleCalcButton(value) {
    if (value === "C") {
        // Clear
        calcValue = "";
        calcDisplay.value = "";
    } else if (value === "←") {
        // Backspace
        calcValue = calcValue.slice(0, -1);
        calcDisplay.value = calcValue;
    } else if (value === "=") {
        // Calculate
        try {
            // Division by zero check
            if (calcValue.includes("/0") && !calcValue.includes("/0.")) {
                throw new Error("Division by zero");
            }
            
            const result = eval(calcValue);
            const roundedResult = Math.round(result * 1000000000) / 1000000000;
            
            // Add to history
            calcHistory.push({
                expression: calcValue,
                result: roundedResult
            });
            
            console.log("Calculation:", calcValue, "=", roundedResult);
            
            calcValue = roundedResult.toString();
            calcDisplay.value = calcValue;
        } catch (error) {
            calcDisplay.value = "Error";
            calcValue = "";
        }
    } else if (value === "%") {
        // Percentage
        try {
            const result = parseFloat(calcValue) / 100;
            calcValue = result.toString();
            calcDisplay.value = calcValue;
        } catch (error) {
            calcDisplay.value = "Error";
            calcValue = "";
        }
    } else {
        // Add to expression
        // Prevent multiple operators
        const lastChar = calcValue.slice(-1);
        const operators = ["+", "-", "*", "/", "."];
        
        if (operators.includes(value) && operators.includes(lastChar)) {
            calcValue = calcValue.slice(0, -1) + value;
        } else {
            calcValue += value;
        }
        
        calcDisplay.value = calcValue;
    }
}

// =============================================
// SESSION 03 & 04: Helper Functions
// =============================================

// Calculate Age Function
function calculateAge(birthYear) {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}

// Apply Discount Function
function applyDiscount(price, discountPercent) {
    return price - (price * discountPercent / 100);
}

// Build Profile Function
function buildProfile(name, title, skills) {
    return {
        name: name,
        title: title,
        skills: skills,
        createdAt: new Date().toISOString()
    };
}

// =============================================
// Initialize Everything
// =============================================

function init() {
    console.log("========================================");
    console.log("Final Portfolio - All Sessions Integrated");
    console.log("========================================");
    console.log("Portfolio Version:", PORTFOLIO_VERSION);
    console.log("Created:", CREATION_YEAR);
    console.log("Current Year:", year);
    console.log("Skills Categories:", Object.keys(skillsData));
    console.log("Total Projects:", projectsData.length);
    console.log("========================================");
    
    // Update all sections
    updateHeroDateTime();
    updateAboutSection();
    renderSkills();
    renderProjects();
    
    // Update footer year
    document.getElementById("year").textContent = year;
}

// Run on DOM Ready
document.addEventListener("DOMContentLoaded", init);

// =============================================
// Additional: Array Methods Practice (Session 08)
// =============================================

// forEach - Log all projects
console.log("\n=== All Projects (forEach) ===");
projectsData.forEach((project, index) => {
    console.log(`${index + 1}. ${project.name} (${project.category})`);
});

// map - Get project names
const projectNames = projectsData.map(p => p.name);
console.log("\n=== Project Names (map) ===");
console.log(projectNames);

// filter - Frontend projects only
const frontendProjects = projectsData.filter(p => p.category === "frontend");
console.log("\n=== Frontend Projects (filter) ===");
console.log(frontendProjects.map(p => p.name));

// find - Find specific project
const calcProject = projectsData.find(p => p.name.includes("Calculator"));
console.log("\n=== Calculator Project (find) ===");
console.log(calcProject);

// reduce - Count projects by category
const categoryCount = projectsData.reduce((acc, project) => {
    acc[project.category] = (acc[project.category] || 0) + 1;
    return acc;
}, {});
console.log("\n=== Projects by Category (reduce) ===");
console.log(categoryCount);
