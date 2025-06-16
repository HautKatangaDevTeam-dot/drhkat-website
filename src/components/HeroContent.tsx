// components/HeroContent.tsx
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const HeroContent = () => {
  const images = [
    {
      src: "/government-building.jpg",
      alt: "Siège du gouvernement du Haut-Katanga",
    },
    { src: "/team-meeting.jpg", alt: "Réunion des officiels provinciaux" },
    { src: "/citizen-services.jpg", alt: "Services aux citoyens" },
    { src: "/province-landscape.jpg", alt: "Paysage du Haut-Katanga" },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <div className="relative z-10 w-full max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center lg:text-left"
        >
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
            <span className="mr-2">🏛️</span> Direction Provinciale
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Direction des Recettes
            </span>
            <span className="block text-gray-800 mt-2">du Haut-Katanga</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-lg mx-auto lg:mx-0">
            Mobilisation efficace des recettes fiscales pour le développement
            socio-économique durable de notre province.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            {/* Primary Call to Action: Taxpayer Services */}
            <Link
              href="#services" // Link to your Taxpayer Services section
              className="relative inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-700 hover:to-blue-800 group"
            >
              <span>Découvrir Nos Services</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
              <span className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-xl transition-all duration-300 pointer-events-none"></span>
            </Link>

            {/* Secondary Call to Action: Legal Texts */}
            <Link
              href="#laws" // Link to your Laws Section
              className="relative inline-flex items-center justify-center border-2 border-blue-600 text-blue-700 hover:bg-blue-50/50 px-8 py-4 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              <span>Consulter les Textes Légaux</span>
              <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="absolute inset-0 border-2 border-transparent group-hover:border-blue-100 rounded-xl transition-all duration-300 pointer-events-none"></span>
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-4">
            {[
              "Transparence garantie", // Transparency guaranteed
              "Démarches simplifiées", // Simplified procedures
              "Soutien au développement", // Support for development
            ].map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-center text-sm text-gray-600"
              >
                <svg
                  className="w-4 h-4 mr-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                {benefit}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image Collage (This part remains unchanged as it's visual) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative h-[400px] sm:h-[500px] grid grid-cols-2 grid-rows-2 gap-3 p-3 bg-white/30 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative rounded-xl overflow-hidden shadow-md ${
                index === 0
                  ? "row-span-1"
                  : index === 1
                  ? "row-span-1"
                  : index === 2
                  ? "row-span-1"
                  : "row-span-1"
              } ${
                index % 2 === 0 ? "transform -rotate-1" : "transform rotate-1"
              } hover:rotate-0 transition-transform duration-300`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
                priority={index < 2}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-sm font-medium">
                  {image.alt}
                </span>
              </div>
            </motion.div>
          ))}

          {/* Decorative element */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-full mix-blend-multiply opacity-10"></div>
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-400 rounded-full mix-blend-multiply opacity-10"></div>
        </motion.div>
      </div>
    </div>
  );
};
