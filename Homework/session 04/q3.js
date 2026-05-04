// 1. Complete Portfolio Data Structure
const portfolioData = {
    // Owner information (nested object)
    owner: {
        name: "Ahmed M. Ezzeldeen",
        title: "Frontend Developer",
        email: "ahmed@example.com",
        phone: "+20 123 456 7890",
        location: "Cairo, Egypt",
        social: {
            linkedin: "linkedin.com/in/ahmed",
            github: "github.com/ahmed",
            twitter: "@ahmed_dev"
        }
    },
    
    // About section
    about: "I'm a Frontend Developer specializing in building clean, responsive websites using HTML, CSS, and JavaScript. I'm passionate about turning ideas into real, working products.",
    
    // Skills array
    skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "JavaScript", level: 75 },
        { name: "Git", level: 70 },
        { name: "Responsive Design", level: 85 }
    ],
    
    // Projects array of objects
    projects: [
        {
            id: 1,
            name: "Calculator App",
            description: "A fully functional calculator with error handling",
            technologies: ["HTML", "CSS", "JavaScript"],
            status: "completed",
            liveUrl: "https://ahmed.github.io/calculator",
            githubUrl: "https://github.com/ahmed/calculator",
            featured: true
        },
        {
            id: 2,
            name: "Todo App",
            description: "Task management application with local storage",
            technologies: ["HTML", "CSS", "JavaScript"],
            status: "in-progress",
            liveUrl: null,
            githubUrl: "https://github.com/ahmed/todo-app",
            featured: true
        },
        {
            id: 3,
            name: "Portfolio Website",
            description: "Personal portfolio showcasing my projects",
            technologies: ["HTML", "CSS", "JavaScript"],
            status: "completed",
            liveUrl: "https://ahmed.github.io",
            githubUrl: "https://github.com/ahmed/portfolio",
            featured: false
        }
    ],
    
    // Methods
    getHeroText() {
        return `Hi, I'm ${this.owner.name} — ${this.owner.title}`;
    },
    
    getAboutText() {
        return this.about;
    },
    
    getContactInfo() {
        return `
📧 Email: ${this.owner.email}
📱 Phone: ${this.owner.phone}
📍 Location: ${this.owner.location}
💼 LinkedIn: ${this.owner.social.linkedin}
🐙 GitHub: ${this.owner.social.github}
        `.trim();
    },
    
    getSkillsList() {
        return this.skills.map(s => s.name).join(" • ");
    },
    
    getFeaturedProjects() {
        return this.projects.filter(p => p.featured);
    },
    
    getCompletedProjects() {
        return this.projects.filter(p => p.status === "completed");
    },
    
    addProject(project) {
        const newId = Math.max(...this.projects.map(p => p.id)) + 1;
        this.projects.push({ ...project, id: newId });
        return `Added project: ${project.name}`;
    }
};

console.log("=== Question 3: Portfolio Data Structure ===\n");

// Test the portfolio data
console.log("📌 Hero Text:");
console.log(portfolioData.getHeroText());

console.log("\n📌 About:");
console.log(portfolioData.getAboutText());

console.log("\n📌 Contact Info:");
console.log(portfolioData.getContactInfo());

console.log("\n📌 Skills:");
console.log(portfolioData.getSkillsList());

console.log("\n📌 Featured Projects:");
portfolioData.getFeaturedProjects().forEach(p => {
    console.log(`  • ${p.name}: ${p.description}`);
});

// 2. Reference vs Value Demonstration
console.log("\n=== Reference vs Value ===\n");

// Value types (primitives)
console.log("📌 Value Types (Copy):");
let a = 10;
let b = a;
b = 20;
console.log(`a = ${a}, b = ${b}`); // a is still 10!

// Reference types (objects)
console.log("\n📌 Reference Types (Shared):");
let obj1 = { name: "Ahmed" };
let obj2 = obj1;
obj2.name = "Sara";
console.log(`obj1.name = ${obj1.name}`); // Changed to "Sara"!

// 3. How to Properly Copy Objects
console.log("\n=== Copying Objects ===\n");

// Using Spread Operator
console.log("📌 Using Spread Operator:");
const originalUser = { name: "Ahmed", age: 25 };
const copiedUser = { ...originalUser };
copiedUser.name = "Omar";
console.log(`Original: ${originalUser.name}, Copy: ${copiedUser.name}`);

// Deep copy for nested objects
console.log("\n📌 Deep Copy (for nested objects):");
const originalPortfolio = {
    owner: { name: "Ahmed", skills: ["HTML", "CSS"] }
};

// Shallow copy (nested objects still shared!)
const shallowCopy = { ...originalPortfolio };
shallowCopy.owner.name = "Sara";
console.log(`Original owner name: ${originalPortfolio.owner.name}`); // Changed!

// Deep copy using JSON
const deepCopy = JSON.parse(JSON.stringify(originalPortfolio));
deepCopy.owner.name = "Mohamed";
console.log(`Original after deep copy: ${originalPortfolio.owner.name}`); // Unchanged!

// 4. Working with Nested Objects
console.log("\n=== Working with Nested Objects ===\n");

// Accessing nested properties
console.log("📌 Accessing Nested Properties:");
console.log(`Owner name: ${portfolioData.owner.name}`);
console.log(`LinkedIn: ${portfolioData.owner.social.linkedin}`);
console.log(`First project: ${portfolioData.projects[0].name}`);
console.log(`Technologies: ${portfolioData.projects[0].technologies.join(", ")}`);

// Modifying nested objects
console.log("\n📌 Modifying Nested Objects:");
portfolioData.owner.social.twitter = "@ahmed_dev_updated";
console.log(`Updated Twitter: ${portfolioData.owner.social.twitter}`);

// Adding new project
console.log("\n📌 Adding New Project:");
portfolioData.addProject({
    name: "Weather App",
    description: "Real-time weather using API",
    technologies: ["HTML", "CSS", "JavaScript", "Fetch API"],
    status: "planned",
    liveUrl: null,
    githubUrl: "https://github.com/ahmed/weather-app",
    featured: true
});

console.log("All projects:");
portfolioData.projects.forEach(p => {
    console.log(`  ${p.id}. ${p.name} [${p.status}]`);
});

// 5. Object Methods (Bonus)
console.log("\n=== Useful Object Methods ===\n");

console.log("📌 Object.keys():");
console.log(Object.keys(portfolioData));

console.log("\n📌 Object.values():");
console.log(Object.values(portfolioData.owner));

console.log("\n📌 Object.entries():");
Object.entries(portfolioData.owner.social).forEach(([platform, url]) => {
    console.log(`  ${platform}: ${url}`);
});

console.log("\n=== All tests passed! ===");

// Export for use in other files
// export { portfolioData };
