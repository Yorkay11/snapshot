'use client';

import { useState } from 'react';
import Link from 'next/link';
import { LandingNavbar } from "@/components/landing/navbar";
import { ChevronDown } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#1A1A2E] text-white">
      <LandingNavbar />
      
      <div className="pt-20">
        {/* Hero Section */}
        <div className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white/80 text-center max-w-3xl mx-auto">
              Tout ce que vous devez savoir sur Ultra-Times Snapshot
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="bg-[#1A1A2E] border-white/10 rounded-lg px-4">
                  <AccordionTrigger className="text-lg font-semibold">
                    What is Ultra-Times Snapshot?
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70">
                    Ultra-Times Snapshot is a powerful tool for managing and automating your NFT collection snapshots and airdrops on the Ultra blockchain. It helps you track your collection's evolution and engage with your community through targeted airdrops.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-[#1A1A2E] border-white/10 rounded-lg px-4">
                  <AccordionTrigger className="text-lg font-semibold">
                    How does the pricing work?
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70">
                    Our pricing is based on the number of snapshots and airdrops you perform. We offer different tiers to accommodate projects of all sizes. Additional fees may apply for features like CSV export or airdrops. Check our Pricing page for more details.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-[#1A1A2E] border-white/10 rounded-lg px-4">
                  <AccordionTrigger className="text-lg font-semibold">
                    Is my data secure?
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70">
                    Yes, your data is completely secure. We never have access to your private keys, and all transactions are signed directly from your wallet.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-[#1A1A2E] border-white/10 rounded-lg px-4">
                  <AccordionTrigger className="text-lg font-semibold">
                    Can I customize my snapshots?
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70">
                    Yes, you can customize various aspects of your snapshots, including frequency, conditions, and data collection parameters. Our platform offers flexible options to meet your specific needs.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="bg-[#1A1A2E] border-white/10 rounded-lg px-4">
                  <AccordionTrigger className="text-lg font-semibold">
                    How do I get started?
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70">
                    Getting started is easy! Simply connect your Ultra wallet, choose your plan, and start creating your first snapshot. Our intuitive interface will guide you through the process.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 bg-[#28274A]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Still have questions?</h2>
            <Button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 rounded-full text-lg font-semibold transition-colors shadow-[0_0_15px_rgba(172,70,231,0.3)]">
              Contact Support
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}

const faqs = [
  {
    question: "Qu'est-ce que l'UOS et comment en obtenir ?",
    answer: "L'UOS (Ultra Operating System) est la monnaie native de la blockchain Ultra. Vous pouvez obtenir des UOS en les achetant sur des exchanges ou en participant à l'écosystème Ultra. Pour plus d'informations, visitez le site officiel d'Ultra."
  },
  {
    question: "La plateforme est-elle sécurisée ?",
    answer: "Oui, Ultra-Times Snapshot utilise les dernières technologies de sécurité pour protéger vos données et vos transactions. Nous n'avons jamais accès à vos clés privées, et toutes les transactions sont signées directement depuis votre wallet."
  },
  {
    question: "Puis-je arrêter un job une fois qu'il est lancé ?",
    answer: "Oui, vous pouvez arrêter un job à tout moment depuis votre dashboard. Cependant, une annulation tardive entraînera un malus de 20% sur le coût total du job. Consultez notre page Tarifs pour plus de détails."
  },
  {
    question: "Qui peut utiliser ce service ?",
    answer: "Ultra-Times Snapshot est conçu pour les Factory Managers d'Ultra qui souhaitent gérer leurs collections NFT. Vous devez avoir le rôle de Factory Manager pour utiliser le service."
  },
  {
    question: "Comment sont calculés les coûts ?",
    answer: "Le coût de base est de 30 UOS par snapshot. Des réductions sont appliquées en fonction du volume, et des frais supplémentaires peuvent s'ajouter pour des fonctionnalités comme l'export CSV ou les airdrops. Consultez notre page Tarifs pour plus de détails."
  },
  {
    question: "Puis-je exporter mes données ?",
    answer: "Oui, vous pouvez exporter vos données en format CSV à tout moment. Cette fonctionnalité ajoute un surcoût de 10% au prix de base du snapshot."
  },
  {
    question: "Comment fonctionnent les airdrops ?",
    answer: "Les airdrops peuvent être configurés pour distribuer automatiquement des tokens UNIQ ou UOS aux détenteurs de vos NFTs. Vous pouvez définir des conditions personnalisées pour cibler des détenteurs spécifiques."
  },
  {
    question: "Y a-t-il des limites sur la taille des collections ?",
    answer: "Non, il n'y a pas de limite sur la taille des collections. Cependant, le temps de traitement peut varier en fonction de la taille de la collection et de la complexité des conditions d'airdrop."
  },
  {
    question: "Comment puis-je suivre l'état de mes jobs ?",
    answer: "Vous pouvez suivre l'état de tous vos jobs en temps réel depuis votre dashboard. Des notifications sont également envoyées pour vous informer des mises à jour importantes."
  },
  {
    question: "Que se passe-t-il si un snapshot échoue ?",
    answer: "En cas d'échec d'un snapshot, nous vous notifierons immédiatement. Vous pourrez alors relancer le snapshot ou contacter notre support pour obtenir de l'aide. Les snapshots échoués ne sont pas facturés."
  }
]; 