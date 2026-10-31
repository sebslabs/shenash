"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { GALLERY_ITEMS, GalleryItem } from "@/data/furnitureData";
import LightboxModal from "./LightboxModal";

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

        {/* Clean Image Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              const isPortrait = (item.height || 1024) > (item.width || 768);

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  onClick={() => setSelectedItem(item)}
                  className="group relative aspect-[4/3] bg-[#F4EFE9] border border-[rgba(30,30,30,0.08)] rounded-[6px] overflow-hidden cursor-pointer shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
                >
                  {/* Soft ambient backdrop for portrait furniture so the full piece fits with elegant framing */}
                  {isPortrait && (
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        sizes="33vw"
                        className="object-cover blur-xl opacity-25 scale-125"
                        aria-hidden="true"
                      />
                    </div>
                  )}

                  <Image
                    src={item.image}
                    alt={item.title}
                    width={item.width || 800}
                    height={item.height || 600}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={`relative z-[1] transform transition-transform duration-500 ease-out group-hover:scale-[1.04] ${
                      isPortrait
                        ? "max-h-full w-auto max-w-full object-contain p-3"
                        : "w-full h-full object-cover object-center"
                    }`}
                  />
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
