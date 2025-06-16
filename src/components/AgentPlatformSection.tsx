import {
  CheckCircleIcon,
  ChartBarSquareIcon, // For Reporting Platform
  ArrowTopRightOnSquareIcon, // For external link icon
  KeyIcon, // For authentication/security
  ShieldCheckIcon, // For data encryption
  ClipboardDocumentCheckIcon, // For real-time analytics
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { motion, Easing } from "framer-motion";

// Define a common ease property for Framer Motion
const easeOutCubicBezier: Easing = [0.25, 0.8, 0.5, 1];

// Framer Motion variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOutCubicBezier },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: easeOutCubicBezier },
  },
};

export const AgentPlatformSection = () => (
  <section
    id="agent-platform"
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
          Espace <span className="text-blue-700">Agent</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Accédez aux plateformes sécurisées dédiées à la gestion fiscale et au
          reporting institutionnel pour les agents de la DRHKAT.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* EDRHKAT Platform Card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-all duration-300 border-b-4 border-blue-600"
        >
          <div className="p-8 md:p-12 bg-blue-900 text-white flex flex-col items-center text-center">
            <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <CheckCircleIcon className="w-8 h-8 text-green-300 flex-shrink-0" />
              EDRHKAT
            </h3>
            <p className="text-blue-200 text-lg mb-6 max-w-sm">
              Votre solution centralisée pour le suivi des revenus, la collecte
              efficace et la conformité fiscale en temps réel.
            </p>
            <Link
              href="https://ushurutrack-gold.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-white text-blue-900 px-8 py-3 rounded-full font-bold shadow-md hover:bg-blue-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              Accéder à EDRHKAT
              <ArrowTopRightOnSquareIcon className="w-5 h-5" />
            </Link>
          </div>
          <div className="p-8 md:p-12 bg-white text-gray-800">
            <h4 className="text-xl font-semibold mb-6 text-center">
              Fonctionnalités Clés:
            </h4>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center gap-4">
                <KeyIcon className="w-6 h-6 text-blue-700 flex-shrink-0" />
                <span>Authentification sécurisée</span>
              </li>
              <li className="flex items-center gap-4">
                <ShieldCheckIcon className="w-6 h-6 text-blue-700 flex-shrink-0" />
                <span>Chiffrement des données</span>
              </li>
              <li className="flex items-center gap-4">
                <ClipboardDocumentCheckIcon className="w-6 h-6 text-blue-700 flex-shrink-0" />
                <span>Analyses en temps réel</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Reporting Platform Card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-all duration-300 border-b-4 border-purple-600"
        >
          <div className="p-8 md:p-12 bg-purple-900 text-white flex flex-col items-center text-center">
            <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <ChartBarSquareIcon className="w-8 h-8 text-purple-300 flex-shrink-0" />
              Plateforme de Reporting
            </h3>
            <p className="text-purple-200 text-lg mb-6 max-w-sm">
              Consultez des rapports détaillés, analysez les performances et
              générez des synthèses pour une prise de décision éclairée.
            </p>
            <Link
              href="https://reporting.drhkat.cd" // Replace with actual Reporting Platform domain
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-white text-purple-900 px-8 py-3 rounded-full font-bold shadow-md hover:bg-purple-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              Accéder au Reporting
              <ArrowTopRightOnSquareIcon className="w-5 h-5" />
            </Link>
          </div>
          <div className="p-8 md:p-12 bg-white text-gray-800">
            <h4 className="text-xl font-semibold mb-6 text-center">
              Pour des Rapports:
            </h4>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center gap-4">
                <CheckCircleIcon className="w-6 h-6 text-purple-700 flex-shrink-0" />
                <span>Analyses financières avancées</span>
              </li>
              <li className="flex items-center gap-4">
                <CheckCircleIcon className="w-6 h-6 text-purple-700 flex-shrink-0" />
                <span>Tableaux de bord personnalisables</span>
              </li>
              <li className="flex items-center gap-4">
                <CheckCircleIcon className="w-6 h-6 text-purple-700 flex-shrink-0" />
                <span>Exportation de données sécurisée</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Support Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        className="mt-20 pt-12 border-t border-gray-200 text-center"
      >
        <h3 className="text-3xl font-bold text-gray-800 mb-6">
          Besoin d&apos;aide ou support technique?
        </h3>
        <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
          Contactez notre équipe de support pour toute question relative à
          l&apos;accès ou à l&apos;utilisation des plateformes agents.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Link
            href="tel:+243999123456" // Replace with actual phone number
            className="inline-flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-4 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-gray-300 focus:ring-opacity-75"
          >
            <PhoneIcon className="w-6 h-6 mr-3" />
            Appeler le Support
          </Link>
          <Link
            href="mailto:support@drhkat.cd"
            className="inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-75"
          >
            <EnvelopeIcon className="w-6 h-6 mr-3" />
            Envoyer un Email
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);
