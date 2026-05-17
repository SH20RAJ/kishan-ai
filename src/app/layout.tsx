import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
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
    "krishi sahayak",
    "fasal rog pehchan",
  ],
  authors: [{ name: "KisanAI", url: "https://kishanai.com" }],
  creator: "KisanAI",
  publisher: "KisanAI",
  metadataBase: new URL("https://kishanai.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://kishanai.com",
    siteName: "KisanAI",
    title: "KisanAI - AI Farming Assistant for Every Indian Farmer",
    description:
      "Crop disease detection, weather advisory, mandi prices, and government schemes in your language.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "KisanAI - AI Farming Assistant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KisanAI - AI Farming Assistant for Every Indian Farmer",
    description:
      "Crop disease detection, weather advisory, mandi prices, and government schemes in your language.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#166534" },
    { media: "(prefers-color-scheme: dark)", color: "#14532d" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-dvh`}
      >
        {children}
      </body>
    </html>
  );
}
