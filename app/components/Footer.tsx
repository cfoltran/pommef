'use client';

import { usePathname } from 'next/navigation';
import { en } from '../i18n/locales/en';
import { fr } from '../i18n/locales/fr';

const translations = {
  en,
  fr,
} as const;

type SupportedLanguages = keyof typeof translations;

function isValidLanguage(lang: string): lang is SupportedLanguages {
  return lang in translations;
}

export default function Footer() {
  const pathname = usePathname();
  const langParam = pathname.split('/')[1] || 'en';
  const lang = isValidLanguage(langParam) ? langParam : 'en';
  const t = translations[lang];

  return (
  <footer className="w-full py-8 mt-12 border-t border-gray-200 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center">
          <a
            href={`mailto:${t.contact.email}`}
            className="text-gray-600 hover:text-black transition-colors font-medium text-lg"
          >
            {t.contact.email}
          </a>
        </div>
      </div>
    </footer>
  );
} 