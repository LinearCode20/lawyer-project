"use client";

import React, { useState } from "react";
import { Card } from "./ui/card";
import { faq } from "@/app/faq/data";
import { Minus, Plus } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number | null) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 p-4" id="faq">
      <div className=" mx-auto">
        <h1 className="text-3xl font-semibold mb-8 text-primary font-serif ">
          Common Questions before subscribing
        </h1>
        <Card className="p-0 rounded-sm">
          <ul>
            {faq.map((area, index) => (
              <li key={index} className=" border relative hover:bg-gray-100">
                <div
                  className="flex justify-between z-10 items-center cursor-pointer p-4 py-8 "
                  onClick={() => toggleItem(index)}
                >
                  <span className="font-semibold text-base">{area.title}</span>
                  <span className="text-secondary">
                    {openIndex === index ? (
                      <Minus size={16} />
                    ) : (
                      <Plus size={16} />
                    )}
                  </span>
                </div>

                <div
                  className={`overflow-hiddentransition-all duration-300 ${
                    openIndex === index
                      ? "h-auto opacity-100 mt-2   p-6 "
                      : "h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600">{area.answer}</p>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}
