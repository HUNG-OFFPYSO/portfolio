import { useState, useEffect } from "react";

export function useScrollSpy() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      let current = "";
      const scrollY = window.pageYOffset;

      sections.forEach((section) => {
        const sectionElement = section as HTMLElement;
        const sectionHeight = sectionElement.offsetHeight;
        const sectionTop = sectionElement.offsetTop - 100;
        const sectionId = sectionElement.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight && sectionId) {
          current = sectionId;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return activeSection;
}
