import React from "react";

export default function WhatThisIs() {
  return (
    <section className="p-4 bg-white  py-13  ">
      <div className="md:max-w-6xl mx-auto   ">
        <div>
          <h2 className="heading text-center mb-6!">What Law Edge is</h2>
          <p className=" text-center">
            Law Edge is a file risk management system applied across live
            matters.
          </p>
          <p className=" text-center mt-4">It is not general CPD.</p>
          <p className=" text-center">It is not training.</p>
          <p className=" text-center ">It is not commentary.</p>
          <p className=" text-center mt-4">It tests whether the file supports the position being advanced.</p>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="flex flex-col justify-center items-center">
              <p className="font-semibold mb-4">Each issue:</p>
              <ul>
                <li>is used on live matters</li>
                <li>sets how the file should record the position</li>
                <li>shows what fails and what is defensible</li>
                <li>is applied consistently across fee earners</li>
              </ul>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="font-semibold mb-4">
                Applied across key practice areas including:
              </p>
              <ul>
                <li>private client</li>
                <li>litigation</li>
                <li>property</li>
                <li>commercial work</li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
