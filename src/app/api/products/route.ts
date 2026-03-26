import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const woodType = searchParams.get("woodType");
    const grade = searchParams.get("grade");
    const featured = searchParams.get("featured");

    const where: Record<string, unknown> = { isActive: true };

    if (woodType) {
      where.woodType = woodType;
    }
    if (grade) {
      where.grade = { contains: grade };
    }
    if (featured === "true") {
      where.isFeatured = true;
    }

    const products = await db.product.findMany({
      where,
      include: {
        category: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({ products });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
