// src/app/lessons/GeneralProductivity.tsx
import React from 'react';

const GeneralProductivity: React.FC = () => {
  return (
    <section id="practical-productivity" className="mb-16 pt-16 -mt-16">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">AI for General Productivity</h1>
      <p className="text-lg text-gray-600 mb-6">A lesson from "Practical Life Enhancement"</p>

      <div className="prose lg:prose-xl">
        <p>
          AI isn't just for complex tasks or creative hobbies. It's a fantastic tool for boosting your everyday productivity, helping you manage information, communicate more effectively, and save time on routine tasks. Think of it as your digital personal assistant.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Summarizing Information Quickly</h2>
        <p>
          Facing a long email, an online article, or a document? AI can condense it into key points, saving you valuable reading time.
        </p>
        <div className="p-4 bg-gray-500 rounded-lg border mt-4">
          <p className="font-semibold text-gray-800">Example Prompt:</p>
          <p className="mt-2 italic text-gray-800">
            "Summarize the following article into 3 key bullet points, focusing on the main takeaways for a beginner: [Paste article text here]"
          </p>
        </div>
        <p className="mt-4">
          This is incredibly useful for staying informed without getting bogged down in details.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Organizing Your Thoughts</h2>
        <p>
          Need to brainstorm ideas, plan a presentation, or outline a new project? AI can help structure your thoughts and generate new angles you might not have considered.
        </p>
        <div className="p-4 bg-gray-500 rounded-lg border mt-4">
          <p className="font-semibold text-gray-800">Example Prompt:</p>
          <p className="mt-2 italic text-gray-800">
            "I'm planning a presentation on 'Healthy Aging in Park City'. Can you outline 5 main sections for the presentation, and suggest 3 key points for each section?"
          </p>
        </div>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Communicating More Effectively</h2>
        <p>
          AI can help you draft emails, letters, or even social media posts with the right tone and clarity.
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li><strong>Drafting a polite inquiry:</strong> "Write a polite email to my neighbor asking if they'd be willing to share their Wi-Fi password for a few days while mine is being repaired."</li>
          <li><strong>Creating a clear announcement:</strong> "Draft a short, clear announcement for the Newcomers Club about an upcoming change in the monthly coffee social location, stating the new address, date, and time."</li>
        </ul>
      </div>
    </section>
  );
};

export default GeneralProductivity;