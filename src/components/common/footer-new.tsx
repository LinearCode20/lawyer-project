"use client";

import Link from "next/link";
import React from "react";

export default function FooterNew() {
  return (
    <footer className="bg-white  text-sm">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col ">
          {/* Copyright Notice */}
          <div className="mb-3 text-2xl font-serif text-primary ">
            Law Edge - Practical CPD for modern solicitors
          </div>

          {/* Policy Links */}
          <div className="flex flex-wrap gap-4">
            <Link href="/#contact-us" className=" hover:underline">
              Contact
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms
            </Link>
            <Link href="/privacy-policy" className=" hover:underline">
              Privacy
            </Link>
            <Link href="/cookie-policy" className="hover:underline">
              Cookies
            </Link>
          </div>
        </div>
      </div>
      <div className=" border-t">
        <p className="text-center max-w-6xl mx-auto  px-4 py-8">
          Prepared by experienced solicitors with specialist qualifications,
          including STEP practitioners, Resolution members, and Law Society
          accredited specialists.
        </p>
      </div>
    </footer>
  );
}
