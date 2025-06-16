import { Header } from "./Header";
import { HeroContent } from "./HeroContent";

export const HeroSection = () => (
  <section className="relative w-full min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-white overflow-hidden">
    {/* Animated background elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-grid.svg')] opacity-[0.03]"></div>
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
    </div>

    <Header />
    <div className="relative flex-1 flex items-center justify-center py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <HeroContent />
    </div>

    {/* Scrolling indicator */}
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
      <div className="animate-bounce w-6 h-6 border-2 border-blue-800 rounded-full flex items-center justify-center">
        <div className="w-2 h-2 bg-blue-800 rounded-full"></div>
      </div>
    </div>
  </section>
);
