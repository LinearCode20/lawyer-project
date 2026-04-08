"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { Button } from "./ui/button";
import { Field, FieldError } from "./ui/field";
import { Input } from "./ui/input";
import axios from "axios";
import { toast } from "sonner";
import { NativeSelect } from "./ui/native-select";
import { areaOfLaw } from "@/app/law-area/[slug]/data";
import { ArrowDownToLine, Check, CircleCheck } from "lucide-react";
import { Dialog, DialogClose, DialogContent } from "./ui/dialog";
import Link from "next/link";

const formSchema = z.object({
  email: z.email({ message: "Please enter a valid email" }).min(1, {
    message: "Please enter an email",
  }),
  full_name: z.string().min(1, { message: "Please enter a name" }),
  selected_areas: z.string().min(1, { message: "Please select an area" }),
});

type FormSchema = z.infer<typeof formSchema>;

export default function DownloadFreeSample() {
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),

    defaultValues: {
      full_name: "",
      email: "",
      selected_areas: "",
    },
  });

  const handleSubmit = async (data: FormSchema) => {
    // Demo: Just log the email
    try {
      const response = await axios.post("/api/free-sample", {
        ...data,
      });
      toast.success(response?.data?.message || "Thanks for subscribing!");
      const file_link = response?.data?.data;

      const link = document.createElement("a");
      link.href = file_link;
      link.download = "sample_file.pdf";
      document.body.appendChild(link);
      link.click();
      form.reset();
      document.body.removeChild(link);
      setIsSuccessDialogOpen(true);
    } catch (e: any) {
      console.log(e);
      toast.error(e?.response?.data?.message || "Something went wrong");
    }

    // Reset success message after 3 seconds
  };
  return (
    <>
      <Card className="h-fit py-6 text-foreground">
        <CardHeader className="border-b px-6">
          <CardTitle className="text-3xl font-semibold ">
            Download Sample Issue
          </CardTitle>
          <CardDescription>
            Enter your details to receive a sample issue
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="grid gap-4 "
          >
            <p className="text-sm text-primary ">
              Preview how your monthly CPD will look delivered
            </p>
            <Controller
              name="full_name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <Input
                    {...field}
                    id={field.name}
                    type="text"
                    placeholder="Your Name"
                    aria-invalid={fieldState.invalid}
                  />
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
                    placeholder="Email"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="selected_areas"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <NativeSelect
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                  >
                    <option value="">Select</option>
                    {areaOfLaw.map((area) => (
                      <option key={area.title} value={area.title}>
                        {area.title}
                      </option>
                    ))}
                  </NativeSelect>

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <p className="text-sm text-[#6B7280] ">
              <CircleCheck className="inline-block text-secondary h-4" />
              Sample includes case law, legislation, and CPD record
            </p>
            <Button
              type="submit"
              className=""
              disabled={form.formState.isSubmitting}
              size={"lg"}
            >
              {form.formState.isSubmitting ? (
                "Submitting..."
              ) : (
                <>
                  <ArrowDownToLine />
                  Download Sample Issue
                </>
              )}
            </Button>

            <p className="text-sm text-center text-[#6B7280] ">
              No spam. Instant access. Sample only
            </p>
            <p className="text-sm text-center text-[#6B7280] ">
              By submitting this form, you agree to our Terms, Privacy Policy
              and Cookies Policy.
            </p>
          </form>
        </CardContent>
      </Card>
      <Dialog open={isSuccessDialogOpen} onOpenChange={setIsSuccessDialogOpen}>
        <DialogContent className="sm:max-w-md" showCloseButton={true}>
          <div className="flex flex-col items-center text-center space-y-2">
            {/* Checkmark Icon */}
            <div className="rounded-full border-secondary border-2 p-3">
              <Check className="h-6 w-6 text-secondary" />
            </div>

            {/* Heading */}
            <h2 className="text-2xl font-bold text-primary font-serif">
              Sample Downloaded
            </h2>

            {/* Body Text */}
            <div className="  border-t pt-2 space-y-2 text-muted-foreground">
              <p>Your sample has been successfully downloaded.</p>
              <p className="text-sm">
                You may want to check try the free trial.
              </p>
            </div>

            {/* Buttons */}
            <div className="border-b py-4 flex w-full gap-3 ">
              <DialogClose asChild>
                <Link
                  href="/#subscribe"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button size="lg" variant="secondary" className="flex-1">
                    Start your free trial
                  </Button>
                </Link>
              </DialogClose>
            </div>

            {/* Footer */}
            <p className="text-xs text-muted-foreground pt-2">
              First month free and no commitment.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
