"use client";

import {
  MapPinIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";

// Data for communal offices within Lubumbashi
const lubumbashiCommunes = [
  { name: "Lubumbashi" },
  { name: "Annexe" },
  { name: "Kamalondo" },
  { name: "Kampemba" },
  { name: "Katuba" },
  { name: "Kenya" },
  { name: "Rwashi" },
];

// Data for provincial antenna offices outside Lubumbashi communes
const provincialAntennas = [
  { city: "Kipushi" },
  { city: "Kasumbalesa" },
  { city: "Likasi" },
  { city: "Kambove" },
];

export const OfficesSection = () => (
  <section id="offices" className="bg-white py-20 sm:py-24">
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
              <MapPinIcon className="h-4 w-4 text-blue-700" />
              Bureaux
            </span>
          }
          align="left"
          title={
            <>
              Où nous trouver
            </>
          }
          description="Présence sur le territoire provincial pour être au plus proche des contribuables."
        />
      </motion.div>

      <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-8">
          {/* Offices Grid */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Main Office Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              viewport={{ once: true }}
              className="group lg:col-span-2"
            >
              <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                      <BuildingOffice2Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        Siège principal (Lubumbashi)
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        Intersection avenues Kasaï et Moero, ex immeuble Granat.
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Heures: Lundi - Vendredi, 7h30 - 16h00.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="https://maps.app.goo.gl/xDoazWrYwLkJni8s5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800"
                    >
                      Voir sur la carte
                    </Link>
                    <Link
                      href="mailto:info@drhkat.cd?subject=Adresse%20et%20orientation%20-%20DRHKAT"
                      className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                    >
                      Contacter
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Communal Offices Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-slate-700">
                  <BuildingOffice2Icon className="h-6 w-6" />
                </div>

                <h3 className="text-center text-lg font-semibold text-slate-900">
                  Communes de Lubumbashi
                </h3>

                <p className="mt-2 text-center text-sm text-slate-600">
                  Présence dans la ville de Lubumbashi.
                </p>

                <div className="mt-6 flex-grow overflow-hidden">
                  <ul className="custom-scrollbar h-56 space-y-2 overflow-y-auto pr-2">
                    {lubumbashiCommunes.map((office, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 rounded-xl border border-slate-200/60 bg-white p-3"
                      >
                        <MapPinIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-700" />
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-semibold text-slate-900">
                            {office.name}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Provincial Antennas Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-slate-700">
                  <MapPinIcon className="h-6 w-6" />
                </div>

                <h3 className="text-center text-lg font-semibold text-slate-900">
                  Antennes provinciales
                </h3>

                <p className="mt-2 text-center text-sm text-slate-600">
                  Grandes villes du Haut-Katanga.
                </p>

                <div className="mt-6 flex-grow overflow-hidden">
                  <ul className="custom-scrollbar h-56 space-y-2 overflow-y-auto pr-2">
                    {provincialAntennas.map((office, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 rounded-xl border border-slate-200/60 bg-white p-3"
                      >
                        <MapPinIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-700" />
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-semibold text-slate-900">
                            {office.city}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-8"
          >
            <h3 className="text-lg font-semibold text-slate-900">
              Besoin d&apos;orientation ?
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
              Pour l&apos;adresse exacte d&apos;un bureau ou d&apos;une antenne, contactez-nous. Pour le siège,
              utilisez le lien de la carte.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                href="https://maps.app.goo.gl/7AHWQfzvRZ6m7vbV7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-blue-700 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-800"
              >
                Carte provinciale
              </Link>
              <Link
                href="mailto:info@drhkat.cd?subject=Orientation%20-%20Bureaux%20DRHKAT"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                Écrire à la DRHKAT
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm lg:col-span-4 lg:self-start lg:sticky lg:top-28"
        >
          <h3 className="text-lg font-semibold text-slate-900">Couverture provinciale</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            La DRHKAT est présente à Lubumbashi et dans plusieurs villes du Haut-Katanga. Les
            informations d&apos;orientation sont disponibles via le siège.
          </p>

          <div className="mt-6 grid gap-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="text-sm font-semibold text-slate-900">Siège principal</div>
              <div className="mt-2 text-sm text-slate-600">
                Av. Kasaï & Moero (ex immeuble Granat), Lubumbashi.
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="text-sm font-semibold text-slate-900">Communes</div>
              <div className="mt-2 text-sm text-slate-600">
                Bureaux dans la ville de Lubumbashi (selon disponibilité).
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="text-sm font-semibold text-slate-900">Antennes</div>
              <div className="mt-2 text-sm text-slate-600">
                Kipushi, Kasumbalesa, Likasi, Kambove.
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="https://maps.app.goo.gl/xDoazWrYwLkJni8s5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-blue-700 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-800"
            >
              Carte du siège
            </Link>
            <Link
              href="mailto:info@drhkat.cd?subject=Adresse%20d%27un%20bureau%20-%20DRHKAT"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Demander une adresse
            </Link>
          </div>
        </motion.div>
      </div>
    </Container>
  </section>
);
