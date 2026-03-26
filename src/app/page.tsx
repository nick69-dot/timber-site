import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { PriceCalculator } from "@/components/home/PriceCalculator";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ContactSection } from "@/components/home/ContactSection";
import { CheckoutSection } from "@/components/checkout/CheckoutSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <HeroSection />
        <CategoriesSection />
        <FeaturedProducts />
        <WhyChooseUs />
        <PriceCalculator />
        <TestimonialsSection />
        <AboutSection />
        <ContactSection />
        <CheckoutSection />
      </main>
      
      <Footer />
    </div>
  );
}
