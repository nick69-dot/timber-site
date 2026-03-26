"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CreditCard,
  Truck,
  MapPin,
  User,
  Phone,
  Mail,
  Building,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { useCartStore } from "@/lib/store";

const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Delhi",
];

const paymentMethods = [
  { id: "cod", name: "Cash on Delivery", icon: "💵" },
  { id: "upi", name: "UPI Payment", icon: "📱" },
  { id: "card", name: "Credit/Debit Card", icon: "💳" },
  { id: "netbanking", name: "Net Banking", icon: "🏦" },
  { id: "emi", name: "EMI Available", icon: "📅" },
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
};

export function CheckoutSection() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState("cod");
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    landmark: "",
    notes: "",
  });

  const { items, getSubtotal, getGstAmount, clearCart } = useCartStore();
  const subtotal = getSubtotal();
  const gst = getGstAmount();
  const delivery = subtotal >= 50000 ? 0 : 500;
  const total = subtotal + gst + delivery;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate order processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsProcessing(false);
    setIsComplete(true);
    clearCart();
  };

  if (isComplete) {
    return (
      <section id="checkout" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center">
            <CardContent className="p-12">
              <CheckCircle2 className="h-24 w-24 text-green-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Order Placed Successfully!</h2>
              <p className="text-muted-foreground mb-6">
                Thank you for your order. We have received your order and will 
                process it shortly. You will receive a confirmation call within 
                2 hours.
              </p>
              <div className="bg-muted rounded-lg p-6 mb-6">
                <p className="text-sm text-muted-foreground mb-2">Order Number</p>
                <p className="text-2xl font-bold text-primary">
                  #TMI{Date.now().toString().slice(-8)}
                </p>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>📱 You will receive an SMS confirmation shortly</p>
                <p>📞 Our team will call you to confirm the order details</p>
                <p>🚚 Expected delivery: 5-7 business days</p>
              </div>
              <Button
                className="mt-8"
                size="lg"
                onClick={() => (window.location.href = "/")}
              >
                Continue Shopping
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  if (items.length === 0) {
    return null;
  }

  return (
    <section id="checkout" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          <span className="text-primary">Checkout</span>
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Delivery Details */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader className="border-b bg-muted/50">
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Delivery Address
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">
                        <User className="h-4 w-4 inline mr-1" />
                        Full Name *
                      </Label>
                      <Input
                        id="fullName"
                        placeholder="Enter your full name"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">
                        <Phone className="h-4 w-4 inline mr-1" />
                        Phone Number *
                      </Label>
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

                  <div className="space-y-2">
                    <Label htmlFor="email">
                      <Mail className="h-4 w-4 inline mr-1" />
                      Email Address *
                    </Label>
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
                    <Label htmlFor="address">Street Address *</Label>
                    <Textarea
                      id="address"
                      placeholder="House/Flat No., Building Name, Street Name"
                      rows={2}
                      required
                      value={formData.address}
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        placeholder="City"
                        required
                        value={formData.city}
                        onChange={(e) =>
                          setFormData({ ...formData, city: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State *</Label>
                      <Select
                        value={formData.state}
                        onValueChange={(value) =>
                          setFormData({ ...formData, state: value })
                        }
                      >
                        <SelectTrigger id="state">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          {indianStates.map((state) => (
                            <SelectItem key={state} value={state}>
                              {state}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pincode">PIN Code *</Label>
                      <Input
                        id="pincode"
                        placeholder="110001"
                        required
                        pattern="[0-9]{6}"
                        value={formData.pincode}
                        onChange={(e) =>
                          setFormData({ ...formData, pincode: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="landmark">Landmark</Label>
                      <Input
                        id="landmark"
                        placeholder="Near..."
                        value={formData.landmark}
                        onChange={(e) =>
                          setFormData({ ...formData, landmark: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Order Notes (Optional)</Label>
                    <Textarea
                      id="notes"
                      placeholder="Any special instructions for delivery..."
                      rows={2}
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card>
                <CardHeader className="border-b bg-muted/50">
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-primary" />
                    Payment Method
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {paymentMethods.map((method) => (
                      <button
                        key={method.id}
                        type="button"
                        onClick={() => setSelectedPayment(method.id)}
                        className={`p-4 rounded-lg border-2 text-left transition-all ${
                          selectedPayment === method.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <span className="text-2xl mb-2 block">{method.icon}</span>
                        <p className="font-medium text-sm">{method.name}</p>
                      </button>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-muted rounded-lg text-sm">
                    <p className="font-medium mb-2">📋 Payment Terms:</p>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• 50% advance payment for orders above ₹1,00,000</li>
                      <li>• GST invoice will be provided with delivery</li>
                      <li>• EMI available on orders above ₹50,000</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div>
              <Card className="sticky top-4">
                <CardHeader className="border-b bg-muted/50">
                  <CardTitle className="flex items-center gap-2">
                    <Building className="h-5 w-5 text-primary" />
                    Order Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  {/* Items */}
                  <div className="space-y-3 max-h-48 overflow-y-auto custom-scrollbar mb-4">
                    {items.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <div className="flex-1">
                          <p className="font-medium line-clamp-1">{item.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {item.quantity} × {formatPrice(item.pricePerCft)}/cft
                          </p>
                        </div>
                        <span className="font-medium">
                          {formatPrice(item.pricePerCft * item.quantity)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  {/* Price Breakdown */}
                  <div className="space-y-2 py-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">GST (18%)</span>
                      <span>{formatPrice(gst)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        <Truck className="h-4 w-4 inline mr-1" />
                        Delivery
                      </span>
                      <span
                        className={
                          delivery === 0
                            ? "text-green-600 font-medium"
                            : ""
                        }
                      >
                        {delivery === 0 ? "FREE" : formatPrice(delivery)}
                      </span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-between font-bold text-lg py-4">
                    <span>Total</span>
                    <span className="text-primary">{formatPrice(total)}</span>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <CheckCircle2 className="h-4 w-4 mr-2" />
                        Place Order
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground mt-4">
                    By placing this order, you agree to our Terms & Conditions
                  </p>

                  {/* Trust Badges */}
                  <div className="mt-6 pt-4 border-t space-y-2 text-xs text-muted-foreground text-center">
                    <p>🔒 Secure checkout with SSL encryption</p>
                    <p>📋 GST invoice provided with every order</p>
                    <p>🚚 Free delivery on orders above ₹50,000</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
