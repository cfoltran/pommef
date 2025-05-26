'use client';

import { usePathname } from 'next/navigation';
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/30 dark:bg-black/30 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
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

        <div className="flex items-center gap-4">
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
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
} 