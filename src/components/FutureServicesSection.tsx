"use client";

import { ClockIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";

const roadmap = [
  {
    title: "Déclaration et paiement en ligne",
    desc: "Déclaration, paiement et suivi des obligations via EDRHKAT (déploiement progressif).",
    status: "En préparation",
  },
  {
    title: "Notifications et rappels",
    desc: "Alertes pour échéances, informations et confirmations de démarches.",
    status: "À venir",
  },
  {
    title: "Suivi des dossiers",
    desc: "Historique, statut des demandes et orientation vers les services compétents.",
    status: "À venir",
  },
] as const;

export const FutureServicesSection = () => (
  <section className="bg-white py-20 sm:py-24">
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-left"
      >
        <div className="grid gap-10 lg:grid-cols-5 lg:items-start">
          <div className="lg:col-span-3">
            <div className="mb-10 sm:mb-12">
              <SectionHeader
                eyebrow={
                  <span className="inline-flex items-center gap-2">
                    <SparklesIcon className="h-4 w-4 text-blue-700" />
                    À venir
                  </span>
                }
                align="left"
                title="Services futurs"
                description="Modernisation progressive des services pour simplifier les démarches des contribuables."
              />
            </div>

            <div className="grid gap-4">
              {roadmap.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: idx * 0.04 }}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                      <ClockIcon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                        <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                          {item.status}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:col-span-2"
          >
            <div className="relative h-[280px] sm:h-[340px] lg:h-[540px]">
              <Image
                src="/hero-bg.jpg"
                alt="Modernisation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/25 via-slate-900/10 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/60 to-transparent" />
            </div>

            <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/75 px-4 py-2 text-xs font-semibold text-slate-900 backdrop-blur">
              Roadmap
            </div>

            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/20 bg-white/70 p-5 text-sm text-slate-800 backdrop-blur">
              <div className="font-semibold text-slate-900">Déploiement progressif</div>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                Les fonctionnalités seront ouvertes progressivement. Pour être informé, écrivez à{" "}
                <a className="font-semibold text-blue-700 hover:text-blue-800" href="mailto:info@drhkat.cd">
                  info@drhkat.cd
                </a>
                .
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Container>
  </section>
);
