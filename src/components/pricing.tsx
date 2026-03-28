import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const pricingCards = [
  {
    badge: "FOR INDIVIDUALS",
    title: "Essential",
    price: "£49/month",
    features: [
      "One practice area",
      "Monthly CPD updates",
      "Structured record keeping",
    ],
    buttonText: "Start Free Month",
    footer: "Best for one solicitor or one focused area",
    isHighlighted: false,
  },
  {
    badge: "MOST POPULAR",
    title: "Professional",
    price: "£99/month",
    features: [
      "Five practice areas",
      "Ideal for growing teams",
      "Broader monthly coverage",
    ],
    buttonText: "Start Free Month",
    footer: "Balanced coverage and value for most firms",
    isHighlighted: true,
  },
  {
    badge: "FOR FULL COVERAGE",
    title: "Complete",
    price: "£149/month",
    features: [
      "All practice areas",
      "Full firm coverage",
      "Maximum ongoing value",
    ],
    buttonText: "Start Free Month",
    footer: "Best for firms wanting complete monthly coverage",
    isHighlighted: false,
  },
];

export default function Pricing() {
  return (
    <section className="p-4 py-20">
      <div className="md:max-w-6xl mx-auto">
        <h1 className="text-3xl  text-primary font-serif mb-4">Simple, transparent pricing</h1>
        <p className="mb-4 mr-20">
          Choose the level of coverage that fits your practice. Clear monthly
          pricing. No hidden extras. First month free.
        </p>
        <div className="flex flex-col md:flex-row  justify-between  mt-12">
          {pricingCards.map((card, index) => (
            <div
              key={index}
              className={`bg-white  min-w-72 rounded-xl shadow-sm`}
            >
              <div
                className={cn(
                  "",
                  card.isHighlighted
                    ? "border-t-4 border-[#D4AF37] shadow-md"
                    : "border border-t-4 border-[#E5E7EB]",
                )}
              />
              {/* Badge */}
              <div className="border-b p-6">
                <div className="">
                  <span
                    className={cn(
                      " uppercase tracking-wide  mb-2 inline-block",
                      card.isHighlighted && "text-secondary",
                    )}
                  >
                    {card.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-serif font-semibold text-primary mb-2">
                  {card.title}
                </h3>

                {/* Price */}
                <p className="text-3xl text-[#1F2937] ">{card.price}</p>
              </div>
              <div className=" p-6">
                {/* Features List */}
                <ul className="space-y-3 mb-6">
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

                {/* Button */}
                <Button variant={"secondary"}>{card.buttonText}</Button>

                {/* Footer */}
                <p className="text-xs italic text-[#6B7280] mt-4 text-center">
                  {card.footer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
