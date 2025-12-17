// =====================================================
// Project Data
// =====================================================
const projectsData = {
    'book-recommendations': {
        icon: 'fas fa-book-reader',
        label: 'Microservices Architecture',
        title: 'Book Recommendations Microservices',
        description: 'A scalable microservices architecture for book recommendations featuring user authentication, a recommendation engine powered by collaborative filtering, and real-time notifications. Built with FastAPI for high-performance APIs and Docker for containerization.',
        features: [
            'User authentication and profile management service',
            'Recommendation engine using collaborative filtering algorithms',
            'Real-time notification system with WebSocket support',
            'Redis caching for improved response times',
            'PostgreSQL database with optimized queries',
            'Docker containerization for easy deployment'
        ],
        tech: ['Python', 'FastAPI', 'Docker', 'Redis', 'PostgreSQL', 'RabbitMQ'],
        github: 'https://github.com/narutoulumaki'
    },
    'riscv-profiler': {
        icon: 'fas fa-microchip',
        label: 'Performance Analysis',
        title: 'RISC-V Performance Profiler',
        description: 'A comprehensive profiling application for RISC-V instruction analysis and performance monitoring. Features automated report generation, data visualization, and integration with popular RISC-V simulators.',
        features: [
            'Cycle-accurate instruction profiling',
            'Automated performance report generation',
            'Integration with Spike and Verilator simulators',
            'Data visualization with matplotlib and seaborn',
            'Command-line interface for easy integration',
            'Support for RV32I and RV64I instruction sets'
        ],
        tech: ['Python', 'C++', 'RISC-V', 'Spike', 'Verilator', 'Matplotlib'],
        github: 'https://github.com/narutoulumaki'
    },
    'yolov7': {
        icon: 'fas fa-robot',
        label: 'Research Project',
        title: 'PD-YOLOv7: Edge-Optimized Object Detection',
        description: 'Novel object detection compression research using knowledge distillation-guided pruning for edge deployment. Achieves >30 FPS on NVIDIA Jetson devices while maintaining high accuracy.',
        features: [
            'Knowledge distillation framework for model compression',
            'Channel pruning guided by distillation importance scores',
            'INT8 quantization-aware training',
            '>50% model size reduction with minimal accuracy loss',
            'Optimized for NVIDIA Jetson edge devices',
            'ONNX export for cross-platform deployment'
        ],
        tech: ['PyTorch', 'YOLOv7', 'ONNX', 'OpenCV', 'CUDA', 'TensorRT'],
        github: 'https://github.com/narutoulumaki/PD-YOLOv7-Research'
    },
    'binance-bot': {
        icon: 'fas fa-chart-line',
        label: 'Algorithmic Trading',
        title: 'Binance Futures Trading Bot',
        description: 'An algorithmic trading bot for Binance Futures Testnet capable of executing complex order types and managing portfolio state in real-time. Features comprehensive logging and secure credential management.',
        features: [
            'Support for Market, Limit, and Stop-Limit orders',
            'Real-time position and balance monitoring',
            'Secure API credential management via environment variables',
            'Comprehensive logging for audit trails',
            'Interactive CLI with colored output',
            'WebSocket integration for live price feeds'
        ],
        tech: ['Python', 'AsyncIO', 'REST APIs', 'WebSocket', 'python-binance'],
        github: 'https://github.com/narutoulumaki/Binance-trading-bot'
    },
    'ieee-site': {
        icon: 'fas fa-globe',
        label: 'Web Development',
        title: 'PES-IEEE Conference Website',
        description: 'A full-stack conference website built for the PES-IEEE ETCC conference, handling 500+ attendees. Features dynamic navigation, server-side rendering for SEO optimization, and a responsive design.',
        features: [
            'Server-side rendering with Next.js for SEO',
            'Dynamic navigation and routing',
            'Mobile-responsive design with Tailwind CSS',
            'RESTful API integration for data management',
            'Optimized performance with image lazy loading',
            'Production deployment handling 500+ users'
        ],
        tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'REST APIs'],
        github: 'https://github.com/Vaarun-Kamath/PES-IEEE-Conference-Site'
    },
    'riscv-processor': {
        icon: 'fas fa-memory',
        label: 'Hardware Design',
        title: 'Single Cycle RISC-V Processor',
        description: 'A complete single-cycle RISC-V processor implementation supporting the RV32I instruction set, designed from scratch in SystemVerilog. Includes comprehensive testbench for verification.',
        features: [
            'Full RV32I instruction set support',
            'Datapath and control logic implementation',
            'Memory interface with read/write operations',
            '32-register file with dual read ports',
            'Comprehensive SystemVerilog testbench',
            'Synthesis-ready for FPGA deployment'
        ],
        tech: ['SystemVerilog', 'Vivado', 'Assembly', 'Verilator', 'GTKWave'],
        github: 'https://github.com/narutoulumaki'
    }
};

