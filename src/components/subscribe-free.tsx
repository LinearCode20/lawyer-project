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
import {
  Field,
  FieldContent,
  FieldError,
  FieldLabel,
  FieldTitle,
} from "./ui/field";
import { Input } from "./ui/input";
import axios from "axios";
import { toast } from "sonner";
import { Checkbox } from "./ui/checkbox";

const areaOfLaw = [
  "Commercial & Corporate",
  "Litigation & Dispute Resolution",
  "Employment Law",
  "Property Law (Residential & Commercial)",
  "Family",
  "Immigration",
  "Regulatory & Compliance",
  "Private Client",
  "Crime",
];

const formSchema = z.object({
  email: z.email({ message: "Please enter a valid email" }).min(1, {
    message: "Please enter an email",
  }),
  full_name: z.string().min(1, { message: "Please enter a name" }),
  firm_name: z.string().min(1, { message: "Please enter a firm name" }),
  selected_areas: z
    .array(z.string())
    .min(1, { message: "Please select at least one area" })
    .max(3, { message: "You can select up to 3 areas" }),

  card_no: z.string().optional(),
  card_holder_name: z.string().optional(),
  card_expiry_date: z.string().optional(),
  card_cvv: z.string().optional(),
});

type FormSchema = z.infer<typeof formSchema>;

export default function SubscribeFree() {
  const form = useForm({
    resolver: zodResolver(formSchema),

    defaultValues: {
      full_name: "",
      email: "",
      firm_name: "",
      selected_areas: [],
    },
  });

  const handleSubmit = async (data: FormSchema) => {
    // Demo: Just log the email
    try {
      const response = await axios.post("/api/free-subscribe", {
        ...data,
        selected_areas: data.selected_areas.join(", "),
      });
      toast.success(response?.data?.message || "Thanks for subscribing!");
    } catch (e: any) {
      console.log(e);
      toast.error(e?.response?.data?.message || "Something went wrong");
    }

    // Reset success message after 3 seconds
  };
  return (
    <Card>
      <CardHeader className="border-b">
        <span className="bg-secondary/30 rounded-3xl text-primary p-1 px-2 inline-block w-fit text-xs">First month free</span>
        <CardTitle className="text-3xl font-semibold ">
          Subscribe for Free{" "}
        </CardTitle>
        <CardDescription>
          Payment Detail taken now. No charge for first month. Area can be
          changed later
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
          <Controller
            name="firm_name"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <Input
                  {...field}
                  id={field.name}
                  type="text"
                  aria-invalid={fieldState.invalid}
                  placeholder="Firm Name"
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
                <FieldLabel className="font-bold">
                  Choose up to three areas
                </FieldLabel>
                <div className="grid md:grid-cols-2 gap-2">
                  {areaOfLaw.map((area) => (
                    <FieldLabel
                      key={area}
                      htmlFor={`area-${area}`}
                      className="cursor-pointer"
                    >
                      <Field
                        orientation="horizontal"
                        data-invalid={fieldState.invalid}
                      >
                        <Checkbox
                          id={`area-${area}`}
                          checked={field.value.includes(area)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              // Add to array if less than 3 selected
                              if (field.value.length < 3) {
                                field.onChange([...field.value, area]);
                              }
                            } else {
                              // Remove from array
                              field.onChange(
                                field.value.filter((v: string) => v !== area),
                              );
                            }
                          }}
                        />
                        <FieldContent>
                          <FieldTitle>{area}</FieldTitle>
                        </FieldContent>
                      </Field>
                    </FieldLabel>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {field.value.length}/3 selected
                </p>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <p className="text-sm text-gray-400">
            Select any three to start. You can update your chosen areas later
          </p>
          <Controller
            name="card_holder_name"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <Input
                  {...field}
                  id={field.name}
                  type="text"
                  aria-invalid={fieldState.invalid}
                  placeholder="Card Holder Name"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="card_no"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <Input
                  {...field}
                  id={field.name}
                  type="text"
                  aria-invalid={fieldState.invalid}
                  placeholder="Card Number"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <div className=" grid md:grid-cols-2 gap-4">
            <Controller
              name="card_expiry_date"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <Input
                    {...field}
                    id={field.name}
                    type="text"
                    aria-invalid={fieldState.invalid}
                    placeholder="Expiry Date"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="card_cvv"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <Input
                    {...field}
                    id={field.name}
                    type="text"
                    aria-invalid={fieldState.invalid}
                    placeholder="CVC"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </div>

          <Button type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "Submitting..." : "Subscribe"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
