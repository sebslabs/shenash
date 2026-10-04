"use client";

import { useState } from "react";
import Image from "next/image";
import { X, MessageSquare, Phone, Check, ShieldCheck, Ruler, Layers, Sparkles } from "lucide-react";
import { Product, STORE_INFO, getWhatsAppUrl } from "@/data/furnitureData";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!product) return null;

  const allImages = [product.image, ...product.secondaryImages];
  const activeImage = allImages[activeImageIndex] || product.image;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#FAF8F5] rounded-[4px] max-w-4xl w-full p-6 sm:p-8 relative shadow-2xl border border-[#E8DFD3] max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-[#E8DFD3]/60 text-[#202020] hover:bg-[#202020] hover:text-white transition-colors"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Gallery View */}
          <div className="md:col-span-6 space-y-4">
            {/* Main Image */}
            <div className="relative w-full h-[320px] sm:h-[380px] rounded-[4px] overflow-hidden bg-white border border-[#E8DFD3] shadow-sm">
              <Image
                src={activeImage}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute top-4 left-4 bg-[#202020]/80 backdrop-blur-md text-white px-3 py-1 rounded-[3px] text-xs font-medium">
                {product.category}
              </div>
            </div>

            {/* Thumbnail Selectors */}
            {allImages.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-1">
                {allImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-20 rounded-[4px] overflow-hidden border-2 shrink-0 transition-all ${
                      activeImageIndex === idx ? "border-[#8A6848] ring-2 ring-[#8A6848]/30 scale-105" : "border-[#E8DFD3] opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image src={img} alt="" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Product Details & Inquiry Actions */}
          <div className="md:col-span-6 space-y-6">
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#8A6848]">
                  {product.category}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] bg-[#E8DFD3]/60 text-[#202020] px-2.5 py-0.5 rounded-[3px] font-medium">
                  <Check className="w-3 h-3 text-[#8A6848]" /> In Stock & Custom Order
                </span>
              </div>

              <h2 className="font-serif text-3xl font-normal text-[#202020] mt-1">
                {product.name}
              </h2>
              <p className="text-sm font-medium text-[#8A6848] mt-1 italic">
                "{product.tagline}"
              </p>
            </div>

            <p className="text-sm text-[#202020]/80 font-light leading-relaxed">
              {product.description}
            </p>

            {/* Specifications Card */}
            <div className="bg-white p-4 rounded-[4px] border border-[#E8DFD3] space-y-3">
              <div className="flex items-start gap-3">
                <Ruler className="w-4 h-4 text-[#8A6848] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-semibold text-[#202020] block">Dimensions:</span>
                  <span className="text-xs text-[#202020]/75">{product.dimensions}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Layers className="w-4 h-4 text-[#8A6848] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-semibold text-[#202020] block">Key Materials:</span>
                  <span className="text-xs text-[#202020]/75">{product.materials.join(", ")}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-[#8A6848] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-semibold text-[#202020] block">Available Finishes:</span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {product.finishes.map((f, i) => (
                      <span key={i} className="text-[10px] bg-[#F4EFE9] text-[#202020] px-2 py-0.5 rounded-[3px] font-medium border border-[#E8DFD3]">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-[#8A6848] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-semibold text-[#202020] block">Warranty:</span>
                  <span className="text-xs text-[#202020]/75">{product.warranty}</span>
                </div>
              </div>
            </div>

            {/* Direct Inquiry CTAs */}
            <div className="space-y-3 pt-2">
              <p className="text-xs font-medium text-[#202020]/70 text-center sm:text-left">
                Contact our showroom team to confirm pricing, fabric swatches, or reserve this item:
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={getWhatsAppUrl(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 px-5 rounded-[4px] font-medium text-sm flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  Inquire on WhatsApp
                </a>

                <a
                  href={`tel:${STORE_INFO.phone}`}
                  className="flex-1 bg-[#202020] hover:bg-[#8A6848] text-white py-3 px-5 rounded-[4px] font-medium text-sm flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call Store
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
