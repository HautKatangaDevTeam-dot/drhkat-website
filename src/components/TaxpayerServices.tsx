import { ServiceCard } from "./ServiceCard";

const servicesData = [
  {
    icon: "map",
    title: "Localisation",
    description: "Trouvez nos bureaux dans toute la province",
    link: "#offices",
  },
  {
    icon: "document",
    title: "Documents Légaux",
    description: "Accédez aux textes de loi et formulaires",
    link: "#laws",
  },
  {
    icon: "faq",
    title: "FAQ",
    description: "Réponses aux questions fréquentes",
    link: "#faq",
  },
];

export const TaxpayerServices = () => (
  <section id="services" className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
        Services aux Contribuables
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  </section>
);
