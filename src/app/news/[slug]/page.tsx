import { ArticleDisplay } from "@/components/ArticleDisplay";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const articles = [
  {
    slug: "ouverture-nouveau-bureau-fiscal",
    title: "Ouverture d'un nouveau bureau fiscal à Kipushi",
    date: "10 Juin 2025",
    imageUrl: "/kipushi.jpeg", // Path to your image in the public folder
    content: `
      <p class="mb-4 text-lg">
        La Direction des Recettes du Haut-Katanga (DRHKAT) est ravie d'annoncer
        l'inauguration de son tout nouveau bureau fiscal dans la ville de <strong>Kipushi</strong>.
        Cette expansion stratégique vise à rapprocher nos services des citoyens et
        des entreprises de la région, en facilitant l'accès aux informations
        fiscales et aux procédures administratives.
      </p>
      <h2 class="text-3xl font-bold text-gray-900 mb-4 mt-8">Un Accès Facilités pour Tous</h2>
      <p class="mb-4 text-lg">
        Situé au cœur de Kipushi, ce bureau moderne est équipé pour offrir une
        gamme complète de services, y compris l'enregistrement des contribuables,
        le dépôt des déclarations, le paiement des taxes et impôts provinciaux,
        ainsi que des conseils personnalisés. Nous sommes convaincus que cette
        nouvelle infrastructure contribuera significativement à l'amélioration de
        la collecte des recettes et au renforcement de la conformité fiscale dans
        la province.
      </p>
      <blockquote class="border-l-4 border-blue-600 pl-4 py-2 my-6 italic text-gray-700">
        "Cette ouverture marque une étape importante dans notre engagement à
        moderniser et à décentraliser nos services," a déclaré le Directeur
        Général de la DRHKAT lors de la cérémonie d'inauguration. "Nous voulons
        que chaque citoyen et chaque entrepreneur du Haut-Katanga puisse accéder
        facilement et efficacement aux services fiscaux, où qu'il se trouve."
      </blockquote>
      <p class="mb-4 text-lg">
        Nous invitons tous les contribuables de Kipushi et des environs à visiter
        notre nouveau bureau pour toute assistance. Nos équipes dévouées sont prêtes à vous
        accueillir et à vous accompagner dans toutes vos démarches fiscales.
        Votre contribution est essentielle au développement de notre belle province.
      </p>
      <h3 class="text-2xl font-bold mt-8 mb-4 text-gray-900">Horaires d'Ouverture:</h3>
      <ul class="list-disc list-inside mb-4 ml-5 text-lg">
        <li><strong>Lundi - Vendredi</strong> : 08h00 - 16h00</li>
        <li><strong>Samedi</strong> : 09h00 - 12h00 (pour certains services, sur rendez-vous)</li>
      </ul>
      <p class="text-sm italic text-gray-600 mt-6">
        Pour plus d'informations ou pour prendre rendez-vous, veuillez nous contacter aux numéros habituels.
      </p>
    `,
  },
  {
    slug: "campagne-sensibilisation-impots",
    title: "Campagne de sensibilisation sur les impôts locaux 2025",
    date: "05 Juin 2025",
    imageUrl: "/sensibilisation.jpeg",
    content: `
      <p class="mb-4 text-lg">
        La Direction des Recettes du Haut-Katanga (DRHKAT) lance une <strong>vaste campagne de sensibilisation</strong>
        visant à informer et éduquer les citoyens sur l'importance cruciale des impôts
        et taxes provinciaux pour l'année 2025. Cette initiative a pour objectif de
        renforcer la compréhension des contribuables quant à leurs obligations
        fiscales et de souligner l'impact direct de leurs contributions sur le
        développement socio-économique de notre province.
      </p>
      <p class="mb-4 text-lg">
        Des sessions d'information seront organisées dans diverses localités du
        Haut-Katanga, animées par nos experts fiscaux. Ces sessions aborderont des
        thèmes variés tels que :
      </p>
      <ul class="list-disc list-inside mb-4 ml-5 text-lg">
        <li>Les différents types d'impôts et taxes provinciaux.</li>
        <li>Les modalités de déclaration et de paiement.</li>
        <li>Les avantages de la conformité fiscale.</li>
        <li>L'utilisation des recettes collectées pour les projets publics.</li>
      </ul>
      <h2 class="text-3xl font-bold text-gray-900 mb-4 mt-8">Votre Contribution, Notre Développement</h2>
      <p class="mb-4 text-lg">
        Nous encourageons vivement tous les citoyens et les opérateurs économiques à
        participer à ces sessions. C'est une opportunité unique de poser vos questions,
        d'obtenir des éclaircissements et de mieux comprendre comment votre civisme
        fiscal contribue à la construction d'un Haut-Katanga plus prospère.
      </p>
      <p class="text-sm italic text-gray-600 mt-6">
        Les dates et lieux des prochaines sessions seront annoncés sur notre site web et nos réseaux sociaux.
      </p>
    `,
  },
  {
    slug: "partenariat-developpement-regional",
    title: "Partenariat stratégique pour le développement régional",
    date: "28 Mai 2025",
    imageUrl: "/partenaria.jpeg",
    content: `
      <p class="mb-4 text-lg">
        La Direction des Recettes du Haut-Katanga (DRHKAT) est fière d'annoncer la signature
        d'un <strong>partenariat stratégique</strong> avec plusieurs acteurs économiques majeurs
        de la province. Cet accord vise à stimuler l'investissement local, à soutenir
        les entreprises émergentes et à favoriser un développement économique durable
        et inclusif dans toute la région.
      </p>
      <p class="mb-4 text-lg">
        Ce partenariat prévoit des initiatives conjointes axées sur la création d'emplois,
        la diversification économique et l'amélioration du climat des affaires. En travaillant
        main dans la main avec le secteur privé, la DRHKAT réaffirme son rôle de facilitateur
        économique, au-delà de sa mission de collecte des recettes.
      </p>
      <h2 class="text-3xl font-bold text-gray-900 mb-4 mt-8">Impact Attendu</h2>
      <ul class="list-disc list-inside mb-4 ml-5 text-lg">
        <li>Augmentation des investissements locaux.</li>
        <li>Soutien aux PME et startups.</li>
        <li>Création de nouvelles opportunités d'emploi.</li>
        <li>Renforcement de la confiance entre l'administration et le secteur privé.</li>
      </ul>
      <p class="text-lg">
        Nous sommes convaincus que ce type de collaboration est essentiel pour bâtir un avenir
        prospère pour le Haut-Katanga, en transformant les recettes fiscales en un levier
        direct pour le bien-être de notre population.
      </p>
      <p class="text-sm italic text-gray-600 mt-6">
        Plus de détails sur les projets spécifiques issus de ce partenariat seront communiqués prochainement.
      </p>
    `,
  },
];

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

interface PageProps {
  params: {
    slug: string;
  };
}
export default async function ArticlePage({ params }: PageProps) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-red-700 mb-4">
          Oups ! Article non trouvé.
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          L&apos;actualité que vous recherchez n&apos;existe pas ou a été
          déplacée.
        </p>
        <Link
          href="/news"
          className="inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
        >
          <ArrowLeftIcon className="w-5 h-5 mr-3" />
          Retour aux Actualités
        </Link>
      </div>
    );
  }

  return (
    <main className="flex min-h-screen flex-col bg-gray-50 py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6">
        <ArticleDisplay article={article} />
      </div>
    </main>
  );
}
