// src/app/lessons/StayingConnected.tsx
import React from 'react';

const StayingConnected: React.FC = () => {
  return (
    <section id="practical-connected" className="mb-16 pt-16 -mt-16">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">Staying Connected</h1>
      <p className="text-lg text-gray-600 mb-6">A lesson from "Practical Life Enhancement"</p>

      <div className="prose lg:prose-xl">
        <p>
          Moving to a new place like Park City is exciting, but it's also important to stay connected with family and friends who might be far away. AI can be a thoughtful assistant in keeping those connections strong, helping you craft messages, remember important dates, and even suggest thoughtful gestures.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Drafting Heartfelt Messages</h2>
        <p>
          Sometimes finding the right words can be tough, especially for special occasions or when you want to express a complex emotion. AI can help you draft emails, text messages, or social media posts that sound just like you.
        </p>
        <div className="p-4 bg-gray-500 rounded-lg border mt-4">
          <p className="font-semibold text-gray-800">Example Prompt:</p>
          <p className="mt-2 italic text-gray-800">
            "Draft a warm and friendly email to my grandchildren, telling them about my move to Park City. Include a few exciting details about the mountains and my new activities, and tell them how much I miss them and look forward to their visit. Keep the tone loving and engaging for kids aged 8 and 10."
          </p>
        </div>
        <p className="mt-4">
          The AI can generate a thoughtful draft that you can then personalize. This is a great way to save time and ensure your messages always hit the right note.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Remembering Special Occasions</h2>
        <p>
          AI can help you keep track of birthdays, anniversaries, and other important dates for your loved ones. You can ask it to remind you or even help you brainstorm gift ideas.
        </p>
        <div className="p-4 bg-gray-500 rounded-lg border mt-4">
          <p className="font-semibold text-gray-800">Example Prompt:</p>
          <p className="mt-2 italic text-gray-800">
            "My daughter's birthday is in two weeks. She loves gardening and mysteries. Can you suggest 3 unique gift ideas for her?"
          </p>
        </div>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Other Connection AI Ideas</h2>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li><strong>Summarize Long Emails:</strong> "I received a very long email from my sister about her recent trip. Can you summarize the key highlights for me in 3 bullet points?"</li>
          <li><strong>Write Thank You Notes:</strong> "Draft a short, sincere thank you note to my neighbor for watering my plants while I was away."</li>
          <li><strong>Social Media Captions:</strong> "I have a photo of me skiing with a beautiful mountain backdrop. Write 3 different captions for Instagram, one funny, one inspiring, and one simple."</li>
        </ul>
      </div>
    </section>
  );
};

export default StayingConnected;