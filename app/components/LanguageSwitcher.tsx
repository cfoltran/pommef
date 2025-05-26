'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (locale: string) => {
    const newPath = pathname.replace(/^\/[a-z]{2}/, `/${locale}`);
    router.push(newPath);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => switchLanguage('en')}
        className={`p-2 rounded-full hover:bg-white/10 transition-colors ${pathname.startsWith('/en') ? 'bg-white/20' : ''}`}
        aria-label="Switch to English"
      >
        🇬🇧
      </button>
      <button
        onClick={() => switchLanguage('fr')}
        className={`p-2 rounded-full hover:bg-white/10 transition-colors ${pathname.startsWith('/fr') ? 'bg-white/20' : ''}`}
        aria-label="Switch to French"
      >
        🇫🇷
      </button>
    </div>
  );
} 