"use client";
import { useState } from "react";
import { ChevronRight, Minus, MoveRight, Plus } from "lucide-react";
import Link from "next/link";
import { AreaOfLaw, areaOfLaw } from "@/app/law-area/[slug]/data";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "../ui/card";

// Helper function to wrap & in span with font-sans
const processTitle = (title: string) => {
  if (title.includes("&")) {
    const parts = title.split(/(&)/);
    return (
      <>
        {parts.map((part, index) =>
          part === "&" ? (
            <span key={index} className="font-sans">
              {part}
            </span>
          ) : (
            <span key={index}>{part}</span>
          ),
        )}
      </>
    );
  }
  return title;
};

export default function AreasOfLaw() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number | null) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 rounded-lg">
      {areaOfLaw.map((area, index) => (
        <Card
          key={index}
          className=" relative  border bg-background  hover:bg-[#fbfbfb] border-primary/10 hover:border-primary/30 
          transition-all duration-300 hover:shadow-sm hover:transform hover:-translate-y-px "
        >
          <CardContent className="p-4">
            <span className="inline-block w-8 bg-secondary h-0.5 mb-1" />
            <p className="sub_heading font-sans">{processTitle(area.title)}</p>
            <p className="text-card-foreground mt-4">{area.answer}</p>
            {/* <ItemData area={area} /> */}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

const ItemData = ({ area }: { area: AreaOfLaw }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={" mt-4 p-4 bg-[#fbfbfe] rounded-lg border "}>
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
              {/* <h1 className="text-lg font-semibold text-primary font-serif">
                {area.title}
              </h1> */}
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
