import { NextResponse } from "next/server";
import { db } from "@/lib/db";

const categories = [
  {
    name: "Teak Wood",
    slug: "teak",
    description: "Premium quality teak wood for furniture and construction",
  },
  {
    name: "Sal Wood",
    slug: "sal",
    description: "Hardwood ideal for construction and railway sleepers",
  },
  {
    name: "Sheesham",
    slug: "sheesham",
    description: "Indian rosewood with beautiful grain patterns",
  },
  {
    name: "Mango Wood",
    slug: "mango",
    description: "Sustainable and affordable wood option",
  },
  {
    name: "Pine Wood",
    slug: "pine",
    description: "Lightweight softwood for interiors",
  },
  {
    name: "Deodar",
    slug: "deodar",
    description: "Aromatic wood for doors and windows",
  },
];

const products = [
  {
    name: "Premium Teak Wood Logs",
    slug: "premium-teak-logs",
    description: "High-quality Myanmar teak logs perfect for premium furniture making. Known for durability, termite resistance, and beautiful grain patterns.",
    woodType: "Teak",
    grade: "A Grade",
    origin: "Myanmar",
    length: 10,
    breadth: 12,
    thickness: 12,
    pricePerCft: 4500,
    stock: 150,
    minOrder: 10,
    unit: "cft",
    isFeatured: true,
    moisture: "8-12%",
    finish: "Rough",
    certification: "FSC Certified",
    features: JSON.stringify(["Termite Resistant", "Durable", "Premium Quality"]),
    categoryName: "Teak Wood",
  },
  {
    name: "Indian Sal Wood Beams",
    slug: "indian-sal-beams",
    description: "Strong and durable Sal wood beams for construction purposes. Ideal for door frames, windows, and structural work.",
    woodType: "Sal",
    grade: "B Grade",
    origin: "Indian",
    length: 12,
    breadth: 10,
    thickness: 10,
    pricePerCft: 2200,
    stock: 200,
    minOrder: 20,
    unit: "cft",
    isFeatured: true,
    moisture: "10-14%",
    finish: "Rough",
    certification: "ISI Certified",
    features: JSON.stringify(["High Strength", "Water Resistant", "Long Lasting"]),
    categoryName: "Sal Wood",
  },
  {
    name: "Sheesham Furniture Planks",
    slug: "sheesham-planks",
    description: "Beautiful Sheesham planks with stunning grain patterns, perfect for crafting high-end furniture pieces.",
    woodType: "Sheesham",
    grade: "Premium",
    origin: "Indian",
    length: 8,
    breadth: 6,
    thickness: 2,
    pricePerCft: 3200,
    stock: 80,
    minOrder: 5,
    unit: "cft",
    isFeatured: true,
    moisture: "6-10%",
    finish: "Smooth",
    certification: "FSC Certified",
    features: JSON.stringify(["Beautiful Grain", "Easy to Polish", "Furniture Grade"]),
    categoryName: "Sheesham",
  },
  {
    name: "Mango Wood Blocks",
    slug: "mango-blocks",
    description: "Eco-friendly mango wood blocks, perfect for small furniture items and decorative pieces.",
    woodType: "Mango",
    grade: "Commercial",
    origin: "Indian",
    length: 6,
    breadth: 8,
    thickness: 8,
    pricePerCft: 1200,
    stock: 300,
    minOrder: 50,
    unit: "cft",
    isFeatured: false,
    moisture: "8-12%",
    finish: "Rough",
    certification: null,
    features: JSON.stringify(["Eco-Friendly", "Light Weight", "Budget Friendly"]),
    categoryName: "Mango Wood",
  },
  {
    name: "Pine Wood Boards",
    slug: "pine-boards",
    description: "Imported pine wood boards, ideal for interior paneling, packaging, and light construction work.",
    woodType: "Pine",
    grade: "B Grade",
    origin: "Imported",
    length: 8,
    breadth: 4,
    thickness: 1,
    pricePerCft: 950,
    stock: 500,
    minOrder: 100,
    unit: "cft",
    isFeatured: false,
    moisture: "10-15%",
    finish: "Smooth",
    certification: "PEFC Certified",
    features: JSON.stringify(["Light Weight", "Easy to Work", "Cost Effective"]),
    categoryName: "Pine Wood",
  },
  {
    name: "Deodar Door Frames",
    slug: "deodar-frames",
    description: "Premium Deodar wood door frames with natural oils that provide weather resistance and pleasant aroma.",
    woodType: "Deodar",
    grade: "A Grade",
    origin: "Indian",
    length: 7,
    breadth: 4,
    thickness: 3,
    pricePerCft: 2400,
    stock: 60,
    minOrder: 5,
    unit: "piece",
    isFeatured: true,
    moisture: "8-10%",
    finish: "Smooth",
    certification: "ISI Certified",
    features: JSON.stringify(["Aromatic", "Naturally Oily", "Weather Resistant"]),
    categoryName: "Deodar",
  },
  {
    name: "Teak Plywood Sheets",
    slug: "teak-plywood",
    description: "High-quality teak faced plywood sheets, perfect for modular furniture and interior decoration.",
    woodType: "Teak",
    grade: "Premium",
    origin: "Indian",
    length: 8,
    breadth: 4,
    thickness: 0.75,
    pricePerCft: 3800,
    stock: 100,
    minOrder: 10,
    unit: "sheet",
    isFeatured: true,
    moisture: "6-8%",
    finish: "Polished",
    certification: "ISI 303",
    features: JSON.stringify(["Water Resistant", "Termite Proof", "Premium Finish"]),
    categoryName: "Teak Wood",
  },
  {
    name: "Rubber Wood Planks",
    slug: "rubber-planks",
    description: "Sustainable rubber wood planks, an eco-friendly alternative for furniture manufacturing.",
    woodType: "Rubber",
    grade: "Commercial",
    origin: "Indian",
    length: 6,
    breadth: 4,
    thickness: 2,
    pricePerCft: 750,
    stock: 400,
    minOrder: 50,
    unit: "cft",
    isFeatured: false,
    moisture: "8-12%",
    finish: "Rough",
    certification: "FSC Certified",
    features: JSON.stringify(["Sustainable", "Uniform Texture", "Budget Friendly"]),
    categoryName: "Mango Wood",
  },
];

