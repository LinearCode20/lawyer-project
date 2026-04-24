import React from "react";

export default function WhatHappened() {
  return (
    <section className="p-4 py-13 bg-white">
      <div className="md:max-w-6xl mx-auto ">
        <h2 className="heading text-center !mb-4">
          WHAT HAPPENS WHEN THE FILE IS CHALLENGED
        </h2>
        <h6 className="text-xl  text-center">
          When a file is tested, the court or reviewer looks only at the record.
        </h6>

        <p className=" text-center  text-muted-foreground">
          If the position is not shown
        </p>
        <div className="flex justify-center items-center">
          <ul className=" list-disc pl-4">
            <li>It is not defended</li>
            <li>Applications fail</li>
            <li>Claims arise</li>
            <li>Matters are settled</li>
          </ul>
        </div>

        <p className=" text-center  text-muted-foreground">
          This is where firms lose hundreds or thousands on matters they
          expected to defend.
        </p>
      </div>
    </section>
  );
}
