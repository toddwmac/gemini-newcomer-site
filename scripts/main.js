// PCN AI Mindset Toolbox - Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    console.log('PCN AI Mindset Toolbox loaded');
    
    // 1. AI Conversation Simulation
    initAIConversation();
    
    // 2. Smooth scrolling for anchor links
    initSmoothScrolling();
    
    // 3. Interactive lesson cards
    initInteractiveCards();
    
    // 4. Progress tracking (local storage)
    initProgressTracking();
    
    // 5. Theme toggle (light/dark mode)
    initThemeToggle();
});

// AI Conversation Simulation
function initAIConversation() {
    const textarea = document.getElementById('first-conversation-prompt-textarea');
    const button = document.getElementById('first-conversation-send-button');
    const responseContainer = document.getElementById('first-conversation-response-container');
    const responseText = document.getElementById('first-conversation-response-text');
    
    if (!textarea || !button) return;
    
    // Sample AI responses based on user input
    const sampleResponses = {
        'default': "Welcome! I'm your AI copilot. I can help you explore Park City's history, plan activities, or answer questions about the area. What would you like to know more about?",
        'history': "Park City has a rich history rooted in silver mining! A great place to start is the Park City Museum on Main Street. You could also take a historical walking tour - would you like me to create one for you?",
        'hiking': "For beginner-friendly hikes with great views, I recommend the Armstrong Trail or the Lost Prospector Trail. Both offer beautiful scenery and are well-maintained. Would you like more details about either trail?",
        'restaurant': "Park City has excellent dining options! For a casual meal, try Five5eeds or Harvest. For something more upscale, Riverhorse on Main is fantastic. What type of cuisine are you interested in?",
        'weather': "Park City weather can vary greatly! Summers are mild and perfect for hiking (70s-80s°F), while winters are cold and snowy (20s-30s°F) - ideal for skiing. Always check the forecast before heading out!"
    };
    
    button.addEventListener('click', function() {
        const userInput = textarea.value.trim().toLowerCase();
        
        if (!userInput) {
            alert('Please type a question or prompt first!');
            textarea.focus();
            return;
        }
        
        // Show loading state
        button.textContent = 'Thinking...';
        button.disabled = true;
        
        // Determine which response to show based on keywords
        let aiResponse = sampleResponses.default;
        
        if (userInput.includes('history') || userInput.includes('historical')) {
            aiResponse = sampleResponses.history;
        } else if (userInput.includes('hike') || userInput.includes('trail') || userInput.includes('walk')) {
            aiResponse = sampleResponses.hiking;
        } else if (userInput.includes('restaurant') || userInput.includes('food') || userInput.includes('eat') || userInput.includes('dinner')) {
            aiResponse = sampleResponses.restaurant;
        } else if (userInput.includes('weather') || userInput.includes('temperature') || userInput.includes('cold')) {
            aiResponse = sampleResponses.weather;
        }
        
        // Simulate AI thinking delay
        setTimeout(() => {
            responseText.textContent = aiResponse;
            responseContainer.classList.remove('hidden');
            
            // Reset button
            button.textContent = 'Send';
            button.disabled = false;
            
            // Scroll to response
            responseContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 1000);
    });
    
    // Allow Enter key to submit (but Shift+Enter for new line)
    textarea.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            button.click();
        }
    });
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') return;
            
            const targetElement = document.querySelector(href);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update URL without page jump
                history.pushState(null, null, href);
            }
        });
    });
}

// Interactive lesson cards with hover effects
function initInteractiveCards() {
    // Add click handlers to lesson cards
    document.querySelectorAll('a[href^="#"]').forEach(card => {
        card.addEventListener('click', function() {
            // Add visual feedback
            this.classList.add('bg-indigo-100', 'border-indigo-300');
            setTimeout(() => {
                this.classList.remove('bg-indigo-100', 'border-indigo-300');
            }, 300);
        });
    });
    
    // Add subtle animation to section headers
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);
    
    // Observe all section headers
    document.querySelectorAll('section h1, section h2').forEach(header => {
        observer.observe(header);
    });
}

