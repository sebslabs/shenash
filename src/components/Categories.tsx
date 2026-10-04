"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES } from "@/data/furnitureData";
import { motion } from "framer-motion";

interface CategoriesProps {
  onSelectCategory?: (categoryName: string) => void;
}

const DEFAULT_FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=90";

export default function Categories({ onSelectCategory }: CategoriesProps) {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="collections" className="py-20 sm:py-24 bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 border-b border-[rgba(30,30,30,0.08)] pb-6 sm:pb-8">
          <div className="max-w-2xl">
            <span className="text-[12px] font-semibold tracking-[0.12em] text-[#8A6848] uppercase block mb-2">
              CURATED SPACES
            </span>
            <h2 className="font-heading text-[30px] sm:text-[36px] lg:text-[42px] font-semibold leading-[1.1] tracking-[-0.03em] text-[#1D1D1B]">
              Explore Our Collections
            </h2>
          </div>
          <p className="text-[15px] text-[#1D1D1B]/70 max-w-[560px] mt-3 md:mt-0 font-normal leading-[1.65]">
            Thoughtfully curated furniture collections designed for modern living, restful bedrooms, elegant dining spaces and productive workspaces.
          </p>
        </div>

        {/* 3 Columns x 2 Rows Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6">
          {CATEGORIES.map((cat, index) => {
            const isError = imageErrors[cat.id];
            const displayImage = isError ? DEFAULT_FALLBACK_IMAGE : cat.image;

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="w-full"
              >
                <Link
                  href="#gallery"
                  onClick={() => onSelectCategory?.(cat.name)}
                  className="group relative block w-full h-[460px] sm:h-[490px] rounded-[6px] overflow-hidden border border-[rgba(30,30,30,0.08)] shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer bg-[#0C0C0C]"
                >
                  {/* FULL-SIZE COVER IMAGE */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <Image
                      src={displayImage}
                      alt={cat.name}
                      fill
                      priority={index < 3}
                      onError={() => handleImageError(cat.id)}
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out rounded-[6px]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/5 opacity-90 group-hover:opacity-100 transition-opacity duration-500 rounded-[6px]" />
                  </div>

                  {/* UPPER-LEFT: Glass Piece Count Badge (12px / 500) */}
                  <div className="absolute top-4 left-4 z-10 bg-[#141414]/40 backdrop-blur-[12px] border border-white/25 text-white px-3 py-1 rounded-[4px] text-[12px] font-medium shadow-sm">
                    {cat.badgeCount}
                  </div>

                  {/* BOTTOM: Floating Glass Content Panel */}
                  <div className="absolute left-4 right-4 bottom-4 z-10 p-[16px] sm:p-[18px] bg-[#141414]/40 backdrop-blur-[16px] border border-white/20 rounded-[4px] shadow-[0_10px_30px_rgba(0,0,0,0.18)] group-hover:-translate-y-1 transition-all duration-500 flex items-center justify-between">
                    
                    {/* LEFT CONTENT */}
                    <div className="space-y-0.5 max-w-[80%]">
                      {/* Collection Title (21px / 500) */}
                      <h3 className="font-heading text-[21px] font-medium text-white tracking-[-0.015em] transition-all duration-300">
                        {cat.name}
                      </h3>
                      {/* Description (13.5px / 400) */}
                      <p className="text-[13.5px] text-white/85 font-normal line-clamp-1 leading-[1.5]">
                        {cat.description}
                      </p>
                    </div>

                    {/* RIGHT: Circular Arrow Icon */}
                    <div className="w-10 h-10 rounded-full bg-white/20 border border-white/30 backdrop-blur-md text-white group-hover:bg-[#FAF8F5] group-hover:text-[#1D1D1B] group-hover:border-[#FAF8F5] flex items-center justify-center transition-all duration-300 shrink-0 ml-3 shadow-md">
                      <ArrowUpRight className="w-4.5 h-4.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </div>

                  </div>

                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
