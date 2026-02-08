import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui/Container";

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen">
      <header className="border-b border-slate-200 bg-white">
        <Container className="py-4">
          <Link href="/" className="text-sm font-semibold text-blue-700 hover:text-blue-800">
            Retour à l&apos;accueil
          </Link>
        </Container>
      </header>

      <Container className="py-12">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          Conditions générales
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600">
          Cette page est un modèle. Remplacez ce contenu par les conditions d&apos;utilisation
          officielles (responsabilités, utilisation des contenus, liens externes, contact).
        </p>
      </Container>

      <Footer />
    </main>
  );
}
