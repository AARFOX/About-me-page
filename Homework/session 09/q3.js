/**
 * Session 09 - Question 3
 * Topic: Burger Menu Implementation
 * 
 * Exercise: Build a Responsive Burger Menu
 * - Toggle navigation on mobile
 * - Handle click events
 * - Close menu when link clicked
 */

// ============ Solution ============

// NOTE: This code runs in the BROWSER
// Complete HTML file provided at the end

console.log("╔══════════════════════════════════════╗");
console.log("║          BURGER MENU                 ║");
console.log("╚══════════════════════════════════════╝\n");

// ===== Burger Menu JavaScript =====

console.log(">>> Burger Menu Code:\n");

// Select elements
const burgerBtn = document.querySelector(".burger-btn");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

// Toggle menu on burger click
burgerBtn.addEventListener("click", () => {
    // Toggle classes
    navMenu.classList.toggle("open");
    burgerBtn.classList.toggle("active");
    
    // Log for debugging
    const isOpen = navMenu.classList.contains("open");
    console.log("Menu:", isOpen ? "OPEN" : "CLOSED");
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        burgerBtn.classList.remove("active");
        console.log("Menu closed (link clicked)");
    });
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
    // Check if click is outside menu and burger button
    if (!navMenu.contains(e.target) && !burgerBtn.contains(e.target)) {
        navMenu.classList.remove("open");
        burgerBtn.classList.remove("active");
    }
});

// Close menu on Escape key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        navMenu.classList.remove("open");
        burgerBtn.classList.remove("active");
        console.log("Menu closed (Escape pressed)");
    }
});

// ===== Animated Burger Icon =====

console.log("\n>>> Animated Burger Icon:\n");

// CSS for animation:
// .burger-btn span {
//     display: block;
//     width: 25px;
//     height: 3px;
//     background: currentColor;
//     margin: 5px 0;
//     transition: all 0.3s ease;
// }
//
// .burger-btn.active span:nth-child(1) {
//     transform: rotate(45deg) translate(5px, 5px);
// }
//
// .burger-btn.active span:nth-child(2) {
//     opacity: 0;
// }
//
// .burger-btn.active span:nth-child(3) {
//     transform: rotate(-45deg) translate(7px, -6px);
// }

// ===== Smooth Scroll with Burger Menu =====

console.log("\n>>> Smooth Scroll:\n");

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            // Close menu first
            navMenu.classList.remove("open");
            burgerBtn.classList.remove("active");
            
            // Smooth scroll to section
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
            
            console.log("Scrolled to:", targetId);
        }
    });
});

// ===== Active Link Highlighting =====

console.log("\n>>> Active Link Highlighting:\n");

const sections = document.querySelectorAll("section[id]");

function highlightActiveLink() {
    const scrollY = window.scrollY;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${sectionId}`) {
                    link.classList.add("active");
                }
            });
        }
    });
}

window.addEventListener("scroll", highlightActiveLink);

// ===== Complete HTML File =====

const burgerMenuHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Burger Menu Demo</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
        }
        
        /* Navigation Styles */
        .navbar {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background: white;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            z-index: 1000;
        }
        
        .nav-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 70px;
        }
        
        .logo {
            font-size: 1.5rem;
            font-weight: 700;
            color: #667eea;
        }
        
        /* Burger Button */
        .burger-btn {
            display: none;
            flex-direction: column;
            gap: 5px;
            padding: 10px;
            background: none;
            border: none;
            cursor: pointer;
        }
        
        .burger-btn span {
            display: block;
            width: 25px;
            height: 3px;
            background: #333;
            border-radius: 2px;
            transition: all 0.3s ease;
        }
        
        /* Burger Animation */
        .burger-btn.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .burger-btn.active span:nth-child(2) {
            opacity: 0;
        }
        
        .burger-btn.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
        
        /* Navigation Links */
        .nav-menu {
            display: flex;
            gap: 2rem;
            list-style: none;
        }
        
        .nav-link {
            text-decoration: none;
            color: #333;
            font-weight: 500;
            padding: 0.5rem 0;
            border-bottom: 2px solid transparent;
            transition: all 0.3s ease;
        }
        
        .nav-link:hover,
        .nav-link.active {
            color: #667eea;
            border-bottom-color: #667eea;
        }
        
        /* Mobile Styles */
        @media (max-width: 768px) {
            .burger-btn {
                display: flex;
            }
            
            .nav-menu {
                position: fixed;
                top: 70px;
                left: 0;
                right: 0;
                background: white;
                flex-direction: column;
                padding: 2rem;
                gap: 1rem;
                transform: translateY(-100%);
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
                box-shadow: 0 5px 20px rgba(0,0,0,0.1);
            }
            
            .nav-menu.open {
                transform: translateY(0);
                opacity: 1;
                visibility: visible;
            }
            
            .nav-link {
                display: block;
                padding: 0.75rem;
                border-bottom: 1px solid #eee;
            }
        }
        
        /* Sections */
        section {
            min-height: 100vh;
            padding: 100px 20px;
        }
        
        #home { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; }
        #about { background: #f9fafb; }
        #services { background: white; }
        #contact { background: #f3f4f6; }
        
        .section-content {
            max-width: 800px;
            margin: 0 auto;
        }
        
        h1 { font-size: 3rem; margin-bottom: 1rem; }
        h2 { font-size: 2rem; margin-bottom: 1rem; color: #667eea; }
        p { color: #666; margin-bottom: 1rem; }
    </style>
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar">
        <div class="nav-container">
            <a href="#home" class="logo">Portfolio</a>
            
            <button class="burger-btn" aria-label="Toggle menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
            
            <ul class="nav-menu">
                <li><a href="#home" class="nav-link active">Home</a></li>
                <li><a href="#about" class="nav-link">About</a></li>
                <li><a href="#services" class="nav-link">Services</a></li>
                <li><a href="#contact" class="nav-link">Contact</a></li>
            </ul>
        </div>
    </nav>
    
    <!-- Sections -->
    <section id="home">
        <div class="section-content">
            <h1>Welcome Home</h1>
            <p>Resize the browser to see the burger menu in action on mobile!</p>
        </div>
    </section>
    
    <section id="about">
        <div class="section-content">
            <h2>About</h2>
            <p>This is a demo of a responsive burger menu built with vanilla JavaScript.</p>
        </div>
    </section>
    
    <section id="services">
        <div class="section-content">
            <h2>Services</h2>
            <p>Features: smooth scroll, active link highlighting, animated burger icon.</p>
        </div>
    </section>
    
    <section id="contact">
        <div class="section-content">
            <h2>Contact</h2>
            <p>The menu closes when you click a link, click outside, or press Escape.</p>
        </div>
    </section>
    
    <script>
        // Select elements
        const burgerBtn = document.querySelector(".burger-btn");
        const navMenu = document.querySelector(".nav-menu");
        const navLinks = document.querySelectorAll(".nav-link");
        const sections = document.querySelectorAll("section[id]");
        
        // Toggle menu
        burgerBtn.addEventListener("click", () => {
            navMenu.classList.toggle("open");
            burgerBtn.classList.toggle("active");
        });
        
        // Close menu on link click + smooth scroll
        navLinks.forEach(link => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                
                const targetId = link.getAttribute("href");
                const targetSection = document.querySelector(targetId);
                
                // Close menu
                navMenu.classList.remove("open");
                burgerBtn.classList.remove("active");
                
                // Scroll to section
                targetSection.scrollIntoView({ behavior: "smooth" });
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener("click", (e) => {
            if (!navMenu.contains(e.target) && !burgerBtn.contains(e.target)) {
                navMenu.classList.remove("open");
                burgerBtn.classList.remove("active");
            }
        });
        
        // Close menu on Escape
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                navMenu.classList.remove("open");
                burgerBtn.classList.remove("active");
            }
        });
        
        // Active link on scroll
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
                if (link.getAttribute("href") === "#" + current) {
                    link.classList.add("active");
                }
            });
        });
    </script>
</body>
</html>
`;

console.log("Complete burger menu HTML provided.");
console.log("Key features:");
console.log("  1. Responsive (shows burger on mobile)");
console.log("  2. Animated burger icon (X when open)");
console.log("  3. Smooth scroll to sections");
console.log("  4. Active link highlighting");
console.log("  5. Closes on: link click, outside click, Escape key");

// ===== Burger Menu Best Practices =====

console.log("\n========== Burger Menu Best Practices ==========\n");

console.log("✅ DO:");
console.log("  - Use CSS transforms for smooth animations");
console.log("  - Close menu when link is clicked");
console.log("  - Close menu when clicking outside");
console.log("  - Support keyboard (Escape to close)");
console.log("  - Add aria-label for accessibility");
console.log("  - Use visibility + opacity for hidden state");

console.log("\n❌ DON'T:");
console.log("  - Use display: none (can't animate)");
console.log("  - Forget to close menu on navigation");
console.log("  - Ignore mobile keyboard behavior");
console.log("  - Make menu too complex");

// ===== Accessibility Notes =====

console.log("\n========== Accessibility Notes ==========\n");

// ARIA attributes for accessibility
const accessibleBurger = `
<button class="burger-btn" 
        aria-label="Toggle navigation menu"
        aria-expanded="false"
        aria-controls="nav-menu">
    <span></span>
    <span></span>
    <span></span>
</button>

<nav id="nav-menu" aria-hidden="true">
    ...
</nav>

<script>
// Update ARIA attributes
burgerBtn.addEventListener("click", () => {
    const isOpen = navMenu.classList.contains("open");
    burgerBtn.setAttribute("aria-expanded", isOpen);
    navMenu.setAttribute("aria-hidden", !isOpen);
});
</script>
`;

console.log("For accessibility, add ARIA attributes:");
console.log(accessibleBurger);

// ============ Expected Output ============
// ╔══════════════════════════════════════╗
// ║          BURGER MENU                 ║
// ╚══════════════════════════════════════╝
//
// >>> Burger Menu Code:
// Menu: OPEN
// Menu: CLOSED
// ...
