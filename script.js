// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
});

// Projects data
const projects = [
    {
        title: "NL2Insight: Natural Language to Automated Data Insights",
        description: "AI-based system that converts natural language queries into automated data insights with cleaned data, visualizations, and textual explanations.",
        tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "Plotly", "Streamlit", "NLP"],
        icon: "search",
        githubUrl: "#"
    },
    {
        title: "Laptop Price Predictor",
        description: "End-to-end ML app with FastAPI, Docker deployment. Predicts prices from user specs input.",
        tech: ["Python", "FastAPI", "Scikit-learn", "Docker", "ML"],
        icon: "laptop",
        githubUrl: "#"
    },
    {
        title: "Insurance Risk Predictor",
        description: "Streamlit frontend + FastAPI backend. Predicts user's insurance category based on health and finance data.",
        tech: ["Python", "Streamlit", "FastAPI", "ML", "Healthcare"],
        icon: "shield",
        githubUrl: "#"
    },
    {
        title: "Restaurant Recommendation Bot",
        description: "Natural language chatbot for food queries. Built realistic restaurant data and user interactions.",
        tech: ["Python", "NLP", "Chatbot", "Data Processing"],
        icon: "utensils",
        githubUrl: "#"
    },
    {
        title: "Agentic LangGraph System",
        description: "Used Planner + Tool agents with local LLM. Designed feedback + retry loops.",
        tech: ["Python", "LangChain", "LLM", "AI Agents"],
        icon: "brain",
        githubUrl: "#"
    },
    {
        title: "IPL Analytics Project",
        description: "Full dashboard for IPL insights: teams, players, match stats.",
        tech: ["Python", "Pandas", "Plotly", "Streamlit", "Analytics"],
        icon: "bar-chart-3",
        githubUrl: "#"
    },
    {
        title: "Flight Crash Survival Analysis",
        description: "Anomaly detection, profiling, Streamlit dashboard.",
        tech: ["Python", "Data Analysis", "Streamlit", "Anomaly Detection"],
        icon: "plane",
        githubUrl: "#"
    },
    {
        title: "Travel Agency System",
        description: "Travel routes, packages, and tourism documentation. City-to-city service planning system.",
        tech: ["Python", "System Design", "Planning"],
        icon: "map",
        githubUrl: "#"
    },
    {
        title: "KDP Content QA System",
        description: "Automated quality assurance pipeline for Kindle publishing. Built Excel tracker, escalation alerts, and dashboard.",
        tech: ["Python", "Automation", "Excel", "QA"],
        icon: "file-check",
        githubUrl: "#"
    },
    {
        title: "Bakery Website (Experimental)",
        description: "One-page site with scroll animations and 3D cake model.",
        tech: ["HTML", "CSS", "JavaScript", "3D"],
        icon: "cake",
        githubUrl: "#"
    },
    {
        title: "Chatbot Integration",
        description: "Embedded Botpress bot in custom domain using CDN links.",
        tech: ["Botpress", "Integration", "CDN"],
        icon: "bot",
        githubUrl: "#"
    }
];

// Theme management
let isDarkMode = false;

function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    
    // Update theme icon
    const themeIcon = document.querySelector('.theme-toggle .theme-icon');
    if (themeIcon) {
        themeIcon.setAttribute('data-lucide', isDarkMode ? 'moon' : 'sun');
        lucide.createIcons();
    }
    
    // Save preference
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

