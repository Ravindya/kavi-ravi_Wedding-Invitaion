import { NextRequest, NextResponse } from "next/server";

interface RsvpPayload {
  name: string;
  attendance: "attending" | "declined";
  guests: number;
  phone?: string;
  message?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: RsvpPayload = await req.json();

    const { name, attendance, guests, phone, message } = body;

    // Validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Name is required" },
        { status: 400 }
      );
    }

    if (
      attendance !== "attending" &&
      attendance !== "declined"
    ) {
      return NextResponse.json(
        { success: false, error: "Invalid attendance status" },
        { status: 400 }
      );
    }

    const guestCount =
      typeof guests === "number" &&
      guests >= 1 &&
      guests <= 10
        ? guests
        : 1;


    const newRecord = {
      id: `rsvp_${Date.now()}_${Math.random()
        .toString(36)
        .substring(2, 7)}`,

      name: name.trim(),

      attendance,

      guests:
        attendance === "declined"
          ? 0
          : guestCount,

      phone: phone ? phone.trim() : "",

      message: message ? message.trim() : "",

      timestamp: new Date().toISOString(),
    };


    // Send RSVP to Google Sheet
    const webhookUrl =
      process.env.GOOGLE_SHEETS_WEBHOOK_URL ||
      process.env.RSVP_WEBHOOK_URL;


    if (!webhookUrl) {
      return NextResponse.json(
        {
          success: false,
          error: "Google Sheet webhook is not configured",
        },
        { status: 500 }
      );
    }


    await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecord),
    });


    return NextResponse.json({
      success: true,
      message: "RSVP recorded successfully",
      recordId: newRecord.id,
    });


  } catch (error) {

    console.error(
      "RSVP submission error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error: "Failed to process RSVP submission",
      },
      {
        status: 500,
      }
    );
  }
}