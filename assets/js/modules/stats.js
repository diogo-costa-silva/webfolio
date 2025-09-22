// Stats Counter Animation Module

class StatsCounter {
    constructor() {
        this.statsSection = document.getElementById('stats');
        this.statNumbers = document.querySelectorAll('.stat-card__number');
        this.animated = false;
        this.duration = 2000; // Animation duration in ms

        this.init();
    }

    init() {
        if (!this.statsSection || !this.statNumbers.length) return;

        // Create intersection observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.animated) {
                    this.animateCounters();
                    this.animated = true;
                }
            });
        }, {
            threshold: 0.3 // Trigger when 30% visible
        });

        observer.observe(this.statsSection);
    }

    animateCounters() {
        this.statNumbers.forEach(counter => {
            const target = parseInt(counter.dataset.target);
            const start = 0;
            const increment = target / (this.duration / 16); // 60fps
            let current = start;

            counter.classList.add('counting');

            const updateCounter = () => {
                current += increment;

                if (current < target) {
                    counter.textContent = Math.ceil(current).toLocaleString();
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target.toLocaleString();

                    // Add a subtle bounce effect at the end
                    counter.style.transform = 'scale(1.1)';
                    setTimeout(() => {
                        counter.style.transform = 'scale(1)';
                    }, 200);
                }
            };

            // Add a small delay for staggered effect
            const delay = Array.from(this.statNumbers).indexOf(counter) * 100;
            setTimeout(() => {
                updateCounter();
            }, delay);
        });
    }

    // Method to reset animation (useful for testing)
    reset() {
        this.animated = false;
        this.statNumbers.forEach(counter => {
            counter.textContent = '0';
            counter.classList.remove('counting');
        });
    }
}

// Export for use in main.js
window.StatsCounter = StatsCounter;