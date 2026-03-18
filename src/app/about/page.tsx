"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function Page() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number | null) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" py-20 bg-accent  grow">
      <div className="container mx-auto ">
        <h1 className="text-3xl font-semibold mb-4 text-center">About Us</h1>
        <p>
          Compiled by practitioners for practitioners.{" "}
          <span className="text-bold">
            The original one-hour CPD built for busy lawyers.
          </span>
        </p>{" "}
        <br></br>
        <p>
          Law Edge was created to help you keep up with legal change without
          losing hours each week. Every issue is written and edited by
          experienced solicitors and subject matter experts. We translate
          complex updates into clear actions you can apply immediately.
        </p>{" "}
        <br></br>
        <p>
          Each update is sourced, cited, and distilled. We focus on what the law
          means for your files, your clients, and your billing targets.
          Reflection prompts and logging templates help you capture CPD evidence
          effortlessly.
        </p>
      </div>
    </section>
  );
}
