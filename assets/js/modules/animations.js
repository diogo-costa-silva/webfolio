// Scroll Animations Module

class ScrollAnimations {
    constructor() {
        this.animatedElements = [];
        this.observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        this.init();
    }

    init() {
        // Setup Intersection Observer
        this.setupIntersectionObserver();

        // Add parallax effect
        this.setupParallax();

        // Add reveal animations to elements
        this.markElementsForAnimation();

        // Initialize progress bar
        this.initProgressBar();
    }

    setupIntersectionObserver() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateElement(entry.target);
                }
            });
        }, this.observerOptions);
    }

    markElementsForAnimation() {
        // Add animation classes to sections
        const sections = document.querySelectorAll('section');
        sections.forEach((section, index) => {
            // Skip hero section
            if (section.id === 'home') return;

            section.classList.add('scroll-animate');
            section.dataset.animation = 'fade-in-up';
            section.dataset.delay = index * 100;
            this.observer.observe(section);
        });

        // Animate cards
        const cards = document.querySelectorAll('.stat-card, .skill-card, .project-card, .behind__item');
        cards.forEach((card, index) => {
            card.classList.add('scroll-animate');
            card.dataset.animation = 'fade-in-up';
            card.dataset.delay = (index % 6) * 100;
            this.observer.observe(card);
        });

        // Animate timeline items
        const timelineItems = document.querySelectorAll('.timeline__item');
        timelineItems.forEach((item, index) => {
            item.classList.add('scroll-animate');
            item.dataset.animation = index % 2 === 0 ? 'fade-in-left' : 'fade-in-right';
            item.dataset.delay = index * 150;
            this.observer.observe(item);
        });
    }

    animateElement(element) {
        const animation = element.dataset.animation;
        const delay = parseInt(element.dataset.delay) || 0;

        setTimeout(() => {
            element.classList.add('animated', `animate-${animation}`);
            element.classList.remove('scroll-animate');
        }, delay);

        // Stop observing after animation
        this.observer.unobserve(element);
    }

    setupParallax() {
        const parallaxElements = document.querySelectorAll('[data-parallax]');

        if (parallaxElements.length === 0) {
            // Create parallax background for hero
            const hero = document.querySelector('.hero');
            if (hero) {
                hero.dataset.parallax = '0.5';
            }
        }

        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;

            document.querySelectorAll('[data-parallax]').forEach(element => {
                const speed = element.dataset.parallax || 0.5;
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        });
    }

    initProgressBar() {
        // Create progress bar
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        progressBar.innerHTML = '<div class="scroll-progress__bar"></div>';

        // Add styles
        const style = document.createElement('style');
        style.textContent = `
            .scroll-progress {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 3px;
                background: transparent;
                z-index: 9999;
            }

            .scroll-progress__bar {
                height: 100%;
                background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
                width: 0;
                transition: width 0.2s ease;
                box-shadow: 0 0 10px var(--color-primary);
            }

            .scroll-animate {
                opacity: 0;
            }

            .animated {
                opacity: 1 !important;
            }
        `;

        document.head.appendChild(style);
        document.body.appendChild(progressBar);

        // Update progress on scroll
        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;

            const bar = progressBar.querySelector('.scroll-progress__bar');
            if (bar) {
                bar.style.width = scrolled + '%';
            }
        });
    }

    // Smooth scroll to element
    smoothScrollTo(element) {
        if (!element) return;

        const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1000;
        let start = null;

        const animation = (currentTime) => {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const run = this.easeInOutQuad(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };

        requestAnimationFrame(animation);
    }

    easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    // Add typing animation to text
    typeText(element, text, speed = 50) {
        let index = 0;
        element.textContent = '';

        const type = () => {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(type, speed);
            }
        };

        type();
    }

    // Add number counter animation
    countUp(element, start, end, duration) {
        let startTime = null;

        const animation = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            const currentNumber = Math.floor(progress * (end - start) + start);

            element.textContent = currentNumber.toLocaleString();

            if (progress < 1) {
                requestAnimationFrame(animation);
            } else {
                element.textContent = end.toLocaleString();
            }
        };

        requestAnimationFrame(animation);
    }
}

// Export for use in main.js
window.ScrollAnimations = ScrollAnimations;