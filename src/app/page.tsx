import AreasOfLaw from "@/components/Areas-of-law/areas-of-law";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pricingPlans } from "@/data/home";
//import { Plus } from "lucide-react";
import Link from "next/link";

// const areaOfLaw = [
//   "Commercial & Corporate",
//   "Litigation & Dispute Resolution",
//   "Employment Law",
//   "Property Law (Residential & Commercial)",
//   "Family",
//   "Immigration",
//   "Regulatory & Compliance",
//   "Private Client",
//   "Crime",
// ];

export default function Home() {
  return (
    <div className="">
      <section>
        <main className="container mx-auto flex min-h-[80vh] w-full  flex-col items-center justify-between py-32   sm:items-start">
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <div className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              <p>Stay sharp. </p>
              <p>Bill confidently. </p>
              <p>Learn fast.</p>
            </div>
            <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              The original one-hour CPD concise, source-backed updates delivered
              hassle-free. Read in under 20 minutes, yet designed to provide one
              full hour of CPD credit, monthly, across all key practice areas.
            </p>
          </div>
          <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
            <Link href={"#"} rel="noopener noreferrer">
              <Button>Browse Area of Law</Button>
            </Link>
            <Link href={"#"} rel="noopener noreferrer">
              <Button variant={"outline"}>See Pricing</Button>
            </Link>
          </div>
        </main>
      </section>
      <section className=" py-20 bg-accent">
        <div className="container mx-auto ">
          <h1 className="text-3xl font-semibold mb-4">Features</h1>
          <ul>
            <li>Monthly one-hour CPD per selected areas</li>
            <li>Crisp case summaries with practice points</li>
            <li>Linked to official sources and legislation</li>
            <li> CPD reflection prompts and logging template</li>
            <li>One clean PDF each month</li>
          </ul>
        </div>
      </section>

      <section className=" py-20 ">
        <div className="container mx-auto ">
          <h1 className="text-3xl font-semibold mb-4">Areas of Law</h1>
          <AreasOfLaw />
          {/* <ul>
            {areaOfLaw.map((area) => (
              <li key={area} className="p-2 border-b border-gray-300">
                <div className="flex justify-between items-center">
                  <span>{area}</span>
                  <span>
                    <Plus size={16} />
                  </span>
                </div>
              </li>
            ))}
          </ul> */}
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold mb-4">Pricing Plans</h1>
          <div className="flex gap-4">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.id}
                className="relative flex-1 min-w-[200px] flex flex-col border border-gray-300 bg-white"
              >
                {/* Popular Badge */}
                {/* {plan.badge && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wide bg-gray-100 text-gray-800 border-2 border-red-600 rounded-full">
                      {plan.badge}
                    </span>
                  </div>
                )} */}

                {/* Card Content */}
                <div className="flex flex-col flex-1 p-6">
                  {/* Type Label */}
                  <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 mb-2">
                    {plan.type}
                  </span>

                  {/* Plan Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {plan.title}
                  </h3>

                  {/* Plan Description */}
                  <p className="text-sm text-gray-600 mb-4">{plan.subtitle}</p>

                  {/* Price */}
                  <div className="mt-auto">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      {plan.currency}
                      {plan.price}/{plan.period}
                    </h2>

                    {/* CTA Button */}
                    {/* <Button className="w-full text-white font-semibold py-2 px-4 rounded-md transition-colors">
                      {plan.buttonText}
                    </Button> */}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* <section className=" py-20 bg-accent ">
        <div className="container mx-auto ">
          <h1 className="text-3xl font-semibold mb-4">Areas of Law</h1>
          <ul>
            {faq.map((area) => (
              <li key={area.Qus} className="p-2 border-b border-gray-300">
                <div className="flex justify-between items-center">
                  <span>{area.Qus}</span>
                  <span>
                    <Plus size={16} />
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section> */}
    </div>
  );
}
