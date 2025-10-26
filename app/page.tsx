import Footer from "./components/Footer";
import Image from "next/image";

const t = {
  sections: {
    mobileApps: "Mobile Apps",
    aiTools: "AI Tools"
  },
  mobileApps: {
    deckart: {
      title: "Deckart",
      description: "Revolutionize learning with cognitive science! Deckart uses scientifically proven methods like active recall, spaced repetition, and gamified learning to help students develop an elephant's memory. From middle school to high school, our interactive flashcards optimize when to review each concept, transforming study sessions into engaging experiences that actually stick.",
      link: "https://deckart.xyz"
    },
    unbubl: {
      title: "Unbubl", 
      description: "Pop into the moment, stay curious! 🧭 Unbubl transforms every walk into a learning adventure with location-based bubbles of knowledge. Get spontaneous notifications with fascinating stories tied to your exact location - whether you're cycling through Paris or exploring new cities. Each journey becomes an opportunity to discover hidden insights and enrich your travels with captivating anecdotes.",
      link: "https://unbubl.com"
    }
  },
  aiTools: {
    mcpdoor: {
      title: "Mcpdoor",
      description: "Your gateway to the Model Context Protocol ecosystem! 🚪 Mcpdoor bridges the gap between AI and real-world applications, enabling seamless integration with tools like Google Maps, Airbnb, and thousands of other services. With just one click, unlock the power of contextual AI that can interact with actual tools and data sources, revolutionizing how AI assistants understand and act in the real world.",
      link: "https://mcpdoor.com"
    }
  },
  contact: {
    email: "clement@pommef.com"
  }
};


export default function Home() {

  return (
    <>
      <main className="min-h-screen px-4 sm:px-6 md:px-8 max-w-4xl mx-auto pt-24 bg-white text-black">
        <section className="mb-16">
          <div className="max-w-3xl mx-auto flex flex-col gap-6">
            {/* Deckart */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 transform hover:scale-[1.02] transition-transform duration-200 hover:shadow-lg">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <Image src="/deckart.png" alt="Deckart app icon" width={96} height={96} className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0" />
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
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 transform hover:scale-[1.02] transition-transform duration-200 hover:shadow-lg">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <Image src="/unbubl.png" alt="Unbubl app icon" width={96} height={96} className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0" />
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
            <div className="max-w-3xl mx-auto flex flex-col gap-6">
              {/* Mcpdoor */}
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 transform hover:scale-[1.02] transition-transform duration-200 hover:shadow-lg">
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-[16px] shadow flex-shrink-0 flex items-center justify-center text-4xl">
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