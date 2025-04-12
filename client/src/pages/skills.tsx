import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/portfolio/navbar";
import { SkillsSection } from "@/components/portfolio/skills-section";
import { Footer } from "@/components/portfolio/footer";

export default function Skills() {
  useEffect(() => {
    // Set page title
    document.title = "Portfolio | Kỹ Năng";
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen"
      >
        <Navbar activeSection="skills" />
        <main className="pt-16"> {/* Add padding top to account for navbar */}
          <SkillsSection />
        </main>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}