const testimonials = [
  {
    customerName: "Rajesh Kumar",
    customerRole: "Furniture Manufacturer",
    company: "Kumar Furniture Works, Delhi",
    rating: 5,
    review: "TimberMart India has been our trusted supplier for over 5 years. The quality of their teak wood is exceptional, and their prices are very competitive. The GST invoice helps us claim input tax credit. Highly recommended!",
    isActive: true,
  },
  {
    customerName: "Priya Sharma",
    customerRole: "Interior Designer",
    company: "Dream Interiors, Mumbai",
    rating: 5,
    review: "As an interior designer, I need premium quality wood for my projects. TimberMart never disappoints! Their sheesham and teak varieties are perfect for high-end furniture. The delivery is always on time.",
    isActive: true,
  },
  {
    customerName: "Mohammed Asif",
    customerRole: "Construction Contractor",
    company: "Asif Construction Co., Hyderabad",
    rating: 5,
    review: "We've been ordering Sal wood in bulk for construction projects. The quality is consistent, and their team is very supportive. The price calculator on their website makes it easy to estimate costs.",
    isActive: true,
  },
];

export async function POST() {
  try {
    // Seed categories
    for (const category of categories) {
      await db.category.upsert({
        where: { slug: category.slug },
        update: category,
        create: category,
      });
    }

    // Get category IDs
    const categoryMap = await db.category.findMany();
    const categoryLookup = Object.fromEntries(
      categoryMap.map((c) => [c.name, c.id])
    );

    // Seed products
    for (const product of products) {
      const { categoryName, ...productData } = product;
      await db.product.upsert({
        where: { slug: product.slug },
        update: {
          ...productData,
          categoryId: categoryLookup[categoryName],
        },
        create: {
          ...productData,
          categoryId: categoryLookup[categoryName],
        },
      });
    }

    // Seed testimonials
    for (const testimonial of testimonials) {
      await db.testimonial.upsert({
        where: {
          id: testimonials.indexOf(testimonial) + 1,
        },
        update: testimonial,
        create: testimonial,
      });
    }

    return NextResponse.json({
      success: true,
      message: "Database seeded successfully",
      data: {
        categories: categories.length,
        products: products.length,
        testimonials: testimonials.length,
      },
    });
  } catch (error) {
    console.error("Error seeding database:", error);
    return NextResponse.json(
      { error: "Failed to seed database" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return POST();
}
