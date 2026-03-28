import React from "react";

export default function CPTSteps() {
  return (
    <section className="p-4 py-20 bg-white" id="how-it-works">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4">
          <h2 className="text-4xl font-semibold text-primary font-serif  ">
            CPD shouldn&apos;t take hours of your time
          </h2>
          <p className="my-8">
            Most solicitors end up piecing together CPD from multiple sources.
            Long materials, scattered updates, and no clear structure make it
            harder than it needs to be.
          </p>
          <ul className="border-t-[1.5px] list-disc p-4 space-y-6">
            <li>Too much information, not enough clarity</li>
            <li>Time lost searching for relevant updates</li>
            <li>No structured way to record CPD</li>
          </ul>
          <p>
            Includes structured CPD record and reflection, so nothing needs to
            be written separately.
          </p>
        </div>
        <div className="">
          <p className="text-xs text-primary/65 font-semibold">
            EXAMPLE
            <span className="text-foreground"> CPD RECORD </span>
            (INCLUDE EACH MONTH)
          </p>
          <div className="m-4 rounded-lg shadow-lg overflow-hidden">
            {/* Header Section */}
            <div className="bg-accent px-6 py-4">
              <div className="flex justify-between items-start">
                <div className="text-secondary text-xs font-semibold tracking-wider">
                  <span className="text-secondary/80"> CPD RECORD </span>
                  (AUDIT READY)
                  <h3 className="text-primary font-serif mt-4 text-lg font-bold">
                    Continuing Competence Record
                  </h3>
                </div>

                <div className="text-right aspect-video h-20">
                  <img src={"/sub_logo.png"} alt="LAW EDGE" />
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 space-y-4">
              <div className="">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-primary text-sm font-semibold">
                      Fee earner / lawyer name
                    </div>
                    <div className=" text-sm mt-1">...............</div>
                  </div>
                  <div>
                    <div className="text-primary text-sm font-semibold">
                      Practice area
                    </div>
                    <div className=" text-sm mt-1">Commercial & Corporate</div>
                  </div>
                </div>
              </div>

              <div className="border-b border-slate-200 pb-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-primary text-sm font-semibold">
                      Date
                    </div>
                    <div className=" text-sm mt-1">March 2026</div>
                  </div>
                  <div>
                    <div className="text-primary text-sm font-semibold">
                      CPD time
                    </div>
                    <div className=" text-sm mt-1">1 hour</div>
                  </div>
                </div>
              </div>

              <div className="pb-4">
                <div>
                  <div className="text-primary text-sm font-semibold">
                    Learning need
                  </div>
                  <div className=" text-sm mt-1">
                    To remain up to date with recent developments affecting
                    corporate advisory work.
                  </div>
                </div>
              </div>

              <div className="pb-4">
                <div>
                  <div className="text-primary text-sm font-semibold">
                    Learning activity
                  </div>
                  <div className=" text-sm mt-1">
                    Monthly CPD Update - Law Edge
                  </div>
                </div>
              </div>

              <div className="pb-4">
                <div>
                  <div className="text-primary text-sm font-semibold">
                    Key learning
                  </div>
                  <div className=" text-sm mt-1">
                    Reviewed recent case law and legislative updates impacting
                    governance and transactional risk.
                  </div>
                </div>
              </div>

              <div>
                <div>
                  <div className="text-primary text-sm font-semibold">
                    Impact on practice
                  </div>
                  <div className=" text-sm mt-1">
                    Applied when advising clients on shareholder structures and
                    drafting provisions, improving risk identification and
                    drafting clarity.
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-200 py-4 flex justify-between gap-4 text-sm">
                <p>Structured for SRA continuing competence requirements</p>
                <p className="text-secondary text-xs font-semibold px-2">Record complote</p>
              </div>
              <div className="pb-4">
                <div>
                  <div className="text-primary text-sm font-semibold">
                    Included with each monthly CPD
                  </div>
                  <div className=" text-sm mt-1">
                    Can be downloaded separately with each monthly CPD for all
                    areas.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
