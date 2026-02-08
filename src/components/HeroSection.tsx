"use client";

import { motion } from "framer-motion";
import { Header } from "./Header";
import { HeroContent } from "./HeroContent";

export const HeroSection = () => (
  <section className="relative w-full min-h-[72vh] flex flex-col bg-white overflow-hidden">
    {/* Clean, professional background */}
    <div className="absolute inset-0 overflow-hidden">
      {/* Subtle blue gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 to-white/80"></div>

      {/* Very subtle geometric patterns */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-grid.svg')] opacity-[0.01]"></div>

      {/* Minimal blue accents */}
      <div className="absolute top-10 -left-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute top-1/2 -right-24 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
      <div className="absolute bottom-20 left-1/4 w-60 h-60 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      {/* Clean geometric shapes */}
      <div className="absolute top-32 right-32 w-40 h-40 bg-blue-50/30 rounded-2xl rotate-12"></div>
      <div className="absolute bottom-32 left-32 w-24 h-24 bg-blue-100/20 rounded-full"></div>
    </div>

    {/* Header */}
    <Header />

    {/* Main Content Area */}
    <div className="relative flex-1 flex items-start justify-center pt-10 pb-16 sm:pt-12 sm:pb-20">
      <HeroContent />
    </div>

    {/* Elegant Scrolling Indicator */}
    <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-10">
      <motion.div
        className="flex flex-col items-center gap-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <span className="text-sm text-blue-600/80 font-medium tracking-wide">
          Explorer nos services
        </span>
        <div className="w-6 h-10 border-2 border-blue-600/50 rounded-full flex items-start justify-center p-1">
          <motion.div
            className="w-1.5 h-1.5 bg-blue-600 rounded-full"
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
