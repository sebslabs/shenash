"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, ArrowRight, Armchair } from "lucide-react";
import { STORE_INFO } from "@/data/furnitureData";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Collections", href: "#collections" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[calc(100%-32px)] sm:w-[calc(100%-80px)] max-w-[1440px] ${
        scrolled ? "top-3 sm:top-4" : "top-5 sm:top-6"
      }`}
    >
      <div
        className={`bg-white/88 backdrop-blur-[18px] border border-white/50 rounded-[4px] shadow-lg shadow-black/5 transition-all duration-300 flex items-center justify-between ${
          scrolled ? "py-2.5 px-4 sm:px-6" : "py-3 px-4 sm:px-6"
        } min-h-[64px] sm:min-h-[68px]`}
      >
        {/* LEFT: Store Logo */}
        <Link href="#hero" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-8 h-8 rounded-full bg-[#1D1D1B] text-white flex items-center justify-center shadow-sm group-hover:bg-[#8A6848] transition-colors duration-300">
            <Armchair className="w-4 h-4 text-[#E8DFD3]" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-[21px] font-medium tracking-tight text-[#1D1D1B] leading-none">
              Bilindu <span className="text-[#8A6848] font-normal">Furniture</span>
            </span>
            <span className="text-[10px] tracking-[0.12em] uppercase text-[#8A6848] font-semibold mt-0.5">
              Interior Showroom
            </span>
          </div>
        </Link>

        {/* CENTER: Navigation Links (14px / 500) */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[14px] font-medium text-[#1D1D1B]/80 hover:text-[#1D1D1B] transition-colors relative py-1 group tracking-[-0.005em]"
            >
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#8A6848] group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        {/* RIGHT: Phone + Primary Contact Button */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          {/* Phone (13px) */}
          <a
            href={`tel:${STORE_INFO.phone}`}
            className="flex items-center gap-2 text-[13px] font-normal text-[#1D1D1B]/85 hover:text-[#8A6848] transition-colors px-3 py-1.5 rounded-[4px]"
          >
            <Phone className="w-3.5 h-3.5 text-[#8A6848]" />
            <span>{STORE_INFO.phoneDisplay}</span>
          </a>

          {/* Primary Button (13px / 600) */}
          <Link
            href="#contact"
            className="bg-[#1D1D1B] hover:bg-[#8A6848] text-white text-[13px] font-semibold px-4.5 py-2.5 rounded-[4px] transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-md group active:scale-95"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300 text-[#E8DFD3]" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-[4px] text-[#1D1D1B] hover:bg-[#1D1D1B]/5 transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mt-2 bg-white/95 backdrop-blur-[20px] border border-white/60 rounded-[4px] p-6 shadow-2xl space-y-4"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[14px] font-medium text-[#1D1D1B] hover:text-[#8A6848] py-2 border-b border-[#E8DFD3]/40"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-3">
              <a
                href={`tel:${STORE_INFO.phone}`}
                className="flex items-center justify-center gap-2 text-[13px] font-normal text-[#1D1D1B] py-2.5 rounded-[4px] border border-[#E8DFD3]"
              >
                <Phone className="w-3.5 h-3.5 text-[#8A6848]" />
                <span>{STORE_INFO.phoneDisplay}</span>
              </a>

              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-[#1D1D1B] text-white text-center py-3 rounded-[4px] text-[13px] font-semibold flex items-center justify-center gap-2"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#E8DFD3]" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
