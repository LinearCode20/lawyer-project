import { Button } from "@/components/ui/button";
import { ArrowDownToLine } from "lucide-react";

export default function BottomBanner() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <span  className="inline-block text-center bg-secondary w-20 h-px mb-4"/>
        <h1 className="text-4xl font-semibold mb-6 font-serif">
          Complete your CPD each month without searching, stress, or wasted time
        </h1>
        <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
          Structured monthly updates with built-in CPD recording. Stay current,
          stay compliant, and remove the admin burden.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button size="lg" variant="secondary" className="text-lg px-8">
            Start Free Month
          </Button>
          <Button size="lg"  className="text-lg px-8 bg-primary">
            <ArrowDownToLine className="mr-2" />
            Download Free Sample
          </Button>
        </div>

        <p className=" text-gray-400  mb-4">
          No searching. No stress. 13 structured hours each year.
        </p>
        <p className=" mb-4 font-semibold">
          Start with the free month and see the difference in your first issue.
        </p>
        <p className="text-sm text-gray-400">
          Used by solicitors and firms across the UK. No charge today, and you
          can cancel anytime before billing starts.
        </p>
      </div>
    </section>
  );
}
