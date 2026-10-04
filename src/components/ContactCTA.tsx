"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Phone, ArrowRight, Check, Sparkles } from "lucide-react";
import { STORE_INFO, getWhatsAppUrl } from "@/data/furnitureData";

// Premium architectural living room interior photograph
const CTA_BG_IMAGE = "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2400&auto=format&fit=crop";
const CTA_BG_FALLBACK = "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2400&auto=format&fit=crop";

export default function ContactCTA() {
  const [bgSrc, setBgSrc] = useState(CTA_BG_IMAGE);

  return (
    <section className="relative w-full min-h-[600px] sm:min-h-[580px] flex items-center overflow-hidden bg-[#0C0C0C] text-[#FAF8F5]">
      {/* 1. Full-Width Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.03 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          src={bgSrc}
          onError={() => setBgSrc(CTA_BG_FALLBACK)}
          alt="Luxury living room interior"
          className="w-full h-full object-cover object-center sm:object-[center_right]"
        />

        {/* Dark Left-to-Right Gradient Overlay for Desktop */}
        <div 
          className="hidden sm:block absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(90deg, rgba(12,12,12,0.82) 0%, rgba(12,12,12,0.55) 45%, rgba(12,12,12,0.12) 100%)`
          }}
        />

        {/* Dark Bottom-to-Top Gradient Overlay for Mobile */}
        <div 
          className="sm:hidden absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(0deg, rgba(12,12,12,0.92) 0%, rgba(12,12,12,0.65) 55%, rgba(12,12,12,0.25) 100%)`
          }}
        />
      </div>

      {/* 2. Editorial Left-Aligned Content Layer */}
      <div className="relative z-10 w-full px-6 sm:px-12 md:px-16 lg:px-24 py-16 sm:py-20 flex flex-col justify-center">
        <div className="max-w-[620px] text-left space-y-5 sm:space-y-6">
          
          {/* 3. Small Glass Label (12px / 600) */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.10 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[3px] text-[12px] font-semibold tracking-[0.12em] uppercase text-white/90 border border-white/18 backdrop-blur-[12px] bg-white/12 w-max"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E8DFD3]" />
            <span>PERSONAL FURNITURE ADVICE</span>
          </motion.div>

          {/* 4. Heading: 42px / 600 */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.17 }}
            className="font-heading text-[30px] sm:text-[36px] lg:text-[42px] font-semibold text-[#F8F5EF] leading-[1.05] tracking-[-0.03em]"
          >
            Find the Right Piece <br className="hidden sm:inline" />
            for Your Space.
          </motion.h2>

          {/* 5. Description: 15px / 400 */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="text-[15px] text-[#FAF8F5]/85 font-normal leading-[1.65] max-w-[520px]"
          >
            Need help choosing the right furniture? Talk with our team about styles, dimensions, materials and availability.
          </motion.p>

          {/* 6. Glass Contact Panel */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.31 }}
            className="p-2.5 sm:p-3 rounded-[4px] border border-white/18 bg-[rgba(20,20,20,0.35)] backdrop-blur-[18px] max-w-[540px]"
          >
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
              {/* WhatsApp Button (14px / 500) */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#FAF8F5] hover:bg-white text-[#141412] px-5 py-3 rounded-[3px] font-medium text-[14px] transition-all duration-300 flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg active:scale-[0.99]"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366] fill-[#25D366]/20" />
                <span>WhatsApp Us</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#141412]/60" />
              </a>

              {/* Call Button (14px / 500) */}
              <a
                href={`tel:${STORE_INFO.phone}`}
                className="flex-1 bg-transparent hover:bg-white/10 text-white border border-white/20 px-5 py-3 rounded-[3px] font-medium text-[14px] transition-all duration-300 flex items-center justify-center gap-2.5 active:scale-[0.99]"
              >
                <Phone className="w-4 h-4 text-white/80" />
                <span>Call {STORE_INFO.phoneDisplay}</span>
              </a>
            </div>
          </motion.div>

          {/* 7. Subtle Trust Row (12px / 400) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.38 }}
            className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1 text-[12px] text-[#FAF8F5]/80 font-normal"
          >
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#E8DFD3]" />
              <span>Personal assistance</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#E8DFD3]" />
              <span>Product dimensions</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#E8DFD3]" />
              <span>Material guidance</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
