"use client";

import {
  ArrowDownTrayIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import { motion, type Variants } from "framer-motion";
import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";

// 👇 Use explicit typing + cubic-bezier easing
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      // Motion/Framer typing-safe easing (easeOut-like):
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const lawsData = [
  {
    title: "Loi n°08/012",
    description:
      "Principes fondamentaux relatifs à la libre administration des provinces et des entités territoriales décentralisées.",
  },
  {
    title: "Code Fiscal Provincial",
    description:
      "Régime fiscal applicable et procédures de recouvrement des impôts provinciaux dans le Haut-Katanga.",
  },
  {
    title: "Arrêté Provincial N°01/2024",
    description:
      "Modalités de recouvrement des taxes, redevances et droits perçus au profit de la province.",
  },
  {
    title: "Ordonnance Provinciale N°05/2023",
    description:
      "Règlementation sur les permis de construire et l'urbanisme provincial.",
  },
];

export const LawsSection = () => (
  <section id="laws" className="bg-white py-20 sm:py-24">
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mb-10 sm:mb-12"
      >
        <SectionHeader
          eyebrow={
            <span className="inline-flex items-center gap-2">
              <DocumentTextIcon className="h-4 w-4 text-blue-700" />
              Textes officiels
            </span>
          }
          align="left"
          title="Textes légaux"
          description="Lois, codes et arrêtés provinciaux (liste indicative)."
        />
      </motion.div>

      <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-8">
          {/* Laws Grid */}
          <motion.div
            className="grid gap-6 sm:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {lawsData.map((law, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -4 }}
              >
                <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <DocumentTextIcon className="h-6 w-6" />
                  </div>

                  <h3 className="text-base font-semibold text-slate-900">{law.title}</h3>

                  <p className="mt-3 flex-grow text-sm leading-relaxed text-slate-600">
                    {law.description}
                  </p>

                  <a
                    href={`mailto:info@drhkat.cd?subject=${encodeURIComponent(
                      `Demande de document: ${law.title}`
                    )}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
                  >
                    Demander ce document
                    <ArrowDownTrayIcon className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
              <DocumentTextIcon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Références officielles
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                La liste ci-contre est indicative. Pour obtenir un texte, un code ou un arrêté précis,
                envoyez une demande par email avec le titre du document et votre besoin.
              </p>
              <a
                className="mt-5 inline-flex items-center justify-center rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800"
                href="mailto:info@drhkat.cd?subject=Demande%20de%20texte%20legal%20-%20DRHKAT"
              >
                Demander un document
                <ArrowDownTrayIcon className="ml-2 h-4 w-4" />
              </a>
              <p className="mt-4 text-xs leading-relaxed text-slate-500">
                Astuce: indiquez la période, la commune/ville concernée et le contexte (impôt, taxe, recouvrement).
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  </section>
);
