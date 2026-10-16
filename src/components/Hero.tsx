"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-[100svh] min-h-[700px] flex flex-col justify-between overflow-hidden bg-[#0C0C0C] text-white"
    >
      {/* 1. Full-Screen Background Image */}
      <motion.div
        initial={{ scale: 1.03 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2400&q=90"
          alt="Luxury Modern Interior Furniture"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Premium Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/15 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/35 z-10" />
      </motion.div>

      {/* Spacer for Floating Navbar */}
      <div className="h-24 sm:h-28 shrink-0 z-20" />

      {/* 2. Main Hero Content Layer */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 w-full z-20 py-6 flex-1 flex flex-col justify-end">
        <div className="max-w-[680px] space-y-5 text-left">
          
          {/* Eyebrow Label (12px / 600) */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3"
          >
            <span className="w-7 h-[1px] bg-[#E8DFD3]" />
            <span className="text-[12px] font-semibold tracking-[0.12em] text-[#E8DFD3] uppercase">
              FURNITURE FOR BETTER LIVING
            </span>
          </motion.div>

          {/* Hero H1: 56px desktop, 46px tablet, 38px mobile | weight 600 | leading 1.05 | tracking -0.03em */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="font-heading text-[38px] sm:text-[46px] lg:text-[56px] font-semibold leading-[1.05] tracking-[-0.03em] text-[#FAF8F5]"
          >
            Bilindu Furniture
          </motion.h1>

          {/* Supporting Description (15px / 400) */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26 }}
            className="text-[15px] text-white/85 max-w-[540px] font-normal leading-[1.65] tracking-[-0.005em]"
          >
            Discover thoughtfully selected furniture designed to bring comfort, character and timeless style into your home.
          </motion.p>

          {/* Action Buttons (14px / 500) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5"
          >
            {/* Primary Button */}
            <Link
              href="#collections"
              className="bg-[#FAF8F5] hover:bg-white text-[#1D1D1B] px-6 py-3.5 rounded-[4px] font-medium text-[14px] transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg group hover:shadow-xl active:scale-98"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 text-[#1D1D1B]" />
            </Link>

            {/* Secondary Glass Button */}
            <Link
              href="#contact"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 hover:border-white px-6 py-3.5 rounded-[4px] font-medium text-[14px] transition-all duration-300 text-center active:scale-98"
            >
              Contact Us
            </Link>
          </motion.div>

        </div>
      </div>

      {/* 3. Bottom Metrics Row */}
      <div className="w-full z-20 pb-7 pt-4 border-t border-white/15 bg-black/25 backdrop-blur-md">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          
          {/* Glass Information Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42 }}
            className="flex items-center gap-6 sm:gap-10 text-white"
          >
            {/* Metric 1 */}
            <div className="pr-6 sm:pr-10 border-r border-white/20">
              <span className="font-heading text-[28px] font-medium block leading-none text-[#FAF8F5]">
                20+
              </span>
              <span className="text-[12px] text-white/75 font-normal tracking-tight mt-1 block">
                Years Experience
              </span>
            </div>

            {/* Metric 2 */}
            <div className="pr-6 sm:pr-10 border-r border-white/20">
              <span className="font-heading text-[28px] font-medium block leading-none text-[#FAF8F5]">
                100%
              </span>
              <span className="text-[12px] text-white/75 font-normal tracking-tight mt-1 block">
                Quality Materials
              </span>
            </div>

            {/* Metric 3 */}
            <div>
              <span className="font-heading text-[28px] font-medium block leading-none text-[#FAF8F5]">
                10-Yr
              </span>
              <span className="text-[12px] text-white/75 font-normal tracking-tight mt-1 block">
                Craft Guarantee
              </span>
            </div>
          </motion.div>

          {/* Scroll to Explore Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="hidden sm:flex items-center gap-2 text-[12px] font-medium text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            <Link href="#collections" className="flex items-center gap-2">
              <span>Scroll to explore</span>
              <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#E8DFD3]" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
