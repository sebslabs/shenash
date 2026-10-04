"use client";

import { useState } from "react";
import Image from "next/image";
import { PRODUCTS, Product } from "@/data/furnitureData";
import ProductModal from "./ProductModal";
import { Eye, ArrowRight } from "lucide-react";

interface FeaturedProductsProps {
  selectedCategoryFilter?: string;
}

export default function FeaturedProducts({ selectedCategoryFilter }: FeaturedProductsProps) {
  const [activeCategory, setActiveCategory] = useState<string>(selectedCategoryFilter || "All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = ["All", "Living Room", "Bedroom", "Dining Room", "Office Furniture", "Chairs", "Tables"];

  const filteredProducts = activeCategory === "All"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-widest text-[#8A6848] uppercase">
            Signature Showcase
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#202020] mt-2">
            Featured Furniture
          </h2>
          <p className="text-base text-[#202020]/70 mt-3 font-light">
            Explore our curated catalog of masterfully engineered sofas, tables, bed frames, and ergonomic seating. Contact us for bespoke customization.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-[4px] text-xs font-medium transition-all duration-300 shrink-0 border ${
                activeCategory === cat
                  ? "bg-[#202020] text-white border-[#202020] shadow-md"
                  : "bg-white text-[#202020]/80 border-[#E8DFD3] hover:border-[#8A6848] hover:text-[#8A6848]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-[4px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-[#E8DFD3]/70 flex flex-col h-full"
            >
              {/* Product Image Box */}
              <div className="relative w-full h-[260px] bg-[#F4EFE9] overflow-hidden rounded-t-[4px]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="bg-white/95 text-[#202020] font-medium text-xs py-2.5 px-5 rounded-[4px] shadow-lg flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#8A6848] hover:text-white"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    Quick Preview
                  </button>
                </div>

                {/* Category Tag */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-[3px] text-[11px] font-medium text-[#202020]">
                  {product.category}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-xl font-normal text-[#202020] group-hover:text-[#8A6848] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#202020]/65 mt-1.5 line-clamp-2 font-light">
                    {product.tagline}
                  </p>
                </div>

                {/* Card Action Button */}
                <div className="pt-2 border-t border-[#E8DFD3]/40 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-[#8A6848] tracking-wide">
                    Catalog Item
                  </span>

                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="bg-[#FAF8F5] hover:bg-[#202020] hover:text-white border border-[#E8DFD3] text-[#202020] text-xs font-medium px-4 py-2 rounded-[4px] transition-all duration-300 flex items-center gap-1.5"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
