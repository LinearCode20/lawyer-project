"use client";
import React, { useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface CPDDocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CPDDocumentModal({
  isOpen,
  onClose,
}: CPDDocumentModalProps) {
  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Document content - larger and more readable */}
        <div className="bg-[#FAFAF5] p-8 md:p-12 relative">
          <div className="bg-[#FAFAF5] p-8 md:p-12 relative border rounded-2xl shadow-2xl">
            {/* Lined paper effect */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(transparent, transparent 31px, #E5E7EB 31px, #E5E7EB 32px)",
              }}
            ></div>

            <div className="relative z-10 text-justify">
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
                <div className="text-center">
                  <img
                    src="/logo.png"
                    alt="CPD Sample Logo"
                    className="h-10 w-auto object-contain"
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
                <p className="italic text-gray-400 ">
                  Key point: drafting clarity remains critical where agreements
                  are intended to survive structural changes...
                </p>
              </div>

              <div className="py-4 text-center">
                <div className="text-secondary text-sm font-semibold">
                  CASE LAW UPDATE
                </div>
                <div className="text-slate-600 text-2xl  font-semibold mt-1">
                  Smith v Jones Ltd [2024] EWCA Civ 123
                </div>
              </div>

              <div className="pb-4">
                <div className="text-slate-600 text-sm font-semibold">
                  Issue
                </div>
                <div className="text-slate-800 text-sm mt-1">
                  Shareholder agreement clauses after transfer of shares...
                </div>
              </div>

              <div className="pb-4">
                <div className="text-slate-600 text-sm font-semibold">
                  Decision
                </div>
                <div className="text-slate-800 text-sm mt-1">
                  Restrictive provisions remained binding following the
                  ownership change...{" "}
                </div>
              </div>

              <div className="pb-4">
                <div className="text-slate-600 text-sm font-semibold">
                  Practical implication
                </div>
                <div className="text-slate-800 text-sm mt-1">
                  Review drafting to ensure survival clauses remain clear and
                  enforceable....{" "}
                </div>
              </div>

              <div className="py-4 text-center">
                <div className="text-secondary text-sm font-semibold">
                  LEGISLATION UPDATE{" "}
                </div>
                <div className="text-slate-600 text-2xl font-semibold mt-1">
                  Companies Act Update (Amendment) Regulations 2026{" "}
                </div>
              </div>

              <div className="pb-4">
                <div className="text-slate-600 text-sm font-semibold">
                  Summary{" "}
                </div>
                <div className="text-slate-800 text-sm mt-1">
                  Additional reporting requirements for directors on risk and
                  controls...{" "}
                </div>
              </div>

              <div className="pb-4">
                <div className="text-slate-600 text-sm font-semibold">
                  Practical impact{" "}
                </div>
                <div className="text-slate-800 text-sm mt-1">
                  Advise clients to review reporting processes ahead of
                  implementation...
                </div>
              </div>

              <div className="py-4">
                <div className="text-secondary text-sm font-semibold">
                  CPD REFLECTION
                </div>
                <ol className="list-decimal p-4">
                  <li>How does this affect your current matters?</li>
                  <li>What documents would you review?</li>
                </ol>
              </div>

              <div className="py-4">
                <div className="text-secondary text-sm font-semibold">
                  CPD RECORD NOTE{" "}
                </div>
                <p className="text-slate-800 text-sm mt-1">
                  You may record this activity as 1 hour of continuing
                  competence.
                </p>
              </div>

              <div className="py-4">
                <div className="text-secondary text-sm font-semibold">
                  Law Edge CPD{" "}
                </div>
                <p className="text-slate-800 text-sm mt-1">
                  Practical monthly updates for solicitors
                </p>
              </div>
            </div>

            {[...Array(5)].map((_, i) => (
              <div key={i} className={cn("relative z-0 ")} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
