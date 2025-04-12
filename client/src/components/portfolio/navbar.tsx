import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  activeSection: string;
}

const navItems: NavItem[] = [
  { label: "Trang chủ", href: "#hero" },
  { label: "Giới thiệu", href: "#about" },
  { label: "Kỹ năng", href: "#skills" },
  { label: "Dự án", href: "#projects" },
  { label: "Liên hệ", href: "#contact" },
];

export function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a
          href="#hero"
          className="text-2xl font-bold text-primary font-sans"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#hero");
          }}
        >
          Portfolio<span className="text-amber-500">.</span>
        </a>

        {/* Desktop menu */}
        <div className="hidden lg:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`hover:text-primary transition-colors duration-300 ${
                activeSection === item.href.substring(1) ? "text-primary font-medium" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-gray-900 text-white">
            <div className="flex flex-col h-full">
              <div className="flex justify-end">
                <Button variant="ghost" size="icon" className="text-white">
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`hover:text-primary transition-colors duration-300 ${
                      activeSection === item.href.substring(1) ? "text-primary font-medium" : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                      document.querySelector<HTMLButtonElement>("[data-radix-collection-item]")?.click();
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
