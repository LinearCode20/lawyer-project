"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import { ArrowDownToLine, Download, Search } from "lucide-react";
import CPDDocumentModal from "./cpd-document-modal";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-white" id="home">
      <main className="md:max-w-6xl mx-auto min-h-[80vh] w-full  grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-between py-20  sm:items-start p-4">
        <div>
          <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
            <div className="text-primary text-5xl mb-4  font-serif space-y-4 pr-4 pt-8 tracking-tight ">
              <p>CPD you'll actually complete.</p>
              <p>Delivered monthly. </p>
              <p>No effort required.</p>
            </div>
            <p>
              <span className="bg-[#f6f0e8] px-2 pt-1">
                Get 13 hours of SRA-aligned CPD each year,
              </span>{" "}
              broken into simple monthly updates. No searching. No overwhelm.
              Just clear, practical legal updates you can use immediately.
            </p>
            <p className=" font-[550] text-primary">
              Written by practising lawyers. Designed for fast, practical CPD.
            </p>
            <p className="text-gray-400 mb-4">
              Used by solicitors across the UK, from sole practitioners to
              multi-office firms.
            </p>
            <ul className="space-y-4 pl-4 list-disc">
              <li>Covers key updates in your practice area</li>
              <li>Structured for quick reading and reflection</li>
              <li>Ready for CPD records and audits</li>
            </ul>
          </div>
          <div className=" flex flex-col gap-4 text-base font-medium sm:flex-row mt-8 ">
            <Link
              href="/#subscribe"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button variant={"secondary"} size="lg" className="w-full">
                {" "}
                Start Free Month
              </Button>
            </Link>
            <Link
              href="/#subscribe"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button className="w-full" size="lg">
                <ArrowDownToLine />
                Download Sample Issue
              </Button>
            </Link>
          </div>
          <p className="mt-4 text-sm text-center text-gray-400">
            Takes Less than 2 minutes to get started.
          </p>
        </div>

        {/* CPD Document Preview */}
        <div
          className="relative bg-[#FAFAF5] border border-gray-200 rounded-lg p-6 pt-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group "
          onClick={() => setIsModalOpen(true)}
          role="button"
          tabIndex={0}
          aria-label="View CPD document sample"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setIsModalOpen(true);
            }
          }}
        >
          {/* Lined paper effect */}
          <div
            className="absolute inset-0 pointer-events-none rounded-lg overflow-hidden"
            style={{
              backgroundImage:
                "repeating-linear-gradient(transparent, transparent 27px, #E5E7EB 27px, #E5E7EB 28px)",
            }}
          ></div>

          {/* <div className="absolute inset-0 z-20 bg-gradient-to-b from-[#FAFAF5] via-transparent to-[#FAFAF5] transition-opacity duration-300 group-hover:opacity-0" /> */}

          <div
            className="relative z-10 
          "
          >
            {/* Top row with expand indicator */}
            <div className="text-center mb-4">
              <p className="text-xs text-gray-500 mb-2 group-hover:text-amber-600 transition-colors">
                CLICK TO EXPAND
              </p>
            </div>

            {/* Page number */}
            <div className="absolute top-4 right-4 text-xs text-gray-400">
              Page 1 of 9
            </div>

            {/* Header */}
            <div className="flex gap-4 justify-between mb-6">
              <p className="text-amber-600 text-sm font-medium">
                Monthly CPD sample
              </p>
              <div className="text-right">
                <img
                  src={"/logo.png"}
                  className="aspect-video -mt-6 h-20 object-contain "
                  alt="LAW EDGE"
                />
              </div>
            </div>

            {/* Two-column metadata */}
            <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
              <div className="text-gray-700">
                <p>Commercial & Corporate |</p>
                <p>March 2026</p>
              </div>
              <div className="text-gray-700">
                <p>Estimated reading time: 15-20 minutes</p>
                <p>CPD: 1 hour</p>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
              <p>
                This monthly update highlights key legal developments in
                commercial and corporate law, focusing on recent case law,
                legislative changes, and practical implications for solicitors
                advising clients and managing transactions...
              </p>
              <p className="italic text-gray-400">
                Key point: drafting clarity remains critical where agreements
                are intended to survive structural changes...
              </p>
            </div>

            <div className="py-4 text-center">
              <div>
                <div className="text-secondary text-sm font-semibold">
                  CASE LAW UPDATE
                </div>
                <div className="text-slate-600 text-2xl font-semibold mt-1">
                  Smith v Jones Ltd [2024] EWCA Civ 123
                </div>
              </div>
            </div>

            <div className="pb-4">
              <div>
                <div className="text-slate-600 text-sm font-semibold">
                  Issue
                </div>
                <div className="text-slate-800 text-sm mt-1">
                  Shareholder agreement clauses after transfer of shares...
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* CPD Document Modal */}
      <CPDDocumentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
