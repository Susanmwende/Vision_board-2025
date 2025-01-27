'use client';

import { useState } from 'react';
import Board from './components/Board';
import Outfits from './components/Outfits';

export default function Page() {
  const [currentPage, setCurrentPage] = useState<'board' | 'outfits'>('board');

  const handleNavigation = (page: 'board' | 'outfits') => {
    setCurrentPage(page);
  };

  return (
    <main className="relative min-h-screen bg-gray-100">
      {/* Content Section */}
      <div className="pb-20">
        {currentPage === 'board' && <Board />}
        {currentPage === 'outfits' && <Outfits />}
      </div>

      {/* Navigation Bar */}
      <nav className="fixed bottom-0 left-0 w-full bg-transparent text-white shadow-lg">
        <div className="flex justify-around py-4">
          <button
            onClick={() => handleNavigation('board')}
            className={`flex flex-col items-center px-4 ${
              currentPage === 'board' ? 'text-blue-400' : 'text-gray-400'
            } hover:text-blue-500 transition-all`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 mb-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 20l9-8-9-8-9 8 9 8z"
              />
            </svg>
            Vision Board
          </button>
          <button
            onClick={() => handleNavigation('outfits')}
            className={`flex flex-col items-center px-4 ${
              currentPage === 'outfits' ? 'text-blue-400' : 'text-gray-400'
            } hover:text-blue-500 transition-all`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 mb-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 12H4"
              />
            </svg>
            Outfits
          </button>
        </div>
      </nav>
    </main>
  );
}
