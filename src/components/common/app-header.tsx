"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export default function AppHeader() {
  const navItems = [
    { id: "home", label: "Home", href: "/" },
    { id: "areas", label: "Areas of Law", href: "/#area-of-law" },
    { id: "faq", label: "FAQ", href: "/faq" },
    {
      id: "sample",
      label: "Downlaod Free Sample",
      href: "/#free-sample",
      className:
        "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground cursor-pointer inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5 transition-all duration-300 hover:shadow-[0_0_15px_rgba(148,163,184,0.4),0_0_30px_rgba(148,163,184,0.2)] hover:scale-[1.03]",
    },
    { id: "contact", label: "Contact Us", href: "/contact-us" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b-2 border-gray-200">
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
                  className={cn(
                    "text-sm font-medium text-gray-700 hover:text-[#1A365D] transition-colors duration-200",
                    item.className,
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button
                variant="default"
                size="sm"
                className="transition-all duration-300 hover:shadow-[0_0_20px_rgba(26,54,93,0.6),0_0_40px_rgba(26,54,93,0.4)] hover:scale-105 hover:brightness-110"
              >
                Subscribe for Free
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
