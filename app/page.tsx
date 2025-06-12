"use client"

import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import Header from "@/components/landing/header";
import { SnapshotListFixed } from "@/components/dashboard/snapshot/snapshot-list-fixed";
import Howitworks from "@/components/landing/howitworks";
import KeyFeytures from "@/components/landing/keyFeytures";
import Cta from "@/components/landing/cta";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-foreground/90 text-white py-10">
      <Navbar />

      <Header />

      <motion.div 
        className="relative min-h-screen flex items-center justify-center overflow-hidden py-28"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 to-primary/80 z-10" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/80 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 ">
          <Image
            src="/ultra.png"
            alt="Ultra Background"
            fill
            className="object-cover opacity-10"
            priority
          />
        </div>
        <motion.div 
          className="relative z-20 text-center px-4 max-w-5xl mx-auto"
          variants={fadeInUp}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-secondary to-[#8757B2] text-transparent bg-clip-text">
            Automate your snapshots and airdrops on Ultra with ease
          </h1>
          <p className="text-xl md:text-lg mb-8 text-white/80">
            Save time, engage your community, and manage your token holders effortlessly
          </p>

          <SnapshotListFixed />
        </motion.div>
      </motion.div>

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <Howitworks />
      </motion.div>

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <KeyFeytures />
      </motion.div>

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <Cta />
      </motion.div>

      <motion.footer 
        className="relative py-32 bg-gradient-to-b from-foreground/90 to-foreground/95 overflow-hidden"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/80 rounded-full blur-3xl" />
        </div>
        <motion.div 
          className="max-w-7xl mx-auto px-4"
          variants={fadeInUp}
        >
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Ultra-Times Snapshot</h3>
              <p className="text-white/70">
                The simple solution to automate your snapshots and airdrops on Ultra.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="#features" className="text-white/70 hover:text-white">Features</Link></li>
                <li><Link href="#pricing" className="text-white/70 hover:text-white">Pricing</Link></li>
                <li><Link href="#faq" className="text-white/70 hover:text-white">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/terms" className="text-white/70 hover:text-white">Terms of Service</Link></li>
                <li><Link href="/privacy" className="text-white/70 hover:text-white">Privacy Policy</Link></li>
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
            © 2025 UltraTimes Snapshot. All rights reserved.
          </div>
        </motion.div>
      </motion.footer>
    </div>
  );
}


