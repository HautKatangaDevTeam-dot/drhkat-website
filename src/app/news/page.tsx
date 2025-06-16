"use client";

import { motion, Easing } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

// Define a common ease property for Framer Motion
const easeOutCubicBezier: Easing = [0.25, 0.8, 0.5, 1];

// Framer Motion variants for sections and cards
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOutCubicBezier },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: easeOutCubicBezier },
  },
};

const newsArticles = [
  {
    slug: "ouverture-nouveau-bureau-fiscal",
    title: "Ouverture d'un nouveau bureau fiscal à Kipushi",
    date: "10 Juin 2025",
    summary:
      "La DRHKAT est fière d'annoncer l'ouverture de son nouveau bureau fiscal à Kipushi, renforçant ainsi sa présence provinciale et facilitant l'accès aux services pour les contribuables locaux.",
    imageUrl: "/kipushi.jpeg",
  },
  {
    slug: "campagne-sensibilisation-impots",
    title: "Campagne de sensibilisation sur les impôts locaux 2025",
    date: "05 Juin 2025",
    summary:
      "Une vaste campagne de sensibilisation est lancée dans la province pour éduquer les citoyens sur l'importance et les modalités de paiement des impôts et taxes provinciaux pour l'année 2025.",
    imageUrl: "/sensibilisation.jpeg",
  },
  {
    slug: "partenariat-developpement-regional",
    title: "Partenariat stratégique pour le développement régional",
    date: "28 Mai 2025",
    summary:
      "La Direction des Recettes a signé un accord de partenariat avec des acteurs économiques locaux pour stimuler l'investissement et le développement durable du Haut-Katanga.",
    imageUrl: "/partenaria.jpeg",
  },
];

export default function NewsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
          className="text-center mb-16 md:mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 mb-4 leading-tight">
            Nos <span className="text-blue-700">Actualités</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Restez informé des dernières annonces, campagnes et initiatives de
            la Direction des Recettes du Haut-Katanga.
          </p>
        </motion.div>

        {/* News Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {newsArticles.map((article, index) => (
            <motion.article
              key={article.slug}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 overflow-hidden group border border-gray-100"
            >
              {article.imageUrl && (
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={article.imageUrl}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 3} // Prioritize loading for the first few articles
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              )}
              <div className="p-6">
                <p className="text-sm text-blue-600 font-semibold mb-2">
                  {article.date}
                </p>
                <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                  {article.title}
                </h2>
                <p className="text-gray-700 text-base mb-5 line-clamp-3">
                  {article.summary}
                </p>
                <Link
                  href={`/news/${article.slug}`}
                  className="inline-flex items-center text-blue-700 font-semibold hover:text-blue-900 transition-colors duration-200"
                >
                  Lire la suite
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Call to action or pagination (optional) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
          className="text-center mt-20"
        >
          <p className="text-lg text-gray-600 mb-6">
            Vous souhaitez en savoir plus ou ne manquer aucune actualité ?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            Contactez-nous
          </Link>
          {/* Add pagination component here if you have many articles */}
        </motion.div>
      </div>
    </main>
  );
}
