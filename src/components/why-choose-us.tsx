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
      title: "Key legal updates",
      description:
        "Clear summaries of important legal and regulatory developments across your selected practice areas.",
    },
    {
      icon: Clock,
      title: "Practical application",
      description:
        "A focused explanation of why each update matters and what your team should take from it.",
    },
    {
      icon: MoveRight,
      title: "Built-in CPD record",
      description:
        "Structured documentation to help maintain a clear and consistent record of monthly training activity.",
    },
    {
      icon: Layers,
      title: "Ready-to-use format",
      description:
        "Prepared in a simple format that can be shared across the firm without extra internal preparation.",
    },
  ];

  return (
    <>
      <section className="p-4 bg-white  py-13  ">
        <div className="md:max-w-6xl mx-auto   ">
          <div>
            <h2 className="heading text-center mb-6!">
              What you receive each month
            </h2>
            <p className=" text-center">
              Structured monthly CPD updates designed to keep your team
              informed, consistent, and easy to manage.
            </p>
            <div
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
            </div>
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
                  Start Firm Trial
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
