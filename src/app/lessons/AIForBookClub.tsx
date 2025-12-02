// src/app/lessons/AIForBookClub.tsx
import React from 'react';

const AIForBookClub: React.FC = () => {
  return (
    <section id="hobbies-book-club" className="mb-16 pt-16 -mt-16">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">AI for the Book Club</h1>
      <p className="text-lg text-gray-600 mb-6">A lesson from "AI in Your Hobbies"</p>

      <div className="prose lg:prose-xl">
        <p>
          A book club is a wonderful way to connect with fellow newcomers and share a love of reading. Your AI copilot can act as a powerful literary assistant, helping you and your group get even more out of every book you read.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Generating Insightful Discussion Questions</h2>
        <p>
          Sometimes the hardest part of a book club meeting is coming up with questions that spark a good conversation. Let AI do the heavy lifting!
        </p>
        <div className="p-4 bg-gray-50 rounded-lg border mt-4">
          <p className="font-semibold">Example Prompt:</p>
          <p className="mt-2 italic">
            "You are a thoughtful literary critic. My book club just finished reading 'The Lincoln Highway' by Amor Towles. Please generate 10 open-ended discussion questions that will spark a lively conversation. Focus on themes of personal journey, friendship, and the American dream. Avoid simple plot-point questions."
          </p>
        </div>
        <p className="mt-4">
          This gives you a fantastic starting point for your meeting, ensuring the conversation goes beyond "Did you like it?".
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Finding Your Next Great Read</h2>
        <p>
          Choosing the next book can be a challenge. AI is brilliant at providing personalized recommendations.
        </p>
        <div className="p-4 bg-gray-50 rounded-lg border mt-4">
          <p className="font-semibold">Example Prompt:</p>
          <p className="mt-2 italic">
            "My book club enjoys historical fiction with strong female protagonists. We loved 'The Nightingale' by Kristin Hannah and 'Lessons in Chemistry' by Bonnie Garmus. Can you suggest 5 other similar books? Please provide a brief, one-paragraph summary for each suggestion."
          </p>
        </div>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Other Ideas for Book Lovers</h2>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li><strong>Learn About the Author:</strong> "Tell me about the author Amor Towles. What was his inspiration for writing 'The Lincoln Highway'?"</li>
          <li><strong>Explore Themes:</strong> "What are the main literary themes in 'Lessons in Chemistry'?"</li>
          <li><strong>Plan a Themed Meeting:</strong> "My book club is reading 'Where the Crawdads Sing.' Can you suggest some simple, Southern-themed snacks and drinks we could serve at our meeting?"</li>
        </ul>
      </div>
    </section>
  );
};

export default AIForBookClub;