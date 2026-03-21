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
          <div className="mb-3">
            <p className="text-gray-900">
              © 2026 Law Edge Professional CPD. All rights reserved.
            </p>
          </div>

          {/* Company Info */}
          <div className="mb-3">
            <p className="text-gray-600">
              Law Edge CPD is a trading style name for Estates and Wills
              Advisory Group Limited (company number 13958194).
            </p>
          </div>

          {/* Disclaimer */}
          <div className="mb-4">
            <p className="text-gray-600">
              This service provides general CPD learning material only. It is
              not legal advice and should not be relied upon as such. Always
              exercise your own professional judgment and verify sources where
              necessary.
            </p>
          </div>

          {/* Policy Links */}
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy-policy" className=" hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:underline">
              Website Terms
            </Link>
            <Link href="/cookie-policy" className="hover:underline">
              Cookies Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
