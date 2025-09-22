// Easter Eggs Module

class EasterEggs {
    constructor() {
        this.konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
        this.konamiPosition = 0;
        this.matrixMode = false;
        this.clickPattern = [];
        this.lastClickTime = 0;

        this.init();
    }

    init() {
        // Listen for Konami Code
        document.addEventListener('keydown', (e) => this.checkKonamiCode(e));

        // Listen for click patterns
        document.addEventListener('click', (e) => this.trackClicks(e));

        // Add hidden messages
        this.addHiddenMessages();

        // Initialize matrix rain effect
        this.initMatrixRain();
    }

    checkKonamiCode(e) {
        const key = e.key;

        // Check if the key matches the expected key
        if (key === this.konamiCode[this.konamiPosition]) {
            this.konamiPosition++;

            // Check if the entire code has been entered
            if (this.konamiPosition === this.konamiCode.length) {
                this.activateKonamiCode();
                this.konamiPosition = 0;
            }
        } else {
            this.konamiPosition = 0;
        }
    }

    activateKonamiCode() {
        console.log('%c🎮 KONAMI CODE ACTIVATED!', 'color: #00ff41; font-size: 30px; font-weight: bold;');

        // Show special message
        this.showSpecialMessage();

        // Add special effects
        this.addSpecialEffects();

        // Unlock secret features
        this.unlockSecretFeatures();
    }

    showSpecialMessage() {
        const message = document.createElement('div');
        message.className = 'konami-message';
        message.innerHTML = `
            <div class="konami-content">
                <h2>🎮 ACHIEVEMENT UNLOCKED!</h2>
                <p>You discovered the Konami Code!</p>
                <p>You're now a certified Easter Egg Hunter!</p>
                <button onclick="this.parentElement.parentElement.remove()">Close</button>
            </div>
        `;

        // Add styles
        const style = document.createElement('style');
        style.textContent = `
            .konami-message {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                padding: 2rem;
                border-radius: 1rem;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
                z-index: 10000;
                animation: konami-appear 0.5s ease-out;
                color: white;
                text-align: center;
            }

            .konami-content h2 {
                font-size: 2rem;
                margin-bottom: 1rem;
                text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
            }

            .konami-content p {
                margin-bottom: 0.5rem;
                font-size: 1.1rem;
            }

            .konami-content button {
                margin-top: 1rem;
                padding: 0.5rem 2rem;
                background: white;
                color: #764ba2;
                border: none;
                border-radius: 0.5rem;
                font-size: 1rem;
                cursor: pointer;
                transition: transform 0.2s;
            }

            .konami-content button:hover {
                transform: scale(1.05);
            }

            @keyframes konami-appear {
                from {
                    opacity: 0;
                    transform: translate(-50%, -50%) scale(0.5);
                }
                to {
                    opacity: 1;
                    transform: translate(-50%, -50%) scale(1);
                }
            }
        `;

        document.head.appendChild(style);
        document.body.appendChild(message);

        // Remove after 10 seconds
        setTimeout(() => {
            message.remove();
        }, 10000);
    }

    addSpecialEffects() {
        // Add rainbow glow to terminal
        const terminal = document.querySelector('.terminal');
        if (terminal) {
            terminal.style.animation = 'rainbow-glow 3s linear infinite';

            // Add the animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes rainbow-glow {
                    0% { box-shadow: 0 0 30px #ff0000; }
                    16% { box-shadow: 0 0 30px #ff8800; }
                    33% { box-shadow: 0 0 30px #ffff00; }
                    50% { box-shadow: 0 0 30px #00ff00; }
                    66% { box-shadow: 0 0 30px #0000ff; }
                    83% { box-shadow: 0 0 30px #8800ff; }
                    100% { box-shadow: 0 0 30px #ff0000; }
                }
            `;
            document.head.appendChild(style);

            // Remove effect after 10 seconds
            setTimeout(() => {
                terminal.style.animation = '';
            }, 10000);
        }

        // Add confetti effect
        this.createConfetti();
    }

    createConfetti() {
        const confettiCount = 100;
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.cssText = `
                position: fixed;
                width: 10px;
                height: 10px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                left: ${Math.random() * 100}%;
                top: -10px;
                opacity: ${Math.random()};
                animation: confetti-fall ${3 + Math.random() * 2}s linear;
                z-index: 9999;
            `;
            document.body.appendChild(confetti);

            // Remove after animation
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }

        // Add animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes confetti-fall {
                to {
                    top: 100%;
                    transform: rotate(360deg);
                }
            }
        `;
        document.head.appendChild(style);
    }

    unlockSecretFeatures() {
        // Add secret terminal commands
        if (window.terminalCommands) {
            window.terminalCommands['konami'] = () => {
                return `
╔══════════════════════════════════════╗
║     🎮 SECRET MODE ACTIVATED 🎮      ║
╠══════════════════════════════════════╣
║  You've unlocked the secret menu!    ║
║                                       ║
║  New commands available:              ║
║  • dance - Make things dance         ║
║  • flip - Flip the world             ║
║  • party - Party mode                ║
║  • secret - Show all secrets         ║
╚══════════════════════════════════════╝`;
            };

            window.terminalCommands['dance'] = () => {
                document.querySelectorAll('*').forEach(el => {
                    el.style.animation = 'dance 1s ease-in-out infinite';
                });

                const style = document.createElement('style');
                style.textContent = `
                    @keyframes dance {
                        0%, 100% { transform: translateX(0); }
                        25% { transform: translateX(-10px) rotate(-5deg); }
                        75% { transform: translateX(10px) rotate(5deg); }
                    }
                `;
                document.head.appendChild(style);

                setTimeout(() => {
                    document.querySelectorAll('*').forEach(el => {
                        el.style.animation = '';
                    });
                }, 5000);

                return '💃 Dance party activated for 5 seconds!';
            };

            window.terminalCommands['flip'] = () => {
                document.body.style.transform = 'rotate(180deg)';
                document.body.style.transition = 'transform 1s';

                setTimeout(() => {
                    document.body.style.transform = '';
                }, 3000);

                return '🙃 World flipped! (returning to normal in 3 seconds)';
            };

            window.terminalCommands['party'] = () => {
                this.startPartyMode();
                return '🎉 PARTY MODE ACTIVATED! 🎊';
            };

            window.terminalCommands['secret'] = () => {
                return `
🤫 ALL SECRETS REVEALED:
========================
1. Konami Code: ↑↑↓↓←→←→BA
2. Terminal Commands: hack, sudo, coffee, matrix
3. Click the logo 5 times quickly
4. Type "awesome" anywhere on the page
5. Console has hidden messages
6. There's a hidden link somewhere...
7. Try different themes for surprises
8. Check the source code comments
9. The 404 page has a game
10. This portfolio has exactly 42 Easter eggs`;
            };
        }
    }

    trackClicks(e) {
        const now = Date.now();

        // Reset pattern if too much time has passed
        if (now - this.lastClickTime > 1000) {
            this.clickPattern = [];
        }

        this.lastClickTime = now;

        // Check if clicking on logo
        if (e.target.classList.contains('navbar__logo')) {
            this.clickPattern.push('logo');

            // Check for 5 quick clicks
            if (this.clickPattern.filter(p => p === 'logo').length === 5) {
                this.activateLogoEasterEgg();
                this.clickPattern = [];
            }
        }
    }

    activateLogoEasterEgg() {
        const logo = document.querySelector('.navbar__logo');
        if (logo) {
            logo.style.animation = 'spin-grow 1s ease-in-out';
            logo.textContent = '🚀';

            const style = document.createElement('style');
            style.textContent = `
                @keyframes spin-grow {
                    0% { transform: rotate(0) scale(1); }
                    50% { transform: rotate(180deg) scale(1.5); }
                    100% { transform: rotate(360deg) scale(1); }
                }
            `;
            document.head.appendChild(style);

            setTimeout(() => {
                logo.style.animation = '';
                logo.textContent = 'DS';
            }, 1000);
        }
    }

    startPartyMode() {
        // Change to random theme every second
        const themes = ['dark', 'light', 'matrix', 'synthwave', 'minimal'];
        let partyInterval = setInterval(() => {
            const randomTheme = themes[Math.floor(Math.random() * themes.length)];
            document.body.dataset.theme = randomTheme;
        }, 1000);

        // Add disco ball
        const discoBall = document.createElement('div');
        discoBall.className = 'disco-ball';
        discoBall.innerHTML = '🪩';
        discoBall.style.cssText = `
            position: fixed;
            top: 50px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 50px;
            animation: disco-spin 2s linear infinite;
            z-index: 9999;
        `;
        document.body.appendChild(discoBall);

        // Add animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes disco-spin {
                from { transform: translateX(-50%) rotate(0deg); }
                to { transform: translateX(-50%) rotate(360deg); }
            }
        `;
        document.head.appendChild(style);

        // Stop party after 10 seconds
        setTimeout(() => {
            clearInterval(partyInterval);
            discoBall.remove();
            // Reset to user's preferred theme
            const preferredTheme = localStorage.getItem('preferred-theme') || 'dark';
            document.body.dataset.theme = preferredTheme;
        }, 10000);
    }

    addHiddenMessages() {
        // Add data attributes with hidden messages
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.dataset.secret = 'You found a secret! The developer loves clean code and Easter eggs!';
        }

        // Add HTML comments (already visible in source)
        const comment = document.createComment(' Hey recruiter! If you\'re reading this, you\'re exactly the kind of person I\'d love to work with! Send me an email with the subject "I found your HTML comment" for a surprise! ');
        document.head.appendChild(comment);
    }

    initMatrixRain() {
        // Create matrix rain container
        const matrixContainer = document.createElement('div');
        matrixContainer.className = 'matrix-rain';
        matrixContainer.style.display = 'none';

        // This will be activated when matrix theme is selected
        document.body.appendChild(matrixContainer);
    }

    // Type "awesome" anywhere to trigger
    setupKeywordTrigger() {
        let keyword = '';
        const trigger = 'awesome';

        document.addEventListener('keypress', (e) => {
            keyword += e.key.toLowerCase();

            if (keyword.includes(trigger)) {
                this.showAwesomeMessage();
                keyword = '';
            }

            // Reset if too long
            if (keyword.length > trigger.length * 2) {
                keyword = '';
            }
        });
    }

    showAwesomeMessage() {
        const message = document.createElement('div');
        message.textContent = 'You ARE awesome! 🌟';
        message.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 2rem;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border-radius: 0.5rem;
            font-size: 1.2rem;
            font-weight: bold;
            z-index: 9999;
            animation: slide-in-right 0.5s ease-out;
        `;

        document.body.appendChild(message);

        setTimeout(() => {
            message.style.animation = 'slide-out-right 0.5s ease-out';
            setTimeout(() => message.remove(), 500);
        }, 3000);
    }
}

// Export for use in main.js
window.EasterEggs = EasterEggs;