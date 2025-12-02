// src/app/lessons/TravelPlanning.tsx
import React from 'react';

const TravelPlanning: React.FC = () => {
  return (
    <section id="practical-travel" className="mb-16 pt-16 -mt-16">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">Travel Planning Made Easy</h1>
      <p className="text-lg text-gray-600 mb-6">A lesson from "Practical Life Enhancement"</p>

      <div className="prose lg:prose-xl">
        <p>
          Dreaming of your next adventure? Whether it's a weekend getaway to a nearby national park or an international excursion, planning a trip can be overwhelming. Your AI copilot can take the stress out of travel planning, helping you discover destinations, build itineraries, and manage logistics.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Discovering New Destinations</h2>
        <p>
          Not sure where to go? Give AI some of your preferences, and it can suggest places you might love.
        </p>
        <div className="p-4 bg-gray-500 rounded-lg border mt-4">
          <p className="font-semibold text-gray-800">Example Prompt:</p>
          <p className="mt-2 italic text-gray-800">
            "I want to plan a 5-day trip within the Western United States. I love hiking, good food, and interesting museums. I prefer destinations that are not too crowded and have a relaxed vibe. What are three unique destination ideas you can suggest, along with a brief reason why each might be a good fit?"
          </p>
        </div>
        <p className="mt-4">
          This can spark inspiration and introduce you to places you might not have considered.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Building Custom Itineraries</h2>
        <p>
          Once you have a destination, AI can help you craft a detailed, day-by-day itinerary.
        </p>
        <div className="p-4 bg-gray-500 rounded-lg border mt-4">
          <p className="font-semibold text-gray-800">Example Prompt:</p>
          <p className="mt-2 italic text-gray-800">
            "Create a 4-day itinerary for a trip to Santa Fe, New Mexico, for two adults. We enjoy art galleries, Native American culture, and Southwestern cuisine. Please include suggestions for breakfast, lunch, and dinner, as well as specific attractions to visit each day. Assume we have a rental car."
          </p>
        </div>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Other Travel AI Ideas</h2>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li><strong>Packing Lists:</strong> "Generate a detailed packing list for a 10-day trip to Europe in the spring, including essentials, clothing for various weather, and travel documents."</li>
          <li><strong>Local Phrases:</strong> "I'm going to Italy. What are 10 essential Italian phrases for a tourist, including how to order food and ask for directions?"</li>
          <li><strong>Budgeting:</strong> "Help me create a budget for a weekend trip to Moab, Utah, including estimates for accommodation, food, activities, and gas."</li>
        </ul>
      </div>
    </section>
  );
};

export default TravelPlanning;