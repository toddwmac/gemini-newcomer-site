// src/app/lessons/AIInKitchen.tsx
import React from 'react';

const AIInKitchen: React.FC = () => {
  return (
    <section id="practical-kitchen" className="mb-16 pt-16 -mt-16">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">AI in the Kitchen</h1>
      <p className="text-lg text-gray-600 mb-6">A lesson from "Practical Life Enhancement"</p>

      <div className="prose lg:prose-xl">
        <p>
          Whether you're cooking for one, entertaining guests, or planning weekly meals, your AI copilot can transform your kitchen experience. Say goodbye to mealtime dilemmas and hello to delicious, personalized solutions.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Your Personal Recipe Creator</h2>
        <p>
          AI can generate recipes based on your specific needs, ingredients on hand, and dietary preferences. It's like having a world-class chef who knows exactly what's in your pantry.
        </p>
        <div className="p-4 bg-gray-500 rounded-lg border mt-4">
          <p className="font-semibold text-gray-800">Example Prompt:</p>
          <p className="mt-2 italic text-gray-800">
            "I have chicken breasts, spinach, and canned diced tomatoes. I want a healthy, gluten-free dinner recipe that takes less than 30 minutes to prepare. Please include a short shopping list for any other ingredients I might need."
          </p>
        </div>
        <p className="mt-4">
          The AI will provide a custom recipe, complete with instructions and a tailored shopping list.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Smart Meal Planning</h2>
        <p>
          Planning meals for a week can be time-consuming. AI can help you create balanced meal plans, taking into account variety and leftovers.
        </p>
        <div className="p-4 bg-gray-500 rounded-lg border mt-4">
          <p className="font-semibold text-gray-800">Example Prompt:</p>
          <p className="mt-2 italic text-gray-800">
            "Create a 7-day dinner meal plan for a family of four. We enjoy Mediterranean-style food, and I'd like to include at least two vegetarian meals. Suggest ways to use leftovers creatively. Also, please provide a single consolidated shopping list for the entire week."
          </p>
        </div>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Other Kitchen AI Ideas</h2>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li><strong>Ingredient Substitutions:</strong> "I'm out of buttermilk. What are some good substitutes for baking?"</li>
          <li><strong>Wine Pairings:</strong> "What wine would pair best with a spicy Thai curry?"</li>
          <li><strong>Entertaining Ideas:</strong> "I'm hosting a casual brunch for 8 people. Suggest a menu and timeline for preparation."</li>
        </ul>
      </div>
    </section>
  );
};

export default AIInKitchen;