import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/portfolio/navbar";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { Footer } from "@/components/portfolio/footer";

export default function Projects() {
  useEffect(() => {
    // Set page title
    document.title = "Portfolio | Dự Án";
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen"
      >
        <Navbar activeSection="projects" />
        <main className="pt-16"> {/* Add padding top to account for navbar */}
          <ProjectsSection />
        </main>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}