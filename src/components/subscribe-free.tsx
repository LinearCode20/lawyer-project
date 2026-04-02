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
import { NativeSelect } from "./ui/native-select";
import { pricingCards } from "./pricing";
import { ArrowLeft, Check, MoveLeft } from "lucide-react";
import Link from "next/link";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Dialog, DialogContent } from "./ui/dialog";
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
  email: z.string().email({ message: "Please enter a valid email" }).min(1, {
    message: "Please enter an email",
  }),
  plan_type: z.string().min(1, { message: "Please select a plan type" }),
  full_name: z.string().min(1, { message: "Please enter a name" }),
  //firm_name: z.string().min(1, { message: "Please enter a firm name" }),
  selected_areas: z
    .array(z.string())
    .min(1, { message: "Please select at least one area" })
    .max(3, { message: "You can select up to 3 areas" }),
  policy_agreement: z.boolean().refine((val) => val === true, {
    message: "You must agree to the policies to continue",
  }),
});

type FormSchema = z.infer<typeof formSchema>;

export default function SubscribeFree() {
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);

  const [currentStep, setCurrentStep] = useState<1 | 2>(1);
  const stripe = useStripe();
  const elements = useElements();

  const form = useForm({
    resolver: zodResolver(formSchema),

    defaultValues: {
      full_name: "",
      email: "",
      // firm_name: "",
      plan_type: "",
      selected_areas: [],
      policy_agreement: false,
    },
  });

  const handleNext = async () => {
    const isValid = await form.trigger(["plan_type", "email", "full_name"]);
    if (isValid) {
      setCurrentStep(2);
    }
  };

  const handleBack = () => {
    setCurrentStep(1);
  };

  const handleSubmit = async (data: FormSchema) => {
    try {
      //console.log("Submitting form with data:", data);
      if (!stripe || !elements) {
        toast.error("Stripe has not loaded yet. Please try again in a moment.");
        return;
      }
      // Create a PaymentMethod on the client using the CardElement
      const cardElement = elements.getElement(CardElement);
      if (!cardElement) {
        toast.error("Card input not found. Please refresh and try again.");
        return;
      }

      // Create PaymentMethod with better error handling and logging
      let paymentMethodId: string | undefined;
      try {
        // console.info("Creating PaymentMethod for", data.email);
        toast("Creating payment method...");

        const pmResult = await stripe.createPaymentMethod({
          type: "card",
          card: cardElement as any,
          billing_details: {
            name: data.full_name,
            email: data.email,
          },
        });

        if (pmResult.error) {
          //.error("createPaymentMethod error:", pmResult.error);
          toast.error(
            pmResult.error.message || "Failed to create payment method",
          );
          return;
        }

        if (!pmResult.paymentMethod || !pmResult.paymentMethod.id) {
          // console.error("createPaymentMethod returned no paymentMethod:", pmResult);
          toast.error(
            "Failed to create a payment method. Please try another card or refresh the page.",
          );
          return;
        }

        paymentMethodId = pmResult.paymentMethod.id;
        //console.log("Created paymentMethod id:", paymentMethodId);
      } catch (err) {
        console.error("Unexpected error creating payment method:", err);
        toast.error(
          "Unexpected error creating payment method. Check console for details.",
        );
        return;
      }

      // Submit subscription data to backend, sending the payment_method id
      const response = await axios.post("/api/free-subscribe", {
        ...data,
        selected_areas: data.selected_areas.join(", "),
        payment_method_id: paymentMethodId,
      });
      toast.success(response?.data?.message || "Thanks for subscribing!");
      setIsSuccessDialogOpen(true);
    } catch (e: any) {
      // console.log(e);
      toast.error(e?.response?.data?.message || "Something went wrong");
    }
  };
  return (
    <>
      <Card className="py-6 text-foreground">
        <CardHeader className="border-b px-6">
          <CardTitle className="text-3xl font-semibold">
            Start your free trial
          </CardTitle>
          <CardDescription>
            First month free. Payment details required to activate your
            Subscription.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <p className="text-primary">
            No searching. No admin. Just structured CPD delivered monthly.
          </p>
          <p className=" mt-4">Step {currentStep} of 2</p>
          <div className="w-full bg-gray-200 rounded-full h-1.5 ">
            <div
              className="bg-secondary h-1.5 rounded-full transition-all duration-300"
              style={{ width: currentStep === 1 ? "50%" : "100%" }}
            />
          </div>

          {currentStep === 2 && (
            <p className="my-4  cursor-pointer" onClick={handleBack}>
              <MoveLeft className="inline-block h-4" /> Edit Details
            </p>
          )}
          {currentStep === 1 ? (
            <div className="mt-4">
              <p className="mb-4 text-primary">
                Join solicitors completing CPD consistently each month
              </p>
              <p className="font-semibold text-primary">Your plan</p>
              <p className="">You can change this anytime</p>
            </div>
          ) : (
            <>
              <p className="font-semibold  ">You&apos;re almost done</p>
              <p className=" my-4">
                Setting up CPD for your account (your email)
              </p>

              <div className="border-primary bg-primary/10 border p-4 rounded">
                <p className="font-semibold">{form.getValues("plan_type")} </p>
                <p className="">First month free. No charge today</p>
              </div>
            </>
          )}
          <form
            onSubmit={(e) => {
              // console.log("form onSubmit event", e);
              // delegate to react-hook-form
              form.handleSubmit(handleSubmit)(e as any);
            }}
            className="grid gap-4 mt-4"
          >
            {currentStep === 1 && (
              <>
                <Controller
                  name="plan_type"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <NativeSelect
                        {...field}
                        id={field.name}
                        aria-invalid={fieldState.invalid}
                      >
                        <option value="">Select</option>
                        {pricingCards.map((area) => (
                          <option
                            key={area.title}
                            value={`${area.title} (${area.price})`}
                          >
                            {`${area.title} (${area.price})`}
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
                  name="email"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <Input
                        {...field}
                        id={field.name}
                        type="email"
                        aria-invalid={fieldState.invalid}
                        placeholder="Work Email"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
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
              </>
            )}

            {currentStep === 2 && (
              <>
                <Controller
                  name="selected_areas"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field
                      data-invalid={fieldState.invalid}
                      className="border-b pb-8"
                    >
                      <FieldLabel className="font-bold">
                        Choose areas
                      </FieldLabel>
                      <p className="text-primary">
                        Select areas relevant to your work
                      </p>
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
                                      field.value.filter(
                                        (v: string) => v !== area,
                                      ),
                                    );
                                  }
                                }}
                              />
                              <FieldContent>
                                <FieldTitle className="text-primary">
                                  {area}
                                </FieldTitle>
                              </FieldContent>
                            </Field>
                          </FieldLabel>
                        ))}
                      </div>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <div className="mt-4">
                  <p className="font-semibold">Secure Payment setup</p>
                  <p className="text-sm text-gray-400">
                    Required to activate your free month. You won&apos;t be
                    charged today
                  </p>
                </div>

                <div className="space-y-4">
                  <label className="block">
                    <span className="text-sm font-medium">Card Details</span>
                    <div className="mt-1 p-3 border rounded-md">
                      <CardElement
                        options={{
                          style: {
                            base: {
                              fontSize: "16px",
                              color: "#424770",
                              "::placeholder": {
                                color: "#aab7c4",
                              },
                            },
                            invalid: {
                              color: "#9e2146",
                            },
                          },
                        }}
                      />
                    </div>
                  </label>
                </div>

                <Controller
                  name="policy_agreement"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <div
                      data-invalid={fieldState.invalid}
                      className="flex  gap-2 items-start"
                    >
                      <Checkbox
                        id="policy_agreement"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="mt-1 w-4 h-4"
                      />
                      <div className="flex-1">
                        <p className="text-sm">
                          By submitting this form, you agree to our{" "}
                          <Link
                            href="/terms"
                            target="_blank"
                            className="hover:underline text-primary"
                          >
                            Terms
                          </Link>
                          ,{" "}
                          <Link
                            href="/privacy-policy"
                            target="_blank"
                            className="hover:underline text-primary"
                          >
                            Privacy Policy
                          </Link>{" "}
                          and{" "}
                          <Link
                            href="/cookies-policy"
                            target="_blank"
                            className="hover:underline text-primary"
                          >
                            Cookies Policy
                          </Link>
                        </p>
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </div>
                    </div>
                  )}
                />
              </>
            )}

            {currentStep === 1 && (
              <div className="flex justify-end">
                <Button
                  type="button"
                  variant="secondary"
                  onClick={handleNext}
                  disabled={form.formState.isSubmitting}
                  className="w-full"
                  size={"lg"}
                >
                  Continue
                </Button>
              </div>
            )}

            {currentStep === 2 && (
              <Button
                type="submit"
                variant="secondary"
                disabled={form.formState.isSubmitting}
                className="w-full"
                size={"lg"}
                onClick={() => console.log("submit button clicked")}
              >
                {form.formState.isSubmitting ? "Submitting..." : "Subscribe"}
              </Button>
            )}
          </form>
          <p className="mt-8 text-center">
            {currentStep === 1
              ? "Takes under 2 minutes. No obligations"
              : "No Charge Today. Cancel Anytime. Instant access after signup"}
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
              Free trial started{" "}
            </h2>

            {/* Body Text */}
            <div className="  border-t pt-2 space-y-2 text-muted-foreground">
              <p>Your free month of CPDs is now active.</p>
              <p className="text-sm">
                Check your email for immediate access to your first CPD update.
              </p>
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
