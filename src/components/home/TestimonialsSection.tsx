"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Furniture Manufacturer",
    company: "Kumar Furniture Works, Delhi",
    rating: 5,
    review: "TimberMart India has been our trusted supplier for over 5 years. The quality of their teak wood is exceptional, and their prices are very competitive. The GST invoice helps us claim input tax credit. Highly recommended!",
    avatar: "RK",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Interior Designer",
    company: "Dream Interiors, Mumbai",
    rating: 5,
    review: "As an interior designer, I need premium quality wood for my projects. TimberMart never disappoints! Their sheesham and teak varieties are perfect for high-end furniture. The delivery is always on time.",
    avatar: "PS",
  },
  {
    id: 3,
    name: "Mohammed Asif",
    role: "Construction Contractor",
    company: "Asif Construction Co., Hyderabad",
    rating: 5,
    review: "We've been ordering Sal wood in bulk for construction projects. The quality is consistent, and their team is very supportive. The price calculator on their website makes it easy to estimate costs.",
    avatar: "MA",
  },
  {
    id: 4,
    name: "Anita Patel",
    role: "Architect",
    company: "Patel & Associates, Ahmedabad",
    rating: 4,
    review: "Great variety of wood types and grades. The quality certification gives confidence to our clients. Their technical team helped us choose the right wood for our heritage restoration project.",
    avatar: "AP",
  },
  {
    id: 5,
    name: "Suresh Menon",
    role: "Door Manufacturer",
    company: "Menon Doors & Windows, Kochi",
    rating: 5,
    review: "The Deodar wood we purchased was of excellent quality. Natural oils in the wood make it perfect for doors and windows. Customer service is very responsive and helpful.",
    avatar: "SM",
  },
  {
    id: 6,
    name: "Deepika Reddy",
    role: "Exporter",
    company: "Global Wood Exports, Chennai",
    rating: 5,
    review: "We source timber from TimberMart for export to Middle East countries. Their documentation and certification support is excellent. Quality is consistent in every shipment.",
    avatar: "DR",
  },
];

export function TestimonialsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const currentTestimonials = testimonials.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-primary">Customers Say</span>
          </h2>
          <p className="text-muted-foreground">
            Trusted by thousands of furniture makers, contractors, and architects 
            across India
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentTestimonials.map((testimonial) => (
            <Card key={testimonial.id} className="relative">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/10" />

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  &quot;{testimonial.review}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
              disabled={currentPage === 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            {[...Array(totalPages)].map((_, i) => (
              <Button
                key={i}
                variant={currentPage === i ? "default" : "outline"}
                size="sm"
                className="w-8 h-8 p-0"
                onClick={() => setCurrentPage(i)}
              >
                {i + 1}
              </Button>
            ))}
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
              disabled={currentPage === totalPages - 1}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
