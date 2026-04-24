import { Button } from "@/components/ui/button";
import { ArrowDownToLine } from "lucide-react";
import Link from "next/link";

export default function BottomBanner() {
  return (
    <section className="py-32 bg-primary text-white">
      <div className="md:max-w-3xl mx-auto px-4 text-center">
        <span className="inline-block text-center bg-secondary w-20 h-px mb-4" />
        <h1 className="text-4xl  mb-6 font-serif">
          See how this would work on your current files
        </h1>
        <p className="text-xl text-gray-400 mb-4 max-w-3xl mx-auto">
          Your current files are being progressed without a defensible position
        </p>
        <p className=" text-gray-400 mb-4 max-w-3xl mx-auto">
          If you review five active files today, more than one will fail.
        </p>
        <p className=" text-gray-400 mb-8 max-w-3xl mx-auto">
          That is where your exposure sits.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 md:w-[70%] mx-auto">
          <Link href="/#subscribe" rel="noopener noreferrer" className="w-full">
            <Button size="lg" variant="secondary" className=" px-8 w-full">
              <ArrowDownToLine className="mr-2" />
              Get Sample Issue
            </Button>
          </Link>
          <Link
            href="/file-review"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button
              size="lg"
              variant={"outline-secondary"}
              className=" px-8 bg-primary w-full"
            >
              Identify Your Non-Defensible Files
            </Button>
          </Link>
        </div>

        <p className=" text-gray-400  text-sm  mb-2">
          Keep get sample issue form as it is. Remove these two lines from the
          form. Sample includes case law, legislation, and CPD record.
        </p>
        <p className="text-gray-400 text-sm mb-2 ">
          No spam. Instant access. Sample only.
        </p>
      </div>
    </section>
  );
}
