"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TreePine, ShoppingCart, Eye, Star, MapPin } from "lucide-react";
import { useCartStore } from "@/lib/store";
import { toast } from "sonner";

const products = [
  {
    id: "1",
    name: "Premium Teak Wood Logs",
    slug: "premium-teak-logs",
    woodType: "Teak",
    grade: "A Grade",
    origin: "Myanmar",
    pricePerCft: 4500,
    length: 10,
    breadth: 12,
    thickness: 12,
    stock: 150,
    minOrder: 10,
    unit: "cft",
    isFeatured: true,
    rating: 4.8,
    reviews: 124,
  },
  {
    id: "2",
    name: "Indian Sal Wood Beams",
    slug: "indian-sal-beams",
    woodType: "Sal",
    grade: "B Grade",
    origin: "Indian",
    pricePerCft: 2200,
    length: 12,
    breadth: 10,
    thickness: 10,
    stock: 200,
    minOrder: 20,
    unit: "cft",
    isFeatured: true,
    rating: 4.6,
    reviews: 89,
  },
  {
    id: "3",
    name: "Sheesham Furniture Planks",
    slug: "sheesham-planks",
    woodType: "Sheesham",
    grade: "Premium",
    origin: "Indian",
    pricePerCft: 3200,
    length: 8,
    breadth: 6,
    thickness: 2,
    stock: 80,
    minOrder: 5,
    unit: "cft",
    isFeatured: true,
    rating: 4.9,
    reviews: 156,
  },
  {
    id: "4",
    name: "Mango Wood Blocks",
    slug: "mango-blocks",
    woodType: "Mango",
    grade: "Commercial",
    origin: "Indian",
    pricePerCft: 1200,
    length: 6,
    breadth: 8,
    thickness: 8,
    stock: 300,
    minOrder: 50,
    unit: "cft",
    isFeatured: false,
    rating: 4.3,
    reviews: 67,
  },
  {
    id: "5",
    name: "Pine Wood Boards",
    slug: "pine-boards",
    woodType: "Pine",
    grade: "B Grade",
    origin: "Imported",
    pricePerCft: 950,
    length: 8,
    breadth: 4,
    thickness: 1,
    stock: 500,
    minOrder: 100,
    unit: "cft",
    isFeatured: false,
    rating: 4.4,
    reviews: 203,
  },
  {
    id: "6",
    name: "Deodar Door Frames",
    slug: "deodar-frames",
    woodType: "Deodar",
    grade: "A Grade",
    origin: "Indian",
    pricePerCft: 2400,
    length: 7,
    breadth: 4,
    thickness: 3,
    stock: 60,
    minOrder: 5,
    unit: "piece",
    isFeatured: true,
    rating: 4.7,
    reviews: 45,
  },
  {
    id: "7",
    name: "Teak Plywood Sheets",
    slug: "teak-plywood",
    woodType: "Teak",
    grade: "Premium",
    origin: "Indian",
    pricePerCft: 3800,
    length: 8,
    breadth: 4,
    thickness: 0.75,
    stock: 100,
    minOrder: 10,
    unit: "sheet",
    isFeatured: true,
    rating: 4.8,
    reviews: 92,
  },
  {
    id: "8",
    name: "Rubber Wood Planks",
    slug: "rubber-planks",
    woodType: "Rubber",
    grade: "Commercial",
    origin: "Indian",
    pricePerCft: 750,
    length: 6,
    breadth: 4,
    thickness: 2,
    stock: 400,
    minOrder: 50,
    unit: "cft",
    isFeatured: false,
    rating: 4.2,
    reviews: 78,
  },
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
};

export function FeaturedProducts() {
  const [selectedWood, setSelectedWood] = useState("all");
  const [selectedGrade, setSelectedGrade] = useState("all");
  const { addItem } = useCartStore();

  const filteredProducts = products.filter((product) => {
    if (selectedWood !== "all" && product.woodType.toLowerCase() !== selectedWood) return false;
    if (selectedGrade !== "all" && product.grade.toLowerCase().includes(selectedGrade) === false) return false;
    return true;
  });

  const handleAddToCart = (product: typeof products[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      woodType: product.woodType,
      grade: product.grade,
      pricePerCft: product.pricePerCft,
      quantity: product.minOrder,
      image: "",
      length: product.length,
      breadth: product.breadth,
      thickness: product.thickness,
    });
    toast.success(`${product.name} added to cart`);
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Featured <span className="text-primary">Products</span>
            </h2>
            <p className="text-muted-foreground">
              Handpicked premium quality timber for your needs
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            <Select value={selectedWood} onValueChange={setSelectedWood}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Wood Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Wood Types</SelectItem>
                <SelectItem value="teak">Teak</SelectItem>
                <SelectItem value="sal">Sal</SelectItem>
                <SelectItem value="sheesham">Sheesham</SelectItem>
                <SelectItem value="mango">Mango</SelectItem>
                <SelectItem value="pine">Pine</SelectItem>
                <SelectItem value="deodar">Deodar</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedGrade} onValueChange={setSelectedGrade}>
              <SelectTrigger className="w-36">
                <SelectValue placeholder="Grade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Grades</SelectItem>
                <SelectItem value="premium">Premium</SelectItem>
                <SelectItem value="a grade">A Grade</SelectItem>
                <SelectItem value="b grade">B Grade</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group overflow-hidden border-2 hover:border-primary/50 transition-all hover:shadow-lg">
              {/* Product Image */}
              <div className="relative aspect-square bg-muted overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <TreePine className="h-20 w-20 text-primary/30 group-hover:scale-110 transition-transform" />
                </div>
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.isFeatured && (
                    <Badge className="bg-primary">Featured</Badge>
                  )}
                  <Badge variant="outline" className="bg-background/80 backdrop-blur">
                    {product.grade}
                  </Badge>
                </div>

                {/* Quick Actions */}
                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 gap-1" onClick={() => handleAddToCart(product)}>
                      <ShoppingCart className="h-4 w-4" />
                      Add
                    </Button>
                    <Button size="sm" variant="secondary">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <CardContent className="p-4">
                <div className="space-y-2">
                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-xs text-muted-foreground">({product.reviews} reviews)</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold line-clamp-1">{product.name}</h3>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {product.origin}
                    </span>
                    <span>•</span>
                    <span>{product.woodType}</span>
                  </div>

                  {/* Dimensions */}
                  <p className="text-xs text-muted-foreground">
                    {product.length}&apos; × {product.breadth}&quot; × {product.thickness}&quot;
                  </p>

                  {/* Stock */}
                  <div className="flex items-center justify-between">
                    <span className={`text-xs ${product.stock > 50 ? 'text-green-600' : 'text-orange-600'}`}>
                      {product.stock} {product.unit} available
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Min: {product.minOrder} {product.unit}
                    </span>
                  </div>
                </div>
              </CardContent>

              {/* Price */}
              <CardFooter className="p-4 pt-0">
                <div className="w-full">
                  <div className="flex items-baseline justify-between">
                    <span className="text-2xl font-bold text-primary">
                      {formatPrice(product.pricePerCft)}
                    </span>
                    <span className="text-sm text-muted-foreground">/{product.unit}</span>
                  </div>
                  <Button
                    className="w-full mt-3"
                    size="sm"
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Load More */}
        {filteredProducts.length === products.length && (
          <div className="text-center mt-10">
            <Button variant="outline" size="lg">
              Load More Products
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