// =====================================================
// Typing Effect
// =====================================================
const typeWriterElement = document.querySelector('.typewriter');
const roles = [
    'high-performance systems',
    'RISC-V architectures', 
    'full-stack applications',
    'AI/ML solutions',
    'hardware designs'
];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typeWriterElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typeWriterElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 30 : 80;

    if (!isDeleting && charIndex === currentRole.length) {
        typeSpeed = 2500;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

// =====================================================
// Particle Background
// =====================================================
function initParticles() {
    const canvas = document.getElementById('particles');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    function createParticle() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 0.5,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5,
            opacity: Math.random() * 0.5 + 0.2
        };
    }
    
    function init() {
        particles = [];
        for (let i = 0; i < 80; i++) {
            particles.push(createParticle());
        }
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach((p, index) => {
            p.x += p.speedX;
            p.y += p.speedY;
            
            if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
            if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
            
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(99, 102, 241, ${p.opacity})`;
            ctx.fill();
            
            // Draw connections
            particles.forEach((p2, index2) => {
                if (index !== index2) {
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 150) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(99, 102, 241, ${0.1 * (1 - distance / 150)})`;
                        ctx.stroke();
                    }
                }
            });
        });
        
        requestAnimationFrame(animate);
    }
    
    resize();
    init();
    animate();
    
    window.addEventListener('resize', () => {
        resize();
        init();
    });
}

// =====================================================
// Cursor Glow Effect
// =====================================================
function initCursorGlow() {
    const cursorGlow = document.querySelector('.cursor-glow');
    if (!cursorGlow) return;
    
    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animate() {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;
        
        cursorGlow.style.left = currentX + 'px';
        cursorGlow.style.top = currentY + 'px';
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// =====================================================
// Navigation
// =====================================================
function initNavigation() {
    const nav = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinksContainer = document.getElementById('nav-links');
    
    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        // Update active nav link
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === current) {
                link.classList.add('active');
            }
        });
    });
    
    // Smooth scroll
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                navLinksContainer.classList.remove('active');
            }
        });
    });
    
    // Mobile menu toggle
    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navLinksContainer.classList.toggle('active');
        });
    }
}

// =====================================================
// Counter Animation
// =====================================================
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;
                
                const updateCounter = () => {
                    current += step;
                    if (current < target) {
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCounter();
                observer.unobserve(counter);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => observer.observe(counter));
}

// =====================================================
// Experience Tabs
// =====================================================
function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanels.forEach(p => p.classList.remove('active'));
            
            btn.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// =====================================================
// Project Modal
// =====================================================
function initProjectModal() {
    const modal = document.getElementById('projectModal');
    const modalClose = document.getElementById('modalClose');
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.getAttribute('data-project');
            const project = projectsData[projectId];
            
            if (project) {
                document.getElementById('modalIcon').innerHTML = `<i class="${project.icon}"></i>`;
                document.getElementById('modalLabel').textContent = project.label;
                document.getElementById('modalTitle').textContent = project.title;
                document.getElementById('modalDescription').textContent = project.description;
                
                const featuresHtml = project.features.map(f => `<li>${f}</li>`).join('');
                document.getElementById('modalFeatures').innerHTML = featuresHtml;
                
                const techHtml = project.tech.map(t => `<span>${t}</span>`).join('');
                document.getElementById('modalTech').innerHTML = techHtml;
                
                document.getElementById('modalGithub').href = project.github;
                
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
    
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// =====================================================
// Scroll Animations
// =====================================================
function initScrollAnimations() {
    const elements = document.querySelectorAll('.section, .project-card, .skill-category, .timeline-item, .highlight-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in', 'visible');
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// =====================================================
// Back to Top Button
// =====================================================
function initBackToTop() {
    const btn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });
    
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// =====================================================
// Initialize Everything
// =====================================================
document.addEventListener('DOMContentLoaded', () => {
    type();
    initParticles();
    initCursorGlow();
    initNavigation();
    initCounters();
    initTabs();
    initProjectModal();
    initScrollAnimations();
    initBackToTop();
});
