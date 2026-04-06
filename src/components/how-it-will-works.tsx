import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowDownToLine, ChevronRight } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: 1,
    title: "Receive your monthly update",
    description:
      "Structured CPD updates delivered across your selected practice areas.",
  },
  {
    number: 2,
    title: "Share with your team",
    description:
      "Simple format designed for easy distribution across departments or fee earners.",
  },
  {
    number: 3,
    title: "Maintain your CPD record",
    description:
      "Supports consistent and clear documentation of training across your firm.",
  },
];

export default function HowItWillWorks() {
  return (
    <section className="p-4 py-20 " id="how-it-works">
      <div className="md:max-w-6xl mx-auto ">
        <h2 className="heading text-center">
          How it works
        </h2>

        {/* Three-step horizontal flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <Card className="border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-md">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  {/* Numbered circle */}
                  <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center text-xl font-bold mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold font-serif text-primary mb-4">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>

              {/* Arrow indicator between steps (desktop only) */}
              {/* {index < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center">
                  <ChevronRight className="w-6 h-6 text-secondary" />
                </div>
              )} */}
            </React.Fragment>
          ))}
        </div>

        {/* Reassurance line */}
        <p className="text-center text-primary  mb-6">
          No internal preparation, restructuring, or additional admin required.
        </p>

        {/* Credibility line */}
        <p className="text-center mb-8">
          Each update is written by practitioners working in the relevant practice
          area.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link href="/#subscribe" rel="noopener noreferrer" className="w-full">
            <Button size="lg" className="flex w-full items-center gap-2 " variant={"secondary"}>
              <ArrowDownToLine />
              Download Sample Issue
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
