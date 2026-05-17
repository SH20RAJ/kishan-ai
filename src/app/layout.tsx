import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "KisanAI - AI Farming Assistant for Every Indian Farmer",
    template: "%s | KisanAI",
  },
  description:
    "Crop disease detection, weather advisory, mandi prices, and government schemes in your language. KisanAI helps Indian farmers make better daily crop decisions.",
  keywords: [
    "AI agriculture assistant India",
    "crop disease detection India",
    "mandi prices assistant",
    "farmer weather advisory",
    "government schemes for farmers",
    "multilingual farming chatbot",
    "KisanAI",
    "Indian farming AI",
  ],
  authors: [{ name: "KisanAI" }],
  creator: "KisanAI",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://kishanai.com",
    siteName: "KisanAI",
    title: "KisanAI - AI Farming Assistant for Every Indian Farmer",
    description:
      "Crop disease detection, weather advisory, mandi prices, and government schemes in your language.",
  },
  twitter: {
    card: "summary_large_image",
    title: "KisanAI - AI Farming Assistant for Every Indian Farmer",
    description:
      "Crop disease detection, weather advisory, mandi prices, and government schemes in your language.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#166534" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
