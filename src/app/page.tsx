"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import AboutSection from "@/components/AboutSection";
import PromoBanner from "@/components/PromoBanner";
import WhyChooseUs from "@/components/WhyChooseUs";
import FurnitureGallery from "@/components/FurnitureGallery";
import ContactCTA from "@/components/ContactCTA";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#202020] selection:bg-[#E8DFD3]">
      {/* 1. Sticky Navigation */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Furniture Categories */}
      <Categories />

      {/* 4. About the Store */}
      <AboutSection />

      {/* 5. Promotional Banner */}
      <PromoBanner />

      {/* 6. Why Choose Us */}
      <WhyChooseUs />

      {/* 7. Furniture Gallery */}
      <FurnitureGallery />

      {/* 8. Contact CTA */}
      <ContactCTA />

      {/* 9. Detailed Contact Section */}
      <ContactSection />

      {/* 10. Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </main>
  );
}
