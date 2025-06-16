import {
  MapPinIcon,
  ClockIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/outline";
import { motion, Easing } from "framer-motion"; // Import Easing type
import Link from "next/link"; // IMPORT THE LINK COMPONENT HERE

// Define a common ease property using the cubic bezier array for robust TypeScript type inference
const easeOutCubicBezier: Easing = [0.25, 0.8, 0.5, 1];

// Data for communal offices within Lubumbashi
const lubumbashiCommunes = [
  { name: "Lubumbashi", address: "Avenue Kasaï et Moero n°0023" },
  { name: "Annexe", address: "Adresse Annexe, Quartier Annexe" },
  { name: "Kamalondo", address: "Adresse Kamalondo, Quartier Kamalondo" },
  { name: "Kampemba", address: "Adresse Kampemba, Quartier Kampemba" },
  { name: "Katuba", address: "Adresse Katuba, Quartier Katuba" },
  { name: "Kenya", address: "Adresse Kenya, Quartier Kenya" },
  { name: "Rwashi", address: "Adresse Rwashi, Quartier Rwashi" },
];

// Data for provincial antenna offices outside Lubumbashi communes
const provincialAntennas = [
  { city: "Kipushi", address: "Rue du Commerce n°45" },
  { city: "Kasumbalesa", address: "Boulevard de la Douane n°101" },
  { city: "Likasi", address: "Avenue de l'Indépendance n°124" },
  { city: "Kambove", address: "Rue Principale n°88" },
];

// Framer Motion variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOutCubicBezier }, // Use explicit ease
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easeOutCubicBezier }, // Use explicit ease
  },
};

export const OfficesSection = () => (
  <section
    id="offices"
    className="py-20 md:py-28 bg-gradient-to-br from-blue-50 to-indigo-50"
  >
    <div className="max-w-6xl mx-auto px-6">
      {/* Section Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        className="text-center mb-14 md:mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 leading-tight">
          Où Nous <span className="text-blue-700">Trouver</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          La Direction des Recettes du Haut-Katanga est présente sur tout le
          territoire provincial pour être au plus proche des contribuables.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 md:gap-10">
        {/* Main Office Card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center border-b-4 border-blue-600"
        >
          <div className="text-blue-700 mb-6 text-6xl">
            <BuildingOffice2Icon className="h-16 w-16 mx-auto" />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-blue-900">
            Siège Principal
          </h3>
          <p className="text-gray-700 text-lg mb-2">
            Avenue Kasaï et Moero n°0023
          </p>
          <p className="text-gray-700 text-lg mb-4">
            Commune de Lubumbashi, Haut-Katanga
          </p>
          <div className="mt-4 pt-4 border-t border-gray-200 w-full">
            <p className="font-semibold text-gray-800 mb-1 flex items-center justify-center gap-2">
              <ClockIcon className="w-5 h-5" /> Heures d&apos;ouverture:
            </p>
            <p className="text-gray-600 text-md">
              Lundi - Vendredi: 7h30 - 16h00
            </p>
          </div>
          <Link
            href="https://maps.app.goo.gl/xDoazWrYwLkJni8s5"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            Voir sur la carte
            <MapPinIcon className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>

        {/* Communal Offices Card (Lubumbashi) */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="md:col-span-1 bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col border-b-4 border-green-600"
        >
          <h3 className="text-2xl font-bold mb-4 text-center text-blue-900">
            <BuildingOffice2Icon className="h-7 w-7 inline-block mr-2 text-green-700" />
            Bureaux de Lubumbashi
          </h3>
          <p className="text-gray-600 text-center mb-6">
            Nous sommes présents dans chaque commune de la ville de Lubumbashi.
          </p>
          <ul className="space-y-4 flex-grow overflow-y-auto max-h-[300px] pr-2 custom-scrollbar">
            {lubumbashiCommunes.map((office, index) => (
              <li
                key={index}
                className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <MapPinIcon className="w-5 h-5 mt-0.5 text-blue-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800">{office.name}</p>
                  <p className="text-gray-600 text-sm">{office.address}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Provincial Antennas Card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="md:col-span-1 bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col border-b-4 border-yellow-600"
        >
          <h3 className="text-2xl font-bold mb-4 text-center text-blue-900">
            <MapPinIcon className="h-7 w-7 inline-block mr-2 text-yellow-700" />
            Antennes Provinciales
          </h3>
          <p className="text-gray-600 text-center mb-6">
            Nos bureaux sont également disponibles dans les grandes villes du
            Haut-Katanga.
          </p>
          <ul className="space-y-4 flex-grow overflow-y-auto max-h-[300px] pr-2 custom-scrollbar">
            {provincialAntennas.map((office, index) => (
              <li
                key={index}
                className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <MapPinIcon className="w-5 h-5 mt-0.5 text-blue-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800">{office.city}</p>
                  <p className="text-gray-600 text-sm">{office.address}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Optional: Embed a simple map or link to a map */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        className="mt-20 text-center"
      >
        <h3 className="text-3xl font-bold text-gray-800 mb-6">
          Besoin d&lsquo;aide pour nous trouver ?
        </h3>
        <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
          Utilisez notre carte interactive pour des directions précises vers
          n&apos;importe lequel de nos bureaux.
        </p>
        <Link // Now correctly imported
          href="https://www.google.com/maps/search/Direction+des+Recettes+Haut-Katanga" // Generic search or embed a specific map later
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-75"
        >
          Accéder à la Carte Provinciale
          <MapPinIcon className="w-6 h-6 ml-3" />
        </Link>
      </motion.div>
    </div>
    {/* Custom scrollbar style for overflow lists (add this to your global CSS or a <style> tag) */}
    <style jsx global>{`
      .custom-scrollbar::-webkit-scrollbar {
        width: 8px;
      }
      .custom-scrollbar::-webkit-scrollbar-track {
        background: #f0f4f8; /* blue-50 */
        border-radius: 10px;
      }
      .custom-scrollbar::-webkit-scrollbar-thumb {
        background: #90cdf4; /* blue-300 */
        border-radius: 10px;
      }
      .custom-scrollbar::-webkit-scrollbar-thumb:hover {
        background: #63b3ed; /* blue-400 */
      }
    `}</style>
  </section>
);
