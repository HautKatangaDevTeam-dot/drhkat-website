"use client";

import Link from "next/link";
import { ArrowTopRightOnSquareIcon, ShieldCheckIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";
import { motion } from "framer-motion";

const platforms = [
  {
    title: "Portail",
    href: "https://edrhkat-hk.com/",
    cta: "Ouvrir",
    icon: GlobeAltIcon,
    variant: "blue",
  },
  {
    title: "Accès interne sécurisé",
    href: "https://bank.edrhkat.com",
    cta: "Ouvrir",
    icon: ShieldCheckIcon,
    variant: "slate",
  },
] as const;

export function PlatformsSection() {
  return (
    <section id="platforms" className="bg-white py-24 sm:py-28">
      <Container>
        <div className="mb-12 sm:mb-14">
          <SectionHeader
            eyebrow={
              <span className="inline-flex items-center gap-2">
                <GlobeAltIcon className="h-4 w-4 text-blue-700" />
                Plateformes
              </span>
            }
            align="left"
            title="Nos plateformes"
            description="Accès."
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="mt-0.5 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue-700 shadow-sm ring-1 ring-slate-200">
                  <platform.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900">{platform.title}</h3>
                  <Link
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={[
                      "mt-5 inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-colors",
                      platform.variant === "blue"
                        ? "bg-blue-700 text-white hover:bg-blue-800"
                        : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50",
                    ].join(" ")}
                  >
                    {platform.cta}
                    <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
