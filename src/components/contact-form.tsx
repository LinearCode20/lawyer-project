"use client";
import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field, FieldError } from "./ui/field";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Mail, Check } from "lucide-react";
import z from "zod";
import { toast } from "sonner";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import Link from "next/link";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.email({ message: "Please enter a valid email" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(1000, { message: "Message must not exceed 1000 characters" }),
});

type ContactFormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);
  const router = useRouter();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const handleSubmit = async (data: ContactFormData) => {
    try {
      const response = await axios.post("/api/contact", data);
      toast.success("Message sent successfully!");
      form.reset();
      setIsSuccessDialogOpen(true);
    } catch (error: any) {
      console.error("Contact form submission error:", error);
      toast.error(
        error.response?.data?.errors ||
          "Failed to send message. Please try again.",
      );
    }
  };

  const isSubmitting = form.formState.isSubmitting;
  return (
    <>
      <Card className="rounded-2xl shadow-2xl py-6">
        <CardContent className="px-6">
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-2"
          >
            {/* Name Field */}
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <Input
                    {...field}
                    id={field.name}
                    type="text"
                    aria-invalid={fieldState.invalid}
                    placeholder="Your name"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* Email Field */}
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

            {/* Message Field */}
            <Controller
              name="message"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <Textarea
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="Your message"
                    rows={6}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              variant="default"
              disabled={isSubmitting}
              className="w-full mt-4"
              size={"lg"}
            >
              <Mail />
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
          <p className="mt-4">
            By submitting this form, you agree to our Terms, Privacy Policy and
            Cookies Policy.
          </p>
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
              Message received
            </h2>

            {/* Body Text */}
            <div className="  border-t pt-2 space-y-2 text-muted-foreground">
              <p>We&apos;ve received your message and will respond shortly.</p>
              <p className="text-sm">
                Most enquiries are responded to within one working day.
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
              <DialogClose asChild>
                <Link
                  href="/#subscribe"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button
                    size="lg"
                    variant="default"
                    className="flex-1"
                    onClick={() => router.push("/sample")}
                  >
                    Download Free Sample
                  </Button>
                </Link>
              </DialogClose>
            </div>

            {/* Footer */}
            <p className="text-xs text-muted-foreground pt-2">
              No obligation. Instant access.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
