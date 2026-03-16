import Link from "next/link";
import React from "react";

export default function AppFooter() {
  return (
    <footer className=" py-8 text-center text-sm border-t border-gray-300">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <p>
          Law Edge CPD is a trading style name for Estates and Wills Advisory
          Group Limited (company number 13958194).
        </p>
        <p>
          This service provides general CPD learning material only and does not
          constitute legal advice.
        </p>
      </div>
      
      <div className="container mx-auto flex items-center justify-center gap-6">
        <Link href="/privacy-policy" className="font-bold hover:underline">
          Privacy Policy
        </Link>

        <Link href="/cookie-policy" className="font-bold hover:underline">
          Cookie Policy
        </Link>

        <Link href="/privacy-policy" className="font-bold hover:underline">
          Terms of Service
        </Link>
      </div>
      
    </footer>
  );
}
