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
    <div className="fixed top-4 right-4 z-50">
      <select
        onChange={(e) => switchLanguage(e.target.value)}
        className="bg-white border border-gray-300 rounded-md px-3 py-1 text-sm"
        defaultValue={pathname.startsWith('/fr') ? 'fr' : 'en'}
      >
        <option value="en">English 🇬🇧</option>
        <option value="fr">Français 🇫🇷</option>
      </select>
    </div>
  );
} 