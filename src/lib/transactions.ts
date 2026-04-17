import { supabase } from "@/lib/supabase/server";

/**
 * Save data for free sample user info
 */
type SubscribeFree = {
  full_name: string;
  email: string;
  firm_name: string;
  plan_type: string;
  selected_areas: string;
  stripe_customer_id: string;
  stripe_subscription_id?: string | null;
  created_at: string;
};

export async function SubscribeFree(data: SubscribeFree) {
  const { error } = await supabase
    .from("free_subscribe_request")
    .insert([data]);

  if (error) {
    console.error("Supabase insert error:", error);
    throw new Error("Failed to save information.");
  }
}


export async function getSubscriberByEmail(email: string) {
  const { data } = await supabase
    .from("free_subscribe_request")
    .select("*")
    .eq("email", email)
    .single();

  return data;
}



type CaptureEmail = {
  email: string;
  areas_of_law: string;
  created_at: string;
};

export async function CaptureEmailData(data: CaptureEmail) {
  const { error } = await supabase
    .from("subscribe_emails_captured")
    .insert([data]);

  if (error) {
    console.error("Supabase insert error:", error);
    if (error.code === "23505") {
      throw new Error("This email has already been captured.");
    }
    throw new Error("Failed to save transaction");
  }
}

/**
 * Save data for free sample user info
 */
type FreeSample = {
  full_name: string;
  email: string;
  selected_areas: string;
  created_at: string;
};

export async function FreeSampleData(data: FreeSample) {
  const { error } = await supabase
    .from("free_sample_request")
    .insert([data]);

  if (error) {
    console.error("Supabase insert error:", error);
    throw new Error("Failed to save information.");
  }
}


/**
 * Record a payment transaction coming from Stripe (invoice/payment succeeded)
 */
export async function CreateTransaction(data: {
  stripe_customer_id: string;
  stripe_subscription_id?: string | null;
  stripe_invoice_id?: string | null;
  amount: number; // in smallest currency unit (pence/cents)
  currency: string;
  status: string;
  paid_at: string | null;
  email?: string | null;
  metadata?: any;
}) {
  const { error } = await supabase.from("transactions").insert([data]);

  if (error) {
    console.error("Supabase insert error (transactions):", error);
    throw new Error("Failed to save transaction");
  }
}

/**
 * Helper to process a Stripe invoice object and persist transaction + link to subscriber
 */
export async function RecordInvoicePayment(invoice: any) {
  try {
    const amount = invoice.amount_paid ?? invoice.total ?? 0;
    const currency = invoice.currency ?? invoice.lines?.data?.[0]?.currency ?? "";
    const customer = invoice.customer;
    const subscription = invoice.subscription;
    const invoiceId = invoice.id;
    const paidAt = invoice.status_transitions?.paid_at
      ? new Date(invoice.status_transitions.paid_at * 1000).toISOString()
      : new Date().toISOString();

    // Insert transaction
    await CreateTransaction({
      stripe_customer_id: String(customer),
      stripe_subscription_id: subscription ? String(subscription) : null,
      stripe_invoice_id: invoiceId ? String(invoiceId) : null,
      amount,
      currency,
      status: invoice.status || "paid",
      paid_at: paidAt,
      email: invoice.customer_email ?? null,
      metadata: invoice.metadata ?? null,
    });

    // Update subscriber record if present (set last_payment_at, active true)
    const { error: updateErr } = await supabase
      .from("free_subscribe_request")
      .update({
        last_payment_at: paidAt,
        active: true,
      })
      .eq("stripe_customer_id", String(customer));

    if (updateErr) {
      console.warn("Failed to update subscriber after transaction:", updateErr);
    }
  } catch (err) {
    console.error("Error recording invoice payment:", err);
    throw err;
  }
}



