import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ChatConsentBanner } from "@/components/ChatConsentBanner";
import { BotpressChatLoader } from "@/components/BotpressChatLoader";
import { Providers } from "./providers";

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
    "Site officiel de la Direction des Recettes du Haut-Katanga (DRHKAT), service public provincial autonome sous la tutelle du Ministère provincial des Finances. Siège à Lubumbashi (av. Kasaï et Moero, ex immeuble Granat).",
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
    "Recouvrement",
    "Documents de bord",
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
      "Service public provincial charge de la mobilisation des recettes (impots, taxes, droits, redevances) pour financer le developpement du Haut-Katanga.",
    url: "https://www.drhkat.cd",
    siteName: "DRHKAT",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Direction des Recettes du Haut-Katanga (DRHKAT)",
    description:
      "Mobilisation des recettes provinciales pour financer le developpement du Haut-Katanga.",
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
        <BotpressChatLoader />
        <ChatConsentBanner />
      </body>
    </html>
  );
}
