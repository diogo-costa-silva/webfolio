# 🚀 Interactive Developer Portfolio - Requirements

## 1. Project Overview

### 1.1 Objective
Create a unique, interactive portfolio that stands out from typical developer portfolios, featuring a terminal-inspired interface and gamified elements to showcase technical skills while demonstrating creativity and personality.

### 1.2 Technology Stack
- **Languages:** HTML5, CSS3, JavaScript (vanilla)
- **No frameworks:** Focus on mastering fundamentals with creativity
- **Allowed libraries:** Minimal (typing animations, icons, particles, form handling)
- **Version Control:** Git & GitHub

### 1.3 Core Concept
- **Unique Selling Point:** Terminal interface + gamified experience
- **Target Audience:** Tech recruiters and hiring managers
- **Personality:** Technical but approachable, creative problem-solver
- **Code Philosophy:** Clean, modular, heavily utilizing CSS variables
- **User Experience:** Interactive, memorable, and fun to explore

## 2. Functional Requirements

### 2.1 Website Structure

#### 2.1.1 Hero Section - Interactive Terminal
- **Terminal Interface:**
  - Full-viewport height with dark terminal aesthetic
  - Functional command-line interface
  - Blinking cursor animation
  - Command history (arrow keys navigation)
  - Green/amber text on dark background (customizable)

- **Available Commands:**
  - `help` - Shows all available commands
  - `whoami` - Displays name and title with ASCII art
  - `skills` - Lists technical skills in categories
  - `projects` - Shows project list or scrolls to projects
  - `contact` - Display contact info or scroll to form
  - `cv` or `resume` - Downloads PDF resume
  - `clear` - Clears terminal screen
  - `theme [mode]` - Changes color theme
  - `easter-egg` - Triggers a surprise animation

- **Welcome Message:**
  - Auto-types on page load
  - "Welcome to [YourName]'s Portfolio v1.0.0"
  - "Type 'help' for available commands"

- **Fallback for Mobile:**
  - Touch-friendly terminal with on-screen keyboard option
  - Quick command buttons below terminal

#### 2.1.2 Developer Stats Dashboard
- **Quick Stats Section:**
  - Animated counter numbers
  - Stats cards with icons:
    - Lines of Code Written
    - Projects Completed
    - Cups of Coffee
    - Days Learning
    - Bugs Squashed
    - Git Commits
  - GitHub contribution graph (if API available)
  - Current availability status

#### 2.1.3 About Me + Journey Timeline
- **Introduction Section:**
  - Brief professional summary
  - Profile photo with glitch/hover effect
  - Current status: "Actively seeking opportunities"

- **Interactive Timeline:**
  - Vertical/horizontal scrollable journey
  - Key milestones with dates:
    - First "Hello World"
    - Started learning web dev
    - First project completed
    - Technologies learned
  - Animated on scroll reveal
  - Click to expand details

#### 2.1.4 Skills - Gamified Tech Stack
- **Skill Cards Layout:**
  - Trading card style design
  - Categories: Frontend, Backend, Tools, Learning
  - Each card shows:
    - Technology icon/logo
    - Skill level (1-5 stars or progress bar)
    - Experience time
    - Projects count using this tech

- **Interactive Features:**
  - Hover to flip card for details
  - Click to filter projects by technology
  - "Level up" animation on hover
  - Rarity indicators (Common/Rare/Legendary)

- **Currently Learning Section:**
  - Progress bars for technologies in progress
  - Links to current learning resources
  - Estimated completion dates

#### 2.1.5 Curriculum/Resume
- **Content:**
  - Downloadable CV (PDF format) - present in /docs
  - Education timeline
  - Professional experience cards
  - Courses and certifications grid
- **Features:**
  - Timeline animation on scroll
  - Print-friendly CSS version
  - One-click PDF download

