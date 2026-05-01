import React from "react";

export default function Problam() {
  return (
    <section className="p-4 py-13 bg-white">
      <div className="md:max-w-6xl mx-auto ">
        <h2 className="heading text-center !mb-4">Where files fail</h2>
        {/* <h6 className="text-xl  text-center">
          When files are looked at later, the issue is rarely the work itself.
        </h6>
        <p className=" text-center mb-8 text-muted-foreground">
          It’s whether the file clearly shows why decisions were made.
        </p> */}

        <p className=" text-center  text-primary font-semibold">
          Across current files:
        </p>
        <div className="flex justify-center items-center">
          <ul className="text-center">
            <li>reasoning is not clearly recorded</li>
            <li>advice is not evidenced</li>
            <li>risks are not identified</li>
            <li>supervision is not visible</li>
            <li>revenue loss is already occurring</li>
          </ul>
        </div>
        <p className=" text-center mt-4 text-muted-foreground">
          The work may have been done.
        </p>
        <p className=" text-center  text-muted-foreground">
          The file does not show it.
        </p>
      </div>
    </section>
  );
}
