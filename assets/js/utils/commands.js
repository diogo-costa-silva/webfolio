// Terminal Commands

window.terminalCommands = {
    help: () => {
        return `
Available commands:
====================
  help          - Show this help message
  whoami        - Display information about me
  skills        - List my technical skills
  projects      - Show my projects
  contact       - Display contact information
  cv/resume     - Download my CV in PDF format
  clear         - Clear the terminal
  theme [mode]  - Change theme (dark/light/matrix/synthwave/minimal)
  easter-egg    - ???

Navigation commands:
====================
  about         - Go to About section
  stats         - View developer statistics
  current       - See what I'm currently building

Fun commands:
====================
  hack          - Hack the mainframe
  sudo          - Gain root access
  coffee        - Brew some coffee
  matrix        - Enter the Matrix

Type any command to execute...`;
    },

    whoami: () => {
        return `
╔════════════════════════════════════╗
║         DIOGO SILVA                ║
║     Full-Stack Developer           ║
╠════════════════════════════════════╣
║  🌍 Location: Portugal             ║
║  💼 Status: Open to opportunities  ║
║  🚀 Focus: Web Development         ║
║  ❤️ Passion: Clean code & UX       ║
╚════════════════════════════════════╝

"Transforming ideas into digital experiences"`;
    },

    skills: () => {
        const skills = {
            'Frontend': ['HTML5', 'CSS3', 'JavaScript', 'React', 'Vue.js'],
            'Backend': ['Node.js', 'Python', 'PHP', 'SQL', 'MongoDB'],
            'Tools': ['Git', 'Docker', 'VS Code', 'Webpack', 'npm'],
            'Learning': ['TypeScript', 'React Native', 'GraphQL', 'AWS']
        };

        let output = '\n🛠️ Technical Skills:\n';
        output += '═══════════════════════════════\n\n';

        for (const [category, items] of Object.entries(skills)) {
            output += `📁 ${category}:\n`;
            items.forEach(item => {
                output += `   ▸ ${item}\n`;
            });
            output += '\n';
        }

        return output;
    },

    projects: () => {
        // Scroll to projects section
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }

        return `
📂 Recent Projects:
═══════════════════════════════

1. Portfolio Website
   ▸ Interactive terminal interface
   ▸ Tech: HTML, CSS, JavaScript
   ▸ Status: In Progress

2. E-Commerce Platform
   ▸ Full-stack web application
   ▸ Tech: React, Node.js, MongoDB
   ▸ Status: Completed

3. Task Management App
   ▸ Real-time collaboration tool
   ▸ Tech: Vue.js, Firebase
   ▸ Status: Completed

Scrolling to projects section...`;
    },

    contact: () => {
        // Scroll to contact section
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }

        return `
📧 Contact Information:
═══════════════════════════════

Email: your.email@example.com
GitHub: github.com/diogo-costa-silva
LinkedIn: linkedin.com/in/diogo-silva
Location: Portugal

Feel free to reach out for collaborations!
Scrolling to contact form...`;
    },

    cv: () => {
        // Download CV
        const link = document.createElement('a');
        link.href = '/docs/CV_Diogo_Silva.pdf';
        link.download = 'CV_Diogo_Silva.pdf';
        link.click();

        return '📄 Downloading CV...\\nFile: CV_Diogo_Silva.pdf';
    },

    resume: () => {
        // Alias for cv command
        return window.terminalCommands.cv();
    },

    clear: () => {
        const terminal = document.querySelector('.terminal__output');
        if (terminal) {
            setTimeout(() => {
                terminal.innerHTML = '';
            }, 100);
        }
        return '';
    },

    theme: (args) => {
        const theme = args[0];
        const validThemes = ['dark', 'light', 'matrix', 'synthwave', 'minimal'];

        if (!theme) {
            return `Current theme: ${document.body.dataset.theme || 'dark'}\\nAvailable themes: ${validThemes.join(', ')}`;
        }

        if (validThemes.includes(theme)) {
            document.body.dataset.theme = theme;
            localStorage.setItem('preferred-theme', theme);
            return `Theme changed to: ${theme}`;
        } else {
            return `Invalid theme. Available themes: ${validThemes.join(', ')}`;
        }
    },

    about: () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
        return 'Navigating to About section...';
    },

    stats: () => {
        const statsSection = document.getElementById('stats');
        if (statsSection) {
            statsSection.scrollIntoView({ behavior: 'smooth' });
        }
        return 'Showing developer statistics...';
    },

    current: () => {
        const currentSection = document.getElementById('current');
        if (currentSection) {
            currentSection.scrollIntoView({ behavior: 'smooth' });
        }
        return 'Showing current project...';
    },

    // Fun/Easter Egg Commands
    hack: () => {
        const messages = [
            'Accessing mainframe...',
            'Bypassing security protocols...',
            'Decrypting passwords...',
            'ERROR: Nice try! 😄',
            '',
            'Just kidding! This is just a portfolio.',
            'But I appreciate your curiosity!'
        ];

        let output = '';
        messages.forEach(msg => {
            output += msg + '\\n';
        });
        return output;
    },

    sudo: () => {
        return '[sudo] password for user: \\n\\nNice try! But this isn\'t a real terminal 😉\\nThough I admire your Linux knowledge!';
    },

    coffee: () => {
        return `
    ( (
     ) )
  .______.
  |      |]
  \\      /
   \`----'

☕ Coffee is brewing...
Perfect for those late-night coding sessions!`;
    },

    matrix: () => {
        // Switch to matrix theme
        document.body.dataset.theme = 'matrix';
        localStorage.setItem('preferred-theme', 'matrix');

        return `
Wake up, Neo...
The Matrix has you...
Follow the white rabbit...

🐰 Theme changed to Matrix mode.`;
    },

    'easter-egg': () => {
        const egg = `
    ,-.-.
   /  }  \\
  |  / \\  |
  | | 0 | |
  |  \\_/  |
   \\     /
    '---'

🥚 Congratulations! You found an Easter egg!
You're the kind of person who reads documentation and explores.
I like that! Here's a secret: Try the Konami Code ↑↑↓↓←→←→BA`;

        return egg;
    },

    // Hidden commands
    pwd: () => '/home/diogo/portfolio',
    ls: () => 'about.txt  skills.txt  projects.txt  contact.txt  secrets.txt',
    cat: (args) => {
        if (args[0] === 'secrets.txt') {
            return 'The real secret is that there are no secrets, only features! 🎉';
        }
        return `cat: ${args[0] || 'file'}: No such file or directory`;
    }
};

// Add some aliases
window.terminalCommands.exit = () => 'There is no escape! But you can close the browser tab 😄';
window.terminalCommands.quit = window.terminalCommands.exit;
window.terminalCommands.dir = window.terminalCommands.ls;
window.terminalCommands.cls = window.terminalCommands.clear;