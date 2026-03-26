"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, TreePine, Truck, Shield, Award } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 wood-texture opacity-50" />
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-sm">
                🇮🇳 Made in India
              </Badge>
              <Badge variant="outline" className="text-sm border-green-600 text-green-600">
                ✓ GST Invoice
              </Badge>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Premium Quality{" "}
              <span className="text-primary">Timber & Wood</span>{" "}
              Products
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl">
              India&apos;s most trusted timber marketplace. Get premium Teak, Sal, Sheesham, 
              and other wood varieties at competitive prices with guaranteed quality and 
              pan-India delivery.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2" asChild>
                <Link href="#products">
                  Browse Products
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Play className="h-4 w-4" />
                Watch Video
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">25+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">10K+</p>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Products</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">28</p>
                <p className="text-sm text-muted-foreground">States Covered</p>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-primary/10 rounded-full blur-2xl" />
              
              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl p-8 border">
                <div className="aspect-square rounded-2xl bg-muted flex items-center justify-center overflow-hidden">
                  <div className="text-center p-8">
                    <TreePine className="h-32 w-32 mx-auto text-primary mb-4" />
                    <p className="text-2xl font-semibold text-primary">Premium Teak Wood</p>
                    <p className="text-muted-foreground mt-2">Starting from ₹2,500/cft</p>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -left-4 top-1/4 bg-card shadow-lg rounded-xl p-4 border animate-fade-in">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Truck className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Free Delivery</p>
                    <p className="text-xs text-muted-foreground">Above ₹50,000</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 bottom-1/4 bg-card shadow-lg rounded-xl p-4 border animate-fade-in">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Quality Assured</p>
                    <p className="text-xs text-muted-foreground">Certified Products</p>
                  </div>
                </div>
              </div>

              <div className="absolute right-8 -bottom-4 bg-card shadow-lg rounded-xl p-4 border animate-fade-in">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Best Price</p>
                    <p className="text-xs text-muted-foreground">Guaranteed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 100V60C240 20 480 0 720 20C960 40 1200 80 1440 60V100H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
}
