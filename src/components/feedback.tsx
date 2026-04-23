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
      "We started using Law Edge to bring more consistency across the firm.When applied to live files, it became clear that some positions were not properly recorded and would not have been capable of being defended if challenged.",
    role: "Partner",
    firm_type: "Legal 500 firm",
  },
  {
    quote:
      "We distribute the monthly issue across all fee earners and use it when reviewing files.It has highlighted where decisions were made but not clearly evidenced on the file, and in some cases would not have been capable of being defended if challenged.",
    role: "Head of Department",
    firm_type: "Regional multi-office firm",
  },
  {
    quote:
      "We are using Law Edge across private client, property, and litigation.These were areas where we had concerns about file standards.Applying this has shown where the file does not support the position when tested.",
    role: "Practice Manager",
    firm_type: "Multi-office practice",
  },
  // {
  //   quote:
  //     "We introduced this across our corporate team and immediately reduced time spent sourcing updates. It has standardised how our team approaches CPD each month.",
  //   role: "Corporate Partner",
  //   firm_type: "City firm",
  // },
  // {
  //   quote:
  //     "The structure is what makes this work. Fee earners actually complete it, and from a supervision perspective it gives clear evidence of ongoing competence.",
  //   role: "Head of Department",
  //   firm_type: "Regional firm",
  // },
  // {
  //   quote:
  //     "Previously CPD was inconsistent across the firm. This has created a simple monthly system, and it is much clearer on the file what has been considered and why.",
  //   role: "Managing Partner",
  //   firm_type: "High street firm",
  // },
];

export default function Feedback() {
  return (
    <section className="p-4 py-13 " id="testimonials">
      <div className="md:max-w-6xl mx-auto">
        <h1 className="heading text-center  mb-4!">What firms are saying </h1>
        <p className="md:w-[60%] mx-auto text-center">
          Used by solicitors and firms to keep files clear, consistent and
          defensible across live matters.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-12">
          {testimonials.map((plan, index) => (
            <Card
              key={index}
              className="h-full text-foreground flex flex-col     cursor-pointer border border-primary/10  transition-all duration-300 hover:shadow-sm"
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

        <p className="md:w-[60%] mt-4 mx-auto text-center">
          Most firms only see this when a file is challenged. At that point, it
          is too late to correct it.
        </p>
      </div>
    </section>
  );
}
