"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faq } from "./data";
import { Card } from "@/components/ui/card";

export default function Page() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number | null) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="grow">
      <section className="py-20">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold mb-8 ">
            Frequently Asked Questions
          </h1>
          <Card className="p-0 rounded-4xl">
            <ul>
              {faq.map((area, index) => (
                <li key={index} className="p-3 border-b border-gray-300">
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleItem(index)}
                  >
                    <span className="font-semibold">{area.title}</span>
                    <span>
                      {" "}
                      {openIndex === index ? (
                        <Minus size={16} />
                      ) : (
                        <Plus size={16} />
                      )}{" "}
                    </span>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index
                        ? "max-h-40 opacity-100 mt-2"
                        : "max-h-0 opacity-0"
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
    </div>
  );
}
