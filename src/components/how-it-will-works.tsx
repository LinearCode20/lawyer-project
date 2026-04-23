import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowDownToLine, ChevronRight } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: 1,
    title: "Each monthly issue",
    features: [
      "Read in under 30 minutes",
      "Shared across fee earners",
      "Applied to current files",
      "Used as a consistent review standard",
    ],
    description:
      "Each issue is built to be used directly on live matters, across your selected practice areas",
  },
  {
    number: 2,
    title: "This creates",
    features: [
      "A consistent approach across the firm",
      "Clear decisions recorded on file",
      "Reasoning that can be followed",
      "A position that stands up when challenged",
    ],
    description:
      "Used by your team on active files as part of day-to-day work.",
  },
  // {
  //   number: 3,
  //   title: "Record",
  //   description:
  //     "CPD is recorded as part of the work as it is completed, without separate tracking, systems, or additional admin.",
  // },
];

export default function HowItWillWorks() {
  return (
    <section className="p-4 py-13 " id="how-it-works">
      <div className="md:max-w-6xl mx-auto ">
        <h2 className="heading text-center mb-2!">
          How it fits into your work
        </h2>
        <p className="md:w-[60%] mx-auto text-center ">
          This is where most firms first see that the file does not support the
          position.
        </p>
        <p className="md:w-[60%] mx-auto text-center ">
          Used across your team on live matters.
        </p>
        {/* <p className="md:w-[60%] mx-auto text-center mb-16">
          No separate tracking. No additional systems.
        </p> */}

        {/* Three-step horizontal flow */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 max-w-4xl mx-auto ">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="border border-primary/10  transition-all duration-300 hover:shadow-sm "
            >
              <CardContent className=" flex flex-col items-center text-center">
                {/* Numbered circle */}
                {/* <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center text-xl font-bold mb-4">
                  {step.number}
                </div> */}
                <h3 className="text-xl font-semibold font-serif text-primary mb-4">
                  {step.title}
                </h3>
                <ul>
                  {step.features.map((feature, index) => (
                    <li
                      key={index}
                      className="text-sm text-[#6B7280] flex items-start"
                    >
                      <span className="mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Reassurance line */}
        <p className="text-center text-primary  mb-2">
          The work is done. The file proves it
        </p>

        {/* Credibility line */}
        {/* <p className="text-center mb-2">
          Each update is written by practitioners working in the relevant
          practice area.
        </p> */}

        {/* CTA Button */}
        <div className="flex justify-center mb-2 gap-4">
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
              Get Sample Issue
            </Button>
          </Link>
          <Link
            href="/#subscribe"
            rel="noopener noreferrer"
            className="w-full md:w-auto"
          >
            <Button
              size="lg"
              className="flex w-full items-center gap-2 "
              variant={"secondary"}
            >
              Identify Your Non-Defensible Files
            </Button>
          </Link>
        </div>
        <p className="text-center ">
          First month free. No obligation to continue.
        </p>
      </div>
    </section>
  );
}
