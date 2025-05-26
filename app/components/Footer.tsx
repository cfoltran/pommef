'use client';

import { usePathname } from 'next/navigation';

const translations = {
  en: {
    madeWith: 'Made with',
    sourceCode: 'Source code',
    contact: 'Contact',
    social: 'Social',
  },
  fr: {
    madeWith: 'Fait avec',
    sourceCode: 'Code source',
    contact: 'Contact',
    social: 'Social',
  },
} as const;

export default function Footer() {
  const pathname = usePathname();
  const lang = pathname.startsWith('/fr') ? 'fr' : 'en';
  const t = translations[lang];

  return (
    <footer className="w-full py-8 mt-12 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col gap-8">
          {/* Social and Contact Links */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6">
              <a
                href="https://www.linkedin.com/in/clementfoltran/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/cfoltran/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
              >
                GitHub
              </a>
              <a
                href="mailto:clement@pommef.com"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
              >
                {t.contact}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 