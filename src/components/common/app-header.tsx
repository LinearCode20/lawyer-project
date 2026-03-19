"use client";
import Link from "next/link";
import { Button } from "../ui/button";

export default function AppHeader() {
  const navItems = [
    { id: "home", label: "Home", href: "/" },
    { id: "areas", label: "Areas of Law", href: "/areas-of-law" },
    { id: "faq", label: "FAQ", href: "/faq" },
    { id: "sample", label: "Free Sample", href: "/free-sample" },
    { id: "contact", label: "Contact Us", href: "/contact-us" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between divide-x-2">
          {/* Logo/Brand Section */}
          <div className="flex items-center ">
            <Link href="/" className="flex flex-col">
              <span className="text-2xl text-nowrap uppercase tracking-[8px] font-bold text-[#1A365D]">
                LAW EDGE
              </span>
              <span className="text-sm text-nowrap tracking-widest font-semibold text-[#1A365D]">
                PROFESSIONAL CPD
              </span>
            </Link>
          </div>

          {/* Navigation Menu */}
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-[#1A365D] transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button variant="default" size="sm">
                Subscribe for Free
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
