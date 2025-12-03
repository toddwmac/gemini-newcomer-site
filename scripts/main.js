// PCN AI Mindset Toolbox - Interactive Features

// Navigation Router - Simplified Architecture
// Uses query parameters as primary method, hash as fallback for backward compatibility

// ========================================
// LESSON METADATA - Foundation for Navigation Features
// ========================================

const PART_METADATA = {
    "ai-foundations": {
        name: "AI Foundations",
        overviewId: "ai-foundations-section",
        totalLessons: 4
    },
    "hobbies": {
        name: "AI in Your Hobbies",
        overviewId: "hobbies-section",
        totalLessons: 6
    },
    "practical": {
        name: "Practical Life Enhancement",
        overviewId: "practical-life-section",
        totalLessons: 4
    }
};

const LESSON_METADATA = {
    // AI Foundations Overview
    "ai-foundations-section": {
        part: null,
        partName: null,
        title: "AI Foundations Overview",
        order: null,
        isOverview: true,
        nextLesson: null,
        prevLesson: null
    },
    // AI Foundations Lessons
    "ai-foundations-welcome": {
        part: "ai-foundations",
        partName: "AI Foundations",
        title: "Welcome to Your AI Copilot",
        order: 1,
        nextLesson: "ai-foundations-beyond-search",
        prevLesson: null
    },
    "ai-foundations-beyond-search": {
        part: "ai-foundations",
        partName: "AI Foundations",
        title: "Beyond a Search Engine",
        order: 2,
        nextLesson: "ai-foundations-first-conversation",
        prevLesson: "ai-foundations-welcome"
    },
    "ai-foundations-first-conversation": {
        part: "ai-foundations",
        partName: "AI Foundations",
        title: "Your First Conversation with AI",
        order: 3,
        nextLesson: "ai-foundations-prompting",
        prevLesson: "ai-foundations-beyond-search"
    },
    "ai-foundations-prompting": {
        part: "ai-foundations",
        partName: "AI Foundations",
        title: "The Gentle Art of Prompting",
        order: 4,
        nextLesson: null,
        prevLesson: "ai-foundations-first-conversation"
    },
    // Hobbies Overview
    "hobbies-section": {
        part: null,
        partName: null,
        title: "AI in Your Hobbies Overview",
        order: null,
        isOverview: true,
        nextLesson: null,
        prevLesson: null
    },
    // Hobbies Lessons
    "hobbies-hiker": {
        part: "hobbies",
        partName: "AI in Your Hobbies",
        title: "AI for the Hiker",
        order: 1,
        nextLesson: "hobbies-book-club",
        prevLesson: null
    },
    "hobbies-book-club": {
        part: "hobbies",
        partName: "AI in Your Hobbies",
        title: "AI for the Book Club",
        order: 2,
        nextLesson: "hobbies-gardener",
        prevLesson: "hobbies-hiker"
    },
    "hobbies-gardener": {
        part: "hobbies",
        partName: "AI in Your Hobbies",
        title: "AI for the Gardener",
        order: 3,
        nextLesson: "hobbies-writer",
        prevLesson: "hobbies-book-club"
    },
    "hobbies-writer": {
        part: "hobbies",
        partName: "AI in Your Hobbies",
        title: "AI for the Writer",
        order: 4,
        nextLesson: "hobbies-artist",
        prevLesson: "hobbies-gardener"
    },
    "hobbies-artist": {
        part: "hobbies",
        partName: "AI in Your Hobbies",
        title: "AI for the Artist",
        order: 5,
        nextLesson: "hobbies-social-planner",
        prevLesson: "hobbies-writer"
    },
    "hobbies-social-planner": {
        part: "hobbies",
        partName: "AI in Your Hobbies",
        title: "AI for the Social Planner",
        order: 6,
        nextLesson: null,
        prevLesson: "hobbies-artist"
    },
    // Practical Life Overview
    "practical-life-section": {
        part: null,
        partName: null,
        title: "Practical Life Enhancement Overview",
        order: null,
        isOverview: true,
        nextLesson: null,
        prevLesson: null
    },
    // Practical Life Lessons
    "practical-kitchen": {
        part: "practical",
        partName: "Practical Life Enhancement",
        title: "AI in the Kitchen",
        order: 1,
        nextLesson: "practical-travel",
        prevLesson: null
    },
    "practical-travel": {
        part: "practical",
        partName: "Practical Life Enhancement",
        title: "Travel Planning Made Easy",
        order: 2,
        nextLesson: "practical-connected",
        prevLesson: "practical-kitchen"
    },
    "practical-connected": {
        part: "practical",
        partName: "Practical Life Enhancement",
        title: "Staying Connected",
        order: 3,
        nextLesson: "practical-productivity",
        prevLesson: "practical-travel"
    },
    "practical-productivity": {
        part: "practical",
        partName: "Practical Life Enhancement",
        title: "AI for General Productivity",
        order: 4,
        nextLesson: null,
        prevLesson: "practical-connected"
    }
};

