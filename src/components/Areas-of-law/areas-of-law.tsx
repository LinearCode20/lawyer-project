"use client";
import { useState } from "react";
import { ChevronRight, Minus, Plus } from "lucide-react";
import Link from "next/link";
import { areaOfLaw } from "@/app/law-area/[slug]/data";

export default function AreasOfLaw() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number | null) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <ul>
      {areaOfLaw.map((area, index) => (
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
            <p className="text-gray-600">
              {area.answer}

              <Link
                href={`${area.link}`}
                className="ml-2 inline-flex items-center gap-1 text-blue-600 font-medium hover:text-blue-800 hover:gap-2 transition-all duration-300 relative group"
              >
                Read More
                <ChevronRight />
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-blue-800 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
