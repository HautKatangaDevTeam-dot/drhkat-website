import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export const Header = () => {
  // Assume a state or prop for new news. For now, a simple boolean.
  // In a real app, this might come from context, a global state manager,
  // or a server-side check.
  const hasNewNews = true; // Set to true for demonstration. Change to false or dynamic value.

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "Nos Bureaux", href: "#offices" },
    { name: "Lois & Régulations", href: "#laws" },
  ];

  return (
    <header className="bg-white/90 backdrop-blur-md text-blue-900 py-3 px-6 md:px-12 lg:px-16 xl:px-24 flex justify-between items-center shadow-sm sticky top-0 z-50 border-b border-blue-100">
      {/* Logo and Title Section */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3"
      >
        <div className="relative w-12 h-12 md:w-14 md:h-14 flex-shrink-0 rounded-full overflow-hidden">
          <Image
            src="/ED-logo.jpeg"
            alt="DRHKAT Logo"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 48px, 56px"
            priority
          />
        </div>
        <span className="font-bold text-lg md:text-xl tracking-tight leading-tight">
          DRHKAT
          <br />
          <span className="text-sm md:text-base font-normal">Haut-Katanga</span>
        </span>
      </motion.div>

      {/* Navigation Links (Desktop) */}
      <nav className="hidden md:flex items-center gap-1">
        {navItems.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.3 }}
          >
            <Link
              href={item.href}
              className="relative group px-4 py-3 text-sm font-medium transition-colors duration-300 hover:text-blue-700"
            >
              <span className="relative z-10">{item.name}</span>
              <span className="absolute bottom-2 left-1/2 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-4/5 group-hover:left-[10%]"></span>
            </Link>
          </motion.div>
        ))}

        {/* New "Actualités" Link with Alert */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * navItems.length, duration: 0.3 }} // Adjust delay to animate after other nav items
          className="relative" // Make parent relative for absolute positioning of badge
        >
          <Link
            href="/news" // This will be your dedicated news/blog page
            className="relative group px-4 py-3 text-sm font-medium transition-colors duration-300 hover:text-blue-700 flex items-center" // Added flex for icon alignment
          >
            <span className="relative z-10">Actualités</span>
            {hasNewNews && (
              <span className="absolute top-2 right-1 transform -translate-y-1/2 translate-x-1/2 bg-red-500 rounded-full h-2.5 w-2.5 flex items-center justify-center animate-pulse">
                {/* Optional: Add a small dot or count here */}
                {/* <span className="text-white text-xs font-bold leading-none">!</span> */}
              </span>
            )}
            <span className="absolute bottom-2 left-1/2 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-4/5 group-hover:left-[10%]"></span>
          </Link>
        </motion.div>
      </nav>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-blue-900 p-2 focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </header>
  );
};
