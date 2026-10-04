"use client";

import Image from "next/image";
import { X, Maximize2 } from "lucide-react";
import { GalleryItem } from "@/data/furnitureData";

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export default function LightboxModal({ item, onClose }: LightboxModalProps) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative max-w-5xl w-full bg-[#1D1D1B] rounded-[4px] overflow-hidden shadow-2xl border border-[#8A6848]/30">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/60 text-white hover:bg-[#8A6848] transition-colors"
          aria-label="Close image lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Large Image Showcase */}
        <div className="relative w-full h-[65vh] sm:h-[75vh]">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-contain"
            sizes="100vw"
          />
        </div>

        {/* Caption Bar */}
        <div className="p-5 sm:p-6 bg-[#1D1D1B] text-[#FAF8F5] border-t border-[#8A6848]/20 flex items-center justify-between">
          <div>
            <span className="text-[11px] text-[#E8DFD3] uppercase tracking-[0.12em] font-semibold">
              {item.category}
            </span>
            <h3 className="font-heading text-[20px] font-medium text-white mt-0.5 tracking-[-0.015em]">
              {item.title}
            </h3>
          </div>
          <div className="flex items-center gap-2 text-[12px] text-[#E8DFD3] font-normal">
            <Maximize2 className="w-4 h-4 text-[#8A6848]" />
            <span>Editorial Showroom Inspection</span>
          </div>
        </div>

      </div>
    </div>
  );
}
