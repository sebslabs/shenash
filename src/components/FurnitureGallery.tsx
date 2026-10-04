"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GALLERY_ITEMS, GalleryItem } from "@/data/furnitureData";
import LightboxModal from "./LightboxModal";
import { ArrowUpRight } from "lucide-react";

export default function FurnitureGallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filterOptions = [
    "All",
    "Living Rooms",
    "Sofas & Armchairs",
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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-[40px] gap-6">
          <div className="max-w-2xl">
            <span className="text-[12px] font-semibold tracking-[0.12em] text-[#8A6848] uppercase block mb-2">
              EDITORIAL GALLERY
            </span>
            <h2 className="font-heading text-[30px] sm:text-[36px] lg:text-[42px] font-medium text-[#1D1D1B] leading-[1.1] tracking-[-0.03em]">
              Furniture Gallery
            </h2>
          </div>
          <p className="text-[14px] text-[#1D1D1B]/70 font-normal leading-[1.5] max-w-[450px]">
            An editorial look into our real customer interior projects, curated showrooms, and architectural room concepts.
          </p>
        </div>

        {/* Filter Buttons (13px / 500) */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-2 mb-[40px] no-scrollbar">
          {filterOptions.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-[3px] text-[13px] font-medium uppercase tracking-wider transition-all duration-250 shrink-0 border ${
                  isActive
                    ? "bg-[#1D1D1B] text-white border-[#1D1D1B]"
                    : "bg-transparent text-[#1D1D1B]/70 border-[rgba(30,30,30,0.14)] hover:border-[#1D1D1B] hover:text-[#1D1D1B]"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Asymmetric Editorial Grid */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <AnimatePresence mode="wait">
            {filteredItems.map((item, index) => {
              const isFullSet = activeFilter === "All" && filteredItems.length === 6;

              let colSpanClass = "lg:col-span-6";
              let heightClass = "h-[380px] sm:h-[440px]";

              if (isFullSet) {
                if (index === 0) {
                  colSpanClass = "lg:col-span-8";
                  heightClass = "h-[400px] lg:h-[640px]";
                } else if (index === 1 || index === 2) {
                  colSpanClass = "lg:col-span-4";
                  heightClass = "h-[300px] lg:h-[310px]";
                } else if (index === 3 || index === 4) {
                  colSpanClass = "lg:col-span-4";
                  heightClass = "h-[300px] lg:h-[310px]";
                } else if (index === 5) {
                  colSpanClass = "lg:col-span-8";
                  heightClass = "h-[400px] lg:h-[640px]";
                }
              }

              const formattedNumber = String(index + 1).padStart(2, "0");

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  onClick={() => setSelectedItem(item)}
                  className={`group relative rounded-[3px] overflow-hidden cursor-pointer bg-[#0C0C0C] ${colSpanClass} ${heightClass}`}
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center transform transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.035]"
                  />

                  {/* Subtle Top-Right Gallery Number (12px) */}
                  <div className="absolute top-3 right-3 text-[12px] font-mono text-white/65 z-10 pointer-events-none select-none">
                    {formattedNumber}
                  </div>

                  {/* Glass Overlay at Bottom */}
                  <div className="absolute left-3 right-3 bottom-3 p-4 sm:p-4.5 rounded-[3px] border border-white/16 bg-[rgba(20,20,18,0.36)] backdrop-blur-[14px] group-hover:bg-[rgba(20,20,18,0.58)] transition-all duration-500 flex items-end justify-between gap-4 z-10">
                    <div className="space-y-0.5">
                      {/* Image Category Label: 11px / 600 */}
                      <span className="text-[11px] font-semibold tracking-[0.12em] text-[#E8DFD3] uppercase block">
                        {item.category}
                      </span>
                      {/* Image Title: 20–24px / 500 */}
                      <h3 className="font-heading text-[20px] lg:text-[22px] font-medium text-white tracking-[-0.015em] leading-snug">
                        {item.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-1.5 text-[13px] text-white/80 font-medium shrink-0">
                      <span className="hidden sm:inline opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        View Project
                      </span>
                      <div className="w-8 h-8 rounded-[3px] bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                        <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      </div>
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
