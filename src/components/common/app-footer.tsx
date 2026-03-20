"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Controller, useForm } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "../ui/field";
import { NativeSelect, NativeSelectOption } from "../ui/native-select";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { toast } from "sonner";
import { areaOfLaw } from "@/app/law-area/[slug]/data";

const formSchema = z.object({
  email: z.email({ message: "Please enter a valid email" }).min(1, {
    message: "Please enter an email",
  }),
  areasOfLaw: z.string().min(1, { message: "Please select an area of law" }),
});
export default function AppFooter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (data: { email: string; areasOfLaw: string }) => {
    // Demo: Just log the email
    try {
      console.log("Email submitted:", email);
      const response = await axios.post("/api/capture-email", {
        ...data,
        emailType: "CaptureEmail",
      });
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 3000);
      toast.success("Thanks for subscribing!");
    } catch (e: any) {
      console.log(e);
      toast.error(e?.response?.data?.message || "Something went wrong");
    }

    // Reset success message after 3 seconds
  };
  const form = useForm({
    resolver: zodResolver(formSchema),

    defaultValues: {
      email: "",
      areasOfLaw: "",
    },
  });
  return (
    <footer className="border-t border-gray-300 bg-background py-6 text-sm">
      <div className="container mx-auto px-4">
        {/* Main Content: Left-Right Layout */}
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Left Section: Company Info & Links */}
          <div className="flex flex-col justify-center md:col-span-2">
            <div className="mb-6">
              <h4 className="mb-3 text-lg font-semibold text-foreground">
                About Law Edge CPD
              </h4>
              <p className="mb-3 text-muted-foreground">
                Law Edge CPD is a trading style name for Estates and Wills
                Advisory Group Limited (company number 13958194).
              </p>
              <p className="text-muted-foreground">
                This service provides general CPD learning material only and
                does not constitute legal advice.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/privacy-policy"
                className="font-medium text-foreground transition-colors hover:text-primary hover:underline"
              >
                Privacy Policy
              </Link>
              <Link
                href="/cookie-policy"
                className="font-medium text-foreground transition-colors hover:text-primary hover:underline"
              >
                Cookie Policy
              </Link>
              <Link
                href="/privacy-policy"
                className="font-medium text-foreground transition-colors hover:text-primary hover:underline"
              >
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Right Section: Subscribe */}
          <div className="flex flex-col justify-start ">
            <h4 className="mb-2 text-lg font-semibold text-foreground">
              Stay Updated
            </h4>

            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="grid gap-4 "
            >
              <Controller
                name="areasOfLaw"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <NativeSelect
                      {...field}
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                    >
                      <NativeSelectOption value="">
                        Select an area
                      </NativeSelectOption>
                      {areaOfLaw.map((area, index) => (
                        <NativeSelectOption key={index} value={area.title}>
                          {area.title}
                        </NativeSelectOption>
                      ))}
                    </NativeSelect>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <Input
                      {...field}
                      id={field.name}
                      type="email"
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter your email"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Button
                type="submit"
                variant="default"
                className=""
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? "Submitting..." : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="border-t border-gray-200 pt-6 text-center dark:border-gray-800">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Law Edge CPD
          </p>
        </div>
      </div>
    </footer>
  );
}
