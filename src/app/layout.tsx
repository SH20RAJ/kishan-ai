import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800", "900"],
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
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "KisanAI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "KisanAI - AI Farming Assistant for Every Indian Farmer",
    description: "Crop disease detection, weather advisory, mandi prices, and government schemes in your language.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#58CC02" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a2e" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={`scroll-smooth ${nunito.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${nunito.className} antialiased bg-background text-foreground min-h-dvh`}
        style={{ fontFamily: "var(--font-nunito), 'Nunito', sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
