import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { text } from "node:stream/consumers";
import Link from "next/link";

export const pricingCards = [
  {
    // badge: "FOR INDIVIDUAL",
    title: "Single Practice Area",
    price: "£195/month",
    features: [
      "1 practice area",
      "Monthly CPD updates",
      "Built-in CPD record",
      "Firm-wide use",
    ],
    text: "Best for firms starting with one department",
    buttonText: "Start your free trial",
    footer: "Request More Details",
    isHighlighted: false,
  },
  {
    badge: "MOST POPULAR",
    title: "Multi-Area Access",
    price: "£295/month",
    features: [
      "Up to 3 practice areas ",
      "Monthly updates across selected areas ",
      "Built-in CPD records",
      "Consistent structure across teams",
    ],
    text: "ideal for firms covering multiple practice areas",
    buttonText: "Start your free trial",
    footer: "Request More Details",
    isHighlighted: true,
  },
  {
    badge: "FOR FULL COVERAGE",
    title: "Full Access",
    price: "£395/month",
    features: [
      "All practice areas",
      "Monthly updates across all areas",
      "Centralised CPD structure",
      "Scalable across the firm",
    ],
    text: "For firms wanting full coverage across departments",
    buttonText: "Start your free trial",
    footer: "Request More Details",
    isHighlighted: false,
  },
];

export default function Pricing() {
  return (
    <section className="bg-white p-4 py-32">
      <div className="md:max-w-6xl mx-auto">
        <h1 className="heading text-center mb-4!">Simple, flexible pricing</h1>
        <p className="mb-4  text-center">
          Choose the practice areas you need, with a structure that scales
          across your firm.
        </p>
        <div className="flex flex-col flex-nowrap sm:flex-row sm:items-stretch gap-6 sm:gap-8 justify-center mt-12">
          {pricingCards.map((card, index) => (
            <div
              key={index}
              className={cn(
                `bg-white flex-1 rounded-xl shadow-sm flex flex-col h-full border-2 border-t-6`,
                card.isHighlighted &&
                  "border-2 border-t-6 border-[#D4AF37] shadow-md",
              )}
            >
              {/* <div
                className={cn(
                  "",
                  card.isHighlighted
                    ? "border-t-4 border-[#D4AF37] shadow-md"
                    : "border border-t-4 border-[#E5E7EB]",
                )}
              /> */}
              {/* Badge */}

              <div
                className={cn(
                  "border-b p-6",
                  card.isHighlighted && "border-b-[#D4AF37]",
                )}
              >
                {card.badge && (
                  <div className="">
                    <span
                      className={cn(
                        " uppercase tracking-wide text-sm  mb-2 inline-block",
                        card.isHighlighted && "text-secondary",
                      )}
                    >
                      {card.badge}
                    </span>
                  </div>
                )}
                {/* Title */}

                <h3 className="text-2xl font-serif font-semibold text-primary mb-2">
                  {card.title}
                </h3>
                <p className="text-xs italic text-[#6B7280] mb-4  ">
                  {card.text}
                </p>

                {/* Price */}
                <p className="text-3xl text-[#1F2937] ">From {card.price}</p>
              </div>

              <div className=" p-6 flex flex-col flex-1 ">
                {/* Features List */}
                <div className="flex-1">
                  {Array.isArray(card.features) ? (
                    <ul className="flex-1 space-y-3 mb-6 min-h-40">
                      {card.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="text-sm text-[#6B7280] flex items-start"
                        >
                          <span className="mr-2">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm flex-1 text-[#6B7280] mb-6">
                      {card.features}
                    </p>
                  )}
                </div>
                {/* Button */}
                <div>
                  <Link
                    href="/#subscribe"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button size="lg" variant={"secondary"} className="w-full">
                      Start your free trial
                    </Button>
                  </Link>
                  {/* Footer */}
                </div>
                <p className="text-xs italic text-[#6B7280] mt-4 text-center">
                  You can add or change practice areas at any time
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-sm mt-4">
          You can add or change practice areas at any time.
        </p>
        <p className="text-center text-sm mt-4">
          Most firms use Law Edge to replace the time spent sourcing updates and
          maintaining internal CPD records.
        </p>
        <p className="text-center text-sm mt-4">
          A simple, predictable way to manage CPD across multiple teams.
        </p>
      </div>
    </section>
  );
}
