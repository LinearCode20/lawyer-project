import React from "react";
import { Button } from "@/components/ui/button";
import { FileCheck } from "lucide-react";

export default function page() {
  return (
    <>
      <section className="py-20">
        <div className="md:max-w-3xl mx-auto px-4 text-center">
          <h2 className="heading text-center !mb-4">START FILE REVIEW</h2>
          <div className="space-y-2">
            <p className="text-center text-muted-foreground">
              You are submitting files for review because your current files
              have not been tested.
            </p>
            <p className="text-center text-muted-foreground">
              This is not a general enquiry.
            </p>
            <p className="text-center text-muted-foreground">
              This is the first step in identifying which of your current files
              would not stand if challenged.
            </p>
            <p className="text-center text-muted-foreground">
              This is a paid file review. Most reviews fall within £3,000 –
              £10,000 depending on scope.
            </p>
            <p className="text-center text-muted-foreground">
              If the position is not shown
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="md:max-w-3xl mx-auto px-4 text-center">
          <h2 className="heading text-center !mb-4">FINAL SECTION</h2>

          <div className="space-y-6">
            <p className="text-center text-muted-foreground">
              If your files are challenged, the position will be tested against
              what is recorded. If that record does not support the position, it
              will fail.
            </p>

            <div className="border-t border-muted-foreground/20 my-6" />

            <p className="text-center text-muted-foreground">
              If you are not certain your current files would stand, this needs
              to be carried out now.
            </p>

            <div className="border-t border-muted-foreground/20 my-6" />

            <Button size="lg" variant="secondary" className="mt-8">
              <FileCheck className="mr-2 h-5 w-5" />
              Submit Files for Review
            </Button>

            <p className="text-sm text-muted-foreground mt-2">
              Limited availability each month
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="md:max-w-3xl mx-auto px-4 text-center">
          <h2 className="heading text-center !mb-4">WHAT HAPPENS NEXT</h2>

          <div className="space-y-4 max-w-lg mx-auto">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-left text-muted-foreground">
                Your submission is reviewed and scope confirmed.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-left text-muted-foreground">
                You are then contacted to proceed with the file review.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