// Progress tracking for lessons
function initProgressTracking() {
    const progressKey = 'pcn-ai-lesson-progress';
    
    // Get existing progress or initialize
    let progress = JSON.parse(localStorage.getItem(progressKey)) || {};
    
    // Create progress indicators for each lesson section
    const lessonSections = document.querySelectorAll('section[id^="ai-foundations-"], section[id^="hobbies-"], section[id^="practical-"]');
    
    lessonSections.forEach(section => {
        const sectionId = section.id;
        const isCompleted = progress[sectionId] || false;
        
        // Add a completion checkbox
        const header = section.querySelector('h1');
        if (header) {
            const checkbox = document.createElement('button');
            checkbox.className = `ml-4 inline-flex items-center justify-center w-8 h-8 rounded-full border-2 ${isCompleted ? 'bg-green-500 border-green-600 text-white' : 'bg-white border-gray-300 text-gray-400'}`;
            checkbox.innerHTML = isCompleted ? '✓' : '○';
            checkbox.title = isCompleted ? 'Mark as not completed' : 'Mark as completed';
            checkbox.setAttribute('aria-label', 'Mark lesson completion');
            
            checkbox.addEventListener('click', function() {
                const nowCompleted = !progress[sectionId];
                progress[sectionId] = nowCompleted;
                localStorage.setItem(progressKey, JSON.stringify(progress));
                
                this.className = `ml-4 inline-flex items-center justify-center w-8 h-8 rounded-full border-2 ${nowCompleted ? 'bg-green-500 border-green-600 text-white' : 'bg-white border-gray-300 text-gray-400'}`;
                this.innerHTML = nowCompleted ? '✓' : '○';
                this.title = nowCompleted ? 'Mark as not completed' : 'Mark as completed';
                
                // Show feedback
                showNotification(nowCompleted ? 'Lesson marked as completed!' : 'Lesson marked as not completed');
            });
            
            header.appendChild(checkbox);
        }
    });
    
    // Add progress summary in header
    const totalLessons = lessonSections.length;
    const completedLessons = Object.values(progress).filter(Boolean).length;
    
    if (totalLessons > 0) {
        const progressElement = document.createElement('div');
        progressElement.className = 'hidden md:block ml-4 px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm';
        progressElement.innerHTML = `<strong>Progress:</strong> ${completedLessons}/${totalLessons} lessons`;
        
        const nav = document.querySelector('nav ul');
        if (nav) {
            const li = document.createElement('li');
            li.appendChild(progressElement);
            nav.appendChild(li);
        }
    }
}

// Theme toggle (light/dark mode)
function initThemeToggle() {
    const themeToggle = document.createElement('button');
    themeToggle.className = 'ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200';
    themeToggle.innerHTML = '🌓';
    themeToggle.title = 'Toggle dark/light mode';
    themeToggle.setAttribute('aria-label', 'Toggle theme');
    
    // Check for saved theme or prefer-color-scheme
    const savedTheme = localStorage.getItem('pcn-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.classList.add('dark');
        themeToggle.innerHTML = '☀️';
    }
    
    themeToggle.addEventListener('click', function() {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('pcn-theme', isDark ? 'dark' : 'light');
        this.innerHTML = isDark ? '☀️' : '🌓';
    });
    
    // Add to navigation
    const nav = document.querySelector('nav ul');
    if (nav) {
        const li = document.createElement('li');
        li.appendChild(themeToggle);
        nav.appendChild(li);
    }
}

// Helper function to show notifications
function showNotification(message) {
    // Remove existing notification
    const existing = document.getElementById('pcn-notification');
    if (existing) existing.remove();
    
    // Create new notification
    const notification = document.createElement('div');
    notification.id = 'pcn-notification';
    notification.className = 'fixed top-4 right-4 z-50 px-4 py-2 bg-green-500 text-white rounded-lg shadow-lg transform transition-transform duration-300';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Auto-remove after 3 seconds
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    .animate-fade-in {
        animation: fadeIn 0.6s ease-out;
    }
    
    .dark {
        background-color: #1f2937;
        color: #f9fafb;
    }
    
    .dark .bg-white {
        background-color: #374151;
    }
    
    .dark .bg-gray-50 {
        background-color: #4b5563;
    }
    
    .dark .text-gray-800 {
        color: #e5e7eb;
    }
    
    .dark .text-gray-700 {
        color: #d1d5db;
    }
    
    .dark .border {
        border-color: #4b5563;
    }
    
    .dark .bg-indigo-50 {
        background-color: #3730a3;
    }
    
    .dark .text-indigo-600 {
        color: #a5b4fc;
    }
    
    /* Smooth transitions for theme changes */
    * {
        transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
    }
`;
document.head.appendChild(style);
