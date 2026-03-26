"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TreePine, ArrowRight } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Teak Wood",
    hindiName: "Sagwan",
    slug: "teak",
    description: "Premium quality teak for furniture and construction",
    priceRange: "₹2,500 - ₹4,500/cft",
    image: null,
    features: ["Durable", "Termite Resistant", "Premium Finish"],
    color: "bg-amber-50",
    borderColor: "border-amber-200",
  },
  {
    id: 2,
    name: "Sal Wood",
    hindiName: "Sakhua",
    slug: "sal",
    description: "Hardwood ideal for construction and railway sleepers",
    priceRange: "₹1,800 - ₹2,800/cft",
    image: null,
    features: ["High Strength", "Water Resistant", "Long Lasting"],
    color: "bg-orange-50",
    borderColor: "border-orange-200",
  },
  {
    id: 3,
    name: "Sheesham",
    hindiName: "Indian Rosewood",
    slug: "sheesham",
    description: "Beautiful grain pattern for furniture and decor",
    priceRange: "₹2,000 - ₹3,500/cft",
    image: null,
    features: ["Beautiful Grain", "Easy to Polish", "Furniture Grade"],
    color: "bg-rose-50",
    borderColor: "border-rose-200",
  },
  {
    id: 4,
    name: "Mango Wood",
    hindiName: "Aam",
    slug: "mango",
    description: "Sustainable wood for affordable furniture",
    priceRange: "₹800 - ₹1,500/cft",
    image: null,
    features: ["Eco-Friendly", "Light Weight", "Budget Friendly"],
    color: "bg-green-50",
    borderColor: "border-green-200",
  },
  {
    id: 5,
    name: "Pine Wood",
    hindiName: "Cheer",
    slug: "pine",
    description: "Softwood for interiors and packaging",
    priceRange: "₹600 - ₹1,200/cft",
    image: null,
    features: ["Light Weight", "Easy to Work", "Cost Effective"],
    color: "bg-cyan-50",
    borderColor: "border-cyan-200",
  },
  {
    id: 6,
    name: "Deodar Wood",
    hindiName: "Devdar",
    slug: "deodar",
    description: "Aromatic wood for doors and windows",
    priceRange: "₹1,500 - ₹2,500/cft",
    image: null,
    features: ["Aromatic", "Naturally Oily", "Weather Resistant"],
    color: "bg-teal-50",
    borderColor: "border-teal-200",
  },
];

export function CategoriesSection() {
  return (
    <section id="products" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore by <span className="text-primary">Wood Type</span>
          </h2>
          <p className="text-muted-foreground">
            Choose from a wide variety of premium quality timber sourced from 
            certified forests across India and imported from trusted suppliers.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link key={category.id} href={`#${category.slug}`}>
              <Card className={`group h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 ${category.borderColor} ${category.color}`}>
                <CardContent className="p-6">
                  {/* Icon/Image */}
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <TreePine className="h-8 w-8 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-xl font-semibold">{category.name}</h3>
                      <p className="text-sm text-muted-foreground">{category.hindiName}</p>
                    </div>

                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                      {category.features.map((feature) => (
                        <span
                          key={feature}
                          className="text-xs px-2 py-1 rounded-full bg-background border"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Price */}
                    <div className="pt-2">
                      <p className="text-lg font-semibold text-primary">
                        {category.priceRange}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Button size="lg" variant="outline" className="gap-2">
            View All Products
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
