/* ========================================
   Portfolio Script
   Author: Bharadhwaj K
======================================== */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all modules
    initPreloader();
    initCustomCursor();
    initNavigation();
    initTypingEffect();
    initParticles();
    initCounters();
    initExperienceTabs();
    initProjectModals();
    initBackToTop();
    initAOS();
});

/* ========================================
   Preloader
======================================== */
function initPreloader() {
    const preloader = document.getElementById('preloader');
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('loaded');
        }, 500);
    });
    
    // Fallback - remove preloader after 3 seconds max
    setTimeout(() => {
        preloader.classList.add('loaded');
    }, 3000);
}

/* ========================================
   Cursor Glow Effect
======================================== */
function initCustomCursor() {
    const cursorGlow = document.getElementById('cursor-glow');
    
    if (!cursorGlow) return;
    
    // Check if device supports hover (not touch)
    if (window.matchMedia('(hover: hover)').matches) {
        document.addEventListener('mousemove', (e) => {
            cursorGlow.style.left = e.clientX + 'px';
            cursorGlow.style.top = e.clientY + 'px';
        });
    } else {
        cursorGlow.style.display = 'none';
    }
}

/* ========================================
   Navigation
======================================== */
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Scroll effect
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add/remove scrolled class
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Active link on scroll
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavLink() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavLink);
    highlightNavLink();
}

/* ========================================
   Typing Effect
======================================== */
function initTypingEffect() {
    const typingElement = document.getElementById('typing-text');
    if (!typingElement) return;
    
    const phrases = [
        'RISC-V processors',
        'full-stack apps',
        'AI/ML pipelines',
        'digital circuits',
        'microservices',
        'embedded systems',
        'scalable backends'
    ];
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500; // Pause before new phrase
        }
        
        setTimeout(type, typingSpeed);
    }
    
    // Start typing after a delay
    setTimeout(type, 1500);
}

