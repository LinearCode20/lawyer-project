import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowDownToLine, ChevronRight } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: 1,
    title: "Test current files",
    description:
      "Live files are reviewed against a defined defensibility standard.",
  },
  {
    number: 2,
    title: "Identify exposure",
    description:
      "Files are classified as defensible, at-risk or non-defensible.",
  },
  {
    number: 3,
    title: "Apply ongoing control",
    description: "Monthly file risk issues stop the same failures continuing.",
  },
];

export default function HowItWillWorks() {
  return (
    <section className="p-4 py-13 " id="how-it-works">
      <div className="md:max-w-6xl mx-auto ">
        <h2 className="heading text-center mb-2!">How it works</h2>
        {/* <p className="md:w-[60%] mx-auto text-center mb-16">
          Simple to introduce. Used within your team’s existing workflow.
        </p> */}

        {/* Three-step horizontal flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 mt-16 gap-4 mb-12 max-w-4xl mx-auto ">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="border border-primary/10  transition-all duration-300 hover:shadow-sm max-w-90 md:max-w-auto mx-auto"
            >
              <CardContent className=" flex flex-col items-center text-center">
                {/* Numbered circle */}
                {/* <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center text-xl font-bold mb-4">
                  {step.number}
                </div> */}
                <h3 className="text-2xl font-semibold font-serif text-primary mb-4">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Reassurance line
        <p className="text-center text-primary  mb-2">
          No internal preparation, restructuring, or additional admin required.
        </p>

         Credibility line */}
        {/* <p className="text-center mb-2">
          Each update is written by practitioners working in the relevant
          practice area.
        </p> */}

        {/* CTA Button */}
        <div className="flex justify-center mb-2">
          <Link
            href="/#subscribe"
            rel="noopener noreferrer"
            className="w-full md:w-auto"
          >
            <Button
              size="lg"
              className="flex w-full items-center gap-2 "
              variant={"outline-secondary"}
            >
              <ArrowDownToLine />
              Test Your Current File Position
            </Button>
          </Link>
        </div>
        {/* <p className="text-center ">
          First month free. No obligation to continue.
        </p> */}
      </div>
    </section>
  );
}
