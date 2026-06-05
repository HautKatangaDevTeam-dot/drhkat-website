import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

function SocialIcon({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-4 w-4"
    >
      {children}
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    {
      label: "Facebook",
      href: "#",
      icon: () => (
        <SocialIcon>
          <path d="M17 2h-3c-2.2 0-4 1.8-4 4v3H7v4h3v9h4v-9h3l1-4h-4V6c0-.6.4-1 1-1h3V2z" />
        </SocialIcon>
      ),
    },
    {
      label: "X",
      href: "#",
      icon: () => (
        <SocialIcon>
          <path d="M5 5l14 14" />
          <path d="M19 5L5 19" />
        </SocialIcon>
      ),
    },
    {
      label: "YouTube",
      href: "#",
      icon: () => (
        <SocialIcon>
          <rect x="3.5" y="6.5" width="17" height="11" rx="3" />
          <path d="M10 15l5-3-5-3v6z" />
        </SocialIcon>
      ),
    },
    {
      label: "LinkedIn",
      href: "#",
      icon: () => (
        <SocialIcon>
          <path d="M6 9v9" />
          <path d="M6 6.5h.01" />
          <path d="M10 18v-5.5c0-1.4 1.1-2.5 2.5-2.5S15 11.1 15 12.5V18" />
          <path d="M19 18v-4.5c0-1.9-1.6-3.5-3.5-3.5S12 11.6 12 13.5V18" />
        </SocialIcon>
      ),
    },
  ] as const;

  return (
    <footer id="contact" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-slate-200">
                <Image
                  src="/ED-logo.jpeg"
                  alt="DRHKAT"
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
              <span className="text-lg font-semibold tracking-tight text-slate-900">
                DRHKAT
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Direction des Recettes du Haut-Katanga.
            </p>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-slate-900">Contact</h3>
            <div className="mt-3 space-y-2 text-sm text-slate-600">
              <a
                href="https://maps.app.goo.gl/xDoazWrYwLkJni8s5"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-slate-900"
              >
                Av. Kasaï et Moero (ex immeuble Granat), Lubumbashi
              </a>
              <a
                href="mailto:div.info@edrhkat.com"
                className="block hover:text-slate-900"
              >
                div.info@edrhkat.com
              </a>
            </div>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-slate-900">Navigation</h3>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <Link href="#services" className="text-slate-600 hover:text-slate-900">
                Services
              </Link>
              <Link href="#offices" className="text-slate-600 hover:text-slate-900">
                Bureaux
              </Link>
              <Link href="#laws" className="text-slate-600 hover:text-slate-900">
                Textes légaux
              </Link>
              <Link href="#faq" className="text-slate-600 hover:text-slate-900">
                FAQ
              </Link>
            </div>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-slate-900">Plateformes</h3>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <Link
                href="https://bank.edrhkat.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-900"
              >
                Accès interne sécurisé
              </Link>
              <Link
                href="https://mail.edrhkat.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-900"
              >
                Mail sécurisé
              </Link>
              <Link
                href="mailto:div.info@edrhkat.com"
                className="text-slate-600 hover:text-slate-900"
              >
                IT
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>© {currentYear} DRHKAT. Tous droits réservés.</p>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:text-slate-900"
                >
                  <social.icon />
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <Link href="/privacy-policy" className="hover:text-slate-900">
                Politique de confidentialité
              </Link>
              <Link href="/terms-of-service" className="hover:text-slate-900">
                Conditions générales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
