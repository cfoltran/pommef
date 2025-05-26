import { en } from '../i18n/locales/en';
import { fr } from '../i18n/locales/fr';
import LanguageSwitcher from '../components/LanguageSwitcher';
import Navbar from '../components/Navbar';

const translations = {
  en,
  fr,
} as const;

type SupportedLanguages = keyof typeof translations;

function isValidLanguage(lang: string): lang is SupportedLanguages {
  return lang in translations;
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang = isValidLanguage(langParam) ? langParam : 'en';
  const t = translations[lang];

  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto pt-24">
      <Navbar />
      
      <header className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-2">{t.header.title}</h1>
        <h2 className="text-xl mb-4">{t.header.subtitle}</h2>
        <p>
          <a href="https://cfoltran.github.io/cv">{t.header.links.cv}</a> /{' '}
          <a href="mailto:clement.foltran@protonmail.com">{t.header.links.email}</a> /{' '}
          <a href="https://www.linkedin.com/in/clementfoltran/">{t.header.links.linkedin}</a> /{' '}
          <a href="https://github.com/cfoltran/">{t.header.links.github}</a>
        </p>
      </header>

      <section id="experience" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{t.sections.experience}</h2>
        
        {/* Infinit */}
        <article className="mb-8">
          <h3 className="text-xl font-semibold">
            <strong>{t.experience.infinit.title},</strong>{' '}
            <a href="https://infinit.com">{t.experience.infinit.company}</a> — {t.experience.infinit.period}
          </h3>
          <p className="my-4">{t.experience.infinit.description}</p>
          <p><strong>{t.experience.infinit.tasks}</strong></p>
          <ul className="list-disc pl-6 mb-4">
            {t.experience.infinit.tasksList.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
          <p>
            <strong>{t.experience.infinit.tools}</strong> {t.experience.infinit.toolsList}
          </p>
        </article>

        {/* Yuzu */}
        <article className="mb-8">
          <h3 className="text-xl font-semibold">
            <strong>{t.experience.yuzu.title},</strong>{' '}
            <a href="https://apps.apple.com/fr/app/yuzu/id6443933811">{t.experience.yuzu.company}</a> — {t.experience.yuzu.period}
          </h3>
          <p className="my-4">{t.experience.yuzu.description}</p>
          <p><strong>{t.experience.yuzu.tasks}</strong></p>
          <ul className="list-disc pl-6 mb-4">
            {t.experience.yuzu.tasksList.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
          <p>
            <strong>{t.experience.yuzu.tools}</strong> {t.experience.yuzu.toolsList}
          </p>
        </article>

        {/* Microport */}
        <article className="mb-8">
          <h3 className="text-xl font-semibold">
            <strong>{t.experience.microport.title},</strong>{' '}
            <a href="https://microport.com">{t.experience.microport.company}</a> — {t.experience.microport.period}
          </h3>
          <p className="my-4">{t.experience.microport.description}</p>
          <p><strong>{t.experience.microport.tasks}</strong></p>
          <ul className="list-disc pl-6 mb-4">
            {t.experience.microport.tasksList.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
          <p>
            <strong>{t.experience.microport.tools}</strong> {t.experience.microport.toolsList}
          </p>
        </article>

        {/* Ateme */}
        <article className="mb-8">
          <h3 className="text-xl font-semibold">
            <strong>{t.experience.ateme.title},</strong>{' '}
            <a href="https://www.ateme.com">{t.experience.ateme.company}</a> — {t.experience.ateme.period}
          </h3>
          <p className="my-4">{t.experience.ateme.description}</p>
          <p><strong>{t.experience.ateme.tasks}</strong></p>
          <ul className="list-disc pl-6 mb-4">
            {t.experience.ateme.tasksList.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
          <p>
            <strong>{t.experience.ateme.tools}</strong> {t.experience.ateme.toolsList}
          </p>
        </article>

        {/* Stoke */}
        <article className="mb-8">
          <h3 className="text-xl font-semibold">
            <strong>{t.experience.stoke.title}</strong> — {t.experience.stoke.period}
          </h3>
          <p className="my-4">{t.experience.stoke.description}</p>
          <p>
            <strong>{t.experience.stoke.tools}</strong> {t.experience.stoke.toolsList}
          </p>
        </article>
      </section>

      <section id="projects" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{t.sections.projects}</h2>
        
        {/* Unbubl */}
        <article className="mb-8">
          <h3 className="text-xl font-semibold">
            <a href="https://unbubl.com/">{t.projects.unbubl.title}</a> — {t.projects.unbubl.period}
          </h3>
          <p className="my-4">{t.projects.unbubl.description}</p>
          <p>
            <strong>{t.projects.unbubl.tools}</strong> {t.projects.unbubl.toolsList}
          </p>
        </article>

        {/* Deckart */}
        <article className="mb-8">
          <h3 className="text-xl font-semibold">
            <a href="https://deckart.xyz/">{t.projects.deckart.title}</a> — {t.projects.deckart.period}
          </h3>
          <p className="my-4">{t.projects.deckart.description}</p>
          <p>
            <strong>{t.projects.deckart.tools}</strong> {t.projects.deckart.toolsList}
          </p>
        </article>

        {/* Cococertif */}
        <article className="mb-8">
          <h3 className="text-xl font-semibold">
            <a href="https://github.com/cfoltran/covid-attestation-gen">{t.projects.cococertif.title}</a> — {t.projects.cococertif.period}
          </h3>
          <p className="my-4">{t.projects.cococertif.description}</p>
          <p>
            <strong>{t.projects.cococertif.tools}</strong> {t.projects.cococertif.toolsList}
          </p>
        </article>
      </section>

      <section id="certifications" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{t.sections.certifications}</h2>
        <ul className="list-disc pl-6">
          {t.certifications.list.map((cert, index) => (
            <li key={index}>
              <a href={cert.link}>{cert.title}</a>
            </li>
          ))}
        </ul>
      </section>

      <section id="education" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{t.sections.education}</h2>
        
        {/* 42 Paris */}
        <div className="mb-8">
          <p>
            <a href="https://42.fr" target="_blank" rel="noopener noreferrer">{t.education.school42.name}</a> — {t.education.school42.location} ({t.education.school42.period})
          </p>
          <p className="my-4">{t.education.school42.description}</p>
          
          <h4 className="text-lg font-semibold mb-4">{t.education.school42.projects.title}</h4>
          
          {/* Hypertube */}
          <div className="mb-6">
            <p>
              <a href="https://github.com/owalid/hypertube" target="_blank" rel="noopener noreferrer">{t.education.school42.projects.hypertube.title}</a> : {t.education.school42.projects.hypertube.description}
            </p>
            <p>
              <strong>{t.education.school42.projects.hypertube.tools}</strong> {t.education.school42.projects.hypertube.toolsList}
            </p>
          </div>
          
          {/* Qinder */}
          <div className="mb-6">
            <p>
              <a href="https://github.com/cfoltran/qinder" target="_blank" rel="noopener noreferrer">{t.education.school42.projects.qinder.title}</a> : {t.education.school42.projects.qinder.description}
            </p>
            <p>
              <strong>{t.education.school42.projects.qinder.tools}</strong> {t.education.school42.projects.qinder.toolsList}
            </p>
          </div>
        </div>
        
        {/* Paris Saclay */}
        <p>
          <a href="https://www.universite-paris-saclay.fr/fr" target="_blank" rel="noopener noreferrer">{t.education.parisSaclay.name}</a> — {t.education.parisSaclay.degree}, {t.education.parisSaclay.location} ({t.education.parisSaclay.period})
        </p>
      </section>
    </main>
  );
} 