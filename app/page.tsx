import Image from "next/image";

const projects = [
  {
    name: "Voxontop",
    type: "iOS App",
    description:
      "One affirmation. Whoever pays the most owns it. An experiment in influence, power, and collective voice — anyone can comment, only one person writes what the world sees.",
    link: "/voxontop",
    appStore: "https://apps.apple.com/fr/app/voxontop/id6753363277",
    icon: "/voxontop.png",
  },
  {
    name: "Deckart",
    type: "iOS/Android App",
    description:
      "Spaced repetition flashcards for students. Active recall meets gamification. 200+ active users.",
    link: "https://deckart.xyz",
    external: true,
    icon: "/deckart.png",
  },
  {
    name: "Unbubl",
    type: "iOS App",
    description:
      "Location-based anecdotes for curious walkers and cyclists. Turn any route into a discovery trail.",
    link: "https://unbubl.com",
    external: true,
    icon: "/unbubl.png",
  },
  {
    name: "Mcpdoor",
    type: "AI Tool",
    description:
      "Your gateway to the MCP ecosystem. One click to connect AI assistants to real-world tools — Maps, Airbnb, and thousands more.",
    link: "https://mcpdoor.com",
    external: true,
    emoji: "🚪",
    video:
      "https://www.tella.tv/video/cmc9ipja8000p0cl4et7j06ha/embed?b=1&title=1&a=1&loop=0&t=0&muted=0&wt=1",
  },
];

export default function Home() {
  return (
    <main
      style={{ fontFamily: "monospace" }}
      className="max-w-2xl mx-auto px-6 py-14 text-black bg-white min-h-screen"
    >
      {/* Header */}
      <header >
        <Image
          src="/pommef_logo-05.svg"
          alt="pommef"
          width={70}
          height={70}
          className="mb-8 mx-auto"
        />
        
        <div className="flex items-center gap-4">
          <Image
            src="/me.png"
            alt="Clément Foltran"
            width={90}
            height={90}
            className="flex-shrink-0 grayscale"
            style={{ borderRadius: 4 }}
          />
          <div className="text-sm leading-loose">
            <span className="font-bold">Clément Foltran</span>
            {" — "}
            indie maker · AI mobile engineer
          </div>
        </div>
      </header>

      <hr className="border-t border-black mb-8" />

      {/* About */}
      <section className="mb-8 text-sm leading-relaxed">
        <p>
          I build agentic AI apps and mobile tools — mostly solo, always
          shipping. Background in mobile and full-stack web.
          I worked in various field such as banking, crypto, medical, deep space...
        </p>
        <p className="mt-3">
          <strong>Pomme f</strong> is my indie lab. The goal: ship useful things
          at the intersection of AI and daily life.
        </p>
      </section>

      <hr className="border-t border-black mb-8" />

      {/* Projects */}
      <section className="mb-8">
        <h2 className="text-xs uppercase tracking-widest font-bold mb-6">
          Projects
        </h2>

        {projects.map((project, i) => (
          <div
            key={project.name}
            className={`py-6 ${i < projects.length - 1 ? "border-b border-black" : ""}`}
          >
            <div className="flex items-start gap-4">
              {project.icon ? (
                <Image
                  src={project.icon}
                  alt={project.name}
                  width={44}
                  height={44}
                  className="flex-shrink-0 mt-0.5"
                  style={{ borderRadius: 10 }}
                />
              ) : (
                <span className="text-2xl flex-shrink-0 w-11 text-center leading-none mt-1">
                  {project.emoji}
                </span>
              )}

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-baseline gap-2 mb-1">
                  <span className="font-bold text-sm">{project.name}</span>
                  <span className="text-xs text-gray-400">[{project.type}]</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  {project.description}
                </p>
                {project.video && (
                  <div className="mb-3">
                    <iframe
                      style={{ border: 0 }}
                      width="100%"
                      height="280"
                      src={project.video}
                      allowFullScreen
                    />
                  </div>
                )}
                <div className="flex flex-wrap gap-4 text-xs">
                  <a
                    href={project.link}
                    {...(project.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="underline hover:no-underline"
                  >
                    → {project.name.toLowerCase()}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <hr className="border-t border-black mb-8" />

      {/* Footer */}
      <footer className="text-xs text-gray-500 flex flex-wrap gap-6">
        <a
          href="mailto:clement@pommef.com"
          className="underline hover:no-underline text-black"
        >
          clement@pommef.com
        </a>
        <a
          href="https://cfoltran.github.io/cv/en.html"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:no-underline text-black"
        >
          cv ↗
        </a>
        <span>© 2026 pommef</span>
      </footer>
    </main>
  );
}
