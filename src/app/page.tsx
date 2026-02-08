import { FutureServicesSection } from "@/components/FutureServicesSection";
import { HeroSection } from "@/components/HeroSection";
import { LawsSection } from "@/components/LawsSection";
import { OfficesSection } from "@/components/OfficesSection";
import { TaxpayerServices } from "@/components/TaxpayerServices";
import { OnlineServicesSection } from "@/components/OnlineServicesSection";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { QuickServicesStrip } from "@/components/QuickServicesStrip";
import { MissionSection } from "@/components/MissionSection";

// Main Page Component
export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <QuickServicesStrip />
      {/* <AnnouncementsSection /> */}
      <MissionSection />
      <OnlineServicesSection />
      <TaxpayerServices />
      <OfficesSection />
      <LawsSection />
      <FaqSection />
      {/* <PublicResourcesSection /> */}
      <FutureServicesSection />
      <Footer />
    </main>
  );
}
