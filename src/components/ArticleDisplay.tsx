"use client"; // This makes it a Client Component

import { motion, Easing } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

// Define a common ease property for Framer Motion transitions
const easeOutCubicBezier: Easing = [0.25, 0.8, 0.5, 1];

// Define the type for your article data
interface ArticleProps {
  article: {
    slug: string;
    title: string;
    date: string;
    imageUrl?: string;
    content: string;
  };
}

export const ArticleDisplay = ({ article }: ArticleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: easeOutCubicBezier }}
      className="bg-white rounded-xl shadow-lg p-8 md:p-12 border border-gray-100"
    >
      {/* Back button to return to the news list */}
      <Link
        href="/news"
        className="inline-flex items-center text-blue-700 hover:text-blue-900 font-semibold mb-8 transition-colors duration-200"
      >
        <ArrowLeftIcon className="w-5 h-5 mr-2" />
        Retour aux actualités
      </Link>

      {/* Article Hero Image */}
      {article.imageUrl && (
        <div className="relative w-full h-80 rounded-lg overflow-hidden mb-8 shadow-md">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px" // Optimized sizes for responsive loading
            priority // Prioritize loading for the main article image
          />
        </div>
      )}

      {/* Article Metadata */}
      <p className="text-sm text-blue-600 font-semibold mb-3">{article.date}</p>
      {/* Article Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
        {article.title}
      </h1>

      {/* Article Content - Uses dangerouslySetInnerHTML for raw HTML content.
          Be cautious and ensure content is safe if it's from an untrusted source.
          Since you're manually writing it, the risk is minimal. */}
      <div
        className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      {/* Optional: Add a section for related articles, comments, or share buttons */}
    </motion.div>
  );
};
