// src/app/lessons/AIForSocialPlanner.tsx
import React from 'react';

const AIForSocialPlanner: React.FC = () => {
  return (
    <section id="hobbies-social-planner" className="mb-16 pt-16 -mt-16">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">AI for the Social Planner</h1>
      <p className="text-lg text-gray-600 mb-6">A lesson from "AI in Your Hobbies"</p>

      <div className="prose lg:prose-xl">
        <p>
          One of the best parts of the Newcomers Club is the social outings—exploring a new restaurant, visiting a museum in Salt Lake City, or catching a show at the Egyptian Theatre. As a social planner for your friends or a club group, your AI copilot can be an amazing organizational tool.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Creating an Itinerary from Scratch</h2>
        <p>
          Let's say you want to plan a day trip for a small group. Instead of juggling multiple websites for ideas, times, and locations, you can ask your AI to build a full itinerary.
        </p>
        <div className="p-4 bg-gray-500 rounded-lg border mt-4">
          <p className="font-semibold text-white">Example Prompt:</p>
          <p className="mt-2 italic text-white">
            "You are an expert Park City event planner. I'm organizing a day trip to Salt Lake City for a group of 4 friends in mid-January. We are interested in art and history. We want to have lunch at a casual but well-regarded restaurant that is not a chain. Please create a detailed itinerary for our day, starting around 10:00 AM and ending around 4:00 PM. Include travel time estimates from Park City. Put the itinerary in a simple timeline format."
          </p>
        </div>
        <p className="mt-4">
          The AI can generate a complete plan, including museum suggestions, lunch spots with reviews, and a realistic schedule.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Summarizing Reviews and Making Choices</h2>
        <p>
          Tired of reading through dozens of reviews to decide on a restaurant or activity? AI can do it for you.
        </p>
        <div className="p-4 bg-gray-500 rounded-lg border mt-4">
          <p className="font-semibold text-white">Example Prompt:</p>
          <p className="mt-2 italic text-white">
            "I'm trying to choose between three restaurants for a dinner outing: [Restaurant A], [Restaurant B], and [Restaurant C]. Can you find recent reviews for all three and give me a summary of the pros and cons for each, focusing on food quality, ambiance, and service?"
          </p>
        </div>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Other Ideas for Social Planners</h2>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li><strong>Drafting Invitations:</strong> "Write a fun and casual email invitation to the 'Denim Dining' group for a get-together at a new Italian restaurant on Main Street."</li>
          <li><strong>Brainstorming Group Activities:</strong> "What are 5 unique group activities we could do in or around Park City during the winter, other than skiing?"</li>
          <li><strong>Creating Themed Events:</strong> "I'm hosting a wine tasting evening for my wine group. The theme is 'Wines from Spain.' Can you suggest three specific types of Spanish wine we should try, and what simple appetizers would pair well with them?"</li>
        </ul>
      </div>
    </section>
  );
};

export default AIForSocialPlanner;