"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Children, useState } from "react";
import { ArrowDownToLine, Download, Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AppHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    { id: "home", label: "Home", href: "/#home" },
    // { id: "home", label: "Testimonials", href: "/#testimonials" },
    { id: "how-it-works", label: "How It Works", href: "/#how-it-works" },
    { id: "subscribe", label: "Get Sample Issue", href: "/#subscribe" },
    // { id: "areas", label: "Areas", href: "/#area-of-law" },
    {
      id: "identify-non-defensible-files",
      label: "Identify Non-Defensible Files",
      href: "/file-review",
      children: (
        <Button size="lg" variant="secondary" className="w-55">
          Identify Non-Defensible Files
        </Button>
      ),
    },
    { id: "contact", label: "Contact Us", href: "/#contact-us" },
    // { id: "faq", label: "FAQ", href: "/#faq" },
  ];

  const handleHashNavigation = (href: string) => {
    if (href.includes("#")) {
      const [path, hash] = href.split("#");
      router.push(path);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      router.push(href);
    }
  };

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
                  <div
                    key={item.id}
                    onClick={() => handleHashNavigation(item.href)}
                    className={cn(
                      "text-sm font-semibold hover:text-primary relative group hover:scale-105 transition-all duration-200 cursor-pointer",
                    )}
                  >
                    {item.children ? item.children : item.label}
                    {!item.children && (
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                    )}
                  </div>
                ))}
                {/* <div className="flex items-center justify-evenly gap-4 "> */}
                {/* <Link href="/#subscribe">
                  <Button
                    size="lg"
                    variant="outline-secondary"
                    className="w-55"
                  >
                    <ArrowDownToLine />
                    Get Sample Issue
                  </Button>
                </Link>
                <Link href="/#subscribe">
                  <Button size="lg" variant="secondary" className="w-55">
                    Start Free Trial
                  </Button>
                </Link> */}
                {/* </div> */}
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
                <div
                  key={item.id}
                  onClick={() => {
                    handleHashNavigation(item.href);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-sm font-semibold hover:text-primary transition-all duration-200 cursor-pointer"
                >
                  {item.children ? item.children : item.label}
                </div>
              ))}
              {/* <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
                <Link
                  href="/#subscribe"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button
                    size="lg"
                    variant="outline-secondary"
                    className="w-full"
                  >
                    <ArrowDownToLine />
                    Get Sample Issue
                  </Button>
                </Link>
                <Link
                  href="/#subscribe"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button size="lg" variant="secondary" className="w-full">
                    Start Free Trial
                  </Button>
                </Link>
              </div> */}
            </nav>
          </div>
        )}

        <div className="bg-primary text-white text-center py-6">
          Used by UK law firms to keep files clear and defensible.{" "}
        </div>
      </header>
    </>
  );
}
