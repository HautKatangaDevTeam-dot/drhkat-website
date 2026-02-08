import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

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
              Direction des Recettes du Haut-Katanga. Informations et ressources
              officielles.
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
                href="mailto:info@drhkat.cd"
                className="block hover:text-slate-900"
              >
                info@drhkat.cd
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
                href="https://ushurutrack-gold.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-900"
              >
                Plateforme EDRHKAT
              </Link>
              <Link
                href="mailto:support@drhkat.cd"
                className="text-slate-600 hover:text-slate-900"
              >
                Support
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>© {currentYear} DRHKAT. Tous droits réservés.</p>
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
    </footer>
  );
}
