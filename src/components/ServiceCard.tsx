import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPinIcon, // For location
  DocumentTextIcon, // For legal documents
  QuestionMarkCircleIcon, // For FAQ
  LifebuoyIcon, // For support
} from "@heroicons/react/24/outline"; // Importing outline icons for a clean look

// Define an interface for props to ensure type safety
interface ServiceCardProps {
  icon: string; // Will store the string name of the icon to render
  title: string;
  description: string;
  link: string;
}

// Map string names to actual Heroicon components
// We're using a specific Heroicon version (v2.2.0) as per your request
const IconComponents: { [key: string]: React.ElementType } = {
  MapPinIcon: MapPinIcon,
  DocumentTextIcon: DocumentTextIcon,
  QuestionMarkCircleIcon: QuestionMarkCircleIcon,
  LifebuoyIcon: LifebuoyIcon,
  // Add more Heroicons here as needed, make sure they are imported above
};

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  link,
}) => {
  const IconComponent = IconComponents[icon]; // Get the actual icon component

  return (
    <motion.div
      whileHover={{
        y: -7,
        boxShadow: "0 10px 15px rgba(0, 0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)",
      }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
    >
      {IconComponent && (
        <div className="text-blue-600 mb-6 text-5xl p-4 bg-blue-50 rounded-full flex items-center justify-center">
          <IconComponent className="h-10 w-10" />{" "}
          {/* Heroicons use h- and w- classes */}
        </div>
      )}
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      <Link
        href={link}
        className="text-blue-700 hover:text-blue-900 font-medium flex items-center gap-1 transition-colors group"
      >
        En savoir plus
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 transform transition-transform duration-200 group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </Link>
    </motion.div>
  );
};
