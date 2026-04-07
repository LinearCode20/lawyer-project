"use client";

import Link from "next/link";
import React from "react";

export default function FooterNew() {
  return (
    <footer className="bg-primary  text-sm">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col ">
          {/* Copyright Notice */}
          <div className="mb-3 text-2xl font-serif text-white ">Law Edge</div>
          <p className="text-foreground">
            Stractured CPD For law firmx.
          </p>
          <p className="my-4">
            Prepared by experienced solicitors with specialist qualifications,
            including STEP practitioners, Resolution members, and Law Society
            accredited specialists.
          </p>

          {/* Policy Links */}
          <div className="flex flex-wrap gap-4 ">
            <Link href="/#contact-us" className=" hover:text-white underline">
              Contact
            </Link>
            <Link href="/terms" className="hover:text-white underline">
              Terms
            </Link>
            <Link href="/privacy-policy" className=" hover:text-white underline">
              Privacy
            </Link>
            <Link href="/cookie-policy" className="hover:text-white underline">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
