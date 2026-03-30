"use client";

import React from "react";
import { Card, CardContent } from "./ui/card";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field, FieldError } from "./ui/field";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Mail } from "lucide-react";
import z from "zod";
import { toast } from "sonner";
import axios from "axios";

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
    <Card className="rounded-2xl shadow-2xl py-6">
      <CardContent className="px-6">
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-2">
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
        <p className="mt-4">By submitting this form, you agree to our Terms, Privacy Policy and Cookies Policy.</p>
          
      </CardContent>
    </Card>
  );
}
