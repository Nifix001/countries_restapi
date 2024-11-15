// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Countries",
  description: "List of all countries in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-very-light-gray-bg text-very-dark-blue-text dark:bg-very-dark-blue-bg dark:text-white-text transition-colors duration-300">
        <Nav />
        <main className="container mx-auto px-4 py-12">
          {children}
        </main>
      </body>
    </html>
  );
}
