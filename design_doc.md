# High-Level Application Specification: PCN AI Mindset Toolbox

## 1. Project Vision & Overview

To create a modern, intuitive web application that serves as a central resource for Park City Newcomers Club members to understand, explore, and practically apply Artificial Intelligence (AI) in their daily lives and hobbies. The platform aims to foster AI literacy, encourage creative AI use, and empower members to develop an "AI Mindset" in an accessible and engaging manner. This portal will act as a frontend-only educational and inspirational hub, distinct from traditional club management functions.

## 2. User Roles & Permissions

This application is primarily a public-facing educational resource.

| Role | Description | Key Permissions |
| :--- | :--- | :--- |
| **Public User (Guest)** | Any visitor to the website. | - Access all AI Mindset training modules and content.<br>- View the single-page application content. |

*Note: Future iterations may introduce member-specific features requiring authentication, but this is outside the scope of the current frontend-focused development.*

## 3. Core Features

### 3.1. AI Mindset Training Module
A comprehensive, frontend-only training system designed for accessibility to a 50+ audience, breaking down AI concepts into practical, relatable lessons. All lessons are presented within a single page, accessed via scroll navigation, and are implemented as modular React components for better maintainability and scalability.

*   **Part 1: AI Foundations:** Core concepts of AI, distinguishing it from traditional search, and guiding users through their first interaction.
    *   Welcome to Your AI Copilot
    *   Beyond a Search Engine
    *   Your First Conversation with AI (including simulated interaction)
    *   The Gentle Art of Prompting
*   **Part 2: AI in Your Hobbies:** Practical application of AI within common Park City Newcomers Club activities.
    *   AI for the Hiker
    *   AI for the Book Club
    *   AI for the Gardener
    *   AI for the Writer
    *   AI for the Artist
    *   AI for the Social Planner
*   **Part 3: Practical Life Enhancement:** Everyday applications of AI to simplify and enrich personal life.
    *   AI in the Kitchen
    *   Travel Planning Made Easy
    *   Staying Connected
    *   AI for General Productivity

### 3.2. Primary Application Page
*   **Homepage:** The single-page application serving as a welcoming landing page and the comprehensive hub for all AI Mindset training modules, accessible via scroll navigation.

## 4. Recommended Technical Stack

-   **Frontend:** **HTML, CSS, TypeScript**. Static site architecture for simplicity and performance.
-   **Styling:** **Tailwind CSS**.
-   **Deployment:** **GitHub Pages** (for static hosting).
-   *Note: Backend components (e.g., Python FastAPI, Node.js, PostgreSQL, Stripe) are deferred for future development when member management or persistent data are required.*

## 5. UI/UX Design Principles

-   **Accessible & Encouraging:** Design should be clear, easy to navigate, and welcoming, especially for users new to AI. Avoid jargon or explain it simply.
-   **Clean & Modern:** Reflects the professional yet friendly nature of the club.
-   **Intuitive Navigation:** Easy access to training modules and core information via a clear navigation bar.
-   **Mobile-First & Responsive:** Fully functional and aesthetically pleasing on all devices.
-   **Branding:** Incorporate the Park City Newcomers' existing logo and color scheme.
