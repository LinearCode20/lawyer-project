import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

export default function Assess() {
  return (
    <section className="p-4 py-13 bg-white">
      <div className="md:max-w-6xl mx-auto ">
        <h2 className="heading text-center !mb-4">
          Assess your current file position
        </h2>
        <h6 className="text-xl  text-center">
          A structured review of live files against the Law Edge standard.
        </h6>
        <p className=" text-center mb-2 text-muted-foreground">
          It’s whether the file clearly shows why decisions were made.
        </p>

        <p className=" text-center  text-primary font-semibold">This identifies:</p>
        <div className="flex justify-center items-center">
          <ul className="  text-center">
            <li>Defensible files</li>
            <li>At-risk files</li>
            <li>Non-defensible files</li>
          </ul>
        </div>
        <p className=" text-center mt-2 text-muted-foreground">
          This shows exactly which of your current files cannot be defended.
        </p>
        <p className=" text-center  text-muted-foreground">
          This reflects how files are assessed in a claim, audit, or challenge.
        </p>
        {/* CTA Button */}
        <div className="flex justify-center mt-4 gap-4">
          <Link
            href="/file-review"
            rel="noopener noreferrer"
            className="w-full md:w-auto"
          >
            <Button
              size="lg"
              className="flex w-full items-center gap-2 px-14 "
              variant={"outline-secondary"}
            >
              Test Current File Position
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
