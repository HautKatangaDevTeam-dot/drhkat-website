"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";
import Link from "next/link";
import {
  EnvelopeIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

const faqs = [
  {
    q: "Quels sont les horaires d'ouverture ?",
    a: "Du lundi au vendredi, de 7h30 à 16h00 (heures pouvant varier selon le bureau).",
  },
  {
    q: "Où trouver les textes légaux et formulaires ?",
    a: "La section Textes légaux contient les documents disponibles.",
  },
  {
    q: "Comment contacter la DRHKAT ?",
    a: "Vous pouvez écrire à info@drhkat.cd ou utiliser le lien vers la carte pour le siège.",
  },
  {
    q: "Quels sont les principaux services de la DRHKAT ?",
    a: "Mobilisation des recettes (impôts, taxes, droits, redevances), conformité, recouvrement, lutte contre la fraude et assistance au public.",
  },
  {
    q: "La déclaration et le paiement en ligne sont-ils disponibles ?",
    a: "La plateforme EDRHKAT est en déploiement progressif. Consultez la section Services en ligne pour les informations et liens.",
  },
  {
    q: "Où se trouve le siège principal ?",
    a: "À Lubumbashi, à l’intersection des avenues Kasaï et Moero (ex immeuble Granat).",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="bg-white py-20 sm:py-24">
      <Container>
        <div className="mb-10 sm:mb-12">
          <SectionHeader
            eyebrow={
              <span className="inline-flex items-center gap-2">
                <QuestionMarkCircleIcon className="h-4 w-4 text-blue-700" />
                FAQ
              </span>
            }
            align="left"
            title="Questions fréquentes"
            description="Les réponses aux questions les plus courantes."
          />
        </div>

        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-8">
            <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-sm">
              {faqs.map((item, idx) => (
                <motion.details
                  key={item.q}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: idx * 0.03 }}
                  className="group p-5"
                >
                  <summary className="cursor-pointer list-none text-base font-semibold text-slate-900">
                    <span className="align-middle">{item.q}</span>
                    <span className="float-right text-slate-400 transition-transform group-open:rotate-45 group-open:text-slate-700">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.a}</p>
                </motion.details>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm lg:col-span-4 lg:self-start lg:sticky lg:top-28"
          >
            <div className="flex items-start gap-4">
              <div className="mt-0.5 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue-700 shadow-sm ring-1 ring-slate-200">
                <EnvelopeIcon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Contacts rapides</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Pour une demande officielle, utilisez les canaux ci-dessous.
                </p>
                <div className="mt-5 grid gap-3">
                  <a
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
                    href="mailto:info@drhkat.cd"
                  >
                    <EnvelopeIcon className="h-4 w-4" />
                    info@drhkat.cd
                  </a>
                  <Link
                    href="#offices"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
                  >
                    <MapPinIcon className="h-4 w-4" />
                    Trouver un bureau
                  </Link>
                  <Link
                    href="#online-services"
                    className="inline-flex items-center justify-center rounded-xl bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
                  >
                    Services en ligne
                  </Link>
                </div>
                <p className="mt-5 text-xs leading-relaxed text-slate-500">
                  Horaires: lundi à vendredi, 7h30 à 16h00.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
