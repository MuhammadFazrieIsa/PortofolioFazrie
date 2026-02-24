// Loading screen fade out
window.addEventListener('load', () => {
    const loader = document.getElementById('loading-screen');
    if (loader) {
        loader.classList.add('hide');
    }
});

// Loading screen fade out
window.addEventListener('load', () => {
    const loader = document.getElementById('loading-screen');
    if (loader) {
        loader.classList.add('hide');
    }
});

// Mobile menu toggle for personal portfolio
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
    // Close mobile menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });
}

// Animate elements on scroll (slide-in)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide-in-visible');
        }
    });
}, observerOptions);
document.querySelectorAll('.slide-in-left, .slide-in-right, .slide-in-up').forEach(el => {
    observer.observe(el);
});

// Header shadow on scroll
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
    if (!header) return;
    const currentScroll = window.pageYOffset;
    if (currentScroll > 100) {
        header.classList.add('shadow-lg');
    } else {
        header.classList.remove('shadow-lg');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});