// ========================================
// NAVIGATION RENDERING FUNCTIONS
// ========================================

// Render breadcrumb navigation (minimal, only for page headers)
function renderBreadcrumbs() {
    // Breadcrumbs are now handled minimally - only shown in header
    // Not added to lesson content to avoid clutter
    return '';
}

// Update active state in header navigation
function updateHeaderActiveState(lessonId) {
    // Remove all active states
    const headerLinks = document.querySelectorAll('header nav a');
    headerLinks.forEach(link => {
        link.classList.remove('text-indigo-300', 'border-b-4', 'border-indigo-500', 'pb-1');
        link.classList.add('hover:text-gray-300');
    });

    if (!lessonId) return;

    const metadata = LESSON_METADATA[lessonId];
    if (!metadata) return;

    // Determine which header link to highlight
    let targetHash = '';
    if (metadata.isOverview) {
        targetHash = `#${lessonId}`;
    } else {
        const partInfo = PART_METADATA[metadata.part];
        targetHash = `#${partInfo.overviewId}`;
    }

    // Find and highlight the appropriate header link
    const activeLink = document.querySelector(`header nav a[href="${targetHash}"]`);
    if (activeLink) {
        activeLink.classList.remove('hover:text-gray-300');
        activeLink.classList.add('text-indigo-300', 'border-b-4', 'border-indigo-500', 'pb-1');
    }
}

// Render previous/next navigation - minimal footer links only
function renderPrevNextNav(lessonId) {
    const metadata = LESSON_METADATA[lessonId];
    if (!metadata) return '';

    // Only show for actual lessons, not overview pages
    if (metadata.isOverview) return '';

    const prevMetadata = metadata.prevLesson ? LESSON_METADATA[metadata.prevLesson] : null;
    const nextMetadata = metadata.nextLesson ? LESSON_METADATA[metadata.nextLesson] : null;

    if (!prevMetadata && !nextMetadata) return '';

    let prevLink = '';
    let nextLink = '';

    if (prevMetadata) {
        prevLink = `<a href="?lesson=${metadata.prevLesson}" class="text-gray-400 hover:text-indigo-600 transition-colors">← ${prevMetadata.title}</a>`;
    }

    if (nextMetadata) {
        nextLink = `<a href="?lesson=${metadata.nextLesson}" class="text-gray-400 hover:text-indigo-600 transition-colors">${nextMetadata.title} →</a>`;
    }

    return `
        <div class="mt-16 pt-8 border-t border-gray-100 flex justify-between items-center text-xs text-gray-500 gap-4">
            ${prevLink ? `<div>${prevLink}</div>` : '<div></div>'}
            ${nextLink ? `<div class="text-right">${nextLink}</div>` : '<div></div>'}
        </div>
    `;
}

