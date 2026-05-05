import VoxFooter from "@/app/components/VoxFooter";
import VoxNavbar from "@/app/components/VoxNavbar";
import Image from "next/image";

const screenshots = ["0", "1", "2", "3", "4"];

const features = [
  { icon: "☝️", text: "One affirmation at a time — globally." },
  { icon: "💸", text: "Bid to claim the top spot." },
  { icon: "✍️", text: "Write what the whole planet sees." },
  { icon: "💬", text: "Anyone can comment in real time." },
  { icon: "📣", text: "Everyone can react." },
  { icon: "📈", text: "Watch the price fluctuate live." },
];

export default function VoxontopPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <VoxNavbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
            Voxontop
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold leading-tight mb-6">
            One affirmation,{" "}
            <span className="text-gray-400">many voices.</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Only the highest bidder decides what the entire planet sees.
            An experiment in influence, power, and collective voice.
          </p>
          <a
            href="https://apps.apple.com/fr/app/voxontop/id6753363277"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform hover:-translate-y-0.5"
          >
            <Image
              src="/app-store.svg"
              alt="Download on the App Store"
              width={160}
              height={44}
              className="h-[44px] w-auto mx-auto"
            />
          </a>
        </div>
      </section>

      {/* Screenshots */}
      <section className="pb-20 px-6">
        <div className="flex gap-4 overflow-x-auto pb-4 max-w-5xl mx-auto snap-x snap-mandatory scrollbar-hide">
          {screenshots.map((n) => (
            <div
              key={n}
              className="flex-shrink-0 snap-center w-[200px] sm:w-[220px]"
            >
              <Image
                src={`/${n}.png`}
                alt={`Voxontop screenshot ${n}`}
                width={220}
                height={476}
                className="rounded-[28px] w-full h-auto border border-white/10"
              />
            </div>
          ))}
        </div>
      </section>

      <hr className="border-white/10 mx-6 mb-20" />

      {/* Features */}
      <section className="pb-20 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xs uppercase tracking-widest text-gray-500 mb-8">
            How it works
          </h2>
          <ul className="flex flex-col gap-5">
            {features.map((f) => (
              <li key={f.text} className="flex items-start gap-4 text-sm text-gray-300 leading-relaxed">
                <span className="text-xl flex-shrink-0 w-7">{f.icon}</span>
                {f.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <hr className="border-white/10 mx-6 mb-20" />

      {/* About */}
      <section className="pb-24 px-6">
        <div className="max-w-2xl mx-auto text-sm text-gray-400 leading-relaxed">
          <p>
            Voxontop is a hybrid social network and auction platform.
            At any given moment, there is one single affirmation visible to every user in the world.
            Whoever outbids the current holder takes the stage — and writes their message for all to see.
          </p>
          <p className="mt-4">
            Comments, reactions, and price movements happen in real time.
            The experiment asks: what does it mean when public discourse has a price tag?
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-xs text-gray-600">
            <span>Free · In-app purchases from €0.99</span>
            <span>·</span>
            <span>iOS 15+</span>
            <span>·</span>
            <span>16+</span>
          </div>
        </div>
      </section>

      <VoxFooter />
    </div>
  );
}