// Initialize theme
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        isDarkMode = savedTheme === 'dark';
        document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
        
        const themeIcon = document.querySelector('.theme-toggle .theme-icon');
        if (themeIcon) {
            themeIcon.setAttribute('data-lucide', isDarkMode ? 'moon' : 'sun');
        }
    }
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Generate project cards
function generateProjectCards() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;

    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card">
            <div class="project-header">
                <div class="project-info">
                    <h3>${project.title}</h3>
                </div>
                <div class="project-icon">
                    <i data-lucide="${project.icon}"></i>
                </div>
            </div>
            <div class="project-description">
                ${project.description}
            </div>
            <div class="project-tech">
                ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-actions">
                <a href="${project.githubUrl}" class="btn btn-primary" target="_blank">
                    <i data-lucide="github"></i>
                    <span>View Code</span>
                </a>
            </div>
        </div>
    `).join('');

    // Recreate icons
    lucide.createIcons();
}

// 360 Project View functionality
let selectedProject = null;

function init360View() {
    const projectNodes = document.querySelectorAll('.project-node');
    const projectTitle = document.getElementById('project-title');
    const projectDescription = document.getElementById('project-description');
    const projectTech = document.getElementById('project-tech');
    const projectActions = document.getElementById('project-actions');
    const projectCodeLink = document.getElementById('project-code-link');

    projectNodes.forEach((node, index) => {
        node.addEventListener('click', () => {
            // Remove active class from all nodes
            projectNodes.forEach(n => n.classList.remove('active'));
            
            // Add active class to clicked node
            node.classList.add('active');
            
            // Update project details
            const project = projects[index];
            if (project) {
                selectedProject = project;
                projectTitle.textContent = project.title;
                projectDescription.textContent = project.description;
                projectTech.innerHTML = project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('');
                projectCodeLink.href = project.githubUrl;
                projectActions.style.display = 'block';
            }
        });

        // Add hover effects
        node.addEventListener('mouseenter', () => {
            node.style.transform = 'scale(1.2)';
        });

        node.addEventListener('mouseleave', () => {
            if (!node.classList.contains('active')) {
                node.style.transform = 'scale(1)';
            }
        });
    });
}

// Scroll animations
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                entry.target.classList.add('animate-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe sections for animations
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Observe individual cards and elements
    document.querySelectorAll('.project-card, .skill-category, .highlight-item, .experience-card').forEach(element => {
        observer.observe(element);
    });
}

// Header scroll effect
function initHeaderScroll() {
    let lastScrollY = window.scrollY;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.style.background = `hsl(var(--background) / 0.95)`;
            header.style.backdropFilter = 'blur(20px)';
        } else {
            header.style.background = `hsl(var(--background) / 0.8)`;
            header.style.backdropFilter = 'blur(10px)';
        }
        
        // Hide/show header based on scroll direction
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });
}

// Floating animation for hero elements
function initFloatingAnimations() {
    const floatingCards = document.querySelectorAll('.floating-card');
    
    floatingCards.forEach((card, index) => {
        // Add random floating motion
        setInterval(() => {
            const x = Math.sin(Date.now() * 0.001 + index) * 10;
            const y = Math.cos(Date.now() * 0.0015 + index) * 10;
            card.style.transform = `translate(${x}px, ${y}px)`;
        }, 100);
    });
}

// Initialize particles effect (simple version)
function initParticles() {
    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;

    // Create particles container
    const particlesContainer = document.createElement('div');
    particlesContainer.style.position = 'absolute';
    particlesContainer.style.top = '0';
    particlesContainer.style.left = '0';
    particlesContainer.style.width = '100%';
    particlesContainer.style.height = '100%';
    particlesContainer.style.pointerEvents = 'none';
    particlesContainer.style.overflow = 'hidden';
    heroSection.appendChild(particlesContainer);

    // Create particles
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '2px';
        particle.style.height = '2px';
        particle.style.background = 'hsl(var(--primary))';
        particle.style.borderRadius = '50%';
        particle.style.opacity = '0.3';
        
        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Animation
        particle.style.animation = `float ${5 + Math.random() * 10}s ease-in-out infinite`;
        particle.style.animationDelay = Math.random() * 5 + 's';
        
        particlesContainer.appendChild(particle);
    }
}

// Typing effect for hero text
function initTypingEffect() {
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (!heroSubtitle) return;

    const text = heroSubtitle.textContent;
    heroSubtitle.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            heroSubtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Start typing effect after a delay
    setTimeout(typeWriter, 1000);
}

// Initialize all functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme
    initTheme();
    
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Generate project cards
    generateProjectCards();
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Initialize 360 view
    init360View();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize header scroll effect
    initHeaderScroll();
    
    // Initialize floating animations
    initFloatingAnimations();
    
    // Initialize particles
    initParticles();
    
    // Initialize typing effect
    initTypingEffect();
    
    // Theme toggle event listener
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Update active navigation based on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});

// Add CSS for active nav link
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: hsl(var(--primary)) !important;
    }
    
    .nav-link.active::after {
        width: 100% !important;
    }
    
    .animate-in {
        animation: fadeInUp 0.6s ease-out forwards;
    }
    
    @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    }
`;
document.head.appendChild(style);