"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calculator, Info, ShoppingCart } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const woodPrices: Record<string, { name: string; pricePerCft: number }> = {
  teak: { name: "Teak Wood", pricePerCft: 3500 },
  sal: { name: "Sal Wood", pricePerCft: 2200 },
  sheesham: { name: "Sheesham", pricePerCft: 3000 },
  mango: { name: "Mango Wood", pricePerCft: 1000 },
  pine: { name: "Pine Wood", pricePerCft: 800 },
  deodar: { name: "Deodar", pricePerCft: 2200 },
};

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
};

export function PriceCalculator() {
  const [woodType, setWoodType] = useState("teak");
  const [length, setLength] = useState("");
  const [breadth, setBreadth] = useState("");
  const [thickness, setThickness] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [result, setResult] = useState<{
    cft: number;
    basePrice: number;
    gst: number;
    total: number;
  } | null>(null);

  const calculatePrice = () => {
    const l = parseFloat(length) || 0;
    const b = parseFloat(breadth) || 0;
    const t = parseFloat(thickness) || 0;
    const q = parseInt(quantity) || 1;

    if (l <= 0 || b <= 0 || t <= 0) return;

    // Calculate cubic feet: length(in feet) × breadth(in inches) × thickness(in inches) / 144
    const cft = (l * b * t) / 144;
    const pricePerCft = woodPrices[woodType]?.pricePerCft || 0;
    const basePrice = cft * pricePerCft * q;
    const gst = basePrice * 0.18;
    const total = basePrice + gst;

    setResult({
      cft: Math.round(cft * 100) / 100,
      basePrice: Math.round(basePrice),
      gst: Math.round(gst),
      total: Math.round(total),
    });
  };

  return (
    <section id="calculator" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Price Calculator</span>
          </h2>
          <p className="text-muted-foreground">
            Calculate the exact price for your timber requirements. Enter dimensions 
            in feet and inches to get instant pricing with GST.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-2">
            <CardHeader className="border-b bg-muted/50">
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5 text-primary" />
                Timber Price Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Input Section */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="woodType">Wood Type</Label>
                    <Select value={woodType} onValueChange={setWoodType}>
                      <SelectTrigger id="woodType">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(woodPrices).map(([key, value]) => (
                          <SelectItem key={key} value={key}>
                            {value.name} - {formatPrice(value.pricePerCft)}/cft
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="space-y-2">
                      <Label htmlFor="length" className="flex items-center gap-1">
                        Length
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info className="h-3 w-3 text-muted-foreground" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Enter in feet (ft)</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Label>
                      <Input
                        id="length"
                        type="number"
                        placeholder="ft"
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="breadth" className="flex items-center gap-1">
                        Breadth
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info className="h-3 w-3 text-muted-foreground" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Enter in inches (&quot;)</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Label>
                      <Input
                        id="breadth"
                        type="number"
                        placeholder="inch"
                        value={breadth}
                        onChange={(e) => setBreadth(e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="thickness" className="flex items-center gap-1">
                        Thickness
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info className="h-3 w-3 text-muted-foreground" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Enter in inches (&quot;)</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Label>
                      <Input
                        id="thickness"
                        type="number"
                        placeholder="inch"
                        value={thickness}
                        onChange={(e) => setThickness(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="quantity">Quantity (pieces)</Label>
                    <Input
                      id="quantity"
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </div>

                  <Button className="w-full" size="lg" onClick={calculatePrice}>
                    <Calculator className="h-4 w-4 mr-2" />
                    Calculate Price
                  </Button>
                </div>

                {/* Result Section */}
                <div className="bg-muted/50 rounded-xl p-6">
                  <h3 className="font-semibold text-lg mb-4">Price Breakdown</h3>

                  {result ? (
                    <div className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Wood Type</span>
                          <span className="font-medium">{woodPrices[woodType]?.name}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Dimensions</span>
                          <span className="font-medium">{length}&apos; × {breadth}&quot; × {thickness}&quot;</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Total Volume</span>
                          <span className="font-medium">{result.cft} cft</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Quantity</span>
                          <span className="font-medium">{quantity} pieces</span>
                        </div>
                      </div>

                      <div className="border-t pt-4 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Base Price</span>
                          <span>{formatPrice(result.basePrice)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">GST (18%)</span>
                          <span>{formatPrice(result.gst)}</span>
                        </div>
                        <div className="flex justify-between text-lg font-bold pt-2 border-t">
                          <span>Total Price</span>
                          <span className="text-primary">{formatPrice(result.total)}</span>
                        </div>
                      </div>

                      <Button className="w-full mt-4" variant="outline">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>

                      <p className="text-xs text-center text-muted-foreground">
                        * Final price may vary based on grade and availability
                      </p>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-muted-foreground">
                      <Calculator className="h-12 w-12 mx-auto mb-3 opacity-50" />
                      <p>Enter dimensions and click calculate</p>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Formula Info */}
          <div className="mt-6 p-4 rounded-lg bg-muted/50 border text-sm text-muted-foreground">
            <p className="font-medium text-foreground mb-2">📐 How we calculate:</p>
            <p>
              <strong>Cubic Feet (CFT)</strong> = Length (ft) × Breadth (inches) × Thickness (inches) ÷ 144
            </p>
            <p className="mt-1">
              <strong>Total Price</strong> = CFT × Price per CFT × Quantity + GST (18%)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
