import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Homoeoglow | Natural Healing. Radiant Glow.",
  description:
    "Experience holistic homeopathy, personalized diet nutrition, and advanced clinical cosmetology with Dr. Rutuja Chapalgaonkar. Trusted Wellness Sanctuary.",
  keywords: [
    "homeopathy",
    "wellness",
    "holistic healing",
    "clinical cosmetology",
    "diet nutrition",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&family=Manrope:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning className="bg-surface text-on-surface font-body antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
