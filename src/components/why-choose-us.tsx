import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowDownToLine,
  Clock,
  FileText,
  Layers,
  MoveRight,
} from "lucide-react";
import AreasOfLaw from "./Areas-of-law/areas-of-law";
import Link from "next/link";
import { Button } from "./ui/button";

export default function WhyChooseUs() {
  const features = [
    {
      icon: FileText,
      title: "Clear, relevant updates",
      description:
        "Focused on legal and regulatory developments that affect day-to-day work.",
    },
    {
      icon: Clock,
      title: "Applied in practice",
      description:
        "Shows what matters and what should be reflected on the file.",
    },
    {
      icon: MoveRight,
      title: "Built-in record",
      description:
        "Creates a clear record of ongoing competence through work already being done.",
    },
    {
      icon: Layers,
      title: "Ready to use",
      description:
        "Shared across your team without additional preparation or setup.",
    },
  ];

  return (
    <>
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
            <div>
              <p>Each issue</p>
              <ul>
                <li>is used on live matters</li>
                <li>sets how the file should record the position</li>
                <li>shows what fails and what is defensible</li>
                <li>is applied consistently across fee earners</li>
              </ul>
            </div>
            {/* <div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 my-4 md:my-12
              max-w-3xl mx-auto
            "
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card
                    key={index}
                    className="flex flex-col  bg-white  h-full border border-primary/10  transition-all duration-300 hover:shadow-sm max-w-90 md:max-w-auto mx-auto"
                  >
                    <CardContent className="flex flex-col gap-4 flex-1">
                      <div className="flex gap-4 items-start">
                        <Icon className="shrink-0 mt-1 h-4 w-4 text-secondary" />
                        <div className="flex-1">
                          <p className="text-primary text-lg font-serif mb-4 font-semibold">
                            {feature.title}
                          </p>
                          <p className="text-muted-foreground">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div> */}
            <p className="text-center text-sm my-2">
              Designed to reduce internal effort while supporting a consistent
              approach to ongoing competence.
            </p>
            <p className="text-center text-sm">
              No need to source updates, prepare internal notes, or manage
              separate records manually.
            </p>
            {/* <div className="flex flex-col  gap-4 text-base font-medium sm:flex-row mt-8 ">
              <Link
                href="/#subscribe"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button variant={"secondary"} size="lg" className="w-full">
                  {" "}
                  Start Free Trial
                </Button>
              </Link>
              <Link
                href="/#subscribe"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button
                  className="w-full"
                  size="lg"
                  variant={"outline-secondary"}
                >
                  <ArrowDownToLine />
                  Get Sample Issue
                </Button>
              </Link>
            </div> */}
            {/* <p className="mt-4 text-sm text-center ">
              No Spam. Just the Sample
            </p> */}
          </div>
        </div>
      </section>
      <section className="p-4   py-13  " id="area-of-law">
        <div className="md:max-w-6xl mx-auto    ">
          <div>
            <h2 className="heading text-center mb-4!">
              CPD across key practice areas
            </h2>
            <p className=" text-center ">
              Structured monthly updates tailored to each area of practice,
              focused on what matters in day-to-day legal work.
            </p>
            <div className="mt-12">
              <AreasOfLaw />
            </div>

            <p className="mt-8 text-center ">
              Each area follows a consistent structure, making it easy to use
              across different teams.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
