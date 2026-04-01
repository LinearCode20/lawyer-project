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



