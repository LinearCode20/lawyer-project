import React from "react";
import { Card, CardContent } from "./ui/card";
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
    <section className="p-4 py-13 bg-white" >
      <div className="md:max-w-6xl mx-auto ">
        <h2 className="heading text-center mb-4!">WHAT’S WRONG WITH YOUR FILES</h2>
        <h6 className="text-xl  text-center">Across your current matters</h6>
        <p className=" text-center mb-16 text-muted-foreground">
          Files do not consistently evidence the work undertaken.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="border border-primary/10  transition-all duration-300 hover:shadow-sm  "
            >
              <CardContent className=" flex flex-col justify-between">
                <div>
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
                </div>
                <div>
                  <p className=" text-muted-foreground leading-relaxed mt-4">
                    {step.info}
                  </p>
                  <p className=" text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
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
