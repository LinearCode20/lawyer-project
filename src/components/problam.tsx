import React from "react";

export default function Problam() {
  return (
    <section className="p-4 py-13 bg-white">
      <div className="md:max-w-6xl mx-auto ">
        <h2 className="heading text-center !mb-4">
          Where things tend to come apart{" "}
        </h2>
        <h6 className="text-xl  text-center">
          When files are looked at later, the issue is rarely the work itself.
        </h6>
        <p className=" text-center mb-8 text-muted-foreground">
          It’s whether the file clearly shows why decisions were made.
        </p>

        <p className=" text-center  text-muted-foreground">
          In practice, key points are often
        </p>
        <div className="flex justify-center items-center">
          <ul className=" list-disc pl-4">
            <li>Discussed at the time</li>
            <li>Understood within the team</li>
            <li>Or assumed to be obvious</li>
          </ul>
        </div>
        <p className=" text-center mt-8 text-muted-foreground">
          But not always reflected clearly on the file.
        </p>
        <p className=" text-center  text-muted-foreground">
          That’s where problems start.
        </p>
        <p className=" text-center  text-muted-foreground">
          This keeps it clear on the file as you go.
        </p>
      </div>
    </section>
  );
}
