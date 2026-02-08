"use client";

import { ServiceCard } from "./ServiceCard";
import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";
import { motion } from "framer-motion";
import {
  BanknotesIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  Squares2X2Icon,
  TruckIcon,
} from "@heroicons/react/24/outline";

const servicesData = [
  {
    icon: "map",
    title: "Localisation",
    description: "Trouvez nos bureaux dans toute la province",
    link: "#offices",
  },
  {
    icon: "document",
    title: "Documents Légaux",
    description: "Accédez aux textes de loi et formulaires",
    link: "#laws",
  },
  {
    icon: "faq",
    title: "FAQ",
    description: "Réponses aux questions fréquentes",
    link: "#faq",
  },
] as const;

const divisions = [
  {
    title: "Impôts",
    desc: "Impôt foncier, IRL et autres impôts provinciaux.",
    icon: BanknotesIcon,
  },
  {
    title: "Taxes et redevances",
    desc: "Taxes non fiscales, droits et redevances provinciales.",
    icon: DocumentTextIcon,
  },
  {
    title: "Recouvrement et contrôle",
    desc: "Suivi des arriérés et contrôles de conformité.",
    icon: TruckIcon,
  },
] as const;

export const TaxpayerServices = () => (
  <section id="services" className="bg-white py-20 sm:py-24">
    <Container>
      <div className="mb-10 sm:mb-12">
        <SectionHeader
          eyebrow={
            <span className="inline-flex items-center gap-2">
              <Squares2X2Icon className="h-4 w-4 text-blue-700" />
              Services
            </span>
          }
          align="left"
          title="Services aux contribuables"
          description="Orientation, démarches et accès aux informations utiles."
        />
      </div>

      <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-8">

          <div className="grid gap-6 md:grid-cols-3">
            {servicesData.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-semibold text-slate-900">
              Divisions principales
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
              La DRHKAT s&apos;organise en divisions spécialisées pour la mobilisation des recettes
              provinciales et l&apos;accompagnement des citoyens.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {divisions.map((d, idx) => (
                <motion.div
                  key={d.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: idx * 0.04 }}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-blue-700 shadow-sm ring-1 ring-slate-200">
                      <d.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">
                        {d.title}
                      </div>
                      <div className="mt-1 text-sm leading-relaxed text-slate-600">
                        {d.desc}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
              <h3 className="text-lg font-semibold text-slate-900">
                Besoin d&apos;orientation ?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Pour une demande officielle ou un accompagnement, contactez la DRHKAT. Indiquez votre
                situation (impôts, taxes, documents de bord, recouvrement) et votre commune.
              </p>
              <a
                href="mailto:info@drhkat.cd?subject=Demande%20d%27orientation%20-%20DRHKAT"
                className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800 sm:w-auto"
              >
                Écrire à info@drhkat.cd
              </a>
              <p className="mt-4 text-xs leading-relaxed text-slate-500">
                Horaires: lundi à vendredi, 7h30 à 16h00.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  </section>
);
