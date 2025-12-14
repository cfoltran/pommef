import VoxFooter from "@/app/components/VoxFooter";
import VoxNavbar from "@/app/components/VoxNavbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-white">
      <VoxNavbar />
      <div className="pt-16 min-h-screen bg-black text-white">
        <div className="py-16 bg-gradient-to-b from-black to-[#111]">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between gap-16 lg:flex-row flex-col">
              <div className="flex-1 max-w-[600px]">
                <h2 className="text-5xl font-semibold mb-8 leading-tight bg-gradient-to-r from-white to-[#aaa] bg-clip-text text-transparent">
                  There is only one affirmation in the entire world, and it belongs to whoever pays the most.
                </h2>
                <ul className="list-none p-0 m-0 mb-8">
                  <li className="text-2xl py-3 flex items-center gap-4">🏔️ One affirmation.</li>
                  <li className="text-2xl py-3 flex items-center gap-4">💬 Anyone can comment.</li>
                  <li className="text-2xl py-3 flex items-center gap-4">📣 Everyone can react.</li>
                  <li className="text-2xl py-3 flex items-center gap-4">☝️ But only one person can write what the world sees.</li>
                </ul>
                <p className="text-xl opacity-80 mb-10 leading-relaxed">
                  Vox on Top is an experiment in understanding the dynamics of influence, power, and collective voice in the digital age. By allowing only one paid affirmation at a time, we aim to explore how monetary influence shapes public discourse and the implications it has on society.
                </p>
                <div className="flex items-center gap-4">
                  <a
                    href="https://apps.apple.com/fr/app/voxontop/id6753363277"
                    className="inline-block transition-transform hover:-translate-y-0.5"
                  >
                    <Image
                      src="/app-store.svg"
                      alt="Download on the App Store"
                      width={200}
                      height={50}
                      className="h-[50px] w-auto"
                    />
                  </a>
                </div>
              </div>
              <div className="flex-1 flex justify-center items-center perspective-1000">
                <div className="w-[300px] h-[650px] relative flex items-center justify-center bg-[#1a1a1a] rounded-[45px] shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_0_0_2px_rgba(255,255,255,0.03),0_0_30px_rgba(0,0,0,0.5)] border border-white/10">
                  <Image
                    src="/vox.png"
                    alt="Voxontop app preview"
                    width={270}
                    height={600}
                    className="rounded-[38px] object-cover shadow-lg w-[94%] h-[94%]"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <VoxFooter />
    </div>
  );
} 
