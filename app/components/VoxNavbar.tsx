import Link from 'next/link';

export default function VoxNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/voxontop" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-[url('/icon.png')] bg-center bg-no-repeat bg-cover" />
            <span className="text-xl font-semibold">Voxontop</span>
          </Link>
          
          <div className="flex items-center gap-6">
            <Link 
              href="" 
              className="text-sm hover:text-[#00bcd4] transition-colors"
            >
              Download
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 