// components/AnnouncementsSection.jsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link"; // Use Next.js Link for client-side navigation

interface Announcement {
  title: string;
  description: string;
  date: string;
  link?: string;
}

export function AnnouncementsSection() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);

  useEffect(() => {
    // In a real application, you would fetch this from an API.
    // For now, static data representing current DRHKAT announcements.
    setAnnouncements([
      {
        title: "Nouvelle date limite pour la déclaration trimestrielle!",
        description:
          "La date limite pour la déclaration trimestrielle des impôts fonciers est reportée au 30 juillet 2025. Assurez-vous de soumettre vos documents à temps.",
        date: "16 juin 2025",
        link: "/actualites/declaration-trimestrielle-report",
      },
      {
        title: "Recouvrement forcé imminent",
        description:
          "Tous les contribuables en défaut de paiement seront soumis à des mesures de recouvrement forcé à partir du 20 juin 2025. Régularisez votre situation sans tarder.",
        date: "16 juin 2025",
        link: "/actualites/recouvrement-20-juin",
      },
      {
        title: "Nouvelle grille tarifaire en vigueur",
        description:
          "La nouvelle tarification issue de l'arrêté provincial entre en vigueur dès le 1er juillet 2025. Consultez les détails pour en savoir plus.",
        date: "15 juin 2025",
        link: "/actualites/grille-tarifaire-juillet",
      },
      {
        title: "Séminaire sur la fiscalité provinciale",
        description:
          "Participez à notre séminaire interactif sur les récentes modifications de la fiscalité provinciale, le 25 juin 2025 à 09h00.",
        date: "10 juin 2025",
        link: "/evenements/seminaire-fiscalite",
      },
    ]);
  }, []);

  if (announcements.length === 0) return null;

  // We'll highlight the first announcement, and list others below it
  const featuredAnnouncement = announcements[0];
  const otherAnnouncements = announcements.slice(1);

  return (
    <section
      id="annonces"
      className="bg-blue-50 py-12 md:py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-blue-900 text-center mb-10">
          Annonces & Actualités de la DRHKAT
        </h2>

        {/* Featured Announcement */}
        {featuredAnnouncement && (
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6 md:p-8 rounded-xl shadow-lg mb-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/pattern-dots.svg')] opacity-10"></div>
            <div className="relative z-10">
              <span className="inline-block bg-white text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-3 shadow-md">
                À la Une
              </span>
              <p className="text-sm font-light mb-1">
                {featuredAnnouncement.date}
              </p>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                {featuredAnnouncement.title}
              </h3>
              <p className="text-blue-100 text-lg mb-5 max-w-2xl">
                {featuredAnnouncement.description}
              </p>
              {featuredAnnouncement.link && (
                <Link
                  href={featuredAnnouncement.link}
                  className="inline-flex items-center px-6 py-3 bg-white text-blue-800 font-semibold rounded-full shadow-md hover:bg-blue-100 transition-colors duration-300"
                >
                  En savoir plus
                  <svg
                    className="ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              )}
            </div>
          </div>
        )}

        {/* Other Announcements */}
        {otherAnnouncements.length > 0 && (
          <>
            {featuredAnnouncement && (
              <h3 className="text-2xl font-bold text-blue-800 mb-6 mt-10">
                Autres Annonces
              </h3>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherAnnouncements.map((a, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md border border-blue-100 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
                >
                  <div>
                    <p className="text-sm text-gray-500 mb-2">{a.date}</p>
                    <h4 className="text-xl font-semibold text-blue-800 mb-3 leading-snug">
                      {a.title}
                    </h4>
                    <p className="text-gray-700 mb-4 text-base">
                      {a.description.length > 100
                        ? `${a.description.substring(0, 100)}...`
                        : a.description}
                    </p>
                  </div>
                  {a.link && (
                    <Link
                      href={a.link}
                      className="text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium flex items-center mt-auto"
                    >
                      Voir les détails
                      <svg
                        className="ml-1 w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </>
        )}

        {/* Link to a dedicated "All Announcements" page */}
        {announcements.length > 0 && (
          <div className="text-center mt-12">
            <Link
              href="/actualites"
              className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-full shadow-md transition-colors duration-300"
            >
              Voir toutes les actualités
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
