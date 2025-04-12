import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { portfolioData } from "@/data/portfolio-data";

export function Footer() {
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

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <button
              onClick={goToTop}
              className="text-2xl font-bold text-white font-sans focus:outline-none"
            >
              Portfolio<span className="text-amber-500">.</span>
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-4 md:mb-0">
            <button
              onClick={() => scrollToSection("#hero")}
              className="hover:text-primary transition-colors duration-300"
            >
              Trang chủ
            </button>
            <button
              onClick={() => scrollToSection("#about")}
              className="hover:text-primary transition-colors duration-300"
            >
              Giới thiệu
            </button>
            <button
              onClick={() => scrollToSection("#skills")}
              className="hover:text-primary transition-colors duration-300"
            >
              Kỹ năng
            </button>
            <button
              onClick={() => scrollToSection("#projects")}
              className="hover:text-primary transition-colors duration-300"
            >
              Dự án
            </button>
            <button
              onClick={() => scrollToSection("#contact")}
              className="hover:text-primary transition-colors duration-300"
            >
              Liên hệ
            </button>
          </div>

          <div className="flex space-x-4">
            {portfolioData.socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors duration-300"
                aria-label={social.name}
              >
                {social.name === "LinkedIn" && <FaLinkedin />}
                {social.name === "GitHub" && <FaGithub />}
                {social.name === "Twitter" && <FaTwitter />}
                {social.name === "Instagram" && <FaInstagram />}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-700 text-gray-400 text-sm">
          <p>&copy; {currentYear} Portfolio. Đã đăng ký bản quyền.</p>
        </div>
      </div>

      <button
        id="back-to-top"
        onClick={goToTop}
        className="fixed bottom-6 right-6 bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transform transition duration-300 hover:scale-110 z-10"
        aria-label="Back to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </footer>
  );
}
