import { ClockIcon, SparklesIcon } from "@heroicons/react/24/outline"; // Added SparklesIcon
import { motion, Easing } from "framer-motion"; // Import motion and Easing

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

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: 0.5, ease: easeOutCubicBezier },
  },
};

export const FutureServicesSection = () => (
  <section className="py-20 md:py-28 bg-gradient-to-br from-white to-blue-50">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-900 leading-tight">
          Services <span className="text-blue-700">Futurs</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10">
          Nous nous engageons à améliorer constamment nos services pour vous
          offrir une expérience plus fluide et efficace. Découvrez ce qui arrive
          bientôt !
        </p>

        {/* Highlighted Upcoming Feature */}
        <div className="bg-blue-600 text-white p-8 rounded-2xl shadow-xl max-w-xl mx-auto mb-10 transform hover:scale-[1.02] transition-transform duration-300">
          <SparklesIcon className="h-16 w-16 mx-auto text-blue-200 mb-6" />
          <h3 className="text-3xl font-bold mb-4">
            Déclaration et Paiement en Ligne
          </h3>
          <p className="text-blue-100 text-lg mb-6">
            Simplifiez vos obligations fiscales avec notre future plateforme
            sécurisée pour la déclaration et le paiement de vos impôts, taxes et
            redevances.
          </p>
          <motion.div
            variants={badgeVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="inline-flex px-8 py-4 rounded-full items-center gap-3 bg-white text-blue-800 font-bold shadow-lg"
          >
            <ClockIcon className="w-6 h-6 text-blue-700" />
            <span>Disponible Prochainement</span>
          </motion.div>
        </div>

        {/* Optional: Add a call to action for staying informed */}
        <p className="text-md md:text-lg text-gray-600 mt-12">
          Suivez nos annonces pour être informé du lancement !
        </p>
      </motion.div>
    </div>
  </section>
);
