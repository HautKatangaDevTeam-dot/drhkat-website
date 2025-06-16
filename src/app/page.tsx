"use client";
import { AgentPlatformSection } from "@/components/AgentPlatformSection";
import { FutureServicesSection } from "@/components/FutureServicesSection";
import { HeroSection } from "@/components/HeroSection";
import { LawsSection } from "@/components/LawsSection";
import { OfficesSection } from "@/components/OfficesSection";
import { TaxpayerServices } from "@/components/TaxpayerServices";
import Link from "next/link";
import Image from "next/image";

// Main Page Component
export default function HomePage() {
  const currentYear = new Date().getFullYear(); // Get current year dynamically

  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      {/* <AnnouncementsSection /> */}
      <TaxpayerServices />
      <OfficesSection />
      <LawsSection />
      <AgentPlatformSection />
      <FutureServicesSection />

      {/* --- Footer Section --- */}
      <footer className="bg-gradient-to-r from-blue-950 to-blue-800 text-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand/About Section */}
          <div className="md:col-span-1 flex flex-col items-start">
            <Link href="/" className="mb-4 flex items-center gap-3">
              <div className="relative w-12 h-12 flex-shrink-0">
                {" "}
                {/* Wrapper for circular image */}
                <Image
                  src="/ED-logo.jpeg"
                  alt="DRHKAT Provincial Seal"
                  fill
                  className="object-cover rounded-full drop-shadow-sm"
                />
              </div>
              <span className="font-extrabold text-xl tracking-wide">
                DRHKAT
              </span>
            </Link>
            <p className="text-blue-200 text-sm leading-relaxed max-w-xs">
              La Direction des Recettes du Haut-Katanga : au service de la
              province pour une gestion fiscale transparente et efficace.
            </p>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold mb-5 text-blue-100">
              Contact Rapide
            </h3>
            <div className="space-y-3">
              <p className="text-blue-200 text-md">
                <a
                  href="https://maps.app.goo.gl/YOUR_Maps_LINK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  Avenue Kasaï et Moero n°0023, Lubumbashi
                </a>
              </p>
              <p className="text-blue-200 text-md">
                <a
                  href="mailto:info@drhkat.cd"
                  className="hover:text-white transition-colors duration-200"
                >
                  info@drhkat.cd
                </a>
              </p>
              <p className="text-blue-200 text-md">
                <a
                  href="tel:+243999123456"
                  className="hover:text-white transition-colors duration-200"
                >
                  +243 999 123 456
                </a>
              </p>
            </div>
          </div>

          {/* Useful Links */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold mb-5 text-blue-100">
              Navigation
            </h3>
            <div className="flex flex-col gap-3">
              <Link
                href="#services"
                className="text-blue-200 hover:text-white transition-colors duration-200 text-md"
              >
                Services Contribuables
              </Link>
              <Link
                href="#offices"
                className="text-blue-200 hover:text-white transition-colors duration-200 text-md"
              >
                Nos Bureaux
              </Link>
              <Link
                href="#laws"
                className="text-blue-200 hover:text-white transition-colors duration-200 text-md"
              >
                Textes Légaux
              </Link>
              <Link
                href="#agent-platform"
                className="text-blue-200 hover:text-white transition-colors duration-200 text-md"
              >
                Espace Agent
              </Link>
              <Link
                href="#contact"
                className="text-blue-200 hover:text-white transition-colors duration-200 text-md"
              >
                Contactez-nous
              </Link>
            </div>
          </div>

          {/* Social Media / Other Links (New Column) */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold mb-5 text-blue-100">
              Suivez-nous
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://twitter.com/drhkat_official"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-white transition-colors duration-200 text-md"
              >
                Twitter
              </a>
              <a
                href="https://facebook.com/drhkat_official"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-white transition-colors duration-200 text-md"
              >
                Facebook
              </a>
              <a
                href="https://linkedin.com/company/drhkat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-white transition-colors duration-200 text-md"
              >
                LinkedIn
              </a>
              {/* Add more social links as needed */}
            </div>
          </div>
        </div>

        {/* Copyright and Bottom Links (Optional) */}
        <div className="max-w-6xl mx-auto px-6 pt-10 mt-10 border-t border-blue-800 text-center text-blue-300 text-sm">
          <p>© {currentYear} DRHKAT. Tous droits réservés.</p>
          {/* Optional: Add privacy policy, terms of service links here if needed */}
          <div className="mt-2 text-xs">
            <Link href="/privacy-policy" className="hover:underline mx-2">
              Politique de Confidentialité
            </Link>
            <Link href="/terms-of-service" className="hover:underline mx-2">
              Conditions Générales
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