#### 2.1.6 Projects - Problem/Solution Showcase
- **Project Cards Design:**
  - "Problem → Solution → Result" structure
  - Live preview on hover (GIF or video)
  - Tech stack badges
  - Difficulty level indicator
  - Time to complete

- **Interactive Features:**
  - Filter by technology/category
  - Sort by date/difficulty/impact
  - "View Case Study" for detailed breakdown
  - Live demo in modal/iframe
  - GitHub stats (stars, forks) if public

- **Case Study Pages (2-3 featured):**
  - Problem statement
  - Solution approach
  - Technical challenges
  - Lessons learned
  - Code snippets with syntax highlighting

#### 2.1.7 Currently Building
- **Live Project Status:**
  - Current project name and description
  - Progress bar (% complete)
  - GitHub commit activity
  - Technologies being used
  - Expected completion date
  - "Follow along" link to repo

#### 2.1.8 Behind the Code
- **Personal Interests That Shape My Code:**
  - Hobbies with coding parallels:
    - "Gaming → Problem-solving skills"
    - "Music → Pattern recognition"
    - "Reading → Documentation skills"
  - Fun facts with animations
  - Personality traits as a developer

#### 2.1.9 Contact
- **Form Fields:**
  - Name (required)
  - Email (required, valid format)
  - Subject (required)
  - Message (required)
- **Additional:**
  - Social media links with icons (LinkedIn, GitHub, etc.)
  - Direct email link
  - Location (city/country only)

### 2.2 Navigation System

#### 2.2.1 Smart Navigation Bar
- **Desktop (>768px):**
  - Centered navigation links
  - Language selector (PT/EN) on right
  - Theme toggle (light/dark) on right
  - Sticky on scroll with hide/show behavior
  - Active section highlighting
  - Smooth scroll to sections

- **Mobile (<768px):**
  - Hamburger menu (right side)
  - Language and theme toggles (left of hamburger)
  - Slide-in menu from right
  - Full-screen overlay
  - Close on link click or outside click

### 2.3 Interactive Features & Easter Eggs

#### 2.3.1 Easter Eggs & Surprises
- **Konami Code:** ↑↑↓↓←→←→BA triggers special mode
- **Console Messages:** Hidden console.log() for curious recruiters
- **404 Page:** Mini-game or interactive ASCII art
- **Source Code Comments:** "<!-- Hey recruiter! You found it! -->"
- **Secret Commands:** Terminal accepts fun commands like `hack`, `sudo`, `coffee`
- **Click Combinations:** Specific click patterns unlock features

#### 2.3.2 Personalization & Themes
- **Theme Options:**
  - Classic Dark/Light
  - Matrix (green on black)
  - Synthwave (neon colors)
  - Minimal (black & white)
  - High Contrast (accessibility)
  - Custom color picker

- **Visitor Preferences:**
  - Remember theme choice
  - Remember language preference
  - Cursor trail on/off
  - Animations on/off
  - Sound effects on/off

#### 2.3.3 Micro-Interactions
- **Cursor Effects:**
  - Custom cursor per section
  - Terminal cursor in hero
  - Pointer changes on hover
  - Optional trail effect

- **Hover States:**
  - 3D card tilts
  - Magnetic buttons
  - Ripple effects
  - Glow effects
  - Color shifts

- **Scroll Animations:**
  - Parallax layers
  - Reveal on scroll
  - Progress indicator
  - Section transitions

### 2.4 Core Features

#### 2.4.1 Internationalization (i18n)
- Portuguese (pt-PT) and English (en-US) support
- Language toggle button
- Content stored in JSON files
- Preference saved in localStorage

#### 2.4.2 Theme System
- Light and dark mode toggle
- CSS variables for all colors
- Smooth transitions
- Preference saved in localStorage

#### 2.4.3 Form Handling
- Basic validation (required fields, email format)
- Clear error messages
- Success/error feedback
- EmailJS integration for sending emails

#### 2.4.4 Animations & Interactions
- Smooth scroll to sections
- Simple hover effects
- Fade-in animations on scroll (optional)
- Menu hide/show on scroll