// Render lesson metadata (position in series)
function renderLessonMetadata() {
    // Lesson metadata already provided in lesson HTML
    // Removing duplicate display to avoid clutter
    return '';
}

// Enhance overview cards with progress badges
function enhanceOverviewCards(lessonContentContainer) {
    // Get progress from localStorage
    const progressKey = "pcn-ai-lesson-progress";
    const progress = JSON.parse(localStorage.getItem(progressKey)) || {};

    // Find all lesson cards in overview
    const lessonCards = lessonContentContainer.querySelectorAll('a[href*="#ai-foundations-"], a[href*="#hobbies-"], a[href*="#practical-"]');

    lessonCards.forEach(card => {
        const href = card.getAttribute('href');
        const lessonId = href.substring(href.indexOf('#') + 1);

        if (progress[lessonId]) {
            // Add completed badge
            if (!card.classList.contains('relative')) {
                card.classList.add('relative');
            }

            // Check if badge already exists
            if (!card.querySelector('.completion-badge')) {
                const badge = document.createElement('div');
                badge.className = 'completion-badge absolute top-3 right-3 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg';
                badge.innerHTML = '✓';
                badge.title = 'Completed';
                card.appendChild(badge);
            }
        }
    });
}

// Initialize keyboard navigation
function initKeyboardNavigation() {
    document.addEventListener('keydown', (event) => {
        // Ignore if user is typing in input/textarea
        if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
            return;
        }

        const currentLesson = getLessonFromURL();
        if (!currentLesson) return;

        const metadata = LESSON_METADATA[currentLesson];
        if (!metadata || metadata.isOverview) return;

        if (event.key === 'ArrowLeft' && metadata.prevLesson) {
            event.preventDefault();
            navigateToLesson(metadata.prevLesson);
        } else if (event.key === 'ArrowRight' && metadata.nextLesson) {
            event.preventDefault();
            navigateToLesson(metadata.nextLesson);
        }
    });
}

// Get lesson ID from URL (checks query param first, then hash)
function getLessonFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const lessonParam = urlParams.get('lesson');
    
    if (lessonParam) {
        return lessonParam;
    }
    
    // Fallback to hash for backward compatibility
    const hash = window.location.hash;
    if (hash && hash.length > 1) {
        return hash.substring(1);
    }
    
    return null;
}

// Central navigation function - handles all lesson navigation
function navigateToLesson(lessonId) {
    // Validate lesson ID pattern
    if (!lessonId || (!lessonId.startsWith("ai-foundations-") && 
                      !lessonId.startsWith("hobbies-") && 
                      !lessonId.startsWith("practical-"))) {
        console.warn("Invalid lesson ID:", lessonId);
        return;
    }
    
    // Update URL with query parameter (remove hash if present)
    const baseUrl = window.location.pathname;
    const newUrl = baseUrl + '?lesson=' + encodeURIComponent(lessonId);
    
    // Update history without page reload
    history.pushState({ lesson: lessonId }, '', newUrl);
    
    // Load the lesson content
    loadLessonContent(lessonId);
}

document.addEventListener("DOMContentLoaded", function() {
    loadHeader();
    loadFooter();

    // Initialize interactive features
    initAIConversation();
    initNavigation();
    initInteractiveCards();
    initProgressTracking();
    initThemeToggle();
    initKeyboardNavigation();
    
    // Handle initial page load - check for lesson in URL
    const lessonId = getLessonFromURL();
    if (lessonId) {
        // If hash was used, convert to query parameter
        if (window.location.hash && !window.location.search.includes('lesson=')) {
            navigateToLesson(lessonId);
        } else {
            // Already using query parameter, just load the content
            loadLessonContent(lessonId);
        }
    }
    
    // Handle back/forward browser buttons
    window.addEventListener("popstate", function(e) {
        const lessonId = getLessonFromURL();
        if (lessonId) {
            loadLessonContent(lessonId);
            updateHeaderActiveState(lessonId);
        } else {
            // No lesson in URL, clear content
            const container = document.getElementById("lesson-content-container");
            if (container) {
                container.innerHTML = "";
            }
            updateHeaderActiveState(null);
        }
    });
});

