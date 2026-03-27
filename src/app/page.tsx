import AreasOfLaw from "@/components/Areas-of-law/areas-of-law";
import BottomBanner from "@/components/bottom-banner";
import ContactForm from "@/components/contact-form";
import DownloadFreeSample from "@/components/download-free-sample";
import Feedback from "@/components/feedback";
import Hero from "@/components/hero";
import SubscribeFree from "@/components/subscribe-free";
import WhyChooseUs from "@/components/why-choose-us";
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
import FAQ from "@/components/faq";
import Pricing from "@/components/pricing";
import { CircleCheck } from "lucide-react";
import CPTSteps from "@/components/cpt-steps";

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
      <Hero />
      <div className="bg-[#eff1f5] font-semibold text-center py-4">
        Build for Busy solicitors who want CPD done Properly without wasting
        hours searching.
      </div>

      <CPTSteps/>
      <WhyChooseUs />
      <Pricing />
      <section className="p-4 py-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <SubscribeFree />
          <DownloadFreeSample />
        </div>
      </section>
      <section className="p-4 py-20 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row gap-4 justify-around">
          <div className="flex-1 flex items-start gap-2">
            <CircleCheck className="shrink-0 inline-block text-secondary h-4" />
            <p>
              Used by solicitors across the UK, from sole practitioners to Legal
              500 firms and multi-office practices
            </p>
          </div>

          <div className="flex-1 flex items-start gap-2">
            <CircleCheck className="shrink-0 inline-block text-secondary h-4" />
            <p>Written by practising lawyers with practical focus</p>
          </div>

          <div className="flex-1 flex items-start gap-2">
            <CircleCheck className="shrink-0 inline-block text-secondary h-4" />
            <p>Structured for reflection, recording, and compliance</p>
          </div>
        </div>
      </section>
      <Feedback />
      <FAQ />
      <BottomBanner />

      <section className="p-4 py-20 " id="contact-us">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold">Contact Us</h1>
          <p className="mb-4">Have Question? Send us a Quick Message.</p>
          <div className="max-w-2xl">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
