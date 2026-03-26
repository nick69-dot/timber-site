"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  Truck,
  Shield,
  Clock,
  CreditCard,
  Headphones,
  Leaf,
  FileCheck,
} from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "Only A-grade timber from certified sources with quality guarantee",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: Truck,
    title: "Pan-India Delivery",
    description: "Fast delivery to all 28 states with real-time tracking",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Every piece inspected for quality before dispatch",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: CreditCard,
    title: "Flexible Payment",
    description: "UPI, Cards, Net Banking, COD & EMI options available",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: FileCheck,
    title: "GST Invoice",
    description: "Proper GST invoice with input tax credit benefit",
    color: "text-teal-600",
    bg: "bg-teal-50",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Dedicated support team for all your queries",
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
  {
    icon: Leaf,
    title: "Sustainable Sourcing",
    description: "Eco-friendly timber from certified sustainable forests",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "98% on-time delivery record with guaranteed timelines",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-primary">TimberMart India</span>
          </h2>
          <p className="text-muted-foreground">
            With over 25 years of experience, we have built a reputation for 
            quality, reliability, and customer satisfaction.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-sm hover:shadow-md transition-shadow"
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`w-16 h-16 rounded-2xl ${feature.bg} flex items-center justify-center mx-auto mb-4`}
                >
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 p-8 rounded-2xl bg-primary text-primary-foreground">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold">25+</p>
              <p className="text-sm opacity-80 mt-1">Years in Business</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold">10,000+</p>
              <p className="text-sm opacity-80 mt-1">Happy Customers</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold">500+</p>
              <p className="text-sm opacity-80 mt-1">Product Varieties</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold">28</p>
              <p className="text-sm opacity-80 mt-1">States Served</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
