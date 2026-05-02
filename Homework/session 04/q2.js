/**
 * Session 04 - Question 2
 * Topic: Object Methods & The `this` Keyword
 * 
 * Task: Create objects with methods and understand `this`
 */

// ===== Solution =====

// 1. Basic Object with Methods
const calculator = {
    brand: "Casio",
    model: "FX-991",
    
    // Method using function expression
    add: function(a, b) {
        return a + b;
    },
    
    // Method using shorthand (ES6)
    subtract(a, b) {
        return a - b;
    },
    
    multiply: (a, b) => a * b,
    
    divide(a, b) {
        if (b === 0) {
            return "Error: Division by zero!";
        }
        return a / b;
    },
    
    // Method using `this`
    getInfo() {
        return `${this.brand} ${this.model}`;
    }
};

console.log("=== Question 2: Object Methods ===\n");

// Test calculator methods
console.log("📌 Calculator Methods:");
console.log(`5 + 3 = ${calculator.add(5, 3)}`);
console.log(`10 - 4 = ${calculator.subtract(10, 4)}`);
console.log(`6 × 7 = ${calculator.multiply(6, 7)}`);
console.log(`20 ÷ 5 = ${calculator.divide(20, 5)}`);
console.log(`20 ÷ 0 = ${calculator.divide(20, 0)}`);
console.log(`Calculator: ${calculator.getInfo()}`);

// 2. User Object with `this` Keyword
const user = {
    name: "Ahmed",
    age: 25,
    title: "Frontend Developer",
    skills: ["HTML", "CSS", "JavaScript"],
    
    // Method using `this`
    introduce() {
        return `Hi, I'm ${this.name}, a ${this.age}-year-old ${this.title}.`;
    },
    
    getSkills() {
        return `${this.name}'s skills: ${this.skills.join(", ")}`;
    },
    
    addSkill(skill) {
        this.skills.push(skill);
        return `Added "${skill}" to skills!`;
    },
    
    celebrateBirthday() {
        this.age++;
        return `Happy Birthday! ${this.name} is now ${this.age} years old!`;
    }
};

console.log("\n📌 User Methods with `this`:");
console.log(user.introduce());
console.log(user.getSkills());
console.log(user.addSkill("React"));
console.log(user.getSkills());
console.log(user.celebrateBirthday());

// 3. Portfolio Object with Nested Methods
const portfolio = {
    owner: {
        name: "Ahmed M. Ezzeldeen",
        title: "Frontend Developer",
        email: "ahmed@example.com"
    },
    skills: ["HTML", "CSS", "JavaScript", "Git"],
    projects: [
        { name: "Calculator", status: "completed" },
        { name: "Todo App", status: "in-progress" },
        { name: "Portfolio", status: "completed" }
    ],
    
    // Method to get owner info
    getOwnerInfo() {
        return `${this.owner.name} | ${this.owner.title}`;
    },
    
    // Method to get contact
    getContact() {
        return `Contact: ${this.owner.email}`;
    },
    
    // Method to get completed projects
    getCompletedProjects() {
        return this.projects.filter(p => p.status === "completed");
    },
    
    // Method to count projects
    getProjectCount() {
        return `${this.owner.name} has ${this.projects.length} projects.`;
    },
    
    // Method to add a project
    addProject(name, status = "in-progress") {
        this.projects.push({ name, status });
        return `Added project: ${name}`;
    },
    
    // Method to get full summary
    getSummary() {
        const completed = this.getCompletedProjects().length;
        return `
╔══════════════════════════════════════╗
║           PORTFOLIO SUMMARY          ║
╠══════════════════════════════════════╣
║ Owner: ${this.owner.name.padEnd(28)}║
║ Title: ${this.owner.title.padEnd(28)}║
║ Skills: ${this.skills.length} technologies            ║
║ Projects: ${this.projects.length} total, ${completed} completed     ║
╚══════════════════════════════════════╝`;
    }
};

console.log("\n📌 Portfolio Methods:");
console.log(portfolio.getOwnerInfo());
console.log(portfolio.getContact());
console.log(`Completed projects: ${portfolio.getCompletedProjects().length}`);
console.log(portfolio.getProjectCount());
console.log(portfolio.addProject("Weather App"));
console.log(portfolio.getSummary());

// 4. Bank Account Example (Practical Use of `this`)
const bankAccount = {
    owner: "Ahmed",
    balance: 1000,
    
    deposit(amount) {
        this.balance += amount;
        return `Deposited $${amount}. New balance: $${this.balance}`;
    },
    
    withdraw(amount) {
        if (amount > this.balance) {
            return `Insufficient funds! Balance: $${this.balance}`;
        }
        this.balance -= amount;
        return `Withdrew $${amount}. New balance: $${this.balance}`;
    },
    
    getBalance() {
        return `${this.owner}'s balance: $${this.balance}`;
    }
};

console.log("\n📌 Bank Account Example:");
console.log(bankAccount.getBalance());
console.log(bankAccount.deposit(500));
console.log(bankAccount.withdraw(200));
console.log(bankAccount.withdraw(2000)); // Should fail

console.log("\n=== All tests passed! ===");

// ===== Key Takeaways =====
console.log("\n📚 Key Takeaways:");
console.log("1. Methods are functions inside objects");
console.log("2. `this` refers to the object itself");
console.log("3. Use `this.property` to access object's own properties");
console.log("4. Arrow functions DON'T have their own `this`!");