// Function to load lesson content dynamically
async function loadLessonContent(lessonId) {
    console.log("loadLessonContent called with lessonId:", lessonId);
    const lessonContentContainer = document.getElementById("lesson-content-container");
    if (!lessonContentContainer) {
        console.error("lesson-content-container not found!");
        return;
    }

    // Clear existing content
    lessonContentContainer.innerHTML = "Loading lesson...";

    // Map lesson IDs to their respective HTML files
    const lessonFileMap = {
        "ai-foundations-section": "ai-foundations-overview.html", // A new overview file for the section
        "ai-foundations-welcome": "ai-foundations-welcome.html",
        "ai-foundations-beyond-search": "ai-foundations-beyond-search.html",
        "ai-foundations-first-conversation": "ai-foundations-first-conversation.html",
        "ai-foundations-prompting": "ai-foundations-prompting.html",
        "hobbies-section": "hobbies-overview.html", // New overview file
        "hobbies-hiker": "hobbies-hiker.html",
        "hobbies-book-club": "hobbies-book-club.html",
        "hobbies-gardener": "hobbies-gardener.html",
        "hobbies-writer": "hobbies-writer.html",
        "hobbies-artist": "hobbies-artist.html",
        "hobbies-social-planner": "hobbies-social-planner.html",
        "practical-life-section": "practical-life-overview.html", // New overview file
        "practical-kitchen": "practical-kitchen.html",
        "practical-travel": "practical-travel.html",
        "practical-connected": "practical-connected.html",
        "practical-productivity": "practical-productivity.html",
    };

    const lessonPath = `lessons/${lessonFileMap[lessonId] || '404.html'}`;
    console.log("Loading lesson from path:", lessonPath);

    // Check if running on file:// protocol (CORS issue)
    const isFileProtocol = window.location.protocol === 'file:';
    
    try {
        console.log("Fetching lesson content...");
        const response = await fetch(lessonPath);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const lessonHtml = await response.text();
        console.log("Lesson content loaded successfully, length:", lessonHtml.length);

        // Build complete content with navigation elements
        let completeContent = '';

        // Add breadcrumbs
        completeContent += renderBreadcrumbs(lessonId);

        // Add lesson metadata (for non-overview lessons)
        if (!LESSON_METADATA[lessonId]?.isOverview) {
            completeContent += renderLessonMetadata(lessonId);
        }

        // Add the lesson content
        completeContent += lessonHtml;

        // Add prev/next navigation
        completeContent += renderPrevNextNav(lessonId);

        lessonContentContainer.innerHTML = completeContent;

        // Update header active state
        updateHeaderActiveState(lessonId);

        // Re-initialize interactive elements for the newly loaded content
        initAIConversation(); // Only if the loaded content contains the AI conversation elements
        initInteractiveCards(); // For any new cards within the loaded lesson
        initProgressTracking(); // To apply progress tracking to the new lesson

        // Enhance overview cards with progress badges if this is an overview page
        if (LESSON_METADATA[lessonId]?.isOverview) {
            enhanceOverviewCards(lessonContentContainer);
        }

        // Scroll to the top of the loaded content
        lessonContentContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });

    } catch (error) {
        console.error(`Failed to load lesson content for ${lessonId}:`, error);
        console.error(`Attempted path: ${lessonPath}`);
        console.error(`Protocol: ${window.location.protocol}`);
        
        // Provide helpful error message based on the error type
        let errorMessage = '';
        let errorDetails = '';
        
        if (isFileProtocol) {
            errorMessage = 'Cannot load lessons when opening file directly';
            errorDetails = `
                <p class="text-sm mt-2">This site needs to be served through a web server due to browser security restrictions.</p>
                <p class="text-sm mt-2 font-semibold">To fix this:</p>
                <ol class="text-sm mt-2 list-decimal list-inside space-y-1 ml-4">
                    <li>Open PowerShell in this project directory</li>
                    <li>Run: <code class="bg-gray-100 px-1 py-0.5 rounded">npm run dev</code></li>
                    <li>Open the URL shown in your browser (usually http://localhost:8080)</li>
                </ol>
                <p class="text-sm mt-2">Or use Python: <code class="bg-gray-100 px-1 py-0.5 rounded">python -m http.server 8080</code></p>
            `;
        } else if (error.message.includes('404') || error.message.includes('Failed to fetch')) {
            errorMessage = `Lesson file not found: ${lessonPath}`;
            errorDetails = `<p class="text-sm mt-2">The lesson file "${lessonFileMap[lessonId] || 'unknown'}" may be missing from the lessons folder.</p>`;
        } else {
            errorMessage = `Error loading lesson: ${lessonId}`;
            errorDetails = `<p class="text-sm mt-2">Error details: ${error.message}</p>`;
        }
        
        lessonContentContainer.innerHTML = `
            <div class="p-6 bg-red-50 border border-red-200 rounded-lg">
                <p class="text-red-600 font-semibold">${errorMessage}</p>
                ${errorDetails}
                <p class="text-sm mt-4 text-gray-600">Check the browser console (F12) for more details.</p>
            </div>
        `;
    }
}

