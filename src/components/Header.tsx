import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link href="/">PCN AI Mindset Toolbox</Link>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#ai-foundations-section" className="hover:text-gray-300">AI Foundations</a>
            </li>
            <li>
              <a href="#hobbies-section" className="hover:text-gray-300">Hobbies</a>
            </li>
            <li>
              <a href="#practical-life-section" className="hover:text-gray-300">Life Enhancement</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
