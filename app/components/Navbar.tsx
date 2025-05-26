'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';

const translations = {
  en: {
    sections: {
      experience: 'Experience',
      projects: 'Projects',
      certifications: 'Certifications',
      education: 'Education',
    },
  },
  fr: {
    sections: {
      experience: 'Expérience',
      projects: 'Projets',
      certifications: 'Certifications',
      education: 'Formation',
    },
  },
} as const;

export default function Navbar() {
  const pathname = usePathname();
  const lang = pathname.startsWith('/fr') ? 'fr' : 'en';
  const t = translations[lang];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/30 dark:bg-black/30 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#experience" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            {t.sections.experience}
          </a>
          <a href="#projects" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            {t.sections.projects}
          </a>
          <a href="#certifications" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            {t.sections.certifications}
          </a>
          <a href="#education" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            {t.sections.education}
          </a>
        </div>

        {/* Right side items */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/clementfoltran/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/cfoltran/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              GitHub
            </a>
            <div className="h-4 w-px bg-gray-300 dark:bg-gray-700" />
          </div>
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-16 left-0 right-0 bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 py-4 flex flex-col gap-4">
          <a
            href="#experience"
            className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            {t.sections.experience}
          </a>
          <a
            href="#projects"
            className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            {t.sections.projects}
          </a>
          <a
            href="#certifications"
            className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            {t.sections.certifications}
          </a>
          <a
            href="#education"
            className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            {t.sections.education}
          </a>
          <div className="h-px bg-gray-200 dark:bg-gray-800 my-2" />
          <a
            href="https://www.linkedin.com/in/clementfoltran/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/cfoltran/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
} 