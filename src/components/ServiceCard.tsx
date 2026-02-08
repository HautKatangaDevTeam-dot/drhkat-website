"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ComponentType } from "react";
import {
  MapPinIcon, // For location
  DocumentTextIcon, // For legal documents
  QuestionMarkCircleIcon, // For FAQ
  LifebuoyIcon, // For support
} from "@heroicons/react/24/outline"; // Importing outline icons for a clean look

// Define an interface for props to ensure type safety
interface ServiceCardProps {
  icon: "map" | "document" | "faq" | "support";
  title: string;
  description: string;
  link: string;
}

// Map string names to actual Heroicon components
const IconComponents: Record<
  ServiceCardProps["icon"],
  ComponentType<{ className?: string }>
> = {
  map: MapPinIcon,
  document: DocumentTextIcon,
  faq: QuestionMarkCircleIcon,
  support: LifebuoyIcon,
};

export function ServiceCard({ icon, title, description, link }: ServiceCardProps) {
  const IconComponent = IconComponents[icon]; // Get the actual icon component

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
        <IconComponent className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 flex-grow text-sm leading-relaxed text-slate-600">
        {description}
      </p>
      <Link
        href={link}
        className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
      >
        En savoir plus
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </Link>
    </motion.div>
  );
}
