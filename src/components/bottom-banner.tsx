import { Button } from "@/components/ui/button";
import { ArrowDownToLine } from "lucide-react";
import Link from "next/link";

export default function BottomBanner() {
  return (
    <section className="py-32 bg-primary text-white">
      <div className="md:max-w-3xl mx-auto px-4 text-center">
        <span className="inline-block text-center bg-secondary w-20 h-px mb-4" />
        <h1 className="text-4xl  mb-6 font-serif">
          Complete your CPD each month without searching, stress, or wasted time
        </h1>
        <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
          Structured monthly updates with built-in CPD recording. Stay current,
          stay compliant, and remove the admin burden.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 md:w-[70%] mx-auto">
          <Link href="/#subscribe" rel="noopener noreferrer" className="w-full">
            <Button size="lg" variant="secondary" className=" px-8 w-full">
              Start your free trial
            </Button>
          </Link>
          <Link href="/#subscribe" rel="noopener noreferrer" className="w-full">
            <Button
              size="lg"
              variant={"outline-secondary"}
              className=" px-8 bg-primary w-full"
            >
              <ArrowDownToLine className="mr-2" />
              Download Sample Issue
            </Button>
          </Link>
        </div>

        <p className=" text-gray-400  mb-2">
          First month free. No obligations to continue.
        </p>
        <p className=" mb-2 font-semibold">
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
