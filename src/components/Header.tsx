"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Container } from "./ui/Container";

export const Header = () => {
  const navItems = [
    { name: "Services", href: "#services" },
    { name: "Nos Bureaux", href: "#offices" },
    { name: "Lois & Régulations", href: "#laws" },
    { name: "FAQ", href: "#faq" },
  ];

  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string>("#services");

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  useEffect(() => {
    const ids = ["services", "offices", "laws", "faq", "contact"];
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (elements.length === 0) return;

    const updateFromHash = () => {
      const h = window.location.hash;
      if (h) setActiveHref(h);
    };
    updateFromHash();
    window.addEventListener("hashchange", updateFromHash);

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));
        if (visible.length === 0) return;
        const id = visible[0].target.id;
        if (id) setActiveHref(`#${id}`);
      },
      {
        root: null,
        threshold: [0.15, 0.25, 0.35],
        rootMargin: "-30% 0px -60% 0px",
      }
    );

    elements.forEach((el) => obs.observe(el));
    return () => {
      window.removeEventListener("hashchange", updateFromHash);
      obs.disconnect();
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur">
      {/* Top bar inspired by Govity template (utility info + quick links) */}
      <div className="hidden border-b border-white/10 bg-slate-900 text-slate-100 md:block">
        <Container className="py-2">
          <div className="flex items-center justify-between gap-6 text-xs">
            <div className="flex items-center gap-6">
              <a className="hover:text-white" href="mailto:info@drhkat.cd">
                info@drhkat.cd
              </a>
              <span className="text-slate-300">
                Heures: Lun - Ven 7h30 - 16h00
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="https://ushurutrack-gold.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-200 hover:text-white"
              >
                Plateforme EDRHKAT
              </Link>
            </div>
          </div>
        </Container>
      </div>

      <Container className="py-3">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="flex items-center gap-3"
          >
            <Link href="/" className="flex items-center gap-3" aria-label="Accueil DRHKAT">
              <div className="relative h-11 w-11 overflow-hidden rounded-xl bg-white p-1 ring-1 ring-slate-200">
                <Image
                  src="/ED-logo.jpeg"
                  alt="DRHKAT"
                  fill
                  className="object-contain"
                  sizes="44px"
                  priority
                />
              </div>
              <div className="leading-tight">
                <div className="text-base font-semibold tracking-tight text-slate-900 sm:text-lg">
                  DRHKAT
                </div>
                <div className="hidden text-xs font-medium text-slate-500 sm:block">
                  Direction des Recettes du Haut-Katanga
                </div>
              </div>
            </Link>
          </motion.div>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * index, duration: 0.35 }}
              >
                <Link
                  href={item.href}
                  className={[
                    "text-sm font-medium transition-colors",
                    activeHref === item.href
                      ? "text-slate-900"
                      : "text-slate-700 hover:text-slate-900",
                  ].join(" ")}
                >
                  {item.name}
                </Link>
                <span
                  className={[
                    "mt-1 block h-0.5 w-full rounded-full bg-blue-700 transition-opacity",
                    activeHref === item.href ? "opacity-100" : "opacity-0",
                  ].join(" ")}
                />
              </motion.div>
            ))}
            <Link
              href="#contact"
              className="rounded-xl bg-blue-700 px-4 py-2 text-sm font-semibold text-white transition-transform hover:bg-blue-800 active:scale-[0.98]"
            >
              Contact
            </Link>
          </nav>

          <button
            type="button"
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="md:hidden rounded-lg p-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {mobileOpen ? (
        <div className="md:hidden">
          <div
            className="fixed inset-0 z-40 bg-black/30"
            onClick={() => setMobileOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 right-0 top-[57px] z-50 border-b border-slate-200 bg-white"
          >
            <Container className="py-4">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl bg-blue-700 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-blue-800"
                >
                  Contact
                </Link>
              </div>
            </Container>
          </motion.div>
        </div>
      ) : null}
    </header>
  );
};
