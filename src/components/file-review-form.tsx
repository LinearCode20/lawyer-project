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
import { Check, CircleCheck } from "lucide-react";
import { Dialog, DialogContent } from "./ui/dialog";

const formSchema = z.object({
  email: z.email({ message: "Please enter a valid email" }).min(1, {
    message: "Please enter an email",
  }),
  full_name: z.string().min(1, { message: "Please enter a name" }),
  firm_name: z.string().min(1, { message: "Please enter a firm name" }),
  Phone: z.string().min(1, { message: "Please enter a phone number" }),
  no_of_files: z.string().min(1, { message: "Please enter a number of files" }),
  selected_areas: z.string().min(1, { message: "Please select an area" }),
});

type FormSchema = z.infer<typeof formSchema>;

export default function FileReviewForm() {
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),

    defaultValues: {
      firm_name: "",
      full_name: "",
      email: "",
      Phone: "",
      selected_areas: "",
      no_of_files: "",
    },
  });

  const handleSubmit = async (data: FormSchema) => {
    try {
      // Show loading state is handled by form.formState.isSubmitting

      // TODO: Replace with actual API call
      // await axios.post('/api/file-review', data);

      // For now, simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Show success dialog
      setIsSuccessDialogOpen(true);

      // Clear form after delay
      setTimeout(() => {
        form.reset();
        setIsSuccessDialogOpen(false);
      }, 3000); // 3 second delay

      toast.success("Form submitted successfully!");
    } catch {
      toast.error("Failed to submit form. Please try again.");
    }
  };
  return (
    <>
      <Card className="h-fit py-6 text-foreground">
        <CardHeader className="border-b px-6">
          <CardTitle className="text-3xl font-semibold ">
            Test Your Current File Position
          </CardTitle>
          <CardDescription className="mt-1">
            Submit details for a file review request.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 pt-0">
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="grid gap-4 "
          >
            <p className="text-sm text-primary ">
              Submit your files for professional review
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
              name="firm_name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <Input
                    {...field}
                    id={field.name}
                    type="text"
                    placeholder="Firm Name"
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
              name="Phone"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <Input
                    {...field}
                    id={field.name}
                    type="tel"
                    placeholder="Phone"
                    aria-invalid={fieldState.invalid}
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
                    {areaOfLaw
                      .filter((area) => !area.forFeature)
                      .map((area) => (
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
            <Controller
              name="no_of_files"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <Input
                    {...field}
                    id={field.name}
                    type="number"
                    placeholder="Number of Files"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            {/* <p className="text-sm text-[#6B7280] ">
              <CircleCheck className="inline-block text-secondary h-4" />
              Sample includes case law, legislation, and CPD record
            </p> */}
            <Button
              variant={"outline-secondary"}
              type="submit"
              className=""
              disabled={form.formState.isSubmitting}
              size={"lg"}
            >
              {form.formState.isSubmitting ? (
                "Submitting..."
              ) : (
                <>
                  <Check />
                  Submit File Review Request
                </>
              )}
            </Button>

            {/* <p className="text-sm text-center text-[#6B7280] ">
              No spam. Instant access. Sample only
            </p> */}
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
              Request Submitted
            </h2>

            {/* Body Text */}
            <div className="  border-t pt-2 space-y-2 text-muted-foreground">
              <p>Your file review request has been submitted successfully.</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
