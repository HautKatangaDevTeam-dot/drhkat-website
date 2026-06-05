"use client";

import { motion } from "framer-motion";
import { Header } from "./Header";
import { HeroContent } from "./HeroContent";

export const HeroSection = () => (
  <section className="relative w-full min-h-[62vh] flex flex-col bg-white overflow-hidden sm:min-h-[72vh]">
    {/* Clean, professional background */}
    <div className="absolute inset-0 overflow-hidden">
      {/* Subtle blue gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 to-white/80"></div>

      {/* Very subtle geometric patterns */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-grid.svg')] opacity-[0.01]"></div>

      {/* Minimal blue accents */}
      <div className="absolute top-10 -left-20 hidden h-64 w-64 rounded-full bg-blue-100 opacity-20 mix-blend-multiply blur-3xl sm:block"></div>
      <div className="absolute top-1/2 -right-24 hidden h-80 w-80 rounded-full bg-blue-200 opacity-15 mix-blend-multiply blur-3xl sm:block"></div>
      <div className="absolute bottom-20 left-1/4 hidden h-60 w-60 rounded-full bg-blue-300 opacity-10 mix-blend-multiply blur-3xl md:block"></div>

      {/* Clean geometric shapes */}
      <div className="absolute top-32 right-32 hidden h-40 w-40 rounded-2xl bg-blue-50/30 rotate-12 lg:block"></div>
      <div className="absolute bottom-32 left-32 hidden h-24 w-24 rounded-full bg-blue-100/20 lg:block"></div>
    </div>

    {/* Header */}
    <Header />

    {/* Main Content Area */}
    <div className="relative flex-1 flex items-start justify-center px-0 pt-8 pb-12 sm:pt-12 sm:pb-20">
      <HeroContent />
    </div>

    {/* Elegant Scrolling Indicator */}
    <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 sm:bottom-5">
      <motion.div
        className="flex flex-col items-center gap-2 sm:gap-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <span className="text-xs font-medium tracking-wide text-blue-600/80 sm:text-sm">
          Explorer nos services
        </span>
        <div className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-blue-600/50 p-1 sm:h-10 sm:w-6">
          <motion.div
            className="h-1.5 w-1.5 rounded-full bg-blue-600"
            animate={{ y: [0, 16, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </div>

    {/* Clean bottom fade */}
    <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
  </section>
);
