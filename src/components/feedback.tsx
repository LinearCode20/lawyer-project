import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

const testimonials = [
  {
    quote:
      "This saves me several hours each month. Our litigation team uses it consistently, it removes the need to search across multiple sources, and completion is materially higher than our previous CPD approach.",
    role: "Partner, Litigation",
    firm_type: "Legal 500 firm",
  },
  {
    quote:
      "We now use this across the employment team each month. It keeps fee earners aligned, cuts research time, and gives us a clearer record of what has actually been completed.",
    role: "Head of Employment",
    firm_type: "Regional multi-office firm",
  },
  {
    quote:
      "It has reduced internal CPD admin significantly. More people read it, fewer people need to look elsewhere, and completion is much more consistent across the firm.",
    role: "Practice Manager",
    firm_type: "Multi-office practice",
  },
  {
    quote:
      "We introduced this across our corporate team and immediately reduced time spent sourcing updates. It has standardised how our team approaches CPD each month.",
    role: "Corporate Partner",
    firm_type: "City firm",
  },
  {
    quote:
      "The structure is what makes this work. Fee earners actually complete it, and from a supervision perspective it gives clear evidence of ongoing competence.",
    role: "Head of Department",
    firm_type: "Regional firm",
  },
  {
    quote:
      "Previously CPD was inconsistent across the firm. This has created a simple monthly system that people follow without chasing.",
    role: "Managing Partner",
    firm_type: "High street firm",
  },
];

export default function Feedback() {
  return (
    <section className="p-4 py-13 " id="testimonials">
      <div className="md:max-w-6xl mx-auto">
        <h1 className="heading text-center  mb-4!">What Practitioners say</h1>
        <p className="md:w-[60%] mx-auto text-center">
          Used by solicitors, department heads, and firms that want practical
          monthly CPD their teams will actually read and complete.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-12">
          {testimonials.map((plan, index) => (
            <Card
              key={index}
              className="h-full text-foreground flex flex-col  shadow-md   cursor-pointer border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-sm hover:transform hover:-translate-y-px"
            >
              <CardContent className="flex-1 flex flex-col justify-between p-6">
                <p className="flex-1">&ldquo;{plan.quote}&rdquo;</p>
                <div>
                  <p className="mt-4 text-sm font-bold text-primary">
                    {plan.role}
                  </p>
                  <p className="text-secondary text-base">{plan.firm_type}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