#### 2.4.5 Back to Top - Terminal Style
- Styled as terminal command: "[^↑ TOP]" or "cd /"
- Types out animation when clicked
- Shows "Scrolling to top..." message
- Fixed position (bottom-right)
- Appears after 50% scroll
- Green glow on hover

## 3. Technical Requirements

### 3.1 Performance Basics
- **Goals:**
  - Fast loading (< 3 seconds)
  - Optimized images (compressed JPG/PNG)
  - Minified CSS and JS (for production)

### 3.2 Accessibility Basics
- **Essential Requirements:**
  - Semantic HTML5 tags
  - Alt text for all images
  - Keyboard navigation for menu
  - Good color contrast
  - Clear focus indicators

### 3.3 Browser Support
- **Must work on:**
  - Chrome (current version)
  - Firefox (current version)
  - Safari (current version)
  - Edge (current version)
  - Mobile browsers (iOS Safari, Chrome)

### 3.4 Responsive Design
- **Breakpoints:**
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px
- **Approach:**
  - Mobile-first CSS
  - Flexbox and CSS Grid
  - Flexible images (max-width: 100%)
  - Readable font sizes on all devices

## 4. Technical Specifications

### 4.1 Project Structure
```
portfolio/
├── index.html
├── assets/
│   ├── css/
│   │   ├── main.css
│   │   ├── components/
│   │   │   ├── terminal.css      # Terminal interface styles
│   │   │   ├── header.css
│   │   │   ├── stats.css         # Developer stats dashboard
│   │   │   ├── timeline.css      # Journey timeline
│   │   │   ├── skills.css        # Skill cards
│   │   │   ├── projects.css
│   │   │   ├── current.css       # Currently building section
│   │   │   └── contact.css
│   │   ├── utils/
│   │   │   ├── variables.css     # ALL CSS variables here
│   │   │   ├── reset.css
│   │   │   ├── animations.css    # Keyframes and transitions
│   │   │   └── utilities.css
│   │   └── themes/
│   │       ├── dark.css
│   │       ├── light.css
│   │       ├── matrix.css        # Green terminal theme
│   │       ├── synthwave.css     # Neon theme
│   │       └── minimal.css       # B&W theme
│   ├── js/
│   │   ├── main.js
│   │   ├── modules/
│   │   │   ├── terminal.js       # Terminal logic
│   │   │   ├── navigation.js
│   │   │   ├── theme.js
│   │   │   ├── i18n.js
│   │   │   ├── stats.js          # Stats counter animations
│   │   │   ├── skills.js         # Skill cards interactions
│   │   │   ├── projects.js
│   │   │   ├── easter-eggs.js    # All easter eggs
│   │   │   └── animations.js
│   │   └── utils/
│   │       ├── commands.js       # Terminal commands
│   │       ├── constants.js
│   │       └── helpers.js
│   ├── images/
│   │   ├── profile/
│   │   ├── projects/
│   │   ├── skills/              # Tech logos
│   │   └── icons/
│   ├── fonts/
│   └── docs/
│       └── cv.pdf
├── locales/
│   ├── pt-PT.json
│   └── en-US.json
├── data/
│   ├── projects.json            # Projects data
│   ├── skills.json              # Skills and levels
│   └── timeline.json            # Journey milestones
├── robots.txt
├── sitemap.xml
└── README.md
```

