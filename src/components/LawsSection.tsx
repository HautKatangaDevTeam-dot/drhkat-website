import {
  ArrowDownTrayIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { motion, Easing } from "framer-motion"; // Import motion and Easing

const lawsData = [
  {
    title: "Loi n°08/012",
    description:
      "Principes fondamentaux relatifs à la libre administration des provinces et des entités territoriales décentralisées.",
    fileUrl: "/laws/loi-08-012.pdf",
  },
  {
    title: "Code Fiscal Provincial",
    description:
      "Régime fiscal applicable et procédures de recouvrement des impôts provinciaux dans le Haut-Katanga.",
    fileUrl: "/laws/code-fiscal.pdf",
  },
  {
    title: "Arrêté Provincial N°01/2024",
    description:
      "Modalités de recouvrement des taxes, redevances et droits perçus au profit de la province.",
    fileUrl: "/laws/arrete-recouvrement.pdf",
  },
  {
    // Added an example for a fourth law to show grid flexibility
    title: "Ordonnance Provinciale N°05/2023",
    description:
      "Règlementation sur les permis de construire et l'urbanisme provincial.",
    fileUrl: "/laws/ordonnance-urbanisme.pdf",
  },
];

// Define a common ease property for cleaner code and type safety
const easeOutCubicBezier: Easing = [0.25, 0.8, 0.5, 1]; // This represents "easeOut"

// Framer Motion variants for staggered appearance
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      ease: easeOutCubicBezier, // Apply ease here too for consistency
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: easeOutCubicBezier }, // Use the explicitly typed easing
  },
};

export const LawsSection = () => (
  <section
    id="laws"
    className="py-20 md:py-28 bg-gradient-to-br from-blue-50 to-white"
  >
    <div className="max-w-6xl mx-auto px-6">
      {/* Section Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants} // Using container variants for header too
        className="text-center mb-14 md:mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 leading-tight">
          Nos <span className="text-blue-700">Textes Légaux</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Accédez directement aux lois, codes et arrêtés provinciaux régissant
          l&apos;administration et les recettes du Haut-Katanga.
        </p>
      </motion.div>

      {/* Laws Grid */}
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10" // Adjusted for 4 columns
        variants={containerVariants} // Apply container variants to the grid for staggered children
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {lawsData.map((law, index) => (
          <motion.div
            key={index}
            variants={cardVariants} // Apply individual card variants
            whileHover={{
              y: -5,
              boxShadow:
                "0 10px 15px rgba(0, 0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)",
            }} // Lift and shadow on hover
            transition={{ duration: 0.2 }}
            className="bg-white rounded-xl p-8 flex flex-col shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <DocumentTextIcon className="h-10 w-10 text-blue-700 mb-5 flex-shrink-0" />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {law.title}
            </h3>
            <p className="text-gray-600 mb-6 flex-grow">{law.description}</p>
            <Link
              href={law.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto text-blue-700 hover:text-blue-900 font-medium flex items-center gap-2 transition-colors group"
            >
              Télécharger le fichier
              <ArrowDownTrayIcon className="h-5 w-5 transform transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);
