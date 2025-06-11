import Link from "next/link";
import Image from "next/image";
import { LandingNavbar } from "@/components/landing/navbar";

export default function Features() {
  return (
    <div className="min-h-screen bg-[#1A1A2E] text-white">
      <LandingNavbar />
      
      <div className="pt-20">
        {/* Hero Section */}
        <div className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Fonctionnalités
            </h1>
            <p className="text-xl text-white/80 text-center max-w-3xl mx-auto">
              Découvrez comment Ultra-Times Snapshot peut transformer votre gestion de collection NFT
            </p>
          </div>
        </div>

        {/* Snapshots Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Snapshots Automatisés</h2>
                <p className="text-white/80 mb-6">
                  Capturez l'état de votre collection à intervalles réguliers sans effort. Définissez la fréquence qui vous convient et laissez Ultra-Times gérer le reste.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#AC46E7] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Planification flexible (quotidien, hebdomadaire, mensuel)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#AC46E7] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Notifications en temps réel</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#AC46E7] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Historique complet des snapshots</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#28274A] p-6 rounded-lg shadow-[0_0_15px_rgba(98,44,108,0.3)]">
                <Image
                  src="/features/snapshots.png"
                  alt="Snapshots Feature"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Airdrops Section */}
        <section className="py-20 px-4 bg-[#28274A]">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <Image
                  src="/features/airdrops.png"
                  alt="Airdrops Feature"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-6">Airdrops Conditionnels</h2>
                <p className="text-white/80 mb-6">
                  Distribuez vos tokens UNIQ et UOS en fonction de conditions personnalisées. Engagez votre communauté avec des récompenses ciblées.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#AC46E7] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Conditions personnalisables</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#AC46E7] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Support UNIQ et UOS</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#AC46E7] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Suivi en temps réel</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Conditions Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Conditions Avancées</h2>
                <p className="text-white/80 mb-6">
                  Créez des règles complexes pour cibler précisément vos détenteurs. Combinez plusieurs conditions pour des airdrops ultra-personnalisés.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#AC46E7] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Opérateurs logiques (ET, OU, NON)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#AC46E7] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Conditions temporelles</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#AC46E7] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Conditions sur les tokens</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#28274A] p-6 rounded-lg shadow-[0_0_15px_rgba(98,44,108,0.3)]">
                <Image
                  src="/features/conditions.png"
                  alt="Conditions Feature"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-20 px-4 bg-[#28274A]">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <Image
                  src="/features/history.png"
                  alt="History Feature"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-6">Historique Complet</h2>
                <p className="text-white/80 mb-6">
                  Gardez une trace de tous vos snapshots et airdrops. Exportez vos données pour des analyses approfondies.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#AC46E7] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Export CSV</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#AC46E7] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Filtres avancés</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#AC46E7] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Statistiques détaillées</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à commencer ?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Rejoignez les projets qui font confiance à Ultra-Times Snapshot
            </p>
            <Link 
              href="/dashboard"
              className="inline-block bg-[#AC46E7] hover:bg-[#8757B2] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-[0_0_15px_rgba(172,70,231,0.3)]"
            >
              Lancer la dApp
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
} 