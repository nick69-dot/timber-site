"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TreePine, Award, Users, Building2, Target, Heart } from "lucide-react";

const milestones = [
  { year: "1999", event: "Founded in Noida, UP" },
  { year: "2005", event: "Expanded to 10 states" },
  { year: "2010", event: "ISO 9001:2008 Certified" },
  { year: "2015", event: "Launched online platform" },
  { year: "2020", event: "Pan-India delivery network" },
  { year: "2024", event: "10,000+ happy customers" },
];

const values = [
  {
    icon: Target,
    title: "Quality First",
    description: "We never compromise on the quality of our timber products",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Your satisfaction is our top priority in every interaction",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Transparent pricing and honest business practices",
  },
  {
    icon: Building2,
    title: "Sustainability",
    description: "Committed to eco-friendly and sustainable sourcing",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-4">About Us</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                India&apos;s Trusted <span className="text-primary">Timber Partner</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                With over 25 years of experience in the timber industry, TimberMart India 
                has established itself as a leading supplier of premium quality wood products 
                across the nation.
              </p>
            </div>

            <p className="text-muted-foreground">
              Our journey began in 1999 with a simple mission: to provide the highest quality 
              timber at competitive prices with exceptional customer service. Today, we serve 
              furniture manufacturers, construction companies, interior designers, and individual 
              customers across all 28 states of India.
            </p>

            <p className="text-muted-foreground">
              We source our timber from certified sustainable forests and trusted suppliers 
              from India, Myanmar, Africa, and other regions. Every piece of wood undergoes 
              strict quality checks before reaching our customers.
            </p>

            <Button size="lg" className="gap-2">
              <Award className="h-4 w-4" />
              Our Certifications
            </Button>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            {/* Timeline */}
            <div className="bg-card rounded-2xl p-6 border">
              <h3 className="font-semibold text-lg mb-4">Our Journey</h3>
              <div className="relative">
                <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-border" />
                <div className="space-y-4">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex items-start gap-4 pl-6 relative">
                      <div className="absolute left-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                      </div>
                      <div>
                        <Badge variant="outline" className="mb-1">{milestone.year}</Badge>
                        <p className="text-sm text-muted-foreground">{milestone.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-4 border hover:border-primary/50 transition-colors"
                >
                  <value.icon className="h-8 w-8 text-primary mb-2" />
                  <h4 className="font-semibold text-sm mb-1">{value.title}</h4>
                  <p className="text-xs text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
