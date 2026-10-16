"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GALLERY_ITEMS, GalleryItem } from "@/data/furnitureData";
import LightboxModal from "./LightboxModal";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function FurnitureGallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filterOptions = [
    "All",
    "Living Rooms",
    "Sofas & Armchairs",
    "Chairs",
    "Dining Spaces",
    "Bedrooms",
    "Office",
    "Tables",
  ];

  const filteredItems =
    activeFilter === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-[80px] sm:py-[100px] px-5 sm:px-10 lg:px-12 bg-[#FAF8F5] text-[#1D1D1B]">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-[36px] gap-6">
          <div className="max-w-2xl">
            <span className="text-[12px] font-semibold tracking-[0.14em] text-[#8A6848] uppercase block mb-2">
              EDITORIAL GALLERY
            </span>
            <h2 className="font-heading text-[30px] sm:text-[36px] lg:text-[42px] font-medium text-[#1D1D1B] leading-[1.1] tracking-[-0.03em]">
              Furniture Gallery
            </h2>
          </div>
          <p className="text-[14px] text-[#1D1D1B]/70 font-normal leading-[1.6] max-w-[450px]">
            Explore our handcrafted custom pieces, teak dining collections, artisanal seating, and architectural woodwork.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-[36px] no-scrollbar">
          {filterOptions.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-[3px] text-[13px] font-medium transition-all duration-200 shrink-0 border ${
                  isActive
                    ? "bg-[#1D1D1B] text-white border-[#1D1D1B] shadow-sm"
                    : "bg-white text-[#1D1D1B]/75 border-[rgba(30,30,30,0.12)] hover:border-[#1D1D1B] hover:text-[#1D1D1B]"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Premium Architectural 3-Column Uniform Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => {
              const formattedNumber = String(index + 1).padStart(2, "0");

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  onClick={() => setSelectedItem(item)}
                  className="group relative flex flex-col bg-white border border-[rgba(30,30,30,0.08)] rounded-[4px] overflow-hidden cursor-pointer shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Photo Canvas - 4:3 Aspect Ratio showing full chair/table form */}
                  <div className="relative w-full aspect-[4/3] bg-[#F4EFE9] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center transform transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    />

                    {/* Subtle top-right index pill */}
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded-[2px] bg-black/45 backdrop-blur-md text-[11px] font-mono text-white/85 tracking-wider z-10 pointer-events-none select-none">
                      {formattedNumber}
                    </div>

                    {/* Category badge floating on top-left */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-[2px] bg-white/90 backdrop-blur-md border border-white/50 text-[10.5px] font-semibold tracking-[0.1em] text-[#8A6848] uppercase z-10 shadow-sm">
                      {item.category}
                    </div>
                  </div>

                  {/* Clean Dedicated Bottom Card Info Panel */}
                  <div className="p-5 flex items-center justify-between gap-4 border-t border-[rgba(30,30,30,0.06)] bg-white">
                    <div className="space-y-1 min-w-0">
                      <h3 className="font-heading text-[17px] sm:text-[18px] font-medium text-[#1D1D1B] tracking-[-0.015em] leading-snug truncate group-hover:text-[#8A6848] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-[12.5px] text-[#1D1D1B]/55 font-normal flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-[#8A6848]" />
                        <span>Solid Wood Craftsmanship</span>
                      </p>
                    </div>

                    {/* View project button indicator */}
                    <div className="w-9 h-9 rounded-[3px] bg-[#FAF8F5] border border-[rgba(30,30,30,0.08)] flex items-center justify-center shrink-0 group-hover:bg-[#1D1D1B] group-hover:text-white transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 text-[#1D1D1B] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </section>
  );
}
