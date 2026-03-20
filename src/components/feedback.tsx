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
      "Perfect for Monday mornings. Fifteen minutes to get on top of changes, an hour logged by the end of the week.",
    author_title: "Partner, Litigation",
  },
  {
    quote:
      "Clear, practical, and properly referenced. Our trainees and seniors both use it.",
    author_title: "Head of Employment",
  },
  {
    quote:
      "The areas bundle replaced three different subscriptions and saved us admin time.",
    author_title: "Operations Manager",
  },
  {
    quote:
      "Consistent, reliable updates that help us brief fee earners quickly without chasing multiple sources.",
    author_title: "Director, Corporate Team",
  },
  {
    quote:
      "Exactly the right level of detail, concise but meaningful, and always well supported.",
    author_title: "Senior Associate, Immigration",
  },
  {
    quote:
      "Client meetings are easier now. The summaries help me prepare in minutes instead of hours.",
    author_title: "Solicitor, Family Law",
  },
  {
    quote:
      "Excellent coverage across all key areas. Ideal for small firms wanting consistent CPD.",
    author_title: "Principal Solicitor, High Street Firm",
  },
  {
    quote:
      "The CPD worksheets make compliance straightforward. No more scrambling at year end.",
    author_title: "Compliance Manager",
  },
  {
    quote:
      "My team genuinely reads these. It cuts through noise and focuses on what matters in practice.",
    author_title: "Head of Dispute Resolution",
  },
];

export default function Feedback() {
  return (
    <section className="p-4 py-20 ">
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold mb-4">What Practitioners say</h1>
        <div className="flex flex-wrap gap-6 w-full justify-start">
          {testimonials.map((plan, index) => (
            <Card
              key={index}
              className="flex-1 min-w-70 max-w-[23rem] flex flex-col transition-all duration-300 hover:shadow-[0_0_20px_rgba(26,54,93,0.6),0_0_40px_rgba(26,54,93,0.4)] hover:scale-105 hover:brightness-110 cursor-pointer"
            >
              <CardContent className="flex-1">
                <p className="">"{plan.quote}"</p>
                <p className="mt-4 font-bold">{plan.author_title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className=" mt-4 md:flex justify-evenly gap-2 w-full">
          <Button className="w-1/2">Subscribe for free </Button>
          <Button className="grow" variant="secondary">
            <Download /> Download free sample
          </Button>
        </div>
      </div>
    </section>
  );
}
