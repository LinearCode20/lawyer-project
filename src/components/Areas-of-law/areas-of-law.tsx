"use client";
import { useState } from "react";
import { ChevronRight, Minus, MoveRight, Plus } from "lucide-react";
import Link from "next/link";
import { AreaOfLaw, areaOfLaw } from "@/app/law-area/[slug]/data";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

export default function AreasOfLaw() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number | null) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <ul className="bg-white">
      {areaOfLaw.map((area, index) => (
        <li
          key={index}
          className=" relative border border-gray-300 hover:bg-[#fbfbfb]"
        >
          <div
            className="flex z-10 justify-between p-6 py-8 items-center cursor-pointer "
            onClick={() => toggleItem(index)}
          >
            <span className="font-semibold text-primary">{area.title}</span>
            <span className="text-secondary">
              {" "}
              {openIndex === index ? (
                <Minus size={16} />
              ) : (
                <Plus size={16} />
              )}{" "}
            </span>
          </div>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  height: { duration: 0.4, ease: "easeInOut" },
                  opacity: { duration: 0.25, ease: "easeOut" },
                }}
              >
                <ItemData area={area} />
              </motion.div>
            )}
          </AnimatePresence>
        </li>
      ))}
    </ul>
  );
}

const ItemData = ({ area }: { area: AreaOfLaw }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={"m-6 p-4 bg-[#fbfbfe] rounded-lg border "}>
      <p className="text-gray-600 mb-4">{area.answer}</p>
      <div className="flex flex-wrap gap-3">
        {area.tags?.map((tag, index) => (
          <p
            key={index}
            className="text-slate-500 bg-[#f3f5f7] text-xs rounded-full px-2 py-1"
          >
            {tag}
          </p>
        ))}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.4, ease: "easeInOut" },
              opacity: { duration: 0.25, ease: "easeOut" },
            }}
          >
            <div className="bg-accent rounded-lg border p-6 space-y-4 mt-4">
              <div className="flex justify-between items-start">
                <p className="text-secondary">AREA SNAPSHOT</p>
                <div className="-mt-8">
                  <img
                    src="/logo.png"
                    alt="LAW EDGE"
                    className="h-24 aspect-video object-contain rounded-md"
                  />
                </div>
              </div>
              <h1 className="text-2xl font-semibold text-primary font-serif">{area.title}</h1>
              <p className="text-slate-500">{area.discriptions}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <span
        className="mt-4 text-sm font-semibold inline-flex items-center gap-1 text-primary font-medium  hover:gap-2 transition-all duration-300 relative group cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {!isOpen ? "Read More" : "Read Less"}
        <MoveRight
          className={cn("duration-300 ease-in-out ", isOpen && "rotate-90")}
          size={16}
        />
        <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-primary transition-all duration-300 group-hover:w-full"></span>
      </span>
    </div>
  );
};
