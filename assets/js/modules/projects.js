// Projects Module

class ProjectsManager {
    constructor() {
        this.projectsGrid = document.getElementById('projectsGrid');
        this.sortSelect = document.getElementById('projectSort');
        this.projects = [];

        this.init();
    }

    async init() {
        // Load projects data
        await this.loadProjects();

        // Setup sort functionality
        this.sortSelect?.addEventListener('change', (e) => {
            this.sortProjects(e.target.value);
        });

        // Render initial projects
        this.renderProjects();
    }

    async loadProjects() {
        try {
            const response = await fetch('/data/projects.json');
            const data = await response.json();
            this.projects = data.projects;
        } catch (error) {
            console.error('Failed to load projects:', error);
            // Fallback data
            this.projects = this.getFallbackProjects();
        }
    }

    getFallbackProjects() {
        return [
            {
                title: "Interactive Portfolio",
                problem: "Traditional portfolios are boring",
                solution: "Created an interactive terminal-based portfolio",
                result: "Unique, memorable experience",
                technologies: ["HTML5", "CSS3", "JavaScript"],
                difficulty: "Advanced",
                duration: "2 weeks",
                image: "https://source.unsplash.com/600x400/?code,terminal",
                liveUrl: "#",
                githubUrl: "https://github.com/diogo-costa-silva/webfolio",
                featured: true
            },
            {
                title: "E-Commerce Platform",
                problem: "Small business needed online presence",
                solution: "Built full-stack e-commerce solution",
                result: "Increased sales by 200%",
                technologies: ["React", "Node.js", "MongoDB"],
                difficulty: "Expert",
                duration: "2 months",
                image: "https://source.unsplash.com/600x400/?ecommerce,shopping",
                liveUrl: "#",
                githubUrl: "#",
                featured: true
            }
        ];
    }

    renderProjects(projectsToRender = this.projects) {
        if (!this.projectsGrid) return;

        this.projectsGrid.innerHTML = '';

        projectsToRender.forEach((project, index) => {
            const card = this.createProjectCard(project);

            // Add animation delay
            setTimeout(() => {
                this.projectsGrid.appendChild(card);
                card.classList.add('animate-fade-in-up');
            }, index * 100);
        });
    }

    createProjectCard(project) {
        const card = document.createElement('div');
        card.className = 'project-card';

        // Create tech badges
        const techBadges = project.technologies
            .map(tech => `<span class="tech-badge">${tech}</span>`)
            .join('');

        card.innerHTML = `
            <div class="project-card__preview">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
                <span class="project-card__difficulty">${project.difficulty}</span>
            </div>
            <div class="project-card__content">
                <h3 class="project-card__title">${project.title}</h3>

                <div class="project-card__structure">
                    <span class="project-card__label">Problem:</span>
                    <span class="project-card__text">${project.problem}</span>

                    <span class="project-card__label">Solution:</span>
                    <span class="project-card__text">${project.solution}</span>

                    <span class="project-card__label">Result:</span>
                    <span class="project-card__text">${project.result}</span>
                </div>

                <div class="project-card__tech">
                    ${techBadges}
                </div>

                <div class="project-card__actions">
                    ${project.liveUrl !== '#' ?
                        `<a href="${project.liveUrl}" target="_blank" class="project-card__link">Live Demo</a>` : ''
                    }
                    ${project.githubUrl !== '#' ?
                        `<a href="${project.githubUrl}" target="_blank" class="project-card__link">View Code</a>` : ''
                    }
                </div>
            </div>
        `;

        return card;
    }

    sortProjects(sortBy) {
        let sorted = [...this.projects];

        switch(sortBy) {
            case 'date':
                // Sort by ID (assuming newer projects have higher IDs)
                sorted.sort((a, b) => (b.id || 0) - (a.id || 0));
                break;
            case 'difficulty':
                const difficultyOrder = {
                    'Beginner': 1,
                    'Intermediate': 2,
                    'Advanced': 3,
                    'Expert': 4
                };
                sorted.sort((a, b) =>
                    (difficultyOrder[b.difficulty] || 0) - (difficultyOrder[a.difficulty] || 0)
                );
                break;
            case 'tech':
                // Sort by number of technologies
                sorted.sort((a, b) => b.technologies.length - a.technologies.length);
                break;
        }

        this.renderProjects(sorted);
    }
}

// Export for use in main.js
window.ProjectsManager = ProjectsManager;