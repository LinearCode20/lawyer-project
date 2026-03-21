"use client";
import React from "react";
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

const formSchema = z.object({
  email: z.email({ message: "Please enter a valid email" }).min(1, {
    message: "Please enter an email",
  }),
  full_name: z.string().min(1, { message: "Please enter a name" }),
});

type FormSchema = z.infer<typeof formSchema>;

export default function DownloadFreeSample() {
  const form = useForm({
    resolver: zodResolver(formSchema),

    defaultValues: {
      full_name: "",
      email: "",
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
    } catch (e: any) {
      console.log(e);
      toast.error(e?.response?.data?.message || "Something went wrong");
    }

    // Reset success message after 3 seconds
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>Download Free Sample</CardTitle>
        <CardDescription>
          Get a free sample of our legal writing services
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="grid gap-4 "
        >
          <Controller
            name="full_name"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <Input
                  {...field}
                  id={field.name}
                  type="text"
                  placeholder="Full Name"
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

          <Button
            type="submit"
            variant="secondary"
            className=""
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? "Submitting..." : "Subscribe"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
