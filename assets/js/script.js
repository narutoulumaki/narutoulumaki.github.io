// Typing Effect
const typeWriterElement = document.querySelector('.typewriter');
const roles = ["Research Intern", "RISC-V Enthusiast", "Full-Stack Developer", "Hardware Engineer"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function type() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typeWriterElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
    } else {
        typeWriterElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100;
    }

    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typeSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 500; // Pause before typing next
    }

    setTimeout(type, typeSpeed);
}

// Start typing effect
document.addEventListener('DOMContentLoaded', type);


// Scroll Animation (Intersection Observer)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

document.querySelectorAll('.section, .project-card, .timeline-item').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});


// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar Scroll Effect
const nav = document.querySelector('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        nav.style.boxShadow = "0 10px 30px -10px rgba(2, 12, 27, 0.7)";
    }
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        // Scroll Down
        nav.style.transform = "translateY(-100%)";
    } else {
        // Scroll Up
        nav.style.transform = "translateY(0)";
    }
    lastScroll = currentScroll;
});
