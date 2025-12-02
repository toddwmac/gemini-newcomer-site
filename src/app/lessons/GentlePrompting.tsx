// src/app/lessons/GentlePrompting.tsx
import React from 'react';

const GentlePrompting: React.FC = () => {
  return (
    <section id="ai-foundations-prompting" className="mb-16 pt-16 -mt-16">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">The Gentle Art of Prompting</h1>
      <p className="text-lg text-gray-600 mb-6">Lesson 4 of "AI Foundations"</p>

      <div className="prose lg:prose-xl">
        <p>
          Now that you’ve had a practice conversation, let's learn a few simple tips to get even better results from an AI. Writing a "prompt" is the single most important skill for using AI, and the good news is, it’s just like having a good conversation.
        </p>
        <p>
          You don't need special code or technical language. You just need to be clear and provide good context.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Tip 1: Give it a Role</h2>
        <p>
          One of the best ways to get better responses is to tell the AI who it should be. This helps it understand the tone and type of information you’re looking for.
        </p>
        <div className="p-4 bg-gray-50 rounded-lg border mt-4">
          <p><strong>Instead of:</strong> "Tell me about hiking trails."</p>
          <p className="mt-2"><strong>Try:</strong> "You are a friendly and experienced Park City hiking guide. Tell me about some easy, scenic hiking trails that are good for beginners."</p>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Tip 2: Provide Context and Details</h2>
        <p>
          The more details you give the AI, the better it can tailor the response to you. Think about the 'who, what, where, when, why' of your request.
        </p>
        <div className="p-4 bg-gray-50 rounded-lg border mt-4">
          <p><strong>Instead of:</strong> "Give me a recipe."</p>
          <p className="mt-2"><strong>Try:</strong> "Give me a recipe for a vegetarian dinner. I have about 45 minutes to cook, and I have bell peppers, onions, and quinoa in my pantry. I'd like something healthy but flavorful."</p>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Tip 3: Tell it the Format You Want</h2>
        <p>
          Do you want a list? A paragraph? A table? You can tell the AI exactly how to structure its answer.
        </p>
        <div className="p-4 bg-gray-50 rounded-lg border mt-4">
          <p><strong>Instead of:</strong> "What are some book clubs in Park City?"</p>
          <p className="mt-2"><strong>Try:</strong> "Please give me a list of book clubs in Park City. For each one, put it in a table with columns for the club name, the genre of books they read, and their meeting schedule."</p>
        </div>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Tip 4: Don't be Afraid to Follow Up</h2>
        <p>
          Your first prompt is just the beginning. If the AI’s response isn't quite right, just tell it! Use follow-up prompts to refine the answer.
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>"That's a good start, but can you make it sound more casual?"</li>
          <li>"Can you expand on your second point?"</li>
          <li>"Please rewrite that from the perspective of a beginner."</li>
        </ul>
      </div>
    </section>
  );
};

export default GentlePrompting;