# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## General Rules

1. First think through the problem, read the codebase for relevant files, and write a plan to tasks/todo.md.

2. The plan should have a list of todo items that you can check off as you complete them

3. Before you begin working, check in with me and I will verify the plan.

4. Then, begin working on the todo items, marking them as complete as you go.

5. Please every step of the way just give me a high level explanation of what changes you made

6. Make every task and code change you do as simple as possible. We want to avoid making any massive or complex changes. Every change should impact as little code as possible. Everything is about simplicity.

7. Finally, add a review section to the [todo.md](http://todo.md/) file with a summary of the changes you made and any other relevant information.

8. All resulting products (code, documentation, comments, variable names, etc.) must be written in English.


## Project Overview

Interactive developer portfolio featuring a terminal-inspired interface with gamified elements. Built with vanilla HTML, CSS, and JavaScript to showcase technical fundamentals without framework dependencies.

**GitHub Repository:** https://github.com/diogo-costa-silva/webfolio.git

## Development Commands

### Build & Development
```bash
# No build process required - static HTML/CSS/JS
# Open index.html directly in browser or use a local server:
python3 -m http.server 8000
# or
npx serve .
```

### Testing
```bash
# Test responsive design
# Use browser DevTools device emulation
# Test in Chrome, Firefox, Safari, Edge

# Validate HTML
npx html-validator index.html

# Check accessibility
# Use browser Lighthouse audit
```

### Version Control
```bash
# Commit with conventional commits format:
git commit -m "feat: add terminal functionality"
git commit -m "fix: resolve mobile menu issue"
git commit -m "style: update CSS variables"
```

## Architecture & Structure

### CSS Variable System
All colors, spacing, and effects MUST use CSS variables defined in `assets/css/utils/variables.css`. Never hardcode values directly in component CSS files.

Key variable categories:
- Terminal colors (`--terminal-bg`, `--terminal-text`, `--terminal-cursor`)
- Main colors (`--color-primary`, `--color-secondary`, `--color-accent`)
- Typography (`--font-primary`, `--font-mono`, font sizes with clamp())
- Spacing (`--spacing-xs` through `--spacing-xxl`)
- Effects (`--transition`, `--glow`, `--shadow`)

### Component Architecture
- **Terminal System**: Core feature in `assets/js/modules/terminal.js` with commands in `utils/commands.js`
- **Theme System**: Multiple themes (matrix, synthwave, minimal) switchable via `assets/js/modules/theme.js`
- **i18n System**: Portuguese/English support via JSON files in `locales/`
- **Skills Gamification**: Trading card-style skill display with rarity levels
- **Easter Eggs**: Konami code and other surprises in `assets/js/modules/easter-eggs.js`

### File Organization
```
assets/
├── css/
│   ├── components/  # Individual section styles
│   ├── utils/       # Variables, reset, animations
│   └── themes/      # Theme-specific overrides
├── js/
│   ├── modules/     # Feature modules
│   └── utils/       # Helpers and constants
```

## Key Implementation Details

### Terminal Commands
Available terminal commands defined in `assets/js/utils/commands.js`:
- `help`, `whoami`, `skills`, `projects`, `contact`
- `cv`/`resume` (downloads PDF from `/docs/CV_Diogo_Silva.pdf`)
- `theme [mode]`, `clear`, `easter-egg`
- Secret commands: `hack`, `sudo`, `coffee`

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

Mobile-first approach with special terminal adaptations for touch devices.

### Performance Considerations
- Use external image URLs during development (Unsplash, Picsum)
- Optimize images before production deployment
- Implement lazy loading for images
- Minify CSS/JS for production

### Form Handling
Contact form uses EmailJS integration. Ensure validation includes:
- Required field checks
- Email format validation
- Clear error/success feedback

### Accessibility Requirements
- Semantic HTML5 tags throughout
- Alt text for all images
- Keyboard navigation for menu and terminal
- Focus indicators visible
- Color contrast meets WCAG standards

## Development Workflow

1. **CSS Variables First**: Always define new colors/spacing in variables.css before using
2. **Component Isolation**: Each section has its own CSS file in components/
3. **Module Pattern**: JavaScript features separated into modules for maintainability
4. **Progressive Enhancement**: Core functionality works without JavaScript
5. **Test Regularly**: Check responsiveness and browser compatibility frequently

## Current Project State

- Initial requirements defined in `requirements.md`
- Project structure needs to be created
- Terminal hero section is the priority feature
- CV available at `/docs/CV_Diogo_Silva.pdf`
- Profile image at `/docs/perfil_diogo.png`

## Important Notes

- This is a portfolio to showcase technical fundamentals - avoid unnecessary libraries
- Terminal interface is the signature feature - prioritize its polish
- CSS variables are mandatory for all styling
- Easter eggs should be professional yet memorable
- Code quality matters - recruiters will view source