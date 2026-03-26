"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    content: "+91 98765 43210",
    subContent: "Mon-Sat, 9AM-7PM",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@timbermartindia.com",
    subContent: "We reply within 24 hours",
  },
  {
    icon: MapPin,
    title: "Address",
    content: "Industrial Area, Sector 18",
    subContent: "Noida, UP - 201301",
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: "Monday - Saturday",
    subContent: "9:00 AM - 7:00 PM IST",
  },
];

const woodTypes = [
  "Teak Wood",
  "Sal Wood",
  "Sheesham",
  "Mango Wood",
  "Pine Wood",
  "Deodar",
  "Plywood",
  "Other",
];

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    woodType: "",
    quantity: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to an API
    console.log(formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        woodType: "",
        quantity: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground">
            Have a bulk order or specific requirements? Fill out the form below 
            and our team will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            {contactInfo.map((item, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-4 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm">{item.content}</p>
                    <p className="text-xs text-muted-foreground">{item.subContent}</p>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Quick Links */}
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
                <div className="space-y-2 text-sm">
                  <p>📦 Track Your Order</p>
                  <p>📄 Download Catalog</p>
                  <p>📋 Request Quote</p>
                  <p>🎥 Product Videos</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-2">
              <CardHeader className="border-b bg-muted/50">
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  Enquiry Form
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                    <p className="text-muted-foreground">
                      Your enquiry has been submitted successfully. Our team will 
                      contact you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="Enter your name"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          placeholder="Your company"
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({ ...formData, company: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="woodType">Wood Type</Label>
                        <Select
                          value={formData.woodType}
                          onValueChange={(value) =>
                            setFormData({ ...formData, woodType: value })
                          }
                        >
                          <SelectTrigger id="woodType">
                            <SelectValue placeholder="Select wood type" />
                          </SelectTrigger>
                          <SelectContent>
                            {woodTypes.map((wood) => (
                              <SelectItem key={wood} value={wood}>
                                {wood}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="quantity">Quantity Required</Label>
                        <Input
                          id="quantity"
                          placeholder="e.g., 500 cft, 100 pieces"
                          value={formData.quantity}
                          onChange={(e) =>
                            setFormData({ ...formData, quantity: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Your Requirements *</Label>
                      <Textarea
                        id="message"
                        placeholder="Describe your requirements in detail..."
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full sm:w-auto">
                      <Send className="h-4 w-4 mr-2" />
                      Submit Enquiry
                    </Button>

                    <p className="text-xs text-muted-foreground">
                      By submitting this form, you agree to our Terms & Conditions 
                      and Privacy Policy.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
