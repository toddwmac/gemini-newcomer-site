# Project Description: PCN AI Mindset Toolbox

## Overview

The "Park City Newcomers Club AI Mindset Portal" is a modern, frontend-only web application designed to empower members, particularly those aged 50 and older, with practical knowledge and an adaptive mindset for Artificial Intelligence (AI). Its primary purpose is to demystify AI, showcase its utility in everyday life and hobbies, and encourage active exploration of AI tools in an accessible, engaging, and non-technical manner.

## Core Features

The application's central feature is a structured, comprehensive "AI Mindset Training Module," organized into three main parts:

1.  **AI Foundations:** An introductory course covering core AI concepts, distinguishing AI from traditional search, guiding users through their first AI interaction, and teaching effective "prompting" techniques.
2.  **AI in Your Hobbies:** A series of lessons demonstrating how AI can enhance specific club activities such as hiking, book clubs, gardening, writing, art, and social planning. Each lesson provides practical examples and prompts tailored to the hobby.
3.  **Practical Life Enhancement:** Lessons focused on everyday AI applications, including meal planning ("AI in the Kitchen"), travel itinerary creation ("Travel Planning Made Easy"), crafting communications ("Staying Connected"), and general efficiency ("AI for General Productivity").

The entire application content is presented as a single, scrollable page, with the Homepage serving as the primary entry point and comprehensive hub for all AI Mindset training modules. These modules are delivered via modular React components for better organization and maintainability.

## Architecture

The project is currently implemented as a **frontend-only** application, prioritizing content delivery and user education without requiring backend services for its core functionality.

*   **Frontend Framework:** Next.js (React)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **Routing:** Next.js App Router

## Technology Stack

*   **Runtime:** Node.js (for development and build)
*   **Package Manager:** npm
*   **Development Framework:** Next.js
*   **UI Library:** React
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **Linting:** ESLint (configured with `eslint-config-next`)

## Extension Points & Future Development

This project is designed for incremental expansion. Key areas for future development include:

1.  **Content Expansion:** Adding more lessons, hobby-specific applications, and examples within the existing module structure.
2.  **Basic Member Engagement (Frontend-focused):** Implementing features like "Mark as Complete" for lessons (using browser local storage) or simple, email-based "Ask a Question" forms.
3.  **Backend Integration (Future Phase):**
    *   **User Accounts & Authentication:** For personalized experiences, tracking progress, and member-exclusive content.
    *   **Interactive AI Tools:** Integration with actual AI APIs (e.g., OpenAI, Google Gemini) to provide real-time, in-app AI interaction sandboxes.
    *   **AI-Enhanced Social Features:** Leveraging AI for personalized activity recommendations, group suggestions, and streamlined social planning.

## Coding Conventions

The project adheres to standard Next.js, React, and TypeScript best practices. Styling follows Tailwind CSS utility-first principles. The App Router convention is used for page and layout structure.
