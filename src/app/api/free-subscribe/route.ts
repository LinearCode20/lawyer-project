
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { SubscribeFree } from "@/lib/transactions";

const contactSchema = z.object({
  full_name: z.string().min(2, "full name is required"),
  email: z.string().email("Invalid email"),
  firm_name: z.string().min(2).max(500),
  selected_areas: z.string(),
  payment_method_id: z.string().optional(),
});


export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate request body safely
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          message: "Validation failed",
          errors: result.error.flatten(),
        },
        { status: 400 }
      );
    }

    const { full_name, email, firm_name, selected_areas } = result.data;

    // Save data
    const subscribeId = await SubscribeFree({
      full_name, email, firm_name, selected_areas,
      created_at: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Successfully free subscribe.",
      data: subscribeId,
    });
  } catch (error: any) {
    
    return NextResponse.json(
      {
        message: error?.message || "Failed to subscribe.",
      },
      { status: 500 }
    );
  }
}