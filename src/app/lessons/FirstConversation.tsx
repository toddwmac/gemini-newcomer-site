// src/app/lessons/FirstConversation.tsx
'use client'; // This component needs to be a client component due to interactive elements like useState.

import React, { useState } from 'react';

const FirstConversation: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [showResponse, setShowResponse] = useState(false);

  const handlePrompt = () => {
    const fakeResponse = "That's an excellent question! A good way to start exploring Park City's history is by visiting the Park City Museum on Main Street. It offers a fantastic look into the town's silver mining past. You could also ask me to create a historical walking tour of Main Street for you!";
    setResponse(fakeResponse);
    setShowResponse(true);
  };

  return (
    <section id="ai-foundations-first-conversation" className="mb-16 pt-16 -mt-16">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">Your First Conversation with AI</h1>
      <p className="text-lg text-gray-600 mb-6">Lesson 3 of "AI Foundations"</p>

      <div className="prose lg:prose-xl">
        <p>
          Now it’s time for the fun part! Let's have your first conversation with an AI. We are going to use a simulated AI right here on this page. It won't be connected to the internet, but it will give you a feel for how it works.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Step 1: Think of a Question</h2>
        <p>
          Remember, you're not just searching for facts. You're starting a conversation. Try to ask something that requires a bit of creativity or planning. For our example, let's pretend we're interested in local history.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Step 2: Write Your Prompt</h2>
        <p>
          A "prompt" is simply what you write to the AI. Let's type a prompt into the box below. Try something like: <span className="italic">"I'm new to Park City and interested in its history. What's a good way to start exploring it?"</span>
        </p>

        {/* Fake AI Chat Interface */}
        <div className="mt-6 p-6 border-2 border-indigo-500 rounded-lg bg-gray-50">
          <div className="flex flex-col">
            <textarea
              className="w-full p-2 border rounded-md"
              rows={3}
              placeholder="Type your prompt here..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <button
              className="mt-2 w-full sm:w-auto sm:self-end rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
              onClick={handlePrompt}
            >
              Send
            </button>
          </div>

          {showResponse && (
            <div className="mt-4 p-4 bg-white border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-gray-800">AI Response:</h3>
              <p className="mt-2 text-gray-700">{response}</p>
            </div>
          )}
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Step 3: Read and Continue the Conversation</h2>
        <p>
          Look at that! The AI didn't just give you a link. It gave you a direct suggestion and even offered a creative follow-up idea (a walking tour). This is the power of the AI Mindset. Your job is now to continue the conversation. You could ask:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>"Yes, please create a historical walking tour of Main Street."</li>
            <li>"How long does it take to tour the museum?"</li>
            <li>"Are there any other historical sites nearby?"</li>
        </ul>
        <p>You're in control of the discovery process.</p>
      </div>
    </section>
  );
};

export default FirstConversation;