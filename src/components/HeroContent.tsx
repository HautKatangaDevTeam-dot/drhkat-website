"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function HeroContent() {
  const highlights = [
    "Service public provincial (autonomie administrative et financière).",
    "Tutelle: Ministère provincial des Finances.",
    "Siège: intersection avenues Kasaï et Moero, Lubumbashi (ancien immeuble Granat).",
  ] as const;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.15 },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center lg:text-left"
        >
          <div className="mb-6 inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
            Direction des Recettes du Haut-Katanga (DRHKAT)
          </div>

          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            Mobiliser les recettes, financer le développement
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600 lg:mx-0">
            La DRHKAT collecte les impôts, taxes, droits et redevances provinciaux. Ces recettes
            contribuent au financement des routes, écoles et infrastructures du Haut-Katanga.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Link
              href="#services"
              className="rounded-xl bg-blue-700 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-blue-800"
            >
              Découvrir nos services
            </Link>
            <Link
              href="#laws"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Textes légaux
            </Link>
          </div>

          <motion.ul
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-8 space-y-2 text-left"
          >
            {highlights.map((h) => (
              <motion.li
                key={h}
                variants={fadeUp}
                className="flex items-start gap-3 text-sm text-slate-600"
              >
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-700" />
                <span>{h}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative h-[380px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:h-[440px] lg:h-[520px]"
        >
          <motion.div variants={fadeUp} className="absolute inset-0">
            <Image
              src="/government-building.jpg"
              alt="Siège du gouvernement du Haut-Katanga"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Subtle overlays to keep text readable and look more "official" */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-slate-950/25 via-slate-900/10 to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.20),transparent_55%)]" />
            {/* Bottom fade into the white card background */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/70 to-transparent" />
          </motion.div>

          {/* Top-left status badge */}
          <motion.div
            variants={fadeUp}
            className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/75 px-4 py-2 text-xs font-semibold text-slate-900 backdrop-blur"
          >
            Service public provincial
          </motion.div>

          {/* Inset secondary image for variation (desktop only) */}
          <motion.div
            variants={fadeUp}
            className="absolute right-4 top-4 hidden w-[240px] overflow-hidden rounded-2xl border border-white/30 bg-white/60 shadow-sm backdrop-blur lg:block"
          >
            <div className="relative h-[150px]">
              <Image
                src="/team-meeting.jpg"
                alt="Réunion des officiels provinciaux"
                fill
                className="object-cover"
                sizes="240px"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
            </div>
            <div className="px-4 py-3 text-xs">
              <div className="font-semibold text-slate-900">Coordination</div>
              <div className="mt-0.5 text-slate-700">
                Gouvernance et pilotage des services
              </div>
            </div>
          </motion.div>

          {/* Bottom caption */}
          <motion.div
            variants={fadeUp}
            className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/20 bg-white/70 p-4 text-sm text-slate-800 backdrop-blur"
          >
            Informations officielles et orientation pour les contribuables du Haut-Katanga.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.45 }}
            className="absolute -bottom-5 -right-5 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-blue-50 p-3 text-blue-700">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">Accès rapide</h3>
                <p className="text-xs text-slate-600">Liens utiles</p>
              </div>
              <Link
                href="#online-services"
                className="whitespace-nowrap rounded-lg bg-blue-700 px-3 py-2 text-xs font-semibold text-white hover:bg-blue-800"
              >
                Ouvrir
              </Link>
            </div>
          </motion.div>

          <div className="pointer-events-none absolute -top-4 -right-4 h-20 w-20 rounded-full bg-blue-100/50" />
          <div className="pointer-events-none absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-blue-200/30" />
        </motion.div>
      </div>
    </div>
  );
}
