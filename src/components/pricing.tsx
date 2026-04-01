import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { text } from "node:stream/consumers";

export const pricingCards = [
  {
    badge: "FOR INDIVIDUALS",
    title: "Starter",
    price: "£195/month",
    features: [
      "Monthly CPD update",
      "Key developments",
      "Case summaries",
      "Estimated CPD time",
    ],
    text: "Suitable for firms wanting straightforward, structured updates",
    buttonText: "Start Free Month",
    footer: "Request More Details",
    isHighlighted: false,
  },
  {
    badge: "MOST POPULAR",
    title: "Professional",
    price: "£295/month",
    features: [
      "Includes everything in Starter",
      "Practical commentary",
      "Client impact insights",
      "Action points",
      "CPD log support",
    ],
    text: "For firms wanting practical guidance and structure. Designed to reduce time and help fee earners identify what matters and what action to take",
    buttonText: "Start Free Month",
    footer: "Request More Details",
    isHighlighted: true,
  },
  {
    badge: "FOR FULL COVERAGE",
    title: "Complete",
    price: "£395/month",
    features:
      "Includes everything in Professional plus compliance updates, risk alerts, tools and priority support",

    buttonText: "Start Free Month",
    footer: "Reguirst More Details",
    isHighlighted: false,
  },
];

export default function Pricing() {
  return (
    <section className="p-4 py-20">
      <div className="md:max-w-6xl mx-auto">
        <h1 className="text-3xl  text-primary font-serif mb-4">
          Simple, transparent pricing
        </h1>
        <p className="mb-4 mr-20">
          Choose the level of coverage that fits your practice. Clear monthly
          pricing. No hidden extras. First month free.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4  justify-between  mt-12">
          {pricingCards.map((card, index) => (
            <div
              key={index}
              className={`bg-white  max-w-72 rounded-xl shadow-sm flex flex-col`}
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
              <div className=" p-6 flex flex-col flex-1 ">
                {/* Features List */}
                <div className="flex-1">
                  <p className="text-xs italic text-[#6B7280] mb-4  ">
                    {card.text}
                  </p>
                  {Array.isArray(card.features) ? (
                    <ul className="grow space-y-3 mb-6">
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
                  <p className="text-xs italic text-[#6B7280] mb-4 text-center">
                    {card.footer}
                  </p>
                  <Button variant={"secondary"} className="w-full">
                    {card.buttonText}
                  </Button>

                  {/* Footer */}
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-sm mt-4">
          Pricing aligned with firm size. No long-term contracts. Cancel
          anytime.
        </p>
        <p className="text-center text-sm">Written by qualified and experienced legal professional</p>
      </div>
    </section>
  );
}
