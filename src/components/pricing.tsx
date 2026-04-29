import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { text } from "node:stream/consumers";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";

export const pricingCards = [
  {
    id: 1,
    // badge: "FOR INDIVIDUAL",
    title: "1 Area",
    maxAreas: 1,
    price: "£395/month",
    features: [
      "1 practice area",
      "Monthly CPD updates",
      "Built-in CPD record",
      "Firm-wide use",
    ],
    text: "Best for firms starting with one department",
    buttonText: "Start Free Trial",
    footer: "Request More Details",
    isHighlighted: false,
  },
  {
    id: 2,
    badge: "MOST POPULAR",
    maxAreas: 3,
    title: "3 Areas (Most Used)",
    price: "£995/month",
    features: [
      "Up to 3 practice areas ",
      "Monthly updates across selected areas ",
      "Built-in CPD records",
      "Consistent structure across teams",
    ],
    text: "ideal for firms covering multiple practice areas",
    buttonText: "Start Free Trial",
    footer: "Request More Details",
    isHighlighted: true,
  },
  {
    id: 3,
    badge: "FOR FULL COVERAGE",
    title: "Full Coverage",
    price: "£1,795/month",
    maxAreas: Infinity,
    features: [
      "All practice areas",
      "Monthly updates across all areas",
      "Centralised CPD structure",
      "Scalable across the firm",
    ],
    text: "For firms wanting full coverage across departments",
    buttonText: "Start Free Trial",
    footer: "Request More Details",
    isHighlighted: false,
  },
];

export default function Pricing() {
  return (
    <section className="bg-white p-4 py-13">
      <div className="md:max-w-6xl mx-auto">
        <h1 className="heading text-center mb-4!">Simple, flexible pricing</h1>
        <p className="mb-4  text-center">
          Choose the practice areas you need, with a structure that scales
          across your firm.
        </p>
        <div className="max-w-3xl mx-auto mt-12">
          <ul className="space-y-0">
            {pricingCards.map((card, index) => (
              <li
                key={index}
                className={cn("py-8 transition-all duration-200")}
              >
                <div className="flex flex-col items-center space-y-5 text-center">
                  {/* Badge and Title */}
                  <div>
                    {card.badge && (
                      <span
                        className={cn(
                          "inline-block px-3 py-1 text-xs font-semibold tracking-wide uppercase rounded-full mb-3",
                          card.isHighlighted
                            ? "bg-secondary text-white"
                            : "bg-gray-100 text-gray-600",
                        )}
                      >
                        {card.badge}
                      </span>
                    )}
                    <h3 className="text-3xl font-serif font-semibold text-primary mb-2">
                      {card.title}
                    </h3>
                    <p className="text-base text-[#6B7280]">{card.text}</p>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-bold text-[#1F2937]">
                      {card.price}
                    </span>
                    <span className="text-sm text-[#6B7280]">per month</span>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 text-left">
                    {Array.isArray(card.features) ? (
                      card.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-3 text-base text-[#374151]"
                        >
                          <Check
                            className={cn(
                              "w-5 h-5 mt-0.5 shrink-0",
                              card.isHighlighted
                                ? "text-secondary"
                                : "text-gray-400",
                            )}
                          />
                          <span>{feature}</span>
                        </li>
                      ))
                    ) : (
                      <li className="text-base text-[#374151] flex items-start gap-3">
                        <Check className="w-5 h-5 mt-0.5 shrink-0 text-gray-400" />
                        <span>{card.features}</span>
                      </li>
                    )}
                  </ul>

                  {/* Button */}
                  <div className="pt-2">
                    <Link href="/#subscribe" rel="noopener noreferrer">
                      <Button
                        size="lg"
                        variant={"secondary"}
                        className={cn("px-8")}
                      >
                        {card.buttonText}
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Add separator except for last item */}
                {index < pricingCards.length - 1 && (
                  <Separator className="mt-8" />
                )}
              </li>
            ))}
          </ul>
        </div>
        <p className="text-center text-sm mt-8">
          You can add or change practice areas at any time. Most firms use Law
          Edge to replace the time spent sourcing updates and maintaining
          internal CPD records.
        </p>
      </div>
    </section>
  );
}
