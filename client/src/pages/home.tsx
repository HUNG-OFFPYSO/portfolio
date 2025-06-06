import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/portfolio/navbar";
import { HeroSection } from "@/components/portfolio/hero-section";
import { AboutSection } from "@/components/portfolio/about-section";
import { Footer } from "@/components/portfolio/footer";

export default function Home() {
  useEffect(() => {
    // Set page title
    document.title = "Portfolio | Trang Chủ";
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen"
      >
        <Navbar activeSection="home" />
        <main>
          <HeroSection />
          <AboutSection />
        </main>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}
