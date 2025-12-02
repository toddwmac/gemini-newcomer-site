// src/app/lessons/AIForGardener.tsx
import React from 'react';

const AIForGardener: React.FC = () => {
  return (
    <section id="hobbies-gardener" className="mb-16 pt-16 -mt-16">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">AI for the Gardener</h1>
      <p className="text-lg text-gray-600 mb-6">A lesson from "AI in Your Hobbies"</p>

      <div className="prose lg:prose-xl">
        <p>
          Gardening in Park City's unique mountain climate can be both rewarding and challenging. Your AI copilot can be an invaluable tool, helping you diagnose problems, plan your garden, and learn more about the plants that thrive here.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Your Personal Plant Doctor</h2>
        <p>
          Have you ever noticed a strange spot on a leaf or a plant that just doesn't seem to be thriving? AI can help you diagnose the issue. Simply take a clear photo of the affected plant and ask your AI for help.
        </p>
        <div className="p-4 bg-gray-50 rounded-lg border mt-4">
          <p className="font-semibold">Example Prompt (with a photo of a spotted leaf):</p>
          <p className="mt-2 italic">
            "You are a master gardener who specializes in high-altitude gardening. I'm seeing these brown spots on the leaves of my tomato plants. What could be causing this, and what is a safe and organic way to treat it?"
          </p>
        </div>
        <p className="mt-4">
          The AI can analyze the image and provide potential diagnoses (like blight or a nutrient deficiency) and suggest organic treatment options.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Planning Your Perfect Garden Layout</h2>
        <p>
          Want to plan a new garden bed but not sure where to start? AI can help you design it based on your specific needs and environment.
        </p>
        <div className="p-4 bg-gray-50 rounded-lg border mt-4">
          <p className="font-semibold">Example Prompt:</p>
          <p className="mt-2 italic">
            "I want to create a small vegetable garden in my backyard in Park City. The garden bed is 4 feet by 8 feet and gets about 6 hours of direct sun per day. Please suggest a layout for companion plants that grow well together at high altitudes. I'm interested in growing tomatoes, carrots, lettuce, and basil. Please create a simple diagram or layout plan."
          </p>
        </div>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Other Ideas for Gardeners</h2>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li><strong>Create a Planting Schedule:</strong> "Create a month-by-month planting schedule for a vegetable garden in Park City, Utah (Zone 5b), including when to start seeds indoors and when to transplant."</li>
          <li><strong>Identify Mystery Plants:</strong> Take a photo of a wildflower in your yard and ask, "Can you identify this plant for me? Is it a native species or a weed?"</li>
          <li><strong>Deal with Pests:</strong> "I've noticed aphids on my rose bushes. What are some effective organic methods to get rid of them?"</li>
        </ul>
      </div>
    </section>
  );
};

export default AIForGardener;