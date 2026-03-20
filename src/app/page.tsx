import AreasOfLaw from "@/components/Areas-of-law/areas-of-law";
import Feedback from "@/components/feedback";
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
      <section className="bg-white">
        <main className="container mx-auto flex min-h-[80vh] w-full  flex-col items-center justify-between py-20  sm:items-start p-4">
          <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
            <div className="p-2 rounded-full text-xs py-1 bg-primary/15">
              Mounthly CPD for solicitors and Law Firms
            </div>
            <div className=" text-5xl font-semibold  tracking-tight ">
              <p>Stay sharp. </p>
              <p>Bill confidently. </p>
              <p>Learn fast.</p>
            </div>
            <ul className=" font-medium space-y-2">
              <li className=" font-bold">
                The original SRA-aligned one-hour monthly CPD.
              </li>
              <li className="font-bold">
                Concise, source-backed updates written by experienced
                practitioners.
              </li>
              <li className="font-bold">
                Read in 20 minutes. No seminars. No webinars. No admin.
              </li>
              <li className="font-bold text-xs">
                Used by sole practitioners and law firm accros the UK.
              </li>
              <li className="font-bold">Starting from £29 per month.</li>
            </ul>
            <p className=" text-sm  ">
              Covers and records your SRA continuing professional development
              requirements across the year.
            </p>
          </div>
          <div className="flex flex-col gap-4 text-base font-medium sm:flex-row mt-4">
            <Link href={"/#"} rel="noopener noreferrer">
              <Button variant={"secondary"}>Download free sample</Button>
            </Link>
            <Link href="#" rel="noopener noreferrer">
              <Button>Subscribe for free</Button>
            </Link>
          </div>
        </main>
      </section>

      <section className="p-4 py-20 ">
        <div className="container mx-auto " id="area-of-law">
          <h1 className="text-3xl font-semibold ">Areas of Law</h1>
          <p className="mb-8 text-sm">
            Explore the partice areas covered by Law Edge. Click each to view a
            snapshot
          </p>
          <Card className="p-0 rounded-4xl">
            <AreasOfLaw />
          </Card>
        </div>
      </section>

      <section className="p-4 py-20 ">
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

      <Feedback />
    </div>
  );
}
