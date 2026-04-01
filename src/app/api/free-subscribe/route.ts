import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { stripe } from "@/lib/stripe";
import { getSubscriberByEmail, SubscribeFree } from "@/lib/transactions";

// ✅ Validation schema
const subscriberSchema = z.object({
  full_name: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email"),
 // firm_name: z.string().min(2),
  plan_type: z.string().min(1),
  selected_areas: z.string().min(1),
  payment_method_id: z.string().min(1, "Payment method is required"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
      
    // Validate request
    const result = subscriberSchema.safeParse(body);
    //console.log('result', result);
    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: result.error.flatten(),
        },
        { status: 400 }
      );
    }

    const {
      full_name,
      email,
     // firm_name,
      plan_type,
      selected_areas,
      payment_method_id,
    } = result.data;

     // ✅ 1. CHECK EMAIL IN DB
    const existingUser = await getSubscriberByEmail(email);

    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          message: "Email already exists. Please enter or use another email.",
        },
        { status: 409 } // conflict
      );
    }
    
    const existingCustomers = await stripe.customers.list({
      email,
      limit: 1,
    });
    let customer: string = '';
    if (existingCustomers.data.length > 0) {
      customer = existingCustomers.data[0];
    } else {
      // Create new customer
      customer = await stripe.customers.create({
        name: full_name,
        email: email,
        metadata: {
          plan_type,
          selected_areas,
        },
      });
    }

    //  Attach payment method
    await stripe.paymentMethods.attach(payment_method_id, {
      customer: customer.id,
    });

    //  Set default payment method
    await stripe.customers.update(customer.id, {
      invoice_settings: {
        default_payment_method: payment_method_id,
      },
    });
    const firm_name = "";
    //  Save in your DB
    const subscribeId = await SubscribeFree({
      full_name,
      email,
      firm_name,
      plan_type,
      selected_areas,
      stripe_customer_id: customer.id,
      created_at: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Customer created successfully",
      data: {
        subscribeId,
        customer_id: customer.id,
      },
    });
  } catch (error: any) {
   // console.error("Stripe Error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error?.raw?.message ||
          error?.message ||
          "Failed to create customer",
      },
      { status: 500 }
    );
  }
}