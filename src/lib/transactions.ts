import { supabase } from "@/lib/supabase/server";

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

