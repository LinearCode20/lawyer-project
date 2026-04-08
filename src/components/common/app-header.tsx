"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function AppHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home", href: "/#home" },
    // { id: "home", label: "Testimonials", href: "/#testimonials" },
    { id: "contact", label: "Contact Us", href: "/#contact-us" },
    { id: "areas", label: "Areas", href: "/#area-of-law" },
    { id: "how-it-works", label: "How It Works", href: "/#how-it-works" },
    { id: "faq", label: "FAQ", href: "/#faq" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white border-b-2 border-gray-200 text-primary">
        <div className=" px-6 py-4">
          <div className="flex items-center justify-between ">
            {/* Logo/Brand Section */}
            <div className="flex items-center ">
              <Link href="/" className="flex flex-col">
                <img
                  src="/law_edge_logo.svg"
                  alt="Logo"
                  className="h-16 w-auto"
                />
              </Link>
            </div>

            {/* Navigation Menu */}
            <div className="flex items-center gap-8">
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={cn(
                      "text-sm font-semibold hover:text-primary relative group hover:scale-105 transition-all duration-200",
                    )}
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </Link>
                ))}
                <div className="flex items-center gap-4">
                  <Link href="/#subscribe" className="grow">
                    <Button size="lg" variant="outline-secondary">
                      Download Sample Issue
                    </Button>
                  </Link>
                  <Link href="/#subscribe" className="grow">
                    <Button size="lg" variant="secondary">
                      Start your free trial
                    </Button>
                  </Link>
                </div>
              </nav>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b-2 border-gray-200 px-6 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-semibold hover:text-primary transition-all duration-200"
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
                <Link
                  href="/#subscribe"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button size="lg" variant="outline" className="w-full">
                    Download Sample Issue
                  </Button>
                </Link>
                <Link
                  href="/#subscribe"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button size="lg" variant="secondary" className="w-full">
                    Start your free trial
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}

        <div className="bg-primary text-white text-center py-2">
          No research. No admin. Just CPD that runs itself.
        </div>
      </header>
    </>
  );
}
