import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { stripe } from "@/lib/stripe";
import { getSubscriberByEmail, SubscribeFree } from "@/lib/transactions";

import { sendEmail } from "@/lib/mailer";
import fs from "fs";
import path from "path";

//  Validation schema
const subscriberSchema = z.object({
  full_name: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email"),
 // firm_name: z.string().min(2),
  plan_type: z.string().min(1),
  selected_areas: z.string().min(1),
  payment_method_id: z.string().min(1, "Payment method is required"),
  plan_id: z.string().min(1, "Plan id is required"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    /********************* */
    //  // Email subject
    // const esubject = "Free Subscription Confirmation";
    
    // // Template path
    // const htmlPath = path.join(
    //   process.cwd(),
    //   "email-templates/free-subscription.html"
    // );
    
    // if (!fs.existsSync(htmlPath)) {
    //   throw new Error("EMAIL_TEMPLATE_NOT_FOUND");
    // }
    
    // // Read & replace template
    // const htmlData = fs
    //   .readFileSync(htmlPath, "utf8")
    //   .replace("{{USER_NAME}}", "user full name");
      
    // // Send email
    // await sendEmail({
    //   to: "abg@yopmail.com",
    //   subject: esubject,
    //   htmlData,
    // });
    


    // return NextResponse.json({
    //   success: true,
    //   message: "Customer created successfully",
    //   data: [],
    // });

    /********************* */
      
    //Validate request
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
      plan_id,
    } = result.data;

     //  1. CHECK EMAIL IN DB
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
    let customer: any = '';
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

    // select stripe price table id based on plan id
    let $priceId = "";
    if(plan_id === "1") {
      $priceId = process.env.STRIPE_PRICE_ID_A || "";
    } else if(plan_id === "2") {
      $priceId = process.env.STRIPE_PRICE_ID_B || "";
    } else if(plan_id === "3") {
      $priceId = process.env.STRIPE_PRICE_ID_C || "";
    }
    console.log('Selected Price ID:', $priceId);
    // Create subscription on Stripe so payments recur monthly.
    // Trial period set to 30 days (first month free). Adjust as needed.
    let stripeSubscriptionId: string | null = null;
    if ($priceId !== "") {
      const subscription = await stripe.subscriptions.create({
        customer: customer.id,
        items: [
          {
            price: $priceId,
          },
        ],
        // 30-day free trial
        trial_period_days: 30,
        expand: ["latest_invoice.payment_intent"],
      });

      stripeSubscriptionId = subscription.id;
    }

    const firm_name = "";
    //  Save in your DB
    const subscribeId = await SubscribeFree({
      full_name,
      email,
      firm_name,
      plan_type,
      selected_areas,
      stripe_customer_id: customer.id,
      stripe_subscription_id: stripeSubscriptionId,
      created_at: new Date().toISOString(),
    });

    //send Email to user
    // Email subject
    const emailSubject = "Free Subscription Confirmation";
    
    // Template path
    const templatePath = path.join(
      process.cwd(),
      "email-templates/free-subscription.html"
    );
    
    if (!fs.existsSync(templatePath)) {
      throw new Error("EMAIL_TEMPLATE_NOT_FOUND");
    }
    
    // Read & replace template
    const html = fs
      .readFileSync(templatePath, "utf8")
      .replace("{{USER_NAME}}", full_name);
      
    // Send email
    await sendEmail({
      to: email,
      subject: emailSubject,
      html,
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