### 4.2 CSS Architecture (CRITICAL)
- **CSS Variables (Mandatory):**
  ```css
  :root {
    /* Terminal Colors */
    --terminal-bg: #0a0e27;
    --terminal-text: #00ff41;
    --terminal-cursor: #00ff41;
    --terminal-prompt: #ff5555;

    /* Main Colors */
    --color-primary: #00ff41;
    --color-secondary: #ff5555;
    --color-accent: #ffb626;
    --color-background: #0f1419;
    --color-surface: #1a1f2e;
    --color-text: #e6e6e6;
    --color-text-muted: #8b92a5;

    /* Typography */
    --font-primary: 'Inter', sans-serif;
    --font-mono: 'Fira Code', monospace;
    --font-size-base: 16px;
    --font-size-h1: clamp(2rem, 5vw, 3rem);
    --font-size-h2: clamp(1.5rem, 4vw, 2.5rem);
    --font-size-terminal: 14px;

    /* Spacing */
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 1.5rem;
    --spacing-lg: 2rem;
    --spacing-xl: 3rem;
    --spacing-xxl: 5rem;

    /* Effects */
    --border-radius: 8px;
    --border-radius-lg: 16px;
    --transition-fast: 150ms ease;
    --transition: 300ms ease;
    --transition-slow: 500ms ease;
    --glow: 0 0 20px rgba(0, 255, 65, 0.5);
    --shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
  ```
- **Organization:**
  - Separate files for each component
  - Variables file for all CSS custom properties
  - Utility classes for reusable styles
- **Approach:**
  - Mobile-first media queries
  - Flexbox and Grid for layouts
  - BEM naming convention (optional but recommended)

### 4.3 JavaScript Structure
- **Organization:**
  - Separate files for different features
  - main.js as entry point
  - Clear function names
- **Good Practices:**
  - Use const/let, avoid var
  - Arrow functions where appropriate
  - Event listeners properly managed
  - Comments for complex logic

### 4.4 Implementation Notes
- Use semantic HTML5 tags
- Mobile-first approach mandatory
- All colors and spacing MUST use CSS variables
- Keep JavaScript simple and functional
- Focus on clean, readable code

## 5. Design Specifications

### 5.1 Visual Identity
- **Design Philosophy:**
  - Terminal-inspired aesthetic
  - Dark mode first (with light alternatives)
  - Minimalist with purposeful animations
  - Tech-forward but approachable

- **Typography Hierarchy:**
  - Terminal: Fira Code or JetBrains Mono
  - Headings: Inter or Space Grotesk
  - Body: Inter or System UI
  - Consistent scale using clamp() for responsiveness

- **Color Themes:**
  - **Matrix Theme (Default):**
    - Green text on dark background
    - Red accents for errors/important
    - Amber for warnings/highlights
  - **Synthwave:**
    - Neon pink/blue/purple gradients
    - Dark purple backgrounds
    - Glowing effects
  - **Minimal:**
    - Pure black and white
    - Single accent color

### 5.2 Component Library
- **Terminal Window:**
  - Classic terminal chrome (optional)
  - Typing cursor animation
  - Command history visualization
  - Auto-complete suggestions

- **Skill Cards:**
  - 3D flip animation on hover
  - Progress indicators
  - Glowing borders for proficiency
  - Tech logo prominent

- **Project Cards:**
  - Preview on hover (GIF/video)
  - Tech stack badges
  - Stats overlay (views, likes)
  - Quick action buttons

- **Interactive Elements:**
  - Magnetic hover effects
  - Ripple clicks
  - Smooth state transitions
  - Loading skeletons with personality

## 6. Third-Party Libraries (Optional)

### 6.1 Minimal Dependencies
- **Terminal Typing:** Typed.js or custom implementation
- **Icons:** Feather Icons or Phosphor Icons
- **Form Handling:** EmailJS (for contact form)
- **Syntax Highlighting:** Prism.js (for code snippets)
- **Smooth Scroll:** Native CSS scroll-behavior
- **Animations:** CSS-only when possible
- **Particles (optional):** Particles.js for terminal background

### 6.2 CDN Strategy
- Use CDN for libraries with local fallback
- Integrity checks (SRI) for security
- Version locking for stability

## 7. Basic SEO

- **Essential Elements:**
  - Page title and meta description
  - Image alt texts
  - Proper heading hierarchy (H1, H2, H3)
  - Clean URLs
  - Mobile-friendly design

## 8. Simple Implementation Guidelines

