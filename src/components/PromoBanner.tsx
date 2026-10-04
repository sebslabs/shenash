"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PromoBanner() {
  return (
    <section className="py-12 bg-[#FAF8F5]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="relative rounded-[4px] overflow-hidden shadow-2xl min-h-[380px] sm:min-h-[420px] flex items-center">
          
          {/* Background Lifestyle Image */}
          <Image
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2000&q=85"
            alt="Transform Your Home Interior"
            fill
            className="object-cover"
            sizes="100vw"
          />

          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent" />

          {/* Banner Text Content */}
          <div className="relative z-10 max-w-xl p-8 sm:p-14 space-y-5 text-white">
            <span className="text-[12px] font-semibold tracking-[0.12em] text-[#E8DFD3] uppercase bg-[#8A6848]/80 backdrop-blur-md px-3.5 py-1.5 rounded-[3px]">
              INTERIOR INSPIRATION
            </span>

            <h2 className="font-heading text-[30px] sm:text-[36px] lg:text-[42px] font-semibold leading-[1.1] tracking-[-0.03em] text-white">
              Transform Your Space
            </h2>

            <p className="text-[15px] text-[#FAF8F5]/85 font-normal leading-[1.65]">
              Find furniture that brings comfort, functionality, and timeless style into your home. Experience our showroom consultation today.
            </p>

            <div className="pt-2">
              <Link
                href="#collections"
                className="inline-flex items-center gap-2 bg-[#FAF8F5] hover:bg-[#8A6848] text-[#1D1D1B] hover:text-white px-7 py-3.5 rounded-[4px] font-medium text-[14px] transition-all duration-300 shadow-md group"
              >
                <span>View Collection</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
