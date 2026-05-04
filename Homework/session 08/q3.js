console.log("╔══════════════════════════════════════╗");
console.log("║           OBJECTS                    ║");
console.log("╚══════════════════════════════════════╝\n");

// ===== Creating Objects =====

console.log(">>> Creating Objects:\n");

// Object literal
let developer = {
    name: "Ahmed",
    age: 25,
    city: "Cairo",
    isAvailable: true
};

console.log("Developer object:", developer);

// Empty object
let empty = {};
console.log("Empty object:", empty);

// Object with different data types
let profile = {
    username: "ahmed_dev",
    followers: 1500,
    verified: false,
    bio: "Frontend Developer",
    skills: ["HTML", "CSS", "JavaScript"],  // Array inside object
    contact: {                               // Object inside object
        email: "ahmed@example.com",
        phone: "+20-123-456-7890"
    }
};

console.log("\nNested object:", profile);

// ===== Accessing Object Properties =====

console.log("\n>>> Accessing Properties:\n");

// Dot notation
console.log("developer.name:", developer.name);
console.log("developer.age:", developer.age);

// Bracket notation (for dynamic keys or special characters)
console.log("developer['city']:", developer['city']);

let key = "isAvailable";
console.log("developer[key]:", developer[key]);

// Accessing nested properties
console.log("profile.skills:", profile.skills);
console.log("profile.skills[0]:", profile.skills[0]);
console.log("profile.contact.email:", profile.contact.email);

// ===== Modifying Objects =====

console.log("\n>>> Modifying Objects:\n");

let user = {
    name: "Sara",
    role: "Developer"
};
console.log("Original:", user);

// Modify existing property
user.name = "Sara Ahmed";
console.log("After name change:", user);

// Add new property
user.city = "Dubai";
user.experience = 3;
console.log("After adding properties:", user);

// Delete property
delete user.experience;
console.log("After delete:", user);

// ===== Object Methods =====

console.log("\n>>> Object Methods (Functions in Objects):\n");

let calculator = {
    brand: "Casio",
    
    // Method using traditional syntax
    add: function(a, b) {
        return a + b;
    },
    
    // Method using shorthand syntax (ES6)
    subtract(a, b) {
        return a - b;
    },
    
    // Method using 'this'
    describe() {
        return "This is a " + this.brand + " calculator";
    }
};

console.log("calculator.add(5, 3):", calculator.add(5, 3));
console.log("calculator.subtract(10, 4):", calculator.subtract(10, 4));
console.log("calculator.describe():", calculator.describe());

// ===== 'this' Keyword =====

console.log("\n>>> 'this' Keyword:\n");

let freelancer = {
    name: "Ahmed",
    hourlyRate: 50,
    
    calculatePrice(hours) {
        return hours * this.hourlyRate;
    },
    
    getQuote(hours) {
        return `${this.name} charges $${this.calculatePrice(hours)} for ${hours} hours`;
    },
    
    updateRate(newRate) {
        this.hourlyRate = newRate;
        return `Rate updated to $${this.hourlyRate}/hr`;
    }
};

console.log(freelancer.getQuote(10));
console.log(freelancer.updateRate(75));
console.log(freelancer.getQuote(10));

// ===== Object.keys, values, entries =====

console.log("\n>>> Object Utilities:\n");

let person = {
    name: "Omar",
    age: 30,
    city: "Riyadh"
};

console.log("Object:", person);
console.log("Keys:", Object.keys(person));
console.log("Values:", Object.values(person));
console.log("Entries:", Object.entries(person));

// Loop through object
console.log("\nLoop with forEach:");
Object.entries(person).forEach(([key, value]) => {
    console.log(`  ${key}: ${value}`);
});

// ===== ARRAY OF OBJECTS =====

console.log("\n╔══════════════════════════════════════╗");
console.log("║       ARRAY OF OBJECTS               ║");
console.log("╚══════════════════════════════════════╝\n");

let projects = [
    { 
        name: "Calculator", 
        description: "Basic calculator with JS", 
        tech: ["HTML", "CSS", "JavaScript"],
        status: "completed",
        url: "https://calculator.demo"
    },
    { 
        name: "Todo App", 
        description: "Task manager with localStorage", 
        tech: ["React", "CSS"],
        status: "in-progress",
        url: "https://todo.demo"
    },
    { 
        name: "Portfolio", 
        description: "Personal portfolio website", 
        tech: ["HTML", "CSS", "JavaScript"],
        status: "completed",
        url: "https://portfolio.demo"
    },
    { 
        name: "Weather App", 
        description: "Weather forecast using API", 
        tech: ["JavaScript", "API"],
        status: "planning",
        url: null
    }
];