// AI Conversation Simulation
function initAIConversation() {
    const textarea = document.getElementById("first-conversation-prompt-textarea");
    const button = document.getElementById("first-conversation-send-button");
    const responseContainer = document.getElementById("first-conversation-response-container");
    const responseText = document.getElementById("first-conversation-response-text");
    
    if (!textarea || !button) return;
    
    // Sample AI responses based on user input
    const sampleResponses = {
        "default": "Welcome! I'm your AI copilot. I can help you explore Park City's history, plan activities, or answer questions about the area. What would you like to know more about?",
        "history": "Park City has a rich history rooted in silver mining! A great place to start is the Park City Museum on Main Street. You could also take a historical walking tour - would you like me to create one for you?",
        "hiking": "For beginner-friendly hikes with great views, I recommend the Armstrong Trail or the Lost Prospector Trail. Both offer beautiful scenery and are well-maintained. Would you like more details about either trail?",
        "restaurant": "Park City has excellent dining options! For a casual meal, try Five5eeds or Harvest. For something more upscale, Riverhorse on Main is fantastic. What type of cuisine are you interested in?",
        "weather": "Park City weather can vary greatly! Summers are mild and perfect for hiking (70s-80s°F), while winters are cold and snowy (20s-30s°F) - ideal for skiing. Always check the forecast before heading out!"
    };
    
    button.addEventListener("click", function() {
        const userInput = textarea.value.trim().toLowerCase();
        
        if (!userInput) {
            alert("Please type a question or prompt first!");
            textarea.focus();
            return;
        }
        
        // Show loading state
        button.textContent = "Thinking...";
        button.disabled = true;
        
        // Determine which response to show based on keywords
        let aiResponse = sampleResponses.default;
        
        if (userInput.includes("history") || userInput.includes("historical")) {
            aiResponse = sampleResponses.history;
        } else if (userInput.includes("hike") || userInput.includes("trail") || userInput.includes("walk")) {
            aiResponse = sampleResponses.hiking;
        } else if (userInput.includes("restaurant") || userInput.includes("food") || userInput.includes("eat") || userInput.includes("dinner")) {
            aiResponse = sampleResponses.restaurant;
        } else if (userInput.includes("weather") || userInput.includes("temperature") || userInput.includes("cold")) {
            aiResponse = sampleResponses.weather;
        }
        
        // Simulate AI thinking delay
        setTimeout(() => {
            responseText.textContent = aiResponse;
            responseContainer.classList.remove("hidden");
            
            // Reset button
            button.textContent = "Send";
            button.disabled = false;
            
            // Scroll to response
            responseContainer.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }, 1000);
    });
    
    // Allow Enter key to submit (but Shift+Enter for new line)
    textarea.addEventListener("keydown", function(e) {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            button.click();
        }
    });
}

