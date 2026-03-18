export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { CaptureEmailData } from "@/lib/transactions";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    let { email, areasOfLaw, emailType } = body;

    email = email?.trim().toLowerCase();
    areasOfLaw = areasOfLaw?.trim();

    //  Validate email
    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email is required" },
        { status: 400 }
      );
    }

    // Validate areasOfLaw (REQUIRED)
    if (!areasOfLaw) {
      return NextResponse.json(
        { success: false, message: "Law area is required" },
        { status: 400 }
      );
    }

    if (emailType != "CaptureEmail") {
      return NextResponse.json(
        { success: false, message: "Invalid email capture type" },
        { status: 400 }
      );
    }

    // Save data
    const subscribeId = await CaptureEmailData({
      email,
      areas_of_law: areasOfLaw,
      created_at: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      data: subscribeId,
    });

  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error?.message || "Internal server error",
      },
      { status: 500 }
    );
  }
}