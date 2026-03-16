"use client";
import { useState } from "react";
import { areaOfLaw } from "./data";
import { Minus, Plus } from "lucide-react";

export default function AreasOfLaw() {
    const [openIndex, setOpenIndex] = useState(null);
    
    const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    };

  return (
      <ul>
            {areaOfLaw.map((area, index) => (
              <li key={index} className="p-2 border-b border-gray-300">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleItem(index)}
                >
                  <span>{area.title}</span>
                  <span> {openIndex === index ? ( <Minus size={16} /> ) : ( <Plus size={16} /> )} </span>
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
  );
}
