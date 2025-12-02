// src/app/lessons/AIForWriter.tsx
import React from 'react';

const AIForWriter: React.FC = () => {
  return (
    <section id="hobbies-writer" className="mb-16 pt-16 -mt-16">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">AI for the Writer</h1>
      <p className="text-lg text-gray-600 mb-6">A lesson from "AI in Your Hobbies"</p>

      <div className="prose lg:prose-xl">
        <p>
          Whether you're journaling about your new life in Park City, writing a family history, or crafting the next great novel, every writer sometimes faces a blank page. Your AI copilot can be an incredible partner for brainstorming, overcoming writer's block, and refining your work.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Your Brainstorming Partner</h2>
        <p>
          AI is a fantastic tool for generating ideas when you don't know where to start. The key is to give it a good starting point.
        </p>
        <div className="p-4 bg-gray-50 rounded-lg border mt-4">
          <p className="font-semibold">Example Prompt:</p>
          <p className="mt-2 italic">
            "You are a creative writing coach. I want to write a short, fictional story set in a silver mine in Park City in the 1890s. Can you give me 5 different story ideas? For each idea, include a main character, a potential conflict, and a unique twist."
          </p>
        </div>
        <p className="mt-4">
          This prompt gives the AI a role, a setting, and a specific format for the output, which will result in much more useful and creative ideas than just asking for "story ideas."
        </p>

        <h2 className="2xl font-bold mt-8 mb-4">Overcoming Writer's Block</h2>
        <p>
          If you're stuck in the middle of a story, AI can help you see a way forward. You can paste in a snippet of your writing and ask for help.
        </p>
        <div className="p-4 bg-gray-50 rounded-lg border mt-4">
          <p className="font-semibold">Example Prompt:</p>
          <p className="mt-2 italic">
            "I'm writing a story and my character is stuck in a blizzard on his way to his cabin. I'm not sure what should happen next. Here is the last paragraph I wrote: [paste your paragraph here]. Can you give me three different and unexpected things that could happen next?"
          </p>
        </div>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Other Ideas for Writers</h2>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li><strong>Refine Your Language:</strong> "Can you rewrite this sentence to be more descriptive and evocative: 'The sunset was pretty'?"</li>
          <li><strong>Check for Consistency:</strong> "I'm writing a novel. Can you read this chapter and check if my main character, John, who is afraid of heights, does anything that contradicts his character?"</li>
          <li><strong>Write a Poem:</strong> "Write a short, four-stanza poem about the sound of aspen leaves in the wind."</li>
        </ul>
      </div>
    </section>
  );
};

export default AIForWriter;