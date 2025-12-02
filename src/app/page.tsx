'use client'; // This page needs to be a client component due to interactive elements like useState.

import Link from 'next/link';
// Import all lesson components
import WelcomeToAICopilot from './lessons/WelcomeToAICopilot';
import BeyondSearchEngine from './lessons/BeyondSearchEngine';
import FirstConversation from './lessons/FirstConversation';
import GentlePrompting from './lessons/GentlePrompting';
import AIForHiker from './lessons/AIForHiker';
import AIForBookClub from './lessons/AIForBookClub';
import AIForGardener from './lessons/AIForGardener';
import AIForWriter from './lessons/AIForWriter';
import AIForArtist from './lessons/AIForArtist';
import AIForSocialPlanner from './lessons/AIForSocialPlanner';
import AIInKitchen from './lessons/AIInKitchen';
import TravelPlanning from './lessons/TravelPlanning';
import StayingConnected from './lessons/StayingConnected';
import GeneralProductivity from './lessons/GeneralProductivity';


export default function Home() {
  // Placeholder for any state needed for the consolidated page.
  // Example from 'first-conversation' page's simulated interaction.


  const aiFoundations = [
    { title: 'Welcome to Your AI Copilot', href: '#ai-foundations-welcome', description: 'What is an "AI Mindset"? It’s not about being a tech wizard; it’s about learning to ask, explore, and create.' },
    { title: 'Beyond a Search Engine', href: '#ai-foundations-beyond-search', description: 'How to think of AI as a creative partner, not just a tool for finding answers.' },
    { title: 'Your First Conversation with AI', href: '#ai-foundations-first-conversation', description: 'A simple, step-by-step guide to asking your first question.' },
    { title: 'The Gentle Art of Prompting', href: '#ai-foundations-prompting', description: 'Learn to talk to AI in plain English to get exactly what you want.' },
  ];

  const hobbies = [
    { title: 'AI for the Hiker', href: '#hobbies-hiker', description: 'Plan trails and identify plants.' },
    { title: 'AI for the Book Club', href: '#hobbies-book-club', description: 'Create discussion questions.' },
    { title: 'AI for the Gardener', href: '#hobbies-gardener', description: 'Get planting tips and identify pests.' },
    { title: 'AI for the Writer', href: '#hobbies-writer', description: 'Brainstorm ideas and beat writer\'s block.' },
    { title: 'AI for the Artist', href: '#hobbies-artist', description: 'Generate creative prompts and patterns.' },
    { title: 'AI for the Social Planner', href: '#hobbies-social-planner', description: 'Organize outings and create itineraries.' },
  ];

  const practicalLife = [
    { title: 'AI in the Kitchen', href: '#practical-kitchen', description: 'Meal planning, recipe creation, and more.' },
    { title: 'Travel Planning Made Easy', href: '#practical-travel', description: 'Let AI help you plan your next adventure.' },
    { title: 'Staying Connected', href: '#practical-connected', description: 'How AI can help you keep in touch.' },
    { title: 'AI for General Productivity', href: '#practical-productivity', description: 'Summarizing, organizing, and communicating efficiently.' },
  ];


  return (
    <div className="container mx-auto p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">PCN AI Mindset Toolbox</h1>
        <p className="mt-4 text-xl text-gray-600">A friendly guide for Park City Newcomers to a powerful new tool.</p>
      </div>

      {/* Table of Contents / Navigation */} 
      <nav className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-2">Explore the Toolbox</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <a href="#ai-foundations-section" className="block p-6 bg-indigo-50 border border-indigo-200 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
            <h3 className="text-xl font-semibold text-indigo-700">Part 1: AI Foundations</h3>
            <p className="mt-2 text-indigo-600">Start your AI journey here!</p>
          </a>
          <a href="#hobbies-section" className="block p-6 bg-indigo-50 border border-indigo-200 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
            <h3 className="text-xl font-semibold text-indigo-700">Part 2: AI in Your Hobbies</h3>
            <p className="mt-2 text-indigo-600">Enhance your favorite activities.</p>
          </a>
          <a href="#practical-life-section" className="block p-6 bg-indigo-50 border border-indigo-200 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
            <h3 className="text-xl font-semibold text-indigo-700">Part 3: Practical Life Enhancement</h3>
            <p className="mt-2 text-indigo-600">AI to simplify your daily life.</p>
          </a>
        </div>
      </nav>

      {/* Part 1: AI Foundations */} 
      <section id="ai-foundations-section" className="mb-16 pt-16 -mt-16"> {/* pt-16 and -mt-16 for scroll offset */} 
        <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-2">Part 1: AI Foundations</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {aiFoundations.map((item) => (
            <Link key={item.title} href={item.href} className="block p-6 bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-indigo-600">{item.title}</h3>
              <p className="mt-2 text-gray-700">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <WelcomeToAICopilot />
      <BeyondSearchEngine />
      <FirstConversation />
      <GentlePrompting />

      {/* Placeholder for Lesson Content - Part 1: Foundations */} 
      {/* Lessons will be appended here */} 
      
      {/* Part 2: AI in Your Hobbies */} 
      <section id="hobbies-section" className="mb-16 pt-16 -mt-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-2">Part 2: AI in Your Hobbies</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {hobbies.map((item) => (
            <Link key={item.title} href={item.href} className={`block p-6 bg-white border rounded-lg shadow-sm ${item.href === '#' ? 'pointer-events-none bg-gray-50' : 'hover:shadow-md transition-shadow'}`}>
              <h3 className={`text-xl font-semibold ${item.href === '#' ? 'text-gray-500' : 'text-indigo-600'}`}>{item.title}</h3>
              <p className="mt-2 text-gray-700">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <AIForHiker />
      <AIForBookClub />
      <AIForGardener />
      <AIForWriter />
      <AIForArtist />
      <AIForSocialPlanner />

      {/* Placeholder for Lesson Content - Part 2: Hobbies */} 
      {/* Lessons will be appended here */} 
      
      {/* Part 3: Practical Life Enhancement */} 
      <section id="practical-life-section" className="mb-16 pt-16 -mt-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-2">Part 3: Practical Life Enhancement</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {practicalLife.map((item) => (
            <Link key={item.title} href={item.href} className="block p-6 bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-indigo-600">{item.title}</h3>
              <p className="mt-2 text-gray-700">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <AIInKitchen />
      <TravelPlanning />
      <StayingConnected />
      <GeneralProductivity />

      {/* Lessons will be appended here */} 

    </div>
  );
}
