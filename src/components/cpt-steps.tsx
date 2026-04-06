import React from "react";
import { Card, CardContent } from "./ui/card";

const steps = [
  {
    title: "Save time",
    description:
      "No need to source legal updates, prepare internal training, or manage CPD across multiple fee earners.",
  },
  {
    title: "Reduce internal admin",
    description:
      "Removes the need to organise sessions, chase attendance, or maintain separate training records.",
  },
  {
    title: "Maintain consistency",
    description:
      "Ensures a structured and consistent approach to CPD across teams and practice areas.",
  },
  {
    title: "Support compliance",
    description:
      "Provides clear, documented CPD activity to support ongoing competence and regulatory expectations.",
  },
];

export default function CPTSteps() {
  return (
    <section className="p-4 py-24 bg-white" id="how-it-works">
      <div className="md:max-w-6xl mx-auto ">
        <h2 className="heading text-center">
          Why firms use Law Edge
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-md"
            >
              <CardContent className="p-4">
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
          Used by firms as a simple alternative to managing CPD internally.
        </p>
      </div>
    </section>
  );
}