// Simple navigation handler - converts hash links to query parameter navigation
function initNavigation() {
    // Single event delegation listener for all anchor link clicks
    document.addEventListener("click", function(e) {
        const anchor = e.target.closest("a");
        if (!anchor) return;
        
        const href = anchor.getAttribute("href");
        if (!href) return;
        
        // Handle hash links (convert to query parameter navigation)
        if (href.startsWith("#")) {
            if (href === "#") {
                e.preventDefault();
                return;
            }
            
            const targetId = href.substring(1);
            
            // Check if it's a lesson link
            if (targetId.startsWith("ai-foundations-") || targetId.startsWith("hobbies-") || targetId.startsWith("practical-")) {
                e.preventDefault();
                navigateToLesson(targetId);
                return;
            }
            
            // Handle internal anchors (scroll to element)
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
                // Update URL with hash for internal anchors
                history.pushState(null, null, href);
                return;
            }
        }
        
        // Handle root link (/) - clear lesson content and scroll to top
        if (href === "/" || href === window.location.pathname) {
            e.preventDefault();
            const lessonContentContainer = document.getElementById("lesson-content-container");
            if (lessonContentContainer) {
                lessonContentContainer.innerHTML = "";
            }
            window.scrollTo({ top: 0, behavior: "smooth" });
            history.pushState(null, null, "/");
        }
        
        // Add visual feedback for card-style links
        if (anchor.classList.contains("block") || anchor.closest(".grid")) {
            anchor.classList.add("bg-indigo-100", "border-indigo-300");
            setTimeout(() => {
                anchor.classList.remove("bg-indigo-100", "border-indigo-300");
            }, 300);
        }
    });
}

// Interactive lesson cards with hover effects
function initInteractiveCards() {
    // Note: Click handlers for links are now handled by initNavigation via event delegation
    // This function only handles visual effects that don't interfere with navigation
    
    // Add subtle animation to section headers
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-fade-in");
            }
        });
    }, observerOptions);
    
    // Observe all section headers
    // This part now needs to target dynamically loaded content
    // The observer will be re-initialized after loadLessonContent
    document.querySelectorAll("#lesson-content-container section h1, #lesson-content-container section h2").forEach(header => {
        observer.observe(header);
    });
}

