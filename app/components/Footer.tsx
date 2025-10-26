'use client';

export default function Footer() {
  return (
  <footer className="w-full py-8 mt-12 border-t border-gray-200 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center">
          <a
            href={`mailto:contact@pommef.com`}
            className="text-gray-600 hover:text-black transition-colors font-medium text-lg"
          >
            contact@pommef.com
          </a>
        </div>
      </div>
    </footer>
  );
} 