### 8.1 Development Steps
1. Start with HTML structure
2. Add CSS with variables from the beginning
3. Make it responsive
4. Add JavaScript features one by one
5. Test on different devices

### 8.2 Best Practices
- Commit frequently to Git
- Test each section before moving to the next
- Keep code organized and commented
- Use meaningful variable and function names

## 9. Essential Checklist

### Before Starting
- [ ] Set up Git repository
- [ ] Create folder structure
- [ ] Set up CSS variables file
- [ ] Choose color palette and fonts

### During Development
- [ ] Use CSS variables for ALL colors and spacing
- [ ] Test responsiveness regularly
- [ ] Keep code modular and clean
- [ ] Comment complex sections

### Before Deployment
- [ ] Test all forms
- [ ] Check all links
- [ ] Verify mobile responsiveness
- [ ] Test in different browsers
- [ ] Optimize images
- [ ] Add favicon

## 10. Deployment

### 10.1 Free Hosting Options
- **GitHub Pages** (recommended for beginners)
- **Netlify** (drag and drop deployment)
- **Vercel** (automatic from GitHub)

### 10.2 Domain (Optional)
- Can use free subdomain initially
- Custom domain later when ready


## 11. Success Criteria

### What Makes This Portfolio Stand Out:
- **Memorable First Impression:**
  - Terminal interface immediately differentiates you
  - Interactive elements show technical capability
  - Easter eggs demonstrate attention to detail

- **For Recruiters:**
  - Can quickly find key information
  - Projects demonstrate problem-solving
  - Code quality visible in source
  - Personality comes through
  - Mobile-friendly for on-the-go viewing

- **Technical Achievement:**
  - Clean, modular code structure
  - Extensive use of CSS variables
  - No framework dependency shows fundamentals
  - Performance without sacrificing creativity
  - Accessibility maintained despite complexity

## 12. Future Enhancements (Phase 2)

- **Terminal Upgrades:**
  - File system navigation simulation
  - Mini coding challenges
  - Terminal multiplayer (visitors can see each other)

- **Advanced Features:**
  - Blog with markdown support
  - Real-time GitHub activity feed
  - Spotify "Now Playing" integration
  - Visitor guestbook/testimonials
  - Backend API for dynamic content
  - PWA with offline support

---

---

## 13. Version Control Strategy

### 13.1 Git Commit Checkpoints
**IMPORTANT:** Claude will notify you with "🔴 COMMIT TIME!" when you should commit your changes.

#### Commit Schedule:
1. **Project Setup**
   ```bash
   git init
   git add .
   git commit -m "feat: initial project structure with requirements"
   git branch -M main
   git remote add origin https://github.com/[your-username]/webfolio.git
   git push -u origin main
   ```

2. **Major Milestones - Commit After Each:**
   - Base HTML structure → `"feat: add HTML structure with semantic sections"`
   - CSS variables & reset → `"feat: implement CSS variables and base styles"`
   - Terminal hero section → `"feat: add interactive terminal hero section"`
   - Each major section completion:
     - Stats → `"feat: add developer stats dashboard"`
     - About/Timeline → `"feat: implement about section with timeline"`
     - Skills → `"feat: add gamified skills cards"`
     - Projects → `"feat: implement projects showcase"`
     - Contact → `"feat: add contact form with validation"`
   - JavaScript modules → `"feat: add [feature] functionality"`
   - Responsive design → `"feat: implement responsive design"`
   - i18n implementation → `"feat: add multi-language support"`
   - Theme system → `"feat: implement theme switcher"`
   - Easter eggs → `"feat: add easter eggs and interactions"`

3. **Bug Fixes & Improvements:**
   - Use prefix `fix:` for bug fixes
   - Use prefix `style:` for CSS only changes
   - Use prefix `refactor:` for code improvements
   - Use prefix `docs:` for documentation updates

#### GitHub Integration:
- **Share your repo link:** `https://github.com/[your-username]/webfolio`
- Claude will analyze the repository to:
  - Understand current progress
  - Identify completed features
  - Suggest next steps
  - Detect potential issues

#### Workflow Example:
```bash
# After Claude completes a feature
# Claude says: "🔴 COMMIT TIME!"
git status
git add .
git commit -m "feat: description provided by Claude"
git push origin main

# Share the GitHub link with Claude for review
```

## 14. Asset Management Strategy

### 14.1 Development Phase (Current)
**Use external URLs for all images initially:**

#### Placeholder Services:
```html
<!-- Profile Photo -->
<img src="https://source.unsplash.com/400x400/?developer,coding" alt="Profile">

<!-- Project Thumbnails -->
<img src="https://picsum.photos/600/400?random=1" alt="Project 1">

<!-- Background Images -->
background-image: url('https://source.unsplash.com/1920x1080/?terminal,code');

<!-- Tech Logos (Use CDNs) -->
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg">
```

#### Tracking Images:
```css
/* TODO: Replace with local image */
/* Final: /assets/images/profile/photo.jpg */
background-image: url('https://external-url.com/image.jpg');
```

### 14.2 Production Phase (Final)
**Organize all assets locally:**

```
assets/
├── images/
│   ├── profile/
│   │   ├── profile-photo.jpg (400x400)
│   │   └── profile-photo-small.jpg (200x200)
│   ├── projects/
│   │   ├── project-1-thumb.jpg (600x400)
│   │   ├── project-1-preview.gif
│   │   ├── project-2-thumb.jpg
│   │   └── ...
│   ├── skills/
│   │   ├── html5.svg
│   │   ├── css3.svg
│   │   ├── javascript.svg
│   │   └── ... (all tech logos)
│   ├── backgrounds/
│   │   ├── terminal-bg.jpg (1920x1080)
│   │   ├── terminal-bg-mobile.jpg (768x1024)
│   │   └── pattern.svg
│   └── misc/
│       ├── favicon.ico
│       ├── favicon-32x32.png
│       ├── apple-touch-icon.png
│       └── og-image.jpg (1200x630)
```

### 14.3 Image Optimization Guidelines
**Before final commit:**
1. **Formats:**
   - Photos: WebP with JPG fallback
   - Logos/Icons: SVG when possible
   - Screenshots: PNG

2. **Optimization:**
   - Use TinyPNG/TinyJPG for compression
   - Multiple sizes for responsive images
   - Implement lazy loading: `loading="lazy"`

3. **Implementation:**
   ```html
   <picture>
     <source srcset="/assets/images/profile/photo.webp" type="image/webp">
     <img src="/assets/images/profile/photo.jpg" alt="Profile" loading="lazy">
   </picture>
   ```

### 14.4 Copyright & Attribution
- Keep a `credits.txt` file for image attributions
- Use only free-to-use images (Unsplash, Pexels, etc.)
- For final version: prefer original content when possible

## 🎯 Critical Implementation Notes

### Must-Have Features (MVP):
1. **Terminal Hero Section** - This is your signature feature
2. **CSS Variables Everywhere** - No hardcoded colors/spacing
3. **Mobile Responsive** - Test on real devices
4. **At least 3 Projects** - Quality over quantity
5. **Working Contact Form** - EmailJS integration
6. **Clean GitHub Repo** - Recruiters will check

### Nice-to-Have (If Time Permits):
- Easter eggs and Konami code
- Multiple themes beyond dark/light
- Advanced animations
- GitHub stats integration

### Developer Notes:
- Start with terminal functionality first
- Build mobile-first, enhance for desktop
- Comment complex JavaScript logic
- Use semantic HTML throughout
- Test terminal commands thoroughly
- Keep console.log Easter eggs professional

**Final Reminder:** This portfolio should show you're not just another junior developer. You're creative, detail-oriented, and can build engaging experiences with fundamental technologies. Make recruiters remember you! 🚀