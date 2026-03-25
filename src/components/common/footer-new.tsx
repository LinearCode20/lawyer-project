"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function FooterNew() {
  return (
    <footer className="bg-white px-4 py-8 text-sm">
      <div className="container mx-auto">
        <div className="flex flex-col">
          {/* Copyright Notice */}
          <div className="mb-3 text-2xl font-semibold">
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
    </footer>
  );
}
