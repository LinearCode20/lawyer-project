import React from "react";

export default function WhatHappened() {
  return (
    <section className="p-4 py-13 bg-white">
      <div className="md:max-w-6xl mx-auto ">
        <h2 className="heading text-center !mb-4">
          When the File Is Challenged
        </h2>
        <h6 className="text-xl  text-center">
          When tested, only the file is considered.
        </h6>

        <p className=" text-center  text-muted-foreground mt-8">
          If the position is not recorded:
        </p>
        <div className="flex justify-center items-center">
          <ul className=" list-disc pl-4">
            <li>it cannot be defended</li>
            <li>the matter is settled below value</li>
            <li>the firm takes the loss</li>
          </ul>
        </div>

        <p className=" text-center  text-muted-foreground mt-8">
          This is where firms lose hundreds or thousands on matters they
          expected to defend.
        </p>
      </div>
    </section>
  );
}
