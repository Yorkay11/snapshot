import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import Header from "@/components/landing/header";
import { SnapshotListFixed } from "@/components/dashboard/snapshot/snapshot-list-fixed";
import { keyFeatures, socialProof } from "@/lib/data";
import Howitworks from "@/components/landing/howitworks";
import KeyFeytures from "@/components/landing/keyFeytures";

export default function Home() {
  return (
    <div className="min-h-screen bg-foreground/90 text-white py-10">
      <Navbar />

      <Header />
      
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 to-primary/80 z-10" />
        <div className="absolute inset-0 ">
          <Image
            src="/ultra.png"
            alt="Ultra Background"
            fill
            className="object-cover opacity-10"
            priority
          />
        </div>
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-secondary to-[#8757B2] text-transparent bg-clip-text">
            Automatisez vos snapshots et airdrops sur Ultra en toute simplicité
          </h1>
          <p className="text-xl md:text-lg mb-8 text-white/80">
            Gagnez du temps, engagez votre communauté et gérez vos détenteurs de tokens sans effort
          </p>
          
          <SnapshotListFixed />

        </div>
      </div>

      <Howitworks />

      <KeyFeytures />

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Ils nous font confiance
          </h2>
          <div className="grid md:grid-cols-4 gap-8 items-center justify-items-center">
            {socialProof.map((item, index) => (
              <div 
                key={index}
                className="bg-[#28274A] p-6 rounded-lg shadow-[0_0_15px_rgba(98,44,108,0.3)] hover:shadow-[0_0_20px_rgba(172,70,231,0.4)] transition-shadow text-center"
              >
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={120}
                  height={120}
                  className="mx-auto mb-4"
                />
                <p className="text-white/70 italic">"{item.testimonial}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#28274A]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à automatiser vos snapshots ?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Rejoignez les projets qui font confiance à Ultra-Times Snapshot pour gérer leurs collections.
          </p>
          <Link 
            href="/dashboard"
            className="inline-block bg-[#AC46E7] hover:bg-[#8757B2] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-[0_0_15px_rgba(172,70,231,0.3)]"
          >
            Lancer la dApp
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A2E] border-t border-[#8757B2]/20 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Ultra-Times Snapshot</h3>
              <p className="text-white/70">
                La solution simple pour automatiser vos snapshots et airdrops sur Ultra.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
              <ul className="space-y-2">
                <li><Link href="#features" className="text-white/70 hover:text-white">Fonctionnalités</Link></li>
                <li><Link href="#pricing" className="text-white/70 hover:text-white">Tarifs</Link></li>
                <li><Link href="#faq" className="text-white/70 hover:text-white">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Légal</h3>
              <ul className="space-y-2">
                <li><Link href="/terms" className="text-white/70 hover:text-white">Conditions d'utilisation</Link></li>
                <li><Link href="/privacy" className="text-white/70 hover:text-white">Politique de confidentialité</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li><a href="https://twitter.com/ultratimes" className="text-white/70 hover:text-white">Twitter</a></li>
                <li><a href="https://discord.gg/ultratimes" className="text-white/70 hover:text-white">Discord</a></li>
                <li><a href="mailto:contact@ultratimes.com" className="text-white/70 hover:text-white">Email</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[#8757B2]/20 text-center text-white/50">
            © 2024 Ultra-Times Snapshot. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}


