import React from 'react';
import characters from '@/data/characters.json';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white bg-opacity-90 z-10 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold font-serif leading-none text-center bg-black text-white p-2">
          <div>HO</div>
          <div>LY</div>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {characters.map((character) => (
              <li key={character.id}>
                <a
                  href={`#${character.id}`}
                  className="text-gray-700 hover:text-black transition-colors duration-300 font-serif"
                >
                  {character.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header; 