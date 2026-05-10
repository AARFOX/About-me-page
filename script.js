document.addEventListener('DOMContentLoaded', () => {

    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50
    });

    /* ==================== 
       Particles Background 
       ==================== */
    const canvas = document.getElementById('particles-canvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.opacity = Math.random() * 0.5 + 0.2;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(124, 138, 255, ${this.opacity})`;
            ctx.fill();
        }
    }

    function initParticles() {
        particles = [];
        const particleCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 10000));
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    function connectParticles() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 120) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(124, 138, 255, ${0.1 * (1 - distance / 120)})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        connectParticles();
        animationId = requestAnimationFrame(animateParticles);
    }

    resizeCanvas();
    initParticles();
    animateParticles();

    window.addEventListener('resize', () => {
        resizeCanvas();
        initParticles();
    });

    /* ==================== 
       Scroll Progress Bar 
       ==================== */
    const scrollProgress = document.querySelector('.scroll-progress');

    function updateScrollProgress() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = scrollPercent + '%';
    }

    window.addEventListener('scroll', updateScrollProgress, { passive: true });

    /* ==================== 
       Typing Animation 
       ==================== */
    const typingElement = document.getElementById('typing-text');
    const titles = [
        'Junior Web Developer',
        'Frontend Developer',
        'Backend Developer',
        'Python Developer',
        'UI/UX Enthusiast'
    ];
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeWriter() {
        const currentTitle = titles[titleIndex];

        if (isDeleting) {
            typingElement.textContent = currentTitle.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingElement.textContent = currentTitle.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentTitle.length) {
            isDeleting = true;
            typingSpeed = 2000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            titleIndex = (titleIndex + 1) % titles.length;
            typingSpeed = 500;
        }

        setTimeout(typeWriter, typingSpeed);
    }

    if (typingElement) {
        setTimeout(typeWriter, 1000);
    }

    /* ==================== 
       3D Tilt Cards 
       ==================== */
    const tiltCards = document.querySelectorAll('.tilt-card');

    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.setProperty('--rotateX', `${-rotateX}deg`);
            card.style.setProperty('--rotateY', `${rotateY}deg`);
        });

        card.addEventListener('mouseleave', () => {
            card.style.setProperty('--rotateX', '0deg');
            card.style.setProperty('--rotateY', '0deg');
        });
    });

    /* ==================== 
       Stats Counter Animation 
       ==================== */
    const statNumbers = document.querySelectorAll('.stat-number');
    let statsAnimated = false;

    function animateStats() {
        if (statsAnimated) return;

        const statsSection = document.querySelector('.stats-section');
        const rect = statsSection.getBoundingClientRect();

        if (rect.top < window.innerHeight && rect.bottom > 0) {
            statsAnimated = true;

            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-target'));
                const duration = 2000;
                const start = 0;
                const increment = target / (duration / 16);
                let current = start;

                const counter = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        stat.textContent = target;
                        clearInterval(counter);
                    } else {
                        stat.textContent = Math.floor(current);
                    }
                }, 16);
            });
        }
    }

    window.addEventListener('scroll', animateStats, { passive: true });
    animateStats();

    /* ==================== 
       Mobile Menu 
       ==================== */
    const navToggle = document.querySelector('.nav-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (navToggle && mobileMenu) {
        navToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });

        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }

    /* ==================== 
       Active Nav Link 
       ==================== */
    const sections = document.querySelectorAll('section[id], header[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    function updateActiveLink() {
        const scrollY = window.scrollY + 100;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollY >= top && scrollY < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink, { passive: true });

    /* ==================== 
       Smooth Scroll 
       ==================== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    /* ==================== 
       Theme Toggle 
       ==================== */
    const themeToggle = document.querySelector('.theme-toggle');
    const html = document.documentElement;

    const savedTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const current = html.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';
            html.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
        });
    }

    /* ==================== 
       Smart Search 
       ==================== */
    const searchToggle = document.getElementById('search-toggle');
    const searchModal = document.getElementById('search-modal');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    const searchClose = document.getElementById('search-close');

    const searchableContent = [
        { title: 'HTML5', type: 'skill', section: '#skills' },
        { title: 'CSS3', type: 'skill', section: '#skills' },
        { title: 'JavaScript', type: 'skill', section: '#skills' },
        { title: 'Python', type: 'skill', section: '#skills' },
        { title: 'Flask', type: 'skill', section: '#skills' },
        { title: 'Django', type: 'skill', section: '#skills' },
        { title: 'React', type: 'skill', section: '#skills' },
        { title: 'Responsive Landing Page', type: 'project', section: '#projects' },
        { title: 'Task Manager App', type: 'project', section: '#projects' },
        { title: 'Personal Portfolio', type: 'project', section: '#projects' },
        { title: 'Django Blog', type: 'project', section: '#projects' },
        { title: 'Web Development Trainee', type: 'experience', section: '#experience' },
        { title: 'Data Analysis Projects', type: 'experience', section: '#experience' },
        { title: 'Thebes Academy', type: 'education', section: '#education' },
        { title: 'Bachelor of Management Information Systems', type: 'education', section: '#education' },
        { title: 'GitHub', type: 'social', section: '#contact' },
        { title: 'LinkedIn', type: 'social', section: '#contact' },
        { title: 'Kaggle', type: 'social', section: '#contact' },
    ];

    if (searchToggle && searchModal) {
        searchToggle.addEventListener('click', () => {
            searchModal.classList.add('active');
            searchInput.focus();
        });

        searchClose.addEventListener('click', () => {
            searchModal.classList.remove('active');
            searchInput.value = '';
            searchResults.innerHTML = '';
        });

        searchModal.addEventListener('click', (e) => {
            if (e.target === searchModal) {
                searchModal.classList.remove('active');
                searchInput.value = '';
                searchResults.innerHTML = '';
            }
        });

        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();

            if (query.length < 2) {
                searchResults.innerHTML = '';
                return;
            }

            const filtered = searchableContent.filter(item =>
                item.title.toLowerCase().includes(query)
            );

            if (filtered.length === 0) {
                searchResults.innerHTML = '<div class="search-result-item"><span class="search-result-title">No results found</span></div>';
                return;
            }

            searchResults.innerHTML = filtered.map(item => `
                <div class="search-result-item" data-section="${item.section}">
                    <div class="search-result-title">${item.title}</div>
                    <div class="search-result-type">${item.type}</div>
                </div>
            `).join('');

            searchResults.querySelectorAll('.search-result-item').forEach(item => {
                item.addEventListener('click', () => {
                    const section = item.getAttribute('data-section');
                    document.querySelector(section)?.scrollIntoView({ behavior: 'smooth' });
                    searchModal.classList.remove('active');
                    searchInput.value = '';
                    searchResults.innerHTML = '';
                });
            });
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && searchModal.classList.contains('active')) {
                searchModal.classList.remove('active');
                searchInput.value = '';
                searchResults.innerHTML = '';
            }
        });
    }

    /* ==================== 
       Social Share 
       ==================== */
    const shareBtn = document.getElementById('share-btn');
    const shareModal = document.getElementById('share-modal');
    const shareClose = document.getElementById('share-close');
    const copyLinkBtn = document.getElementById('copy-link');

    if (shareBtn && shareModal) {
        shareBtn.addEventListener('click', () => {
            shareModal.classList.add('active');
        });

        shareClose.addEventListener('click', () => {
            shareModal.classList.remove('active');
        });

        shareModal.addEventListener('click', (e) => {
            if (e.target === shareModal) {
                shareModal.classList.remove('active');
            }
        });

        copyLinkBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(window.location.href).then(() => {
                copyLinkBtn.querySelector('span').textContent = 'Copied!';
                setTimeout(() => {
                    copyLinkBtn.querySelector('span').textContent = 'Copy Link';
                }, 2000);
            });
        });
    }

    /* ==================== 
       Enhanced AI Chatbot 
       ==================== */
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotSend = document.getElementById('chatbot-send');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const chatbotSuggestions = document.getElementById('chatbot-suggestions');

    // Knowledge base
    const knowledgeBase = {
        name: 'Mohammed Ashraf',
        title: 'Junior Web Developer',
        location: 'Cairo, Egypt',
        skills: {
            frontend: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Responsive Design', 'Flexbox', 'Grid', 'Animations'],
            backend: ['Python', 'Flask', 'Django', 'RESTful APIs'],
            databases: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'SQLite'],
            tools: ['Git', 'GitHub', 'Docker', 'VS Code', 'Postman', 'npm/yarn'],
            design: ['Figma', 'Adobe Photoshop', 'Adobe XD', 'UI/UX Principles']
        },
        projects: [
            { name: 'Responsive Landing Page', desc: 'A fully responsive landing page with animations', tech: ['HTML5', 'CSS3', 'JavaScript', 'Figma'] },
            { name: 'Task Manager App', desc: 'Task management with authentication using Flask', tech: ['Python', 'Flask', 'SQLite'] },
            { name: 'Personal Portfolio', desc: 'Portfolio website with smooth navigation', tech: ['HTML5', 'CSS3', 'JavaScript'] },
            { name: 'Django Blog', desc: 'Blog with user registration and post management', tech: ['Python', 'Django', 'PostgreSQL'] }
        ],
        experience: [
            { role: 'Web Development Trainee', company: 'Self-Learning & Personal Projects', period: '2024 — Present' },
            { role: 'Data Analysis Projects', company: 'Freelance', period: '2024' }
        ],
        education: { degree: 'Bachelor of Management Information Systems', school: 'Thebes Academy', period: 'Sep 2022 — Present', gpa: 'A+' },
        certifications: [
            'HTML and CSS in Depth (Meta, Coursera)',
            'Programming with JavaScript (Meta, Coursera)',
            'Python for Everybody (University of Michigan)',
            'Responsive Web Design (freeCodeCamp)',
            'Git and GitHub (Google)',
            'Django for Beginners (Udemy)',
            'Figma UI/UX Design (Udemy)'
        ],
        languages: ['Arabic (Native)', 'English (B2)', 'Greek (A1)', 'Swedish (A1)'],
        contact: { email: 'muhammed.alsawalhi@gmail.com', linkedin: 'linkedin.com/in/mohammed-ashraf', github: 'github.com/mohammedashraf', kaggle: 'kaggle.com/mohammedashraf77' }
    };

    // Suggestions
    const suggestions = ['Skills', 'Projects', 'Experience', 'Contact', 'Certifications', 'Languages'];

    // Initial message
    const initialMessage = `👋 Welcome! I'm Mohammed's AI assistant.

💡 Type "help" to see what I can do, or click a suggestion below!`;

    // Help response
    const helpResponse = `📚 Here's what you can ask me:

🔹 "skills" - Technical skills overview
🔹 "projects" - Project portfolio
🔹 "experience" - Work experience
🔹 "education" - Educational background
🔹 "certifications" - All certifications
🔹 "languages" - Languages spoken
🔹 "contact" - How to reach Mohammed
🔹 "hire" - Why hire Mohammed?

💬 Just type any of these keywords!`;

    // Response templates
    const responses = {
        skills: `🎨 Mohammed's Technical Skills:

Frontend: ${knowledgeBase.skills.frontend.join(', ')}

Backend: ${knowledgeBase.skills.backend.join(', ')}

Databases: ${knowledgeBase.skills.databases.join(', ')}

Tools: ${knowledgeBase.skills.tools.join(', ')}

Design: ${knowledgeBase.skills.design.join(', ')}`,
        
        projects: `🚀 Mohammed's Projects (${knowledgeBase.projects.length} total):

${knowledgeBase.projects.map((p, i) => `${i + 1}. ${p.name}
   ${p.desc}
   Tech: ${p.tech.join(', ')}`).join('\n\n')}

🔗 Check them on GitHub!`,
        
        experience: `💼 Work Experience:

${knowledgeBase.experience.map(e => `📍 ${e.role}
   ${e.company} | ${e.period}`).join('\n\n')}`,
        
        education: `🎓 Education:

${knowledgeBase.education.degree}
${knowledgeBase.education.school}
${knowledgeBase.education.period}
GPA: ${knowledgeBase.education.gpa}

📚 Relevant coursework: Database Systems, Web Development, UI/UX Design, Software Engineering`,
        
        certifications: `🏆 Certifications (${knowledgeBase.certifications.length} total):

${knowledgeBase.certifications.map((c, i) => `${i + 1}. ${c}`).join('\n')}`,
        
        languages: `🌐 Languages:

${knowledgeBase.languages.join('\n')}`,
        
        contact: `📧 Contact Information:

Email: ${knowledgeBase.contact.email}
LinkedIn: ${knowledgeBase.contact.linkedin}
GitHub: ${knowledgeBase.contact.github}
Kaggle: ${knowledgeBase.contact.kaggle}

📍 Location: ${knowledgeBase.location}`,
        
        hire: `✨ Why hire Mohammed?

🔹 Strong foundation in both frontend & backend
🔹 Quick learner & passionate about coding
🔹 ${knowledgeBase.projects.length}+ real-world projects
🔹 ${knowledgeBase.certifications.length} professional certifications
🔹 Multilingual: ${knowledgeBase.languages.length} languages
🔹 Available for immediate start!

📧 Reach out: ${knowledgeBase.contact.email}`,
        
        greeting: ["👋 Hello! How can I help you today?", "Hey there! Ask me anything about Mohammed!", "Hi! I'm here to help you learn about Mohammed's profile."],
        
        default: "🤔 I'm not sure about that. Try asking about:\n\n• skills\n• projects\n• experience\n• education\n• certifications\n• contact\n\nOr type 'help' for more options!"
    };

    function getResponse(message) {
        const msg = message.toLowerCase().trim();

        if (msg === 'help') return helpResponse;
        if (msg.includes('skill') || msg.includes('tech') || msg.includes('what can he do') || msg.includes('abilities')) return responses.skills;
        if (msg.includes('project') || msg.includes('portfolio') || msg.includes('work')) return responses.projects;
        if (msg.includes('experience') || msg.includes('job') || msg.includes('work history')) return responses.experience;
        if (msg.includes('education') || msg.includes('university') || msg.includes('degree') || msg.includes('study')) return responses.education;
        if (msg.includes('certif') || msg.includes('course')) return responses.certifications;
        if (msg.includes('contact') || msg.includes('email') || msg.includes('reach') || msg.includes('hire')) return msg.includes('hire') ? responses.hire : responses.contact;
        if (msg.includes('language') || msg.includes('speak')) return responses.languages;
        if (msg.includes('hi') || msg.includes('hello') || msg.includes('hey')) return responses.greeting[Math.floor(Math.random() * responses.greeting.length)];
        if (msg.includes('thank')) return "😊 You're welcome! Is there anything else you'd like to know?";
        if (msg.includes('bye')) return "👋 Goodbye! Feel free to come back anytime!";

        return responses.default;
    }

    function addMessage(text, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chatbot-message ${isUser ? 'user' : 'bot'}`;
        messageDiv.textContent = text;
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function addTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'typing-indicator';
        typingDiv.id = 'typing-indicator';
        typingDiv.innerHTML = '<span></span><span></span><span></span>';
        chatbotMessages.appendChild(typingDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function removeTypingIndicator() {
        const typing = document.getElementById('typing-indicator');
        if (typing) typing.remove();
    }

    function showSuggestions() {
        chatbotSuggestions.innerHTML = suggestions.map(s => 
            `<button class="chatbot-suggestion" data-query="${s.toLowerCase()}">${s}</button>`
        ).join('');

        chatbotSuggestions.querySelectorAll('.chatbot-suggestion').forEach(btn => {
            btn.addEventListener('click', () => {
                const query = btn.getAttribute('data-query');
                chatbotInput.value = query;
                sendMessage();
            });
        });
    }

    function sendMessage() {
        const message = chatbotInput.value.trim();
        if (!message) return;

        addMessage(message, true);
        chatbotInput.value = '';
        
        // Hide suggestions while "typing"
        chatbotSuggestions.innerHTML = '';

        // Show typing indicator
        addTypingIndicator();

        // Simulate response delay
        setTimeout(() => {
            removeTypingIndicator();
            const response = getResponse(message);
            addMessage(response);
            showSuggestions();
        }, 800 + Math.random() * 500);
    }

    function initChatbot() {
        // Clear and set initial state
        chatbotMessages.innerHTML = '';
        addMessage(initialMessage);
        showSuggestions();
    }

    if (chatbotToggle && chatbotWindow) {
        chatbotToggle.addEventListener('click', () => {
            chatbotWindow.classList.toggle('active');
            if (chatbotWindow.classList.contains('active') && chatbotMessages.children.length === 0) {
                initChatbot();
            }
        });

        chatbotClose.addEventListener('click', () => {
            chatbotWindow.classList.remove('active');
        });

        chatbotSend.addEventListener('click', sendMessage);
        chatbotInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });

        // Initialize on first open
        chatbotToggle.addEventListener('click', initChatbot, { once: true });
    }

    /* ==================== 
       Lazy Loading Images 
       ==================== */
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.src;
                    imageObserver.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    }

    /* ==================== 
       Performance: Debounce 
       ==================== */
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    const debouncedScroll = debounce(() => {
        updateActiveLink();
        updateScrollProgress();
        animateStats();
    }, 10);

    window.addEventListener('scroll', debouncedScroll, { passive: true });

});
