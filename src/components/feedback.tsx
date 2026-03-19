import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const testimonials = [
  {
    quote:
      "Perfect for Monday mornings. Fifteen minutes to get on top of changes, an hour logged by the end of the week.",
    author_title: "Partner",
    author_department: "Litigation",
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
    author_title: "Director",
    author_department: "Corporate Team",
  },
  {
    quote:
      "Exactly the right level of detail, concise but meaningful, and always well supported.",
    author_title: "Senior Associate",
    author_department: "Immigration",
  },
  {
    quote:
      "Client meetings are easier now. The summaries help me prepare in minutes instead of hours.",
    author_title: "Solicitor",
    author_department: "Family Law",
  },
  {
    quote:
      "Excellent coverage across all key areas. Ideal for small firms wanting consistent CPD.",
    author_title: "Principal Solicitor",
    author_department: "High Street Firm",
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
    <section className="p-4 py-20" id="pricing">
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold mb-4">Pricing Plans</h1>
        <div className="flex flex-wrap gap-6 w-full justify-center">
          {testimonials.map((plan, index) => (
            <Card
              key={index}
              className="flex-1 min-w-70 max-w-sm flex flex-col"
            >
              <CardContent className="flex-1">
                <div className="text-3xl font-bold">
                  {plan.currency}
                  {plan.price}
                  <span className="text-base font-normal text-gray-600">
                    /{plan.period}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
