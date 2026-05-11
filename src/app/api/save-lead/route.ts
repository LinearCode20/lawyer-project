import { NextRequest, NextResponse } from "next/server";
import { SaveLead } from "@/lib/transactions";
import { error } from "console";

export async function POST(req: NextRequest) {
    try {

        const { name, email, message } = await req.json();

        await SaveLead({
            name, email, message
        });

        return NextResponse.json({
            success: true,
            message: "Lead saved successfully.",
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