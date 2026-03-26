"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Search,
  ShoppingCart,
  Menu,
  Phone,
  MapPin,
  Truck,
  TreePine,
  ChevronDown,
  Calculator,
  User,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useCartStore, useUIStore } from "@/lib/store";
import { CartSheet } from "@/components/cart/CartSheet";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Products", href: "#products" },
  { name: "Calculator", href: "#calculator" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const woodTypes = [
  { name: "Teak Wood", href: "#products?wood=teak" },
  { name: "Sal Wood", href: "#products?wood=sal" },
  { name: "Sheesham", href: "#products?wood=sheesham" },
  { name: "Mango Wood", href: "#products?wood=mango" },
  { name: "Pine Wood", href: "#products?wood=pine" },
  { name: "Rubber Wood", href: "#products?wood=rubber" },
];

export function Header() {
  const { theme, setTheme } = useTheme();
  const { getTotalItems } = useCartStore();
  const { isMobileMenuOpen, setMobileMenuOpen } = useUIStore();
  const [searchQuery, setSearchQuery] = useState("");
  const totalItems = getTotalItems();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="hidden md:flex items-center gap-6">
              <span className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +91 98765 43210
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Delivering across India
              </span>
            </div>
            <div className="flex items-center gap-4 mx-auto md:mx-0">
              <span className="flex items-center gap-2">
                <Truck className="h-4 w-4" />
                Free delivery on orders above ₹50,000
              </span>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-primary-foreground hover:bg-primary-foreground/10"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-primary-foreground">
              <TreePine className="h-7 w-7" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">TimberMart</h1>
              <p className="text-xs text-muted-foreground">India's Trusted Timber Partner</p>
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for Teak, Sal, Sheesham..."
                className="pl-10 pr-4 h-12 rounded-full border-2 focus:border-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Calculator */}
            <Button
              variant="outline"
              size="sm"
              className="hidden md:flex gap-2 rounded-full"
              asChild
            >
              <Link href="#calculator">
                <Calculator className="h-4 w-4" />
                Price Calculator
              </Link>
            </Button>

            {/* Cart */}
            <CartSheet>
              <Button variant="outline" size="sm" className="relative rounded-full">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs rounded-full">
                    {totalItems}
                  </Badge>
                )}
              </Button>
            </CartSheet>

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="lg:hidden rounded-full">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-2">
                    <TreePine className="h-6 w-6 text-primary" />
                    TimberMart India
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-6 space-y-4">
                  {/* Mobile Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search products..."
                      className="pl-10"
                    />
                  </div>
                  
                  {/* Mobile Navigation */}
                  <nav className="space-y-2">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-3 rounded-lg hover:bg-muted transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>

                  {/* Wood Types */}
                  <div className="pt-4 border-t">
                    <h3 className="px-4 text-sm font-semibold text-muted-foreground mb-2">
                      Wood Types
                    </h3>
                    {woodTypes.map((wood) => (
                      <Link
                        key={wood.name}
                        href={wood.href}
                        className="block px-4 py-2 text-sm hover:bg-muted rounded-lg"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {wood.name}
                      </Link>
                    ))}
                  </div>

                  {/* Contact */}
                  <div className="pt-4 border-t space-y-2">
                    <p className="px-4 text-sm text-muted-foreground">
                      Need help? Call us
                    </p>
                    <p className="px-4 text-lg font-semibold text-primary">
                      +91 98765 43210
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center gap-1 mt-4 pt-4 border-t">
          {navigation.map((item) => (
            item.name === "Products" ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="gap-1">
                    {item.name}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  {woodTypes.map((wood) => (
                    <DropdownMenuItem key={wood.name} asChild>
                      <Link href={wood.href}>{wood.name}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link key={item.name} href={item.href}>
                <Button variant="ghost">{item.name}</Button>
              </Link>
            )
          ))}
        </nav>
      </div>
    </header>
  );
}