// Progress tracking for lessons
function initProgressTracking() {
    const progressKey = "pcn-ai-lesson-progress";
    
    // Get existing progress or initialize
    let progress = JSON.parse(localStorage.getItem(progressKey)) || {};
    
    // Create progress indicators for each lesson section
    const lessonSections = document.querySelectorAll("#lesson-content-container section[id^=\"ai-foundations-\"], #lesson-content-container section[id^=\"hobbies-\"], #lesson-content-container section[id^=\"practical-\"]");
    
    lessonSections.forEach(section => {
        const sectionId = section.id;
        const isCompleted = progress[sectionId] || false;
        
        // Add a completion checkbox
        const header = section.querySelector("h1");
        if (header) {
            const checkbox = document.createElement("button");
            checkbox.className = `ml-4 inline-flex items-center justify-center w-8 h-8 rounded-full border-2 ${isCompleted ? 'bg-green-500 border-green-600 text-white' : 'bg-white border-gray-300 text-gray-400'}`;
            checkbox.innerHTML = isCompleted ? '✓' : '○';
            checkbox.title = isCompleted ? 'Mark as not completed' : 'Mark as completed';
            checkbox.setAttribute("aria-label", "Mark lesson completion");
            
            checkbox.addEventListener("click", function() {
                const nowCompleted = !progress[sectionId];
                progress[sectionId] = nowCompleted;
                localStorage.setItem(progressKey, JSON.stringify(progress));
                
                this.className = `ml-4 inline-flex items-center justify-center w-8 h-8 rounded-full border-2 ${nowCompleted ? 'bg-green-500 border-green-600 text-white' : 'bg-white border-gray-300 text-gray-400'}`;
                this.innerHTML = nowCompleted ? '✓' : '○';
                this.title = nowCompleted ? 'Mark as not completed' : 'Mark as completed';
                
                // Show feedback
                showNotification(nowCompleted ? "Lesson marked as completed!" : "Lesson marked as not completed");
            });
            
            header.appendChild(checkbox);
        }
    });
    
    // Add progress summary in header
    const totalLessons = lessonSections.length;
    const completedLessons = Object.values(progress).filter(Boolean).length;
    
    if (totalLessons > 0) {
        const progressElement = document.createElement("div");
        progressElement.className = "hidden md:block ml-4 px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm";
        progressElement.innerHTML = `<strong>Progress:</strong> ${completedLessons}/${totalLessons} lessons`;
        
        const nav = document.querySelector("nav ul");
        if (nav) {
            const li = document.createElement("li");
            li.appendChild(progressElement);
            nav.appendChild(li);
        }
    }
}

// Theme toggle (light/dark mode)
function initThemeToggle() {
    const themeToggle = document.createElement("button");
    themeToggle.className = "ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200";
    themeToggle.innerHTML = "🌓";
    themeToggle.title = "Toggle dark/light mode";
    themeToggle.setAttribute("aria-label", "Toggle theme");
    
    // Check for saved theme or prefer-color-scheme
    const savedTheme = localStorage.getItem("pcn-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
        document.documentElement.classList.add("dark");
        themeToggle.innerHTML = "☀️";
    }
    
    themeToggle.addEventListener("click", function() {
        const isDark = document.documentElement.classList.toggle("dark");
        localStorage.setItem("pcn-theme", isDark ? "dark" : "light");
        this.innerHTML = isDark ? "☀️" : "🌓";
    });
    
    // Add to navigation
    const nav = document.querySelector("nav ul");
    if (nav) {
        const li = document.createElement("li");
        li.appendChild(themeToggle);
        nav.appendChild(li);
    }
}

// Helper function to show notifications
function showNotification(message) {
    // Remove existing notification
    const existing = document.getElementById("pcn-notification");
    if (existing) existing.remove();
    
    // Create new notification
    const notification = document.createElement("div");
    notification.id = "pcn-notification";
    notification.className = "fixed top-4 right-4 z-50 px-4 py-2 bg-green-500 text-white rounded-lg shadow-lg transform transition-transform duration-300";
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Auto-remove after 3 seconds
    setTimeout(() => {
        notification.classList.add("translate-x-full");
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add CSS for animations
const style = document.createElement("style");
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

// Function to load header dynamically
async function loadHeader() {
    const headerPlaceholder = document.getElementById("header-placeholder");
    if (headerPlaceholder) {
        try {
            const response = await fetch("header.html");
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const headerHtml = await response.text();
            headerPlaceholder.innerHTML = headerHtml;
        } catch (error) {
            console.error("Failed to load header:", error);
            // Optionally, load static fallback content or show an error message
        }
    }
}

// Function to load footer dynamically
async function loadFooter() {
    const footerPlaceholder = document.getElementById("footer-placeholder");
    if (footerPlaceholder) {
        try {
            const response = await fetch("footer.html");
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const footerHtml = await response.text();
            footerPlaceholder.innerHTML = footerHtml;
        } catch (error) {
            console.error("Failed to load footer:", error);
            // Optionally, load static fallback content or show an error message
        }
    }
}
