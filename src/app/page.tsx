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
      <WhyChooseUs />

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
