import React from "react";

export default function WhatThisIs() {
  return (
    <section className="p-4 bg-white  py-13  ">
      <div className="md:max-w-6xl mx-auto   ">
        <div>
          <h2 className="heading text-center mb-6!">WHAT THIS IS</h2>
          <p className=" text-center">A file risk management system</p>
          <p className=" text-center mt-4">This is not training.</p>
          <p className=" text-center">This is not guidance.</p>
          <p className=" text-center mt-4">
            This is a standard applied across your files.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
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
          </div>
        </div>
      </div>
    </section>
  );
}
