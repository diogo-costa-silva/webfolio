// Skills Module

class SkillsManager {
    constructor() {
        this.skillsGrid = document.getElementById('skillsGrid');
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.skills = [];
        this.currentFilter = 'all';

        this.init();
    }

    async init() {
        // Load skills data
        await this.loadSkills();

        // Setup filter buttons
        this.filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.dataset.filter;
                this.filterSkills(filter);

                // Update active button
                this.filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });

        // Render initial skills
        this.renderSkills();
    }

    async loadSkills() {
        try {
            const response = await fetch('/data/skills.json');
            const data = await response.json();
            this.skills = data.skills;
        } catch (error) {
            console.error('Failed to load skills:', error);
            // Fallback data
            this.skills = this.getFallbackSkills();
        }
    }

    getFallbackSkills() {
        return [
            {
                name: "HTML5",
                category: "frontend",
                level: 5,
                experience: "3+ years",
                projects: 25,
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
                rarity: "common"
            },
            {
                name: "CSS3",
                category: "frontend",
                level: 5,
                experience: "3+ years",
                projects: 25,
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
                rarity: "common"
            },
            {
                name: "JavaScript",
                category: "frontend",
                level: 4,
                experience: "2+ years",
                projects: 20,
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
                rarity: "rare"
            }
        ];
    }

    renderSkills(skillsToRender = this.skills) {
        if (!this.skillsGrid) return;

        this.skillsGrid.innerHTML = '';

        skillsToRender.forEach((skill, index) => {
            const card = this.createSkillCard(skill);

            // Add animation delay
            setTimeout(() => {
                this.skillsGrid.appendChild(card);
                card.classList.add('animate-fade-in-up');
            }, index * 50);
        });
    }

    createSkillCard(skill) {
        const card = document.createElement('div');
        card.className = 'skill-card';
        card.dataset.rarity = skill.rarity;
        card.dataset.category = skill.category;

        // Create stars for level
        let stars = '';
        for (let i = 1; i <= 5; i++) {
            stars += `<div class="skill-card__star ${i <= skill.level ? '' : 'empty'}"></div>`;
        }

        card.innerHTML = `
            <img src="${skill.icon}" alt="${skill.name}" class="skill-card__icon" loading="lazy">
            <div class="skill-card__name">${skill.name}</div>
            <div class="skill-card__level">${stars}</div>
            <div class="skill-card__experience">${skill.experience}</div>
            <div class="skill-card__projects">${skill.projects} projects</div>
        `;

        // Add click event for card flip or details
        card.addEventListener('click', () => {
            this.showSkillDetails(skill);
        });

        return card;
    }

    filterSkills(filter) {
        this.currentFilter = filter;

        if (filter === 'all') {
            this.renderSkills(this.skills);
        } else {
            const filtered = this.skills.filter(skill => skill.category === filter);
            this.renderSkills(filtered);
        }
    }

    showSkillDetails(skill) {
        // For now, just add a simple animation
        // Could expand to show modal with more details
        console.log('Skill clicked:', skill);
    }
}

// Export for use in main.js
window.SkillsManager = SkillsManager;