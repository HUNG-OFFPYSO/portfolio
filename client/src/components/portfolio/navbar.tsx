import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "wouter";

interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  activeSection: string;
}

const navItems: NavItem[] = [
  { label: "Trang chủ", href: "/" },
  { label: "Kỹ năng", href: "/skills" },
  { label: "Dự án", href: "/projects" },
  { label: "Liên hệ", href: "/contact" },
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

  // Helper function to check if a nav item is active
  const isActive = (navHref: string) => {
    if (navHref === "/" && activeSection === "home") return true;
    return navHref.substring(1) === activeSection;
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold text-primary font-sans"
        >
          Portfolio<span className="text-amber-500">.</span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden lg:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`hover:text-primary transition-colors duration-300 ${
                isActive(item.href) ? "text-primary font-medium" : ""
              }`}
            >
              {item.label}
            </Link>
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
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`hover:text-primary transition-colors duration-300 ${
                      isActive(item.href) ? "text-primary font-medium" : ""
                    }`}
                    onClick={() => {
                      document.querySelector<HTMLButtonElement>("[data-radix-collection-item]")?.click();
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
