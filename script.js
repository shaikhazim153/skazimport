// Navigation scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Animate skill bars on scroll
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width + '%';
    });
}

// Intersection Observer for skill bars animation
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkillBars();
        }
    });
}, observerOptions);

observer.observe(document.querySelector('.skills'));

// Smooth scrolling for navigation links
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

// Download Resume button functionality
document.getElementById('downloadResume').addEventListener('click', function(e) {
    e.preventDefault();
    // Create a simple resume PDF download simulation
    alert('Resume download would start now. In a real implementation, this would download your PDF resume.');
    // In a real implementation, you would link to an actual PDF file
    // window.open('path/to/your/resume.pdf', '_blank');
});

// Add some random floating elements for visual interest
document.addEventListener('DOMContentLoaded', function() {
    // Create floating elements
    for (let i = 0; i < 15; i++) {
        createFloatingElement();
    }
});

function createFloatingElement() {
    const floatingEl = document.createElement('div');
    floatingEl.style.position = 'fixed';
    floatingEl.style.width = Math.random() * 10 + 5 + 'px';
    floatingEl.style.height = floatingEl.style.width;
    floatingEl.style.background = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.7)`;
    floatingEl.style.borderRadius = '50%';
    floatingEl.style.top = Math.random() * 100 + 'vh';
    floatingEl.style.left = Math.random() * 100 + 'vw';
    floatingEl.style.pointerEvents = 'none';
    floatingEl.style.zIndex = '-1';
    floatingEl.style.animation = `float ${Math.random() * 10 + 10}s linear infinite`;
    
    document.body.appendChild(floatingEl);
}