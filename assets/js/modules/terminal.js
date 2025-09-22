// Terminal Module

class Terminal {
    constructor() {
        this.input = document.getElementById('terminalInput');
        this.output = document.getElementById('terminalOutput');
        this.terminal = document.getElementById('terminal');
        this.cursor = document.querySelector('.terminal__cursor');
        this.commandHistory = [];
        this.historyIndex = -1;
        this.currentInput = '';

        this.init();
    }

    init() {
        if (!this.input || !this.output) return;

        // Focus input on click
        this.terminal?.addEventListener('click', () => {
            this.input.focus();
        });

        // Handle input
        this.input.addEventListener('keydown', (e) => this.handleKeyDown(e));
        this.input.addEventListener('input', () => this.updateCursor());

        // Handle quick commands for mobile
        document.querySelectorAll('.quick-command').forEach(btn => {
            btn.addEventListener('click', () => {
                const command = btn.dataset.command;
                this.input.value = command;
                this.processCommand(command);
            });
        });

        // Initialize with welcome message
        this.showWelcomeMessage();
    }

    handleKeyDown(e) {
        switch(e.key) {
            case 'Enter':
                e.preventDefault();
                this.processCommand(this.input.value);
                break;
            case 'ArrowUp':
                e.preventDefault();
                this.navigateHistory('up');
                break;
            case 'ArrowDown':
                e.preventDefault();
                this.navigateHistory('down');
                break;
            case 'Tab':
                e.preventDefault();
                this.autocomplete();
                break;
        }
    }

    processCommand(command) {
        if (!command.trim()) return;

        // Add to history
        this.commandHistory.push(command);
        this.historyIndex = this.commandHistory.length;

        // Display command in output
        this.appendOutput(`$ ${command}`, 'prompt');

        // Process the command
        const cmd = command.toLowerCase().trim();
        const args = cmd.split(' ');
        const mainCommand = args[0];

        // Execute command
        if (window.terminalCommands && window.terminalCommands[mainCommand]) {
            const result = window.terminalCommands[mainCommand](args.slice(1));
            this.appendOutput(result);
        } else if (mainCommand) {
            this.appendOutput(`Command not found: ${mainCommand}. Type 'help' for available commands.`, 'error');
        }

        // Clear input
        this.input.value = '';
        this.updateCursor();

        // Scroll to bottom
        this.terminal.querySelector('.terminal__body').scrollTop = this.terminal.querySelector('.terminal__body').scrollHeight;
    }

    appendOutput(text, type = '') {
        const line = document.createElement('div');
        line.className = type ? `terminal__output-line terminal__output-line--${type}` : 'terminal__output-line';

        // Handle multiline text
        if (text.includes('\\n')) {
            text.split('\\n').forEach((part, index) => {
                if (index > 0) {
                    this.output.appendChild(document.createElement('br'));
                }
                const span = document.createElement('span');
                span.innerHTML = part;
                line.appendChild(span);
            });
        } else {
            line.innerHTML = text;
        }

        this.output.appendChild(line);
    }

    navigateHistory(direction) {
        if (direction === 'up' && this.historyIndex > 0) {
            this.historyIndex--;
            this.input.value = this.commandHistory[this.historyIndex];
        } else if (direction === 'down' && this.historyIndex < this.commandHistory.length - 1) {
            this.historyIndex++;
            this.input.value = this.commandHistory[this.historyIndex];
        } else if (direction === 'down' && this.historyIndex === this.commandHistory.length - 1) {
            this.historyIndex = this.commandHistory.length;
            this.input.value = '';
        }
        this.updateCursor();
    }

    autocomplete() {
        const currentValue = this.input.value.toLowerCase();
        if (!currentValue) return;

        const commands = Object.keys(window.terminalCommands || {});
        const matches = commands.filter(cmd => cmd.startsWith(currentValue));

        if (matches.length === 1) {
            this.input.value = matches[0];
            this.updateCursor();
        } else if (matches.length > 1) {
            this.appendOutput(`Suggestions: ${matches.join(', ')}`);
        }
    }

    updateCursor() {
        if (!this.cursor) return;
        const inputWidth = this.input.value.length * 8; // Approximate character width
        this.cursor.style.setProperty('--cursor-offset', `${inputWidth}px`);
    }

    showWelcomeMessage() {
        const messages = [
            '',
            '██████╗ ██╗ ██████╗  ██████╗  ██████╗ ',
            '██╔══██╗██║██╔═══██╗██╔════╝ ██╔═══██╗',
            '██║  ██║██║██║   ██║██║  ███╗██║   ██║',
            '██║  ██║██║██║   ██║██║   ██║██║   ██║',
            '██████╔╝██║╚██████╔╝╚██████╔╝╚██████╔╝',
            '╚═════╝ ╚═╝ ╚═════╝  ╚═════╝  ╚═════╝ ',
            '',
            'Welcome to Diogo Silva\'s Portfolio v1.0.0',
            '============================================',
            '',
            'Type \'help\' for available commands',
            ''
        ];

        // Type each line with a delay
        messages.forEach((message, index) => {
            setTimeout(() => {
                if (index < 7) {
                    // ASCII art in green
                    const line = document.createElement('div');
                    line.className = 'terminal__output-line terminal__ascii';
                    line.textContent = message;
                    this.output.appendChild(line);
                } else {
                    // Regular text
                    this.appendOutput(message, index === 8 ? 'success' : '');
                }
            }, index * 100);
        });
    }

    clear() {
        this.output.innerHTML = '';
    }
}

// Export for use in main.js
window.Terminal = Terminal;