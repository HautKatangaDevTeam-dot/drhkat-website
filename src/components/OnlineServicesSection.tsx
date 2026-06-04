"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowTopRightOnSquareIcon,
  ClipboardDocumentCheckIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";

export function OnlineServicesSection() {
  const internalPlatformUrl = "https://bank.edrhkat.com";
  return (
    <section id="online-services" className="bg-slate-50 py-24 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <div className="mb-12 sm:mb-14">
              <SectionHeader
                eyebrow={
                  <span className="inline-flex items-center gap-2">
                    <ShieldCheckIcon className="h-4 w-4 text-blue-700" />
                    Services en ligne
                  </span>
                }
                align="left"
                title="Services numériques"
                description="Accès aux services et aux plateformes de la DRHKAT."
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:col-span-2"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <SparklesIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Portail</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      Informations, suivi des obligations et assistance.
                    </p>
                    <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                      <Link
                        href="https://edrhkat-hk.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
                      >
                        Ouvrir
                      </Link>
                      <Link
                        href={internalPlatformUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                      >
                        Accès interne sécurisé
                        <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                      </Link>
                      <a
                        href="mailto:div.info@edrhkat.com"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
                      >
                        Contact
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <ClipboardDocumentCheckIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Suivi et conformité</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      Consultez vos informations, suivez vos démarches et obtenez des indications
                      sur vos obligations provinciales.
                    </p>
                    <Link
                      href="#laws"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
                    >
                      Voir les textes légaux
                    </Link>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <DocumentTextIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Documents de bord</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      Orientation pour les documents de bord et autres démarches administratives.
                    </p>
                    <Link
                      href="#offices"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
                    >
                      Trouver un bureau
                    </Link>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5 lg:sticky lg:top-28"
          >
            {/* Framed split-panel (variation vs hero) */}
            <div className="grid gap-4 lg:grid-cols-5">
              <div className="relative h-[260px] overflow-hidden rounded-2xl lg:col-span-3 sm:h-[320px] lg:h-[420px]">
                <Image
                  src="/citizen-services.jpg"
                  alt="Services aux citoyens"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/30 via-slate-900/10 to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/60 to-transparent" />
                <div className="absolute left-4 bottom-4 rounded-full border border-white/30 bg-white/75 px-4 py-2 text-xs font-semibold text-slate-900 backdrop-blur">
                  Accueil contribuables
                </div>
              </div>

              <div className="relative h-[180px] overflow-hidden rounded-2xl lg:col-span-2 sm:h-[220px] lg:h-[420px]">
                <Image
                  src="/team-meeting.jpg"
                  alt="Réunion de coordination"
                  fill
                  className="object-cover object-[50%_35%]"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/35 via-slate-900/10 to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/60 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/75 px-4 py-2 text-xs font-semibold text-slate-900 backdrop-blur">
                  Coordination
                </div>
                <div className="absolute left-4 right-4 bottom-4 rounded-2xl border border-white/20 bg-white/70 p-4 text-sm text-slate-800 backdrop-blur">
                  Siege: av. Kasai et Moero (ex immeuble Granat), Lubumbashi.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
