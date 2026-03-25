import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { ArrowDownToLine, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-white" id="home">
      <main className="container mx-auto min-h-[80vh] w-full  grid grid-cols-1 md:grid-cols-2 items-center justify-between py-20  sm:items-start p-4">
        <div>
          <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
            <div className=" text-5xl font-semibold font-poppins space-y-4 tracking-tight ">
              <p>CPD you'll actually complete.</p>
              <p>Delivered monthly. </p>
              <p>No effort required.</p>
            </div>
            <p>
              <span className="bg-secondary/20">
                {""} Get 13 hours of SRA-aligned CPD each year,{" "}
              </span>
              broken into simple monthly updates. No searching. No overwhelm.
              Just clear, practical legal updates you can use immediately.
            </p>
            <p className=" font-semibold ">
              Written by practising lawyers. Designed for fast, practical CPD.
            </p>
            <p className="text-gray-400">
              Used by solicitors across the UK, from sole practitioners to
              multi-office firms.
            </p>
            <ul className="space-y-4 pl-4 list-disc">
                <li>Covers key updates in your practice area</li>
                <li>Structured for quick reading and reflection</li>
                <li>Ready for CPD records and audits</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 text-base font-medium sm:flex-row mt-4">
            <Link href={"/#"} rel="noopener noreferrer" className="w-full">
              <Button variant={"secondary"} size="lg" className="w-full"> Start Free Month</Button>
            </Link>
            <Link href="#" rel="noopener noreferrer"  className="w-full">
              <Button className="w-full" size="lg"> 
                <ArrowDownToLine />
                Download Free Sample</Button>
            </Link>
          </div>
          <p className="mt-4 text-sm text-center text-gray-400">Take Less than 2 minutes to get started.</p>
        </div>
        <div></div>
      </main>
    </section>
  );
}
