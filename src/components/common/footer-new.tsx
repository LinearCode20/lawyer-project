"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function FooterNew() {
  return (
    <footer className="border-t border-gray-300 bg-background p-4 py-8 text-sm">
      <div className=" mx-auto ">
        <div className="flex flex-col justify-center items-center">
          <div className="mb-6">
            <p className="mb-3 text-muted-foreground text-center">
              This service provides general CPD learning material only. It is
              not legal advice and should not be relied upon as such. Always
              exercise your own professional judgment and verify sources where
              necessary.
            </p>
            <p className="text-muted-foreground text-center">
              Law Edge CPD is a trading style name for Estates and Wills
              Advisory Group Limited (company number 13958194).
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-center">
            <Link
              href="/privacy-policy"
              className="font-medium text-foreground transition-colors hover:text-primary hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookie-policy"
              className="font-medium text-foreground transition-colors hover:text-primary hover:underline"
            >
              Cookie Policy
            </Link>
            <Link
              href="/privacy-policy"
              className="font-medium text-foreground transition-colors hover:text-primary hover:underline"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
