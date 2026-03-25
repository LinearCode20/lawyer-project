import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Clock, FileText, Layers, MoveRight, Users } from "lucide-react";
import AreasOfLaw from "./Areas-of-law/areas-of-law";

export default function WhyChooseUs() {
  const features = [
    {
      icon: FileText,
      title: "Case law without the reading",
      description:
        "Understand what matters without going through full judgments",
    },
    {
      icon: Clock,
      title: "No searching for updates",
      description:
        "Relevant legislative changes already identified and explained",
    },
    {
      icon: MoveRight,
      title: "Know exactly what to do",
      description: "Clear practical impact on advice, drafting, and risk",
    },
    {
      icon: Layers,
      title: "CPD done and recorded",
      description:
        "Structured reflection and ready-made records with no extra admin",
    },
  ];

  return (
    <section className="py-20 ">
      <div className=" px-4 grid grid-cols-1 md:grid-cols-2 ">
        <div className="p-4">
          <h2 className="text-4xl font-semibold  ">
            What you'll receive each month
          </h2>
          <p className="mt-8">
            Every issue is built to save time, reduce searching, and make
            monthly CPD easier to complete and record.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="  rounded-xs">
                  <CardContent className="flex  gap-4">
                    <Icon className="shrink-0 h-3 w-3 text-secondary" />
                    <div>
                      <p className="text-sm font-semibold">{feature.title}</p>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
        <div className="p-4">
          <h2 className="text-4xl font-semibold  ">Areas of Law covered</h2>
          <p className="mt-8">
            Choose the practice areas relevant to your work. Each monthly issue
            is written to be concise, practical, and directly usable in
            practice.
          </p>
          <div className="mt-12">
            <AreasOfLaw />
          </div>
        </div>
      </div>
    </section>
  );
}
