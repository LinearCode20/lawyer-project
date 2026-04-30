"use client";
import React, { useEffect, useState, Suspense } from "react";
import { X, Loader2 } from "lucide-react";
import dynamic from "next/dynamic";

const PDFViewer = dynamic(() => import("./pdf-viewer"), {
  ssr: false,
});

interface CPDDocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CPDDocumentModal({
  isOpen,
  onClose,
}: CPDDocumentModalProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = (err: string) => {
    setError(err);
    setIsLoading(false);
  };

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
        className="relative bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col"
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

        {/* PDF Viewer */}
        <div className="flex-1 overflow-auto p-4 bg-gray-50">
          {error && (
            <div className="flex items-center justify-center h-full">
              <div className="text-center text-red-600">
                <p className="font-medium">Failed to load PDF</p>
                <p className="text-sm mt-2">{error}</p>
              </div>
            </div>
          )}

          {!error && (
            <div className="flex flex-col items-center justify-center tw-max-h-full tw-overflow-y-auto gap-6">
              <Suspense
                fallback={
                  <div className="flex items-center justify-center py-20">
                    <Loader2 className="w-8 h-8 animate-spin text-amber-600" />
                  </div>
                }
              >
                <PDFViewer
                  onNumPagesChange={setNumPages}
                  onLoad={handleLoad}
                  onError={handleError}
                />
              </Suspense>

              {/* Page count indicator */}
              {!isLoading && !error && numPages > 0 && (
                <div className="text-center text-sm text-gray-600 pb-4">
                  Total pages: {numPages}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
