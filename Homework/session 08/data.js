/**
 * Session 08 - Portfolio Data Layer
 * Topic: Arrays + Objects
 * 
 * This file stores all portfolio data as JavaScript objects
 * Will be used in Session 09 to render dynamically
 */

// =============================================
// PORTFOLIO DATA
// =============================================

const portfolioData = {
    
    // ===== Personal Information =====
    personal: {
        name: "Mohamed Ashraf",
        title: "Full-Stack Web Developer",
        tagline: "Building modern web experiences",
        email: "mohamed@example.com",
        phone: "+20 123 456 7890",
        location: "Cairo, Egypt",
        available: true,
        bio: `Passionate Full-Stack Developer with 2+ years of experience 
              building modern web applications. I specialize in React and Node.js, 
              creating responsive, user-friendly interfaces and robust backends.`
    },
    
    // ===== Social Links =====
    social: [
        { 
            platform: "GitHub", 
            url: "https://github.com/mohamed-Ashraf",
            icon: "github",
            username: "@mohamed-Ashraf"
        },
        { 
            platform: "LinkedIn", 
            url: "https://linkedin.com/in/mohamed-Ashraf",
            icon: "linkedin",
            username: "Mohamed Ashraf"
        },
        { 
            platform: "Twitter", 
            url: "https://twitter.com/mohamed_dev",
            icon: "twitter",
            username: "@mohamed_dev"
        },
        { 
            platform: "Email", 
            url: "mailto:mohamed@example.com",
            icon: "email",
            username: "mohamed@example.com"
        }
    ],
    
    // ===== Skills Array =====
    skills: [
        { name: "HTML5", category: "Frontend", level: 95, icon: "html5" },
        { name: "CSS3", category: "Frontend", level: 90, icon: "css3" },
        { name: "JavaScript", category: "Frontend", level: 85, icon: "javascript" },
        { name: "TypeScript", category: "Frontend", level: 80, icon: "typescript" },
        { name: "React", category: "Frontend", level: 85, icon: "react" },
        { name: "Next.js", category: "Frontend", level: 80, icon: "nextjs" },
        { name: "Tailwind CSS", category: "Frontend", level: 85, icon: "tailwind" },
        { name: "Node.js", category: "Backend", level: 75, icon: "nodejs" },
        { name: "Express.js", category: "Backend", level: 70, icon: "express" },
        { name: "MongoDB", category: "Database", level: 70, icon: "mongodb" },
        { name: "PostgreSQL", category: "Database", level: 65, icon: "postgresql" },
        { name: "Git", category: "Tools", level: 85, icon: "git" },
        { name: "GitHub", category: "Tools", level: 85, icon: "github" },
        { name: "VS Code", category: "Tools", level: 90, icon: "vscode" },
        { name: "Figma", category: "Design", level: 70, icon: "figma" }
    ],
    
    // ===== Projects Array =====
    projects: [
        {
            id: 1,
            name: "E-Commerce Platform",
            description: "A full-stack e-commerce solution with product management, shopping cart, and payment integration using Stripe.",
            longDescription: `Built a complete e-commerce platform featuring user authentication, 
                            product catalog with search and filters, shopping cart, checkout process, 
                            and payment integration. Admin dashboard for managing products and orders.`,
            tech: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
            category: "Full-Stack",
            status: "completed",
            featured: true,
            image: "ecommerce.png",
            liveUrl: "https://ecommerce-demo.netlify.app",
            githubUrl: "https://github.com/mohamed/ecommerce",
            highlights: [
                "User authentication & authorization",
                "Shopping cart with persistence",
                "Stripe payment integration",
                "Admin dashboard"
            ]
        },
        {
            id: 2,
            name: "Task Management App",
            description: "A collaborative task management application with real-time updates, team features, and progress tracking.",
            longDescription: `Developed a Trello-like task management application with drag-and-drop 
                            functionality, real-time collaboration using WebSockets, team workspaces, 
                            and detailed progress analytics.`,
            tech: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
            category: "Full-Stack",
            status: "completed",
            featured: true,
            image: "tasks.png",
            liveUrl: "https://taskflow-demo.netlify.app",
            githubUrl: "https://github.com/mohamed/taskflow",
            highlights: [
                "Drag-and-drop interface",
                "Real-time collaboration",
                "Team workspaces",
                "Progress analytics"
            ]
        },
        {
            id: 3,
            name: "Weather Dashboard",
            description: "A beautiful weather application with location-based forecasts, interactive charts, and severe weather alerts.",
            longDescription: `Created a weather dashboard that displays current conditions and 
                            forecasts using the OpenWeather API. Features location search, 
                            interactive temperature charts, and weather maps.`,
            tech: ["JavaScript", "API", "Chart.js", "CSS3"],
            category: "Frontend",
            status: "completed",
            featured: true,
            image: "weather.png",
            liveUrl: "https://weather-demo.netlify.app",
            githubUrl: "https://github.com/mohamed/weather-app",
            highlights: [
                "Location-based forecasts",
                "Interactive charts",
                "Weather maps",
                "Severe weather alerts"
            ]
        },
        {
            id: 4,
            name: "Portfolio Website",
            description: "A modern, animated portfolio website showcasing projects and skills with smooth interactions.",
            longDescription: `Designed and developed a personal portfolio website with modern 
                            animations, responsive design, and dynamic content loading. 
                            Includes dark mode and performance optimization.`,
            tech: ["HTML5", "CSS3", "JavaScript", "Framer Motion"],
            category: "Frontend",
            status: "completed",
            featured: false,
            image: "portfolio.png",
            liveUrl: "https://mohamed-Ashraf.netlify.app",
            githubUrl: "https://github.com/mohamed/portfolio",
            highlights: [
                "Smooth animations",
                "Dark/Light mode",
                "Responsive design",
                "SEO optimized"
            ]
        },
        {
            id: 5,
            name: "Blog Platform",
            description: "A modern blogging platform with markdown support, categories, and user authentication.",
            longDescription: `Built a full-featured blog platform with MDX support for rich 
                            content, category system, user comments, and admin panel for content management.`,
            tech: ["Next.js", "MDX", "Prisma", "PostgreSQL"],
            category: "Full-Stack",
            status: "in-progress",
            featured: false,
            image: "blog.png",
            liveUrl: null,
            githubUrl: "https://github.com/mohamed/blog",
            highlights: [
                "MDX content support",
                "Category system",
                "User comments",
                "Admin panel"
            ]
        },
        {
            id: 6,
            name: "Calculator App",
            description: "A simple yet functional calculator with a clean UI, keyboard support, and calculation history.",
            longDescription: `Created a calculator application with standard operations, 
                            keyboard support, calculation history, and a clean, modern interface.`,
            tech: ["HTML5", "CSS3", "JavaScript"],
            category: "Frontend",
            status: "completed",
            featured: false,
            image: "calculator.png",
            liveUrl: "https://calculator-demo.netlify.app",
            githubUrl: "https://github.com/mohamed/calculator",
            highlights: [
                "Basic operations",
                "Keyboard support",
                "Calculation history",
                "Responsive design"
            ]
        }
    ],
    
    // ===== Services Array =====
    services: [
        {
            id: 1,
            title: "Web Development",
            description: "Building modern, responsive websites and web applications using the latest technologies.",
            icon: "code",
            features: [
                "Responsive design",
                "Modern frameworks",
                "Clean code",
                "Performance optimized"
            ]
        },
        {
            id: 2,
            title: "Frontend Development",
            description: "Creating beautiful, interactive user interfaces with React and modern CSS.",
            icon: "palette",
            features: [
                "React/Next.js",
                "Tailwind CSS",
                "Animations",
                "Mobile-first"
            ]
        },
        {
            id: 3,
            title: "Backend Development",
            description: "Building robust APIs and server-side applications with Node.js.",
            icon: "server",
            features: [
                "REST APIs",
                "Database design",
                "Authentication",
                "Cloud deployment"
            ]
        }
    ],
    
    // ===== Experience Array =====
    experience: [
        {
            title: "Freelance Web Developer",
            company: "Self-employed",
            location: "Remote",
            period: "2022 - Present",
            description: "Building web applications for clients worldwide using React, Node.js, and modern technologies.",
            highlights: [
                "Completed 50+ projects",
                "Worked with 30+ clients",
                "5-star rating on platforms"
            ]
        },
        {
            title: "Junior Web Developer",
            company: "Tech Startup",
            location: "Cairo, Egypt",
            period: "2021 - 2022",
            description: "Developed and maintained web applications using React and Node.js.",
            highlights: [
                "Built customer dashboard",
                "Improved performance by 40%",
                "Mentored 2 interns"
            ]
        }
    ],
    
    // ===== Stats =====
    stats: {
        yearsExperience: 2,
        projectsCompleted: 50,
        happyClients: 30,
        technologies: 15
    },
    
    // ===== Testimonials Array =====
    testimonials: [
        {
            id: 1,
            name: "John Smith",
            role: "CEO, TechStart",
            avatar: "john.png",
            text: "Mohamed delivered an excellent e-commerce platform. His attention to detail and communication were outstanding.",
            rating: 5
        },
        {
            id: 2,
            name: "Sarah Johnson",
            role: "Product Manager",
            avatar: "sarah.png",
            text: "Great developer to work with! He understood our requirements perfectly and delivered on time.",
            rating: 5
        }
    ],
    
    // ===== Helper Methods =====
    
    /**
     * Get all skills in a specific category
     */
    getSkillsByCategory(category) {
        return this.skills.filter(skill => skill.category === category);
    },
    
    /**
     * Get featured projects only
     */
    getFeaturedProjects() {
        return this.projects.filter(project => project.featured);
    },
    
    /**
     * Get projects by status
     */
    getProjectsByStatus(status) {
        return this.projects.filter(project => project.status === status);
    },
    
    /**
     * Get project by ID
     */
    getProjectById(id) {
        return this.projects.find(project => project.id === id);
    },
    
    /**
     * Get all unique technologies used
     */
    getAllTechnologies() {
        const techSet = new Set();
        this.projects.forEach(project => {
            project.tech.forEach(t => techSet.add(t));
        });
        return Array.from(techSet).sort();
    },
    
    /**
     * Get skills sorted by level
     */
    getTopSkills(limit = 5) {
        return [...this.skills]
            .sort((a, b) => b.level - a.level)
            .slice(0, limit);
    },
    
    /**
     * Search projects by name or tech
     */
    searchProjects(query) {
        const q = query.toLowerCase();
        return this.projects.filter(project => 
            project.name.toLowerCase().includes(q) ||
            project.tech.some(t => t.toLowerCase().includes(q))
        );
    }
};

