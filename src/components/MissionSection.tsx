"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BanknotesIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";

const points = [
  {
    title: "Mobilisation des recettes",
    desc: "Gestion et collecte des impôts, taxes, droits et redevances provinciaux.",
    icon: BanknotesIcon,
  },
  {
    title: "Conformité et recouvrement",
    desc: "Suivi des obligations fiscales, relance et recouvrement des arriérés.",
    icon: SparklesIcon,
  },
  {
    title: "Lutte contre la fraude",
    desc: "Prévention de l'évasion fiscale et contrôle pour protéger le budget provincial.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Service au public",
    desc: "Assistance aux citoyens (documents de bord et démarches administratives).",
    icon: CheckCircleIcon,
  },
] as const;

export function MissionSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Image first on desktop to create variation vs other sections */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="relative order-none rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm sm:p-5 lg:order-first"
          >
            {/* "Gallery card" style instead of full-bleed (variation) */}
            <div className="grid gap-4 lg:grid-cols-5 lg:items-stretch">
              <div className="relative h-[260px] overflow-hidden rounded-2xl border border-slate-200 bg-white lg:col-span-3 sm:h-[320px] lg:h-[440px]">
                <Image
                  src="/province-landscape.jpg"
                  alt="Paysage du Haut-Katanga"
                  fill
                  className="object-cover object-[50%_35%]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/25 via-slate-900/10 to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/60 to-transparent" />
                <div className="absolute left-4 bottom-4 rounded-full border border-white/30 bg-white/75 px-4 py-2 text-xs font-semibold text-slate-900 backdrop-blur">
                  Haut-Katanga
                </div>
              </div>

              <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 lg:col-span-2">
                <div>
                  <div className="text-sm font-semibold text-slate-900">
                    Proximité et efficacité
                  </div>
                  <div className="mt-2 text-sm leading-relaxed text-slate-600">
                    Pour une administration fiscale plus simple, plus proche et plus efficace.
                  </div>
                </div>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-700">
                  Lubumbashi, Haut-Katanga
                </div>
              </div>
            </div>
          </motion.div>

          <div className="lg:order-last">
            <div className="mb-10 sm:mb-12">
              <SectionHeader
                align="left"
                title="Notre mission"
                description="Service public provincial, doté d&apos;une autonomie administrative et financière, opérant sous la tutelle du Ministère provincial des Finances."
              />
            </div>

            <p className="mb-6 text-sm leading-relaxed text-slate-600">
              La DRHKAT est l&apos;un des moteurs économiques du Haut-Katanga. Avant le découpage de 2015,
              la direction était connue sous le nom de DRKAT. Aujourd&apos;hui, elle contribue à maintenir
              la province parmi les plus productives de la RDC, notamment grâce à l&apos;activité minière.
            </p>

            <div className="grid gap-4">
              {points.map((p, idx) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: idx * 0.04 }}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="mt-0.5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <p.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">
                      {p.title}
                    </div>
                    <div className="mt-1 text-sm leading-relaxed text-slate-600">
                      {p.desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
