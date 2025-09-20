import { en } from '../i18n/locales/en';
import { fr } from '../i18n/locales/fr';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

const translations = {
  en,
  fr,
} as const;

type SupportedLanguages = keyof typeof translations;

function isValidLanguage(lang: string): lang is SupportedLanguages {
  return lang in translations;
}

export function generateStaticParams() {
  return [
    { lang: '' },  // Root path
    { lang: 'en' },
    { lang: 'fr' },
  ];
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang = isValidLanguage(langParam) ? langParam : 'en';
  const t = translations[lang];

  return (
    <>
      <Navbar />
  <main className="min-h-screen p-8 max-w-4xl mx-auto pt-24 bg-white text-black">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">{t.header.title}</h1>
          <p className="text-xl md:text-2xl text-gray-600">{t.header.subtitle}</p>
        </header>

        {/* Mobile Apps Section */}
        <section className="mb-16">
          <div className="max-w-3xl mx-auto space-y-6">
            {/* Deckart */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 transform hover:scale-[1.02] transition-transform duration-200 hover:shadow-lg">
              <div className="flex items-start gap-6">
                <Image src="/deckart.png" alt="Deckart app icon" width={96} height={96} className="w-24 h-24 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-left">{t.mobileApps.deckart.title}</h3>
                  <p className="text-gray-600 mb-4 text-left leading-relaxed">{t.mobileApps.deckart.description}</p>
                  <a
                    href={t.mobileApps.deckart.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:underline"
                  >
                    Visit {t.mobileApps.deckart.title}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Unbubl */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 transform hover:scale-[1.02] transition-transform duration-200 hover:shadow-lg">
              <div className="flex items-start gap-6">
                <Image src="/unbubl.png" alt="Unbubl app icon" width={96} height={96} className="w-24 h-24 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-left">{t.mobileApps.unbubl.title}</h3>
                  <p className="text-gray-600 mb-4 text-left leading-relaxed">{t.mobileApps.unbubl.description}</p>
                  <a
                    href={t.mobileApps.unbubl.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:underline"
                  >
                    Visit {t.mobileApps.unbubl.title}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              {/* Mcpdoor */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 transform hover:scale-[1.02] transition-transform duration-200 hover:shadow-lg">
                <div className="flex items-start gap-6">
                  <div className="w-24 h-24 rounded-[16px] shadow flex-shrink-0 flex items-center justify-center text-4xl">
                    🚪
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-left">{t.aiTools.mcpdoor.title}</h3>
                    <p className="text-gray-600 mb-4 text-left leading-relaxed">{t.aiTools.mcpdoor.description}</p>
                    <div className="mb-4">
                      <iframe 
                        style={{border: 0}} 
                        width="100%" 
                        height="330" 
                        src="https://www.tella.tv/video/cmc9ipja8000p0cl4et7j06ha/embed?b=1&title=1&a=1&loop=0&t=0&muted=0&wt=1" 
                        allowFullScreen
                      />
                    </div>
                    <a
                      href={t.aiTools.mcpdoor.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:underline"
                    >
                      Visit {t.aiTools.mcpdoor.title}
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>          
        <Footer />
      </main>
    </>
  );
} 