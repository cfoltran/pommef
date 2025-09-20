import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pomme F",
  description: "Searching for problems looking for solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* No favicon */}
      </head>
      <body className={inter.className + ' bg-white text-black'}>{children}</body>
    </html>
  );
}
