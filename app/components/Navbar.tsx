'use client';

import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  return (
  <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo/Brand */}
        <div className="text-xl font-bold">
          {/* Pomme F */}
        </div>

        {/* Language Switcher */}
        <div className="flex items-center">
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
} 