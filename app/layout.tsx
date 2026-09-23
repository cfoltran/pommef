import type { Metadata } from "next";
import "./globals.css";

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
        <link rel="icon" href="/pommef_logo-05.svg" type="image/svg+xml" />
      </head>
      <body className="bg-white text-black">{children}</body>
    </html>
  );
}
