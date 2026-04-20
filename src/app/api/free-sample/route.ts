
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { FreeSampleData } from "@/lib/transactions";

const contactSchema = z.object({
  full_name: z.string().min(2, "full name is required"),
  email: z.string().email("Invalid email"),
  selected_areas: z.string().min(1, "selected areas is required"),
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

    const { full_name, email, selected_areas } = result.data;
    // FREE CHAPTER EMAIL
    let sampleFile = '';    
    if(selected_areas==="Private Client") {
      sampleFile = `${process.env.BASE_URL}/pdf/private client sample 16 april 2026 version 2.pdf`;    
    } else {
      return NextResponse.json(
        {
          message: `${selected_areas} is coming soon.`,
        },
        { status: 500 }
      );
    }

    // Save data
    await FreeSampleData({
      full_name, email, selected_areas,
      created_at: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Free sample file downloading.",
      data: sampleFile,
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