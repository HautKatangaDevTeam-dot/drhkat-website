"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BuildingOffice2Icon,
  DocumentTextIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { Container } from "./ui/Container";

const items = [
  {
    title: "Déclaration (en préparation)",
    desc: "Déclaration & paiement en ligne.",
    href: "#online-services",
    icon: SparklesIcon,
  },
  {
    title: "Services",
    desc: "Accès rapide aux sections.",
    href: "#services",
    icon: BuildingOffice2Icon,
  },
  {
    title: "Bureaux",
    desc: "Lubumbashi & antennes.",
    href: "#offices",
    icon: MapPinIcon,
  },
  {
    title: "Textes",
    desc: "Lois & arrêtés.",
    href: "#laws",
    icon: DocumentTextIcon,
  },
  {
    title: "FAQ",
    desc: "Questions fréquentes.",
    href: "#faq",
    icon: QuestionMarkCircleIcon,
  },
] as const;

export function QuickServicesStrip() {
  return (
    <section aria-label="Accès rapide" className="relative z-20 -mt-10">
      <Container>
        <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
              >
                <Link
                  href={item.href}
                  className="group flex h-full items-start gap-3 rounded-xl border border-slate-200/70 bg-white p-4 transition-transform hover:-translate-y-0.5 hover:bg-slate-50 active:translate-y-0"
                >
                  <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-sm font-semibold text-slate-900 group-hover:text-slate-950">
                      {item.title}
                    </div>
                    <div className="mt-1 text-xs text-slate-600">{item.desc}</div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
