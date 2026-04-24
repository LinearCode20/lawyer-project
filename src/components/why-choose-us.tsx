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
