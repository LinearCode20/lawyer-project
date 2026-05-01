"use client";
import { useState, useLayoutEffect } from "react";
import { Loader2 } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

interface PDFViewerProps {
  onNumPagesChange: (numPages: number) => void;
  onLoad: () => void;
  onError: (error: string) => void;
}

export default function PDFViewer({ onNumPagesChange, onLoad, onError }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);
  

  useLayoutEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
  }, []);

  const onDocumentLoadSuccess = ({ numPages: nextNumPages }: { numPages: number }) => {
    setNumPages(nextNumPages);
    onNumPagesChange(nextNumPages);
    onLoad();
  };

  const onDocumentLoadError = (err: Error) => {
    onError("Failed to load PDF document");
    console.error("PDF load error:", err);
  };

  return (
    <Document
      file="/pdf/Law Edge Sample Issue copy.pdf"
      onLoadSuccess={onDocumentLoadSuccess}
      onLoadError={onDocumentLoadError}
      loading={
        <div className="flex items-center justify-center py-20">
          <Loader2 className="w-8 h-8 animate-spin text-amber-600" />
        </div>
      }
    >
      {numPages > 0 && (
        <div key="page_1" className="mb-6 shadow-lg">
          <Page
            pageNumber={1}
            renderTextLayer={true}
            renderAnnotationLayer={true}
            className="max-w-full"
          />
        </div>
      )}
    </Document>
  );
}
