import React from "react";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";
import { Button } from "./ui/button";
const steps = [
  {
    title: "Key issues",
    features: [
      "decisions are not clearly ",
      "advice is not evidenced",
      "reasoning is missing",
      "risk is not consistently identified",
      "supervision is not visible on the file",
    ],
    info: "The work may have been completed.",
    description: "The file does not demonstrate it.",
  },
  {
    title: "When files are tested",
    features: [
      "applications fail",
      "claims arise",
      "costs are paid",
      "positions are lost",
    ],
    info: "This is not a failure of weaker firms.",
    description:
      "It is present in well-run firms where the file still does not support the position.",
  },
];

export default function CPTSteps() {
  return (
    <section className="p-4 py-13 bg-white">
      <div className="md:max-w-6xl mx-auto ">
        <h2 className="heading text-center mb-4!">Current file position</h2>
        <h6 className="text-xl  text-center">
          You do not know which of your current files are defensible.
        </h6>
        <p className=" text-center mb-4 text-muted-foreground">
          When tested, the file is the only evidence considered.
        </p>
        <p className=" text-center mb-4 text-muted-foreground">
          If the file does not clearly record the advice, reasoning and
          decision, the position is not defensible.{" "}
        </p>
        <p className=" text-center mb-4 text-muted-foreground">
          This must now be tested across your current files.
        </p>
        <div className=" flex flex-col gap-4 text-base justify-center font-medium sm:flex-row mt-4 ">
          <Link
            href="/file-review"
            rel="noopener noreferrer"
            // className="w-full"
          >
            <Button
              variant={"outline-secondary"}
              size="lg"
              className="w-full px-14"
            >
              Test Your Current File Position
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
