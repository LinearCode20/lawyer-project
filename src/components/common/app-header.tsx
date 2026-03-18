"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Search, User } from "lucide-react";

export default function AppHeader() {
  const [activeItem, setActiveItem] = useState("home");

  const navItems = [
    { id: "home", label: "Home", href: "/" },
    { id: "about", label: "About Us", href: "/about" },
    { id: "pricing", label: "Pricing", href: "/#pricing" },
    { id: "faq", label: "FAQ", href: "/faq" },
    { id: "contact", label: "Contact us", href: "/contact-us" }    
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md border-b ">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand Section */}
          <div className="flex items-center">
            <Link href="/" className="flex flex-col items-start space-x-2">
              <span className="text-2xl uppercase tracking-widest font-bold  ">
                Law Edge
              </span>
              <span className="text-xs ">Professional CPD</span>
            </Link>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 relative py-2 ${
                  activeItem === item.id ? "" : "text-gray-400 "
                }`}
                onClick={() => setActiveItem(item.id)}
              >
                {item.label}
                {activeItem === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 " />
                )}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
