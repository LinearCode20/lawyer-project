"use client";
import { useState, useLayoutEffect } from "react";
import { Loader2 } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

export default function PDFDocument() {
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
  }, []);

  const onDocumentLoadSuccess = () => {
    setIsLoading(false);
  };

  return (
    <Document
      file="/pdf/Law Edge Sample Issue copy.pdf"
      onLoadSuccess={onDocumentLoadSuccess}
      loading={
        <div className="flex items-center justify-center py-20">
          <Loader2 className="w-8 h-8 animate-spin text-amber-600" />
        </div>
      }
      className="flex justify-center w-full"
    >
      <Page
        pageNumber={1}
        renderTextLayer={true}
        renderAnnotationLayer={true}
        width={400}
        className="shadow-md"
      />
    </Document>
  );
}
