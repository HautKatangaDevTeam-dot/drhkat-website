import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script"; // Import the Script component
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
  title: "Direction des Recettes du Haut-Katanga (DRHKAT)",
  description:
    "Plateforme officielle de la Direction des Recettes du Haut-Katanga. Mobilisation efficace des recettes fiscales pour le développement socio-économique durable de la province.",
  keywords: [
    "DRHKAT",
    "Haut-Katanga",
    "Direction des Recettes",
    "Impôts",
    "Taxes",
    "RDC",
    "Lubumbashi",
    "Gouvernement Provincial",
    "Fiscalité",
    "Développement",
    "Ushurutrack",
    "Apurement",
    "Tax collection",
    "Revenue department",
    "Congo",
    "DRC",
    "Provincial government",
    "Taxation",
    "Development",
  ],
  openGraph: {
    title: "Direction des Recettes du Haut-Katanga (DRHKAT)",
    description:
      "Mobilisation efficace des recettes fiscales pour le développement socio-économique durable de notre province.",
    url: "https://www.drhkat.cd",
    siteName: "DRHKAT",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Direction des Recettes du Haut-Katanga (DRHKAT)",
    description:
      "Mobilisation efficace des recettes fiscales pour le développement socio-économique durable de notre province.",
    creator: "@HautKatangaDevTeam",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        {/* Use next/script with afterInteractive strategy */}
        <Script
          src="https://cdn.botpress.cloud/webchat/v2.5/inject.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://files.bpcontent.cloud/2025/05/23/15/20250523150619-0T8KL549.js"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
