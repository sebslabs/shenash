"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, X, ShieldCheck, Award, HeartHandshake, Quote } from "lucide-react";

// User-provided furniture & owner photographs
const ABOUT_IMG = "/images/sofa_set_living.jpg";
const OWNER_IMG = "/images/owner_thushara_fernando.jpg";

export default function AboutSection() {
  const [imgSrc, setImgSrc] = useState(ABOUT_IMG);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section id="about" className="py-[80px] sm:py-[100px] px-5 sm:px-10 lg:px-12 bg-[#F7F4EF] text-[#1D1D1B]">
        <div className="max-w-[1440px] mx-auto">
          
          {/* 1. Main 50 / 50 Balanced Layout */}
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-[70px] items-center">
            
            {/* LEFT: 50% Real Furniture Lifestyle Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full lg:col-span-6 order-4 lg:order-1"
            >
              <div className="relative w-full h-[420px] sm:h-[520px] lg:h-[620px] rounded-[4px] overflow-hidden bg-[#EFECE6] shadow-sm">
                <img
                  src={imgSrc}
                  onError={() => setImgSrc("/images/sofa_set_living.jpg")}
                  alt="Maison & Living Real Furniture Showroom"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>
            </motion.div>

            {/* RIGHT: 50% Content Column */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="w-full lg:col-span-6 flex flex-col space-y-6 sm:space-y-7 text-left order-1 lg:order-2"
            >
              
              {/* Eyebrow Label */}
              <div className="order-1">
                <span className="text-[11px] font-semibold tracking-[0.14em] text-[#94704D] uppercase block">
                  ABOUT BILINDU FURNITURE
                </span>
              </div>

              {/* Heading */}
              <div className="order-2">
                <h2 className="font-heading text-[32px] sm:text-[38px] lg:text-[44px] font-medium leading-[1.08] tracking-[-0.035em] text-[#1D1D1B]">
                  Furniture Designed <br className="hidden sm:inline" />
                  Around Your Life.
                </h2>
              </div>

              {/* Description */}
              <div className="order-3 space-y-3.5 max-w-[580px]">
                <p className="text-[15px] text-[#68645F] font-normal leading-[1.7]">
                  We curate thoughtfully designed furniture that brings together comfort, quality materials and timeless modern style.
                </p>
                <p className="text-[15px] text-[#68645F] font-normal leading-[1.7]">
                  From relaxed living spaces to refined workspaces, our team helps you choose pieces that fit your space and the way you live.
                </p>
              </div>

              {/* Modern Value Row */}
              <div className="order-5 pt-3 border-t border-[rgba(30,30,30,0.08)]">
                <div className="grid grid-cols-3 gap-3 sm:gap-6">
                  
                  {/* Value 01 */}
                  <div className="border-r border-[rgba(30,30,30,0.10)] pr-2 sm:pr-4">
                    <span className="text-[12px] font-mono text-[#94704D] font-medium block mb-1">01</span>
                    <h4 className="text-[14px] sm:text-[15px] font-semibold text-[#1D1D1B] leading-tight">
                      Quality <br className="hidden sm:inline" />
                      Materials
                    </h4>
                  </div>

                  {/* Value 02 */}
                  <div className="border-r border-[rgba(30,30,30,0.10)] pr-2 sm:pr-4">
                    <span className="text-[12px] font-mono text-[#94704D] font-medium block mb-1">02</span>
                    <h4 className="text-[14px] sm:text-[15px] font-semibold text-[#1D1D1B] leading-tight">
                      Timeless <br className="hidden sm:inline" />
                      Design
                    </h4>
                  </div>

                  {/* Value 03 */}
                  <div className="pr-2 sm:pr-4">
                    <span className="text-[12px] font-mono text-[#94704D] font-medium block mb-1">03</span>
                    <h4 className="text-[14px] sm:text-[15px] font-semibold text-[#1D1D1B] leading-tight">
                      Personal <br className="hidden sm:inline" />
                      Service
                    </h4>
                  </div>

                </div>
              </div>

              {/* Experience Stat */}
              <div className="order-6 pt-1">
                <span className="font-heading text-[32px] font-medium text-[#1D1D1B] block leading-none">
                  20+
                </span>
                <span className="text-[13px] text-[#68645F] font-normal mt-1 block">
                  Years of furniture experience
                </span>
              </div>

              {/* CTA Button */}
              <div className="order-7 pt-2">
                <button
                  onClick={() => setModalOpen(true)}
                  className="group inline-flex items-center justify-center gap-2.5 h-[46px] px-5 bg-[#1D1D1B] hover:bg-[#8A6848] text-white rounded-[3px] text-[13px] font-semibold transition-colors duration-300 shadow-sm active:scale-[0.99]"
                >
                  <span>Discover Our Story</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>

            </motion.div>

          </div>

          {/* 2. FOUNDER & OWNER MESSAGE BLOCK */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-16 sm:mt-24 pt-12 sm:pt-16 border-t border-[rgba(30,30,30,0.10)]"
          >
            <div className="bg-[rgba(255,255,255,0.65)] border border-[rgba(30,30,30,0.08)] rounded-[4px] p-6 sm:p-10 lg:p-12 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left Owner Photo */}
                <div className="lg:col-span-4 flex justify-center lg:justify-start">
                  <div className="relative w-[240px] sm:w-[280px] lg:w-[310px] aspect-square rounded-[4px] overflow-hidden border border-[rgba(30,30,30,0.12)] shadow-md group">
                    <img
                      src={OWNER_IMG}
                      alt="Thushara Fernando - Owner & Founder"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>

                {/* Right Owner Thought & Quote */}
                <div className="lg:col-span-8 space-y-5 text-left">
                  <div className="flex items-center gap-2">
                    <Quote className="w-6 h-6 text-[#94704D] rotate-180" />
                    <span className="text-[11px] font-semibold tracking-[0.14em] text-[#94704D] uppercase">
                      MESSAGE FROM THE OWNER
                    </span>
                  </div>

                  {/* Owner Quote Text */}
                  <blockquote className="text-[16px] sm:text-[18px] text-[#1D1D1B] font-normal leading-[1.65] font-heading tracking-[-0.01em]">
                    &ldquo;I focus on providing high-quality, durable, and affordable furniture that meets customer needs. I believe in custom designs, honest pricing, and reliable delivery service. My goal is to build trust, ensure customer satisfaction, and create stylish, long-lasting furniture that makes every home comfortable and beautiful.&rdquo;
                  </blockquote>

                  {/* Owner Details */}
                  <div className="pt-2 border-t border-[rgba(30,30,30,0.08)] flex items-center justify-between">
                    <div>
                      <h4 className="font-heading text-[20px] font-semibold text-[#1D1D1B]">
                        Thushara Fernando
                      </h4>
                      <p className="text-[13px] text-[#68645F] font-normal mt-0.5">
                        Founder & Managing Director, Bilindu Furniture
                      </p>
                    </div>

                    <div className="hidden sm:block text-right">
                      <span className="text-[11px] font-mono text-[#94704D] uppercase tracking-wider block">
                        DIRECTOR&apos;S PROMISE
                      </span>
                      <span className="text-[12px] text-[#1D1D1B]/70 font-normal">
                        Guaranteed Quality & Delivery
                      </span>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Story Detail Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#FAF8F5] rounded-[4px] max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl border border-[#E8DFD3] max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#E8DFD3]/50 text-[#1D1D1B] hover:bg-[#1D1D1B] hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-[11px] font-semibold tracking-[0.14em] text-[#94704D] uppercase">
              OUR HERITAGE & CRAFT
            </span>
            <h3 className="font-heading text-[24px] font-medium text-[#1D1D1B] mt-1 mb-4">
              Crafting Timeless Furniture Since 2006
            </h3>

            <div className="space-y-4 text-[14px] text-[#68645F] font-normal leading-relaxed">
              <p>
                Founded over 20 years ago by <strong className="text-[#1D1D1B] font-semibold">Thushara Fernando</strong>, <strong className="text-[#1D1D1B] font-semibold">Bilindu Furniture</strong> started with a simple belief: furniture should be built to last generations, not just seasons. We partner directly with master woodworkers, stone artisans, and textile mills to produce furniture that balances beauty with real everyday durability.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
                <div className="bg-white p-4 rounded-[4px] border border-[#E8DFD3] text-center">
                  <ShieldCheck className="w-5 h-5 text-[#94704D] mx-auto mb-2" />
                  <h4 className="font-semibold text-[13px] text-[#1D1D1B]">Ethical Sourcing</h4>
                  <p className="text-[11px] text-[#68645F] mt-1">100% FSC-certified sustainable timber.</p>
                </div>

                <div className="bg-white p-4 rounded-[4px] border border-[#E8DFD3] text-center">
                  <Award className="w-5 h-5 text-[#94704D] mx-auto mb-2" />
                  <h4 className="font-semibold text-[13px] text-[#1D1D1B]">Precision Craft</h4>
                  <p className="text-[11px] text-[#68645F] mt-1">Traditional mortise-and-tenon joinery.</p>
                </div>

                <div className="bg-white p-4 rounded-[4px] border border-[#E8DFD3] text-center">
                  <HeartHandshake className="w-5 h-5 text-[#94704D] mx-auto mb-2" />
                  <h4 className="font-semibold text-[13px] text-[#1D1D1B]">Tailored Advice</h4>
                  <p className="text-[11px] text-[#68645F] mt-1">Complimentary room space planning.</p>
                </div>
              </div>

              <p>
                Visit our physical showroom to touch our fabric swatches, test seat depths, and consult with Thushara Fernando and our interior specialists. We look forward to helping you create your dream living environment.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#E8DFD3] flex justify-end">
              <button
                onClick={() => setModalOpen(false)}
                className="bg-[#1D1D1B] text-white px-6 py-2.5 rounded-[3px] text-[13px] font-semibold hover:bg-[#8A6848] transition-colors"
              >
                Close Story
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
