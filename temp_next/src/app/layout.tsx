import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kerthikan Jegovarajah | Software Engineer & AI Systems Builder",
  description: "Portfolio of Kerthikan Jegovarajah — Computer Science undergraduate at IIT (University of Westminster), specialising in Software Engineering, Full Stack Development, and AI-driven systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#0a0e17] text-gray-200 selection:bg-blue-500/30 selection:text-blue-200`}>
        {children}
      </body>
    </html>
  );
}
