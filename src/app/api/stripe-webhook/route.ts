import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { RecordInvoicePayment } from "@/lib/transactions";

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || "";

export async function POST(request: NextRequest) {
  const sig = request.headers.get("stripe-signature") || "";

  const body = await request.text();

  let event: any;
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err: any) {
    console.error("Webhook signature verification failed:", err?.message || err);
    return NextResponse.json({ received: false, error: "Invalid signature" }, { status: 400 });
  }

  try {
    switch (event.type) {
      case "invoice.payment_succeeded": {
        const invoice = event.data.object;
        console.log("Invoice payment succeeded for invoice:", invoice.id);
        await RecordInvoicePayment(invoice);
        break;
      }
      case "invoice.payment_failed": {
        const invoice = event.data.object;
        console.warn("Invoice payment failed for invoice:", invoice.id);
        // TODO: update DB or notify user
        break;
      }
      case "customer.subscription.deleted": {
        const subscription = event.data.object;
        console.log("Subscription canceled:", subscription.id);
        // TODO: mark subscription inactive in DB
        break;
      }
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (err: any) {
    console.error("Error handling webhook event:", err);
    return NextResponse.json({ received: false, error: err?.message || "Webhook handler error" }, { status: 500 });
  }
}
