// components/PublicResourcesSection.tsx
import { motion, Easing } from "framer-motion";
import Link from "next/link";
import {
  BookOpenIcon, // For guides or documentation
  NewspaperIcon, // For news or announcements
  QuestionMarkCircleIcon, // For FAQs
  DocumentTextIcon, // For forms or publications
} from "@heroicons/react/24/outline";

// Define a common ease property for Framer Motion
const easeOutCubicBezier: Easing = [0.25, 0.8, 0.5, 1];

// Framer Motion variants for section
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOutCubicBezier },
  },
};

// Framer Motion variants for cards
const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: easeOutCubicBezier, delay: 0.2 },
  },
};

export const PublicResourcesSection = () => (
  <section
    id="resources" // Add an ID for easy navigation if you link to it
    className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white"
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
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
          Ressources pour les <span className="text-blue-700">Citoyens</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Accédez à une variété de documents utiles, d&apos;informations et de
          guides pour vous accompagner dans vos démarches.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Resource Card 1: Guides */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 p-6 text-center border-t-4 border-blue-600"
        >
          <BookOpenIcon className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Guides Fiscaux
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Des guides clairs pour comprendre vos obligations et droits fiscaux.
          </p>
          <Link
            href="/guides" // Link to a dedicated guides page or a PDF
            className="text-blue-700 hover:text-blue-900 font-semibold inline-flex items-center"
          >
            Consulter les guides
            <span className="ml-1 text-lg">→</span>
          </Link>
        </motion.div>

        {/* Resource Card 2: Actualités */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 p-6 text-center border-t-4 border-green-600"
        >
          <NewspaperIcon className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Actualités & Annonces
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Restez informé des dernières nouvelles et communications
            officielles.
          </p>
          <Link
            href="/news" // Link to your news/blog page
            className="text-green-700 hover:text-green-900 font-semibold inline-flex items-center"
          >
            Voir les actualités
            <span className="ml-1 text-lg">→</span>
          </Link>
        </motion.div>

        {/* Resource Card 3: FAQs */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 p-6 text-center border-t-4 border-purple-600"
        >
          <QuestionMarkCircleIcon className="w-16 h-16 text-purple-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Foire Aux Questions (FAQ)
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Trouvez rapidement des réponses aux questions fréquentes.
          </p>
          <Link
            href="/faq" // Link to your FAQ page
            className="text-purple-700 hover:text-purple-900 font-semibold inline-flex items-center"
          >
            Accéder à la FAQ
            <span className="ml-1 text-lg">→</span>
          </Link>
        </motion.div>

        {/* Resource Card 4: Formulaires & Publications */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 p-6 text-center border-t-4 border-orange-600"
        >
          <DocumentTextIcon className="w-16 h-16 text-orange-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Formulaires & Publications
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Téléchargez les formulaires nécessaires et d&apos;autres
            publications officielles.
          </p>
          <Link
            href="/forms-publications" // Link to a page for forms/publications
            className="text-orange-700 hover:text-orange-900 font-semibold inline-flex items-center"
          >
            Télécharger les documents
            <span className="ml-1 text-lg">→</span>
          </Link>
        </motion.div>
      </div>
    </div>
  </section>
);
