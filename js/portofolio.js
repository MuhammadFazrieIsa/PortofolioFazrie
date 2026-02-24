       // Loading screen fade out
        window.addEventListener('load', () => {
            const loader = document.getElementById('loading-screen');
            if (loader) loader.remove();
        });
        
        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking a link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });
        });

        // Intersection Observer for Scroll Animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all animated elements
        document.querySelectorAll('.fade-up, .fade-left').forEach(el => {
            observer.observe(el);
        });

        // Category Filter Functionality
        const categoryBtns = document.querySelectorAll('.category-btn');
        const projectCards = document.querySelectorAll('.project-card');

        categoryBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                categoryBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');
                
                const filter = btn.getAttribute('data-filter');
                
                projectCards.forEach((card, index) => {
                    const category = card.getAttribute('data-category');
                    
                    if (filter === 'all' || category === filter) {
                        card.style.display = 'block';
                        // Reset animation
                        card.classList.remove('visible');
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(30px)';
                        
                        // Staggered reappear
                        setTimeout(() => {
                            card.classList.add('visible');
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, index * 100);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'scale(0.9)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });

        // Header scroll effect
        const header = document.getElementById('site-header');
        let lastScroll = 0;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                header.classList.add('shadow-lg');
            } else {
                header.classList.remove('shadow-lg');
            }
            
            lastScroll = currentScroll;
        });

        // Smooth scroll for anchor links
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

        // Load More Button Animation
        const loadMoreBtn = document.getElementById('loadMore');
        const project7 = document.getElementById('project7');
        let revealed = false;
        loadMoreBtn.addEventListener('click', () => {
            if (!revealed && project7) {
                // show hidden project
                project7.classList.remove('hidden');
                revealed = true;
                // update button text
                loadMoreBtn.innerHTML = `<span>Tampil Sedikit</span>`;
            } else if (revealed && project7) {
                // hide again
                project7.classList.add('hidden');
                revealed = false;
                loadMoreBtn.innerHTML = `<span>Muat Lebih Banyak</span>`;
            }
        });