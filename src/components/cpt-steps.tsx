import React from "react";
import { Card, CardContent } from "./ui/card";

const steps = [
  {
    title: "Support what ends up on the file",
    description:
      "Helps ensure key points are reflected clearly on the file if matters are reviewed later.",
  },
  {
    title: "Reduce internal effort",
    description:
      "Removes the need to source updates, prepare internal training, or manage separate CPD records.",
  },
  {
    title: "Create consistency across teams",
    description: "Keeps teams aligned without adding extra process.",
  },
  {
    title: "Keep things simple",
    description: "Fits into existing workflows without new systems or setup.",
  },
];

export default function CPTSteps() {
  return (
    <section className="p-4 py-13 bg-white" id="how-it-works">
      <div className="md:max-w-6xl mx-auto ">
        <h2 className="heading text-center !mb-4">
          Why firms use it in practice{" "}
        </h2>
        <h6 className="text-xl  text-center">
          Used on live matters, so it’s clear on the file why decisions were
          made.
        </h6>
        <p className=" text-center mb-16 text-muted-foreground">
          No new processes. No internal setup. Used within your team’s existing
          workflow.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="border border-primary/10  transition-all duration-300 hover:shadow-sm max-w-90 md:max-w-auto mx-auto "
            >
              <CardContent className="">
                <h3 className="text-lg font-semibold font-serif text-primary mb-4">
                  {step.title}
                </h3>
                <p className=" text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-muted-foreground text-center">
          Used by firms as a simple alternative to managing CPD internally
        </p>
      </div>
    </section>
  );
}
