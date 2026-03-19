import AreasOfLaw from "@/components/Areas-of-law/areas-of-law";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
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
    <div className=" grow ">
      <section>
        <main className="container mx-auto flex min-h-[80vh] w-full  flex-col items-center justify-between py-20  sm:items-start p-4">
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <div className="p-2 rounded-full text-xs py-1 bg-primary/20">
              Mounthly CPD for solicitors and Law Firms
            </div>
            <div className=" text-5xl font-semibold  tracking-tight ">
              <p>Stay sharp. </p>
              <p>Bill confidently. </p>
              <p>Learn fast.</p>
            </div>
            <ul className="text-lg font-medium space-y-2">
              <li>The original SRA-aligned one-hour monthly CPD.</li>
              <li>
                Concise, source-backed updates written by experienced
                practitioners.
              </li>
              <li>Read in 20 minutes. No seminars. No webinars. No admin.</li>
              <li>Starting from £29 per month.</li>
            </ul>
            <p className=" text-sm leading-8 ">
              Covers and records your SRA continuing professional development
              requirements across the year.
            </p>
          </div>
          <div className="flex flex-col gap-4 text-base font-medium sm:flex-row mt-4">
            <Link href={"/#area-of-law"} rel="noopener noreferrer">
              <Button>Browse Area of Law</Button>
            </Link>
            <Link href={"/#pricing"} rel="noopener noreferrer">
              <Button variant={"outline"}>See Pricing</Button>
            </Link>
          </div>
        </main>
      </section>
      <section className="p-4 py-20 bg-accent">
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

      <section className="p-4 py-20 ">
        <div className="container mx-auto " id="area-of-law">
          <h1 className="text-3xl font-semibold mb-4">Areas of Law</h1>
          <AreasOfLaw />
        </div>
      </section>

      <section className="p-4 py-20" id="pricing">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold mb-4">Pricing Plans</h1>
          <div className="flex flex-wrap gap-6 w-full justify-center">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.id}
                className="flex-1 min-w-70 max-w-sm flex flex-col"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-gray-600">
                        {plan.type}
                      </p>
                      <CardTitle className="text-xl font-bold mt-2">
                        {plan.title}
                      </CardTitle>
                      <CardDescription className="mt-1">
                        {plan.subtitle}
                      </CardDescription>
                    </div>
                    {plan.badge && (
                      <span className="bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded-full">
                        {plan.badge}
                      </span>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="flex-1">
                  <div className="text-3xl font-bold">
                    {plan.currency}
                    {plan.price}
                    <span className="text-base font-normal text-gray-600">
                      /{plan.period}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
