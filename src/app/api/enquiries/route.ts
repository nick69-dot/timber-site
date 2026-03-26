import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, woodType, quantity, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create enquiry
    const enquiry = await db.enquiry.create({
      data: {
        name,
        email,
        phone,
        company: company || null,
        subject: `Enquiry for ${woodType || "Timber Products"}`,
        message,
        woodType: woodType || null,
        quantity: quantity || null,
        status: "new",
      },
    });

    return NextResponse.json({
      success: true,
      enquiry,
      message: "Enquiry submitted successfully",
    });
  } catch (error) {
    console.error("Error creating enquiry:", error);
    return NextResponse.json(
      { error: "Failed to submit enquiry" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const enquiries = await db.enquiry.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 50,
    });

    return NextResponse.json({ enquiries });
  } catch (error) {
    console.error("Error fetching enquiries:", error);
    return NextResponse.json(
      { error: "Failed to fetch enquiries" },
      { status: 500 }
    );
  }
}
