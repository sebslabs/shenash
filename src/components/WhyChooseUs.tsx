"use client";

import { motion } from "framer-motion";
import { Award, Compass, Gem, MessageSquareHeart } from "lucide-react";

export default function WhyChooseUs() {
  const promises = [
    {
      num: "01",
      title: "Quality Products",
      description:
        "Carefully selected furniture crafted with kiln-dried solid hardwoods and high-performance upholstery designed for longevity.",
      icon: Award,
    },
    {
      num: "02",
      title: "Modern Designs",
      description:
        "Contemporary, timeless aesthetic curated by senior interior specialists suitable for modern architectural spaces.",
      icon: Compass,
    },
    {
      num: "03",
      title: "Affordable Prices",
      description:
        "Direct showroom pricing delivering exceptional luxury craftsmanship without unnecessary retail markups.",
      icon: Gem,
    },
    {
      num: "04",
      title: "Friendly Support",
      description:
        "Our attentive team is ready to guide you on dimensions, fabric swatches, and tailored room space planning.",
      icon: MessageSquareHeart,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#FAF8F5] text-[#1D1D1B] border-y border-[rgba(30,30,30,0.06)]">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-[12px] font-semibold tracking-[0.12em] text-[#8A6848] uppercase block mb-2">
            OUR PROMISE
          </span>
          <h2 className="font-heading text-[30px] sm:text-[36px] lg:text-[42px] font-semibold leading-[1.1] tracking-[-0.03em] text-[#1D1D1B]">
            Why Choose Bilindu Furniture
          </h2>
          <p className="text-[15px] text-[#1D1D1B]/70 mt-3 font-normal leading-[1.65]">
            We are committed to delivering exceptional craftsmanship, honest advice, and furniture built to elevate your daily living experience.
          </p>
        </div>

        {/* 4-Column Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {promises.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                className="relative bg-[rgba(255,255,255,0.65)] border border-[rgba(30,30,30,0.08)] rounded-[4px] p-7 sm:p-8 flex flex-col justify-between group transition-all duration-350 ease-out hover:-translate-y-[4px] hover:border-[rgba(30,30,30,0.18)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
              >
                {/* Header Row: Clean Outline Icon & Top-Right Subtle Watermark Number (36px) */}
                <div className="flex items-start justify-between mb-8">
                  {/* Clean Modern Outline Icon (No heavy box) */}
                  <IconComponent className="w-[28px] h-[28px] text-[#1D1D1B] group-hover:text-[#8A6848] transition-colors duration-350 stroke-[1.5]" />

                  {/* Watermark Number: 36px font-heading */}
                  <span className="font-heading text-[36px] font-normal leading-none text-[#8A6848]/20 group-hover:text-[#8A6848]/40 transition-colors duration-350 select-none">
                    {item.num}
                  </span>
                </div>

                {/* Card Content */}
                <div className="space-y-2.5">
                  {/* Card title: 20px */}
                  <h3 className="font-heading text-[20px] font-medium text-[#1D1D1B] tracking-[-0.015em] group-hover:text-[#8A6848] transition-colors duration-300">
                    {item.title}
                  </h3>
                  {/* Description: 14px */}
                  <p className="text-[14px] text-[#1D1D1B]/70 font-normal leading-[1.65]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
