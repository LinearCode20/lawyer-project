"use client";
import Link from "next/link";
import { useState, useLayoutEffect, Suspense } from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import dynamic from "next/dynamic";

const CPDDocumentModal = dynamic(() => import("./cpd-document-modal"), {
  ssr: false,
});

const PDFDocument = dynamic(() => import("./pdf-document"), {
  ssr: false,
});

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-white" id="home">
      <main className="md:max-w-6xl mx-auto min-h-[80vh] w-full  grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-10 items-center justify-between md:py-20  sm:items-start p-4">
        <div>
          <div className="">
            <h1
              className="text-primary text-[36px] mb-2 font-bold font-serif
 leading-[1.1] md:text-[42px] "
            >
              You do not know which of your current files would withstand scrutiny.
            </h1>
            {/* <p className="text-primary mt-4">You do not know which files.</p> */}

            <p className="text-primary text-lg font-medium leading-relaxed my-6">
              The outcome is determined by what is recorded on the file.
            </p>

            <p className="text-muted-foreground text-base mb-4">
              Non-defensible files are currently progressing across your firm, resulting in legal exposure and direct financial loss across current matters.
            </p>

            <p className="text-primary text-lg font-semibold leading-relaxed mb-3">
              This is based on what is recorded on the file, not what was done.
            </p>
            <p className="text-muted-foreground text-base mb-4">
              This is not a future risk. This is the current file position.
            </p>
            <p className="text-primary text-lg font-semibold leading-relaxed mb-3">
              You cannot identify which files these are.
            </p>
            <p className="text-muted-foreground text-base">
              This cannot be established through internal review.
            </p>
          </div>

          <div className=" flex flex-col gap-4 text-base justify- font-medium sm:flex-row mt-4 ">
            {/* <Link
              href="/#subscribe"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button className="w-full " size="lg" variant={"secondary"}>
                <ArrowDownToLine />
                Get Sample Issue
              </Button>
            </Link> */}
            <Link
              href="/file-review"
              rel="noopener noreferrer"
              // className="w-full"
            >
              <Button
                variant={"outline-secondary"}
                size="lg"
                className="w-full"
              >
                Test File Position
              </Button>
            </Link>
          </div>
          {/* <p className="mt-3 text-primary text-sm  text-gray-400">
            Not just CPD. Built around what actually ends up on the file.
          </p> */}
        </div>

        {/* CPD Document Preview */}
        <div
          className="relative bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group h-full overflow-hidden"
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
          {/* Click to expand overlay */}

          {/* PDF Preview */}
          <div className="relative z-10 bg-gray-50">
            <div className="text-center py-3 ">
              <p className="text-xs text-gray-500 group-hover:text-amber-600 transition-colors font-medium">
                CLICK TO EXPAND
              </p>
            </div>

            <Suspense
              fallback={
                <div className="flex items-center justify-center py-20">
                  <Loader2 className="w-8 h-8 animate-spin text-amber-600" />
                </div>
              }
            >
              <PDFDocument />
            </Suspense>
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