/* ========================================
   Particles Animation
======================================== */
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        createParticle(particlesContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Random properties
    const size = Math.random() * 4 + 2;
    const left = Math.random() * 100;
    const delay = Math.random() * 15;
    const duration = Math.random() * 10 + 10;
    const opacity = Math.random() * 0.5 + 0.1;
    
    particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${left}%;
        animation-delay: ${delay}s;
        animation-duration: ${duration}s;
        opacity: ${opacity};
    `;
    
    container.appendChild(particle);
}

/* ========================================
   Stats Counter Animation
======================================== */
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    if (counters.length === 0) return;
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                animateCounter(counter, target);
                counterObserver.unobserve(counter);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

function animateCounter(element, target) {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    const increment = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, stepDuration);
}

/* ========================================
   Experience Tabs
======================================== */
function initExperienceTabs() {
    const tabs = document.querySelectorAll('.exp-tab');
    const panels = document.querySelectorAll('.exp-panel');
    
    if (tabs.length === 0) return;
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.getAttribute('data-tab');
            
            // Remove active from all tabs and panels
            tabs.forEach(t => t.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));
            
            // Add active to clicked tab and corresponding panel
            tab.classList.add('active');
            const targetPanel = document.getElementById(`panel-${targetId}`);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });
}

/* ========================================
   Project Modals
======================================== */
function initProjectModals() {
    const projectCards = document.querySelectorAll('.project-card');
    const modal = document.getElementById('project-modal');
    const modalClose = document.getElementById('modal-close');
    
    if (!modal || projectCards.length === 0) return;
    
    // Project data
    const projectsData = {
        'book-recommendations': {
            icon: 'fas fa-book-reader',
            label: 'Featured Project',
            title: 'Book Recommendations Microservices',
            description: 'A scalable microservices architecture for personalized book recommendations. The system uses collaborative filtering and content-based algorithms to suggest books based on user preferences, reading history, and similar user profiles.',
            features: [
                'User authentication and profile management service',
                'Recommendation engine using ML algorithms',
                'Real-time notification system with WebSockets',
                'Caching layer with Redis for fast responses',
                'PostgreSQL database with optimized queries',
                'Docker containerization for easy deployment'
            ],
            tech: ['Python', 'FastAPI', 'Docker', 'Redis', 'PostgreSQL', 'RabbitMQ'],
            github: 'https://github.com/narutoulumaki'
        },
        'riscv-profiler': {
            icon: 'fas fa-microchip',
            label: 'Research Project',
            title: 'RISC-V Performance Profiler',
            description: 'A comprehensive profiling tool for RISC-V instruction analysis developed at CHIPS Lab, PES University. The tool provides cycle-accurate analysis and automated report generation for processor performance optimization.',
            features: [
                'Cycle-accurate instruction profiling',
                'Integration with Spike RISC-V simulator',
                'Automated data collection and preprocessing',
                'Visualization dashboards for performance metrics',
                'Support for RV32I and RV64I instruction sets',
                'Integration with InCore Azurite core'
            ],
            tech: ['Python', 'C++', 'RISC-V', 'Spike', 'Verilator', 'Matplotlib'],
            github: 'https://github.com/narutoulumaki'
        },
        'pd-yolov7': {
            icon: 'fas fa-robot',
            label: 'AI/ML Research',
            title: 'PD-YOLOv7 Research',
            description: 'Research project on model compression using knowledge distillation-guided pruning for YOLOv7 object detection. Optimized for edge deployment on NVIDIA Jetson devices while maintaining detection accuracy.',
            features: [
                'Knowledge distillation from teacher to student model',
                'Structured pruning for model compression',
                'ONNX export for edge deployment',
                'Benchmarking on NVIDIA Jetson Nano/Xavier',
                'Custom training pipeline with PyTorch',
                '40% model size reduction with <2% accuracy drop'
            ],
            tech: ['PyTorch', 'YOLOv7', 'ONNX', 'TensorRT', 'CUDA', 'Edge AI'],
            github: 'https://github.com/narutoulumaki/PD-YOLOv7-Research'
        },
        'binance-bot': {
            icon: 'fas fa-chart-line',
            label: 'FinTech',
            title: 'Binance Futures Trading Bot',
            description: 'An algorithmic trading bot for Binance Futures market with automated order management, real-time market monitoring, and risk management features. Built with async Python for high-performance execution.',
            features: [
                'Real-time market data via WebSocket streams',
                'Automated order placement and management',
                'Risk management with stop-loss and take-profit',
                'Position sizing based on account balance',
                'Comprehensive logging and trade history',
                'Backtesting module for strategy validation'
            ],
            tech: ['Python', 'AsyncIO', 'REST APIs', 'WebSocket', 'Pandas', 'SQLite'],
            github: 'https://github.com/narutoulumaki/Binance-trading-bot'
        },
        'ieee-conference': {
            icon: 'fas fa-globe',
            label: 'Web Development',
            title: 'PES-IEEE Conference Site',
            description: 'Full-stack conference management website built for PES IEEE student branch. Handled 500+ attendee registrations with dynamic content management, server-side rendering, and responsive design.',
            features: [
                'Server-side rendering with Next.js',
                'Dynamic navigation and content sections',
                'Registration form with validation',
                'Admin dashboard for content management',
                'Responsive design for all devices',
                'SEO optimized with meta tags'
            ],
            tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
            github: 'https://github.com/Vaarun-Kamath/PES-IEEE-Conference-Site'
        },
        'riscv-processor': {
            icon: 'fas fa-memory',
            label: 'Hardware Design',
            title: 'Single Cycle RISC-V Processor',
            description: 'A complete single-cycle RISC-V processor implementation supporting the RV32I base instruction set. Designed from scratch in SystemVerilog with full simulation and FPGA synthesis support.',
            features: [
                'Full RV32I instruction set support',
                'ALU with all arithmetic and logic operations',
                'Register file with 32 general-purpose registers',
                'Instruction and data memory modules',
                'Control unit with proper signal generation',
                'Testbench with assembly program verification'
            ],
            tech: ['SystemVerilog', 'Vivado', 'RISC-V Assembly', 'GTKWave', 'Verilator'],
            github: 'https://github.com/narutoulumaki'
        }
    };
    
    // Open modal on card click
    projectCards.forEach(card => {
        card.addEventListener('click', (e) => {
            const projectId = card.getAttribute('data-project');
            const project = projectsData[projectId];
            
            if (project) {
                openModal(project);
            }
        });
        
        // Add pointer cursor
        card.style.cursor = 'pointer';
    });
    
    // Close modal
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
    
    function openModal(project) {
        // Set modal content
        document.getElementById('modal-icon').innerHTML = `<i class="${project.icon}"></i>`;
        document.getElementById('modal-label').textContent = project.label;
        document.getElementById('modal-title').textContent = project.title;
        document.getElementById('modal-description').textContent = project.description;
        
        // Set features
        const featuresList = document.getElementById('modal-features-list');
        featuresList.innerHTML = project.features.map(f => `<li>${f}</li>`).join('');
        
        // Set tech
        const techContainer = document.getElementById('modal-tech');
        techContainer.innerHTML = project.tech.map(t => `<span>${t}</span>`).join('');
        
        // Set links
        const linksContainer = document.getElementById('modal-links');
        linksContainer.innerHTML = `
            <a href="${project.github}" target="_blank" class="btn-github">
                <i class="fab fa-github"></i>
                View on GitHub
            </a>
        `;
        
        // Show modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

/* ========================================
   Back to Top Button
======================================== */
function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    if (!backToTopBtn) return;
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/* ========================================
   AOS (Animate on Scroll) Initialization
======================================== */
function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 50,
            delay: 0,
            anchorPlacement: 'top-bottom'
        });
    }
}

/* ========================================
   Smooth Scroll for Navigation Links
======================================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

/* ========================================
   Performance: Debounce scroll events
======================================== */
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

// Apply debounce to scroll events for better performance
const debouncedScroll = debounce(() => {
    // Additional scroll handlers can be added here
}, 10);

window.addEventListener('scroll', debouncedScroll, { passive: true });

/* ========================================
   Console Easter Egg
======================================== */
console.log('%c👋 Hey there, curious developer!', 'font-size: 24px; font-weight: bold; color: #6366f1;');
console.log('%cInterested in the code? Check out my GitHub!', 'font-size: 14px; color: #a1a1aa;');
console.log('%chttps://github.com/narutoulumaki', 'font-size: 14px; color: #8b5cf6;');