console.log("Projects:", projects);

// Access items
console.log("\n>>> Accessing Array of Objects:\n");
console.log("First project:", projects[0].name);
console.log("Second project tech:", projects[1].tech);
console.log("Third project URL:", projects[2].url);

// Filter completed projects
let completedProjects = projects.filter(p => p.status === "completed");
console.log("\nCompleted projects:", completedProjects.map(p => p.name));

// Find specific project
let todoProject = projects.find(p => p.name === "Todo App");
console.log("\nTodo App:", todoProject);

// Get all technologies used
let allTech = projects
    .flatMap(p => p.tech)
    .filter((tech, index, arr) => arr.indexOf(tech) === index); // Remove duplicates
console.log("\nAll technologies used:", allTech);

// Count by status
let statusCount = {
    completed: projects.filter(p => p.status === "completed").length,
    "in-progress": projects.filter(p => p.status === "in-progress").length,
    planning: projects.filter(p => p.status === "planning").length
};
console.log("\nStatus count:", statusCount);

// ===== REAL-WORLD: Portfolio Data =====

console.log("\n========== Portfolio Data Structure ==========\n");

const portfolioData = {
    // Personal Info
    name: "Mohamed Ahmed",
    title: "Full-Stack Web Developer",
    email: "mohamed@example.com",
    phone: "+20-123-456-7890",
    location: "Cairo, Egypt",
    available: true,
    
    // Skills Array
    skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "Node.js", level: 75 },
        { name: "MongoDB", level: 70 }
    ],
    
    // Projects Array
    projects: [
        {
            id: 1,
            name: "E-Commerce Platform",
            description: "Full-stack e-commerce solution with payment integration",
            tech: ["React", "Node.js", "MongoDB", "Stripe"],
            image: "ecommerce.png",
            liveUrl: "https://shop.demo",
            github: "https://github.com/shop"
        },
        {
            id: 2,
            name: "Task Management App",
            description: "Collaborative task manager with real-time updates",
            tech: ["React", "Socket.io", "PostgreSQL"],
            image: "tasks.png",
            liveUrl: "https://tasks.demo",
            github: "https://github.com/tasks"
        },
        {
            id: 3,
            name: "Weather Dashboard",
            description: "Weather app with location-based forecasts",
            tech: ["JavaScript", "API", "Chart.js"],
            image: "weather.png",
            liveUrl: "https://weather.demo",
            github: "https://github.com/weather"
        }
    ],
    
    // Social Links
    social: {
        github: "https://github.com/mohamed",
        linkedin: "https://linkedin.com/in/mohamed",
        twitter: "https://twitter.com/mohamed"
    },
    
    // Methods
    getTopSkills(n = 3) {
        return this.skills
            .sort((a, b) => b.level - a.level)
            .slice(0, n);
    },
    
    getProjectById(id) {
        return this.projects.find(p => p.id === id);
    },
    
    getProjectNames() {
        return this.projects.map(p => p.name);
    }
};

// Using the portfolio data
console.log("Name:", portfolioData.name);
console.log("Title:", portfolioData.title);
console.log("Available:", portfolioData.available ? "Yes" : "No");

console.log("\nTop 3 Skills:");
portfolioData.getTopSkills(3).forEach(s => {
    console.log(`  - ${s.name}: ${s.level}%`);
});

console.log("\nAll Projects:");
portfolioData.projects.forEach(p => {
    console.log(`  ${p.id}. ${p.name} - ${p.tech.join(", ")}`);
});

console.log("\nProject by ID (2):", portfolioData.getProjectById(2).name);

// ===== Spread Operator =====

console.log("\n>>> Spread Operator (...):\n");

let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };

// Merge objects
let merged = { ...obj1, ...obj2 };
console.log("Merged:", merged);

// Clone object
let clone = { ...developer };
console.log("Clone:", clone);

// Add properties while copying
let extended = { ...developer, country: "Egypt", age: 26 };
console.log("Extended:", extended);
