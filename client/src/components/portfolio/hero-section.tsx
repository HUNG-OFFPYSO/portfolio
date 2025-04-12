import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { portfolioData } from "@/data/portfolio-data";

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-white to-blue-50"
    >
      <div className="container mx-auto px-4 md:px-8 py-16 lg:py-0">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <div className="inline-flex items-center bg-blue-100 text-primary rounded-full px-4 py-1.5 text-sm font-medium">
              <span className="bg-primary rounded-full w-2.5 h-2.5 mr-2"></span>
              Chào mừng đến với trang cá nhân của tôi
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Xin chào! Tôi là <span className="text-primary">{portfolioData.name}</span>
            </h1>
            <p className="text-lg text-gray-600">
              {portfolioData.shortBio}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                className="bg-primary hover:bg-blue-600 text-white px-8 py-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 h-auto"
                onClick={() => scrollToSection("#contact")}
              >
                Liên hệ ngay
              </Button>
              <Button
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 rounded-lg font-medium transition-all duration-300 h-auto"
                onClick={() => scrollToSection("#projects")}
              >
                Xem dự án
              </Button>
            </div>
            <div className="pt-8 flex items-center space-x-4">
              <span className="text-gray-600">Kết nối:</span>
              <div className="flex space-x-4">
                {portfolioData.socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary transition-colors duration-300"
                    aria-label={social.name}
                  >
                    {social.name === "LinkedIn" && <FaLinkedin className="text-xl" />}
                    {social.name === "GitHub" && <FaGithub className="text-xl" />}
                    {social.name === "Twitter" && <FaTwitter className="text-xl" />}
                    {social.name === "Instagram" && <FaInstagram className="text-xl" />}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-xl">
              {portfolioData.profileImage ? (
                <img
                  src={portfolioData.profileImage}
                  alt={portfolioData.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-4xl text-white font-bold">
                  {portfolioData.name.charAt(0)}
                </div>
              )}
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden lg:block"
        >
          <a
            href="#about"
            className="flex flex-col items-center text-primary animate-bounce"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#about");
            }}
          >
            <span className="text-sm mb-2">Cuộn xuống</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
