import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/portfolio/navbar";
import { ContactSection } from "@/components/portfolio/contact-section";
import { Footer } from "@/components/portfolio/footer";

export default function Contact() {
  useEffect(() => {
    // Set page title
    document.title = "Portfolio | Liên Hệ";
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen"
      >
        <Navbar activeSection="contact" />
        <main className="pt-16"> {/* Add padding top to account for navbar */}
          <ContactSection />
        </main>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}