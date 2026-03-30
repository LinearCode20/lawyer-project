"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export default function AppHeader() {
  const navItems = [
    { id: "home", label: "Testimonials", href: "/#testimonials" },
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
                <img src="/logo.png" alt="Logo" className="h-16 w-auto" />
              </Link>
            </div>

            {/* Navigation Menu */}
            <div className="flex items-center gap-8">
              <nav className="hidden md:flex items-center space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={cn("text-sm font-semibold ")}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link href="/#subscribe">
                  <Button variant="outline">Download Sample Issue</Button>
                </Link>
                <Link href="/#subscribe">
                  <Button variant="secondary">Start free month</Button>
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-primary text-white text-center py-4">
          13 hours CPD per year. Delivered monthly. No need to look elsewhere.
        </div>
      </header>
    </>
  );
}
