// Navigation Module

class Navigation {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.hamburger = document.getElementById('hamburgerMenu');
        this.navMenu = document.getElementById('navbarMenu');
        this.navLinks = document.querySelectorAll('.navbar__link');
        this.sections = document.querySelectorAll('section[id]');
        this.backToTop = document.getElementById('backToTop');

        this.lastScrollTop = 0;
        this.scrollThreshold = 100;

        this.init();
    }

    init() {
        // Mobile menu toggle
        this.hamburger?.addEventListener('click', () => this.toggleMobileMenu());

        // Close mobile menu on link click
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    this.closeMobileMenu();
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // Hide/show navbar on scroll
        window.addEventListener('scroll', () => {
            this.handleScroll();
            this.highlightActiveSection();
            this.toggleBackToTop();
        });

        // Back to top button
        this.backToTop?.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Close mobile menu on outside click
        document.addEventListener('click', (e) => {
            if (!this.navbar?.contains(e.target) && this.navMenu?.classList.contains('active')) {
                this.closeMobileMenu();
            }
        });

        // Initial active section
        this.highlightActiveSection();
    }

    toggleMobileMenu() {
        this.hamburger?.classList.toggle('active');
        this.navMenu?.classList.toggle('active');
        document.body.style.overflow = this.navMenu?.classList.contains('active') ? 'hidden' : '';
    }

    closeMobileMenu() {
        this.hamburger?.classList.remove('active');
        this.navMenu?.classList.remove('active');
        document.body.style.overflow = '';
    }

    handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Hide/show navbar based on scroll direction
        if (scrollTop > this.lastScrollTop && scrollTop > this.scrollThreshold) {
            // Scrolling down
            this.navbar?.classList.add('navbar--hidden');
        } else {
            // Scrolling up
            this.navbar?.classList.remove('navbar--hidden');
        }

        this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }

    highlightActiveSection() {
        const scrollY = window.pageYOffset;

        this.sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const correspondingLink = document.querySelector(`.navbar__link[href="#${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                this.navLinks.forEach(link => link.classList.remove('active'));
                correspondingLink?.classList.add('active');
            }
        });
    }

    toggleBackToTop() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;

        if (scrollPercentage > 25) {
            this.backToTop?.classList.add('visible');
        } else {
            this.backToTop?.classList.remove('visible');
        }
    }
}

// Export for use in main.js
window.Navigation = Navigation;