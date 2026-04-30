import { Button } from "@/components/ui/button";
import { ArrowDownToLine } from "lucide-react";
import Link from "next/link";

export default function BottomBanner() {
  return (
    <section className="py-32 bg-primary text-white">
      <div className="md:max-w-3xl mx-auto px-4 text-center">
        <span className="inline-block text-center bg-secondary w-20 h-px mb-4" />
        <h1 className="text-4xl  mb-6 font-serif">
          You do not know which of your current files are defensible.
        </h1>
        <p className="text-xl text-gray-400 mb-4 max-w-3xl mx-auto">
          This must now be tested across your current files.{" "}
        </p>
        <p className=" text-gray-400 mb-4 max-w-3xl mx-auto">
          There is no alternative way to establish your position.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center mb-8 md:w-[70%] mx-auto">
          <Link href="/#subscribe" rel="noopener noreferrer">
            <Button size="lg" variant="secondary" className=" px-8 w-full">
              <ArrowDownToLine className="mr-2" />
              Test Your Current File Position
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