// =============================================
// DEMO / TESTING
// =============================================

console.log("╔══════════════════════════════════════╗");
console.log("║       PORTFOLIO DATA LOADED          ║");
console.log("╚══════════════════════════════════════╝\n");

// Personal Info
console.log(">>> Personal Info:");
console.log("Name:", portfolioData.personal.name);
console.log("Title:", portfolioData.personal.title);
console.log("Available:", portfolioData.personal.available);

// Skills
console.log("\n>>> Skills by Category:");
const categories = ["Frontend", "Backend", "Database", "Tools", "Design"];
categories.forEach(cat => {
    const skills = portfolioData.getSkillsByCategory(cat);
    if (skills.length > 0) {
        console.log(`${cat}:`, skills.map(s => s.name).join(", "));
    }
});

// Top Skills
console.log("\n>>> Top 5 Skills:");
portfolioData.getTopSkills(5).forEach((skill, i) => {
    console.log(`  ${i + 1}. ${skill.name} (${skill.level}%)`);
});

// Featured Projects
console.log("\n>>> Featured Projects:");
portfolioData.getFeaturedProjects().forEach(project => {
    console.log(`  - ${project.name}: ${project.tech.join(", ")}`);
});

// All Technologies
console.log("\n>>> All Technologies Used:");
console.log(portfolioData.getAllTechnologies().join(", "));

// Stats
console.log("\n>>> Stats:");
console.log(`  ${portfolioData.stats.yearsExperience}+ years experience`);
console.log(`  ${portfolioData.stats.projectsCompleted}+ projects completed`);
console.log(`  ${portfolioData.stats.happyClients}+ happy clients`);

// Export for use in other files (ES6)
// export default portfolioData;
