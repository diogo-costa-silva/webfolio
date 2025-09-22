// Form Validation and Handling Module

class FormManager {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.formFeedback = document.getElementById('formFeedback');
        this.submitButton = this.form?.querySelector('button[type="submit"]');

        this.init();
    }

    init() {
        if (!this.form) return;

        // Add form validation
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));

        // Add real-time validation
        const inputs = this.form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => this.clearError(input));
        });

        // Initialize EmailJS (you'll need to add your service ID)
        // Uncomment and configure when you have EmailJS account
        // emailjs.init("YOUR_PUBLIC_KEY");
    }

    async handleSubmit(e) {
        e.preventDefault();

        // Validate all fields
        if (!this.validateForm()) {
            this.showFeedback('Please fill in all required fields correctly.', 'error');
            return;
        }

        // Show loading state
        this.setLoadingState(true);

        try {
            // Collect form data
            const formData = {
                name: this.form.name.value,
                email: this.form.email.value,
                subject: this.form.subject.value,
                message: this.form.message.value,
                timestamp: new Date().toISOString()
            };

            // For now, just simulate sending
            // In production, you would use EmailJS or another service
            await this.simulateSend(formData);

            // Success
            this.showFeedback('Message sent successfully! I\'ll get back to you soon.', 'success');
            this.form.reset();

            // Log to console for demo
            console.log('Form submitted:', formData);

        } catch (error) {
            console.error('Form submission error:', error);
            this.showFeedback('Failed to send message. Please try again later.', 'error');
        } finally {
            this.setLoadingState(false);
        }
    }

    validateForm() {
        const inputs = this.form.querySelectorAll('[required]');
        let isValid = true;

        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isValid = false;
            }
        });

        return isValid;
    }

    validateField(field) {
        const value = field.value.trim();
        let isValid = true;

        // Remove previous error
        this.clearError(field);

        // Check if required field is empty
        if (field.hasAttribute('required') && !value) {
            this.showError(field, 'This field is required');
            isValid = false;
        }

        // Validate email
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                this.showError(field, 'Please enter a valid email address');
                isValid = false;
            }
        }

        // Validate minimum length
        if (field.name === 'message' && value && value.length < 10) {
            this.showError(field, 'Message must be at least 10 characters long');
            isValid = false;
        }

        // Validate name (letters and spaces only)
        if (field.name === 'name' && value) {
            const nameRegex = /^[a-zA-ZÀ-ÿ\s]+$/;
            if (!nameRegex.test(value)) {
                this.showError(field, 'Please enter a valid name');
                isValid = false;
            }
        }

        return isValid;
    }

    showError(field, message) {
        field.classList.add('error');

        // Create error message element
        const errorElement = document.createElement('span');
        errorElement.className = 'field-error';
        errorElement.textContent = message;
        errorElement.style.cssText = `
            display: block;
            color: var(--color-error);
            font-size: 12px;
            margin-top: 4px;
        `;

        // Insert error after field
        field.parentElement.appendChild(errorElement);
    }

    clearError(field) {
        field.classList.remove('error');
        const errorElement = field.parentElement.querySelector('.field-error');
        if (errorElement) {
            errorElement.remove();
        }
    }

    showFeedback(message, type) {
        if (!this.formFeedback) return;

        this.formFeedback.textContent = message;
        this.formFeedback.className = `form-feedback ${type}`;
        this.formFeedback.style.display = 'block';

        // Auto-hide after 5 seconds
        setTimeout(() => {
            this.formFeedback.style.display = 'none';
        }, 5000);
    }

    setLoadingState(isLoading) {
        if (!this.submitButton) return;

        if (isLoading) {
            this.submitButton.disabled = true;
            this.submitButton.dataset.originalText = this.submitButton.textContent;
            this.submitButton.innerHTML = '<span class="loading-dots">Sending</span>';

            // Add loading animation
            const style = document.createElement('style');
            style.id = 'loading-style';
            style.textContent = `
                .loading-dots::after {
                    content: '';
                    animation: dots 1.5s steps(4, end) infinite;
                }

                @keyframes dots {
                    0%, 20% { content: ''; }
                    40% { content: '.'; }
                    60% { content: '..'; }
                    80%, 100% { content: '...'; }
                }
            `;
            document.head.appendChild(style);
        } else {
            this.submitButton.disabled = false;
            this.submitButton.textContent = this.submitButton.dataset.originalText || 'Send Message';

            // Remove loading style
            const loadingStyle = document.getElementById('loading-style');
            if (loadingStyle) {
                loadingStyle.remove();
            }
        }
    }

    // Simulate sending email (replace with actual EmailJS implementation)
    simulateSend(data) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ success: true });
            }, 2000);
        });
    }

    // EmailJS integration (uncomment and configure when ready)
    async sendWithEmailJS(formData) {
        // const templateParams = {
        //     from_name: formData.name,
        //     from_email: formData.email,
        //     subject: formData.subject,
        //     message: formData.message,
        //     to_name: 'Diogo Silva',
        // };

        // return emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams);
    }
}

// Export for use in main.js
window.FormManager = FormManager;