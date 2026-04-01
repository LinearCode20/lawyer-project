import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    // Create a SetupIntent
    const setupIntent = await stripe.setupIntents.create({
      customer_email: email,
      payment_method_types: ["card"],
    });

    return NextResponse.json({
      clientSecret: setupIntent.client_secret,
    });
  } catch (error: any) {
    console.error("Error creating SetupIntent:", error);
    return NextResponse.json(
      { message: error?.message || "Failed to create SetupIntent" },
      { status: 500 }
    );
  }
}
