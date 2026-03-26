import Link from "next/link";
import {
  TreePine,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  CreditCard,
  Truck,
  Shield,
  Clock,
} from "lucide-react";

const footerLinks = {
  products: [
    { name: "Teak Wood", href: "#" },
    { name: "Sal Wood", href: "#" },
    { name: "Sheesham Wood", href: "#" },
    { name: "Mango Wood", href: "#" },
    { name: "Pine Wood", href: "#" },
    { name: "Plywood", href: "#" },
  ],
  services: [
    { name: "Bulk Orders", href: "#" },
    { name: "Custom Cutting", href: "#" },
    { name: "Delivery Services", href: "#" },
    { name: "Price Calculator", href: "#" },
    { name: "GST Invoice", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Testimonials", href: "#" },
  ],
  support: [
    { name: "FAQs", href: "#" },
    { name: "Shipping Policy", href: "#" },
    { name: "Return Policy", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ],
};

const paymentMethods = [
  "UPI",
  "Credit Card",
  "Debit Card",
  "Net Banking",
  "COD",
  "EMI",
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Trust Badges */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-foreground/10">
                <Truck className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold">Free Delivery</p>
                <p className="text-sm opacity-80">Orders above ₹50,000</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-foreground/10">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold">Quality Assured</p>
                <p className="text-sm opacity-80">Certified wood products</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-foreground/10">
                <CreditCard className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold">Secure Payment</p>
                <p className="text-sm opacity-80">Multiple options</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-foreground/10">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold">24/7 Support</p>
                <p className="text-sm opacity-80">Always here to help</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-foreground text-primary">
                <TreePine className="h-7 w-7" />
              </div>
              <div>
                <h2 className="text-xl font-bold">TimberMart India</h2>
                <p className="text-sm opacity-80">Premium Quality Timber</p>
              </div>
            </div>
            <p className="text-sm opacity-80 mb-4 max-w-xs">
              India&apos;s most trusted timber supplier with over 25 years of experience. 
              We provide premium quality wood products across all Indian states with 
              guaranteed quality and competitive prices.
            </p>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +91 98765 43210
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                info@timbermartindia.com
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>
                  Industrial Area, Sector 18,<br />
                  Noida, Uttar Pradesh - 201301
                </span>
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="opacity-80 hover:opacity-100 transition-opacity">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="opacity-80 hover:opacity-100 transition-opacity">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="opacity-80 hover:opacity-100 transition-opacity">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="opacity-80 hover:opacity-100 transition-opacity">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm">
              <p className="font-semibold mb-2">We Accept:</p>
              <div className="flex flex-wrap items-center gap-2">
                {paymentMethods.map((method) => (
                  <span
                    key={method}
                    className="px-3 py-1 rounded bg-primary-foreground/10 text-xs"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-sm opacity-80">
              <p>GSTIN: 09AABCT1234A1ZM</p>
              <p>© 2024 TimberMart India. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
