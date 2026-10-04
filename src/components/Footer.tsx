"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Armchair,
  MapPin,
  Phone,
  MessageSquare,
  Mail,
  Clock,
  ArrowUp,
} from "lucide-react";
import { STORE_INFO, getWhatsAppUrl } from "@/data/furnitureData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const companyLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Story", href: "#about" },
    { name: "Showroom", href: "#contact" },
    { name: "Contact", href: "#contact" },
  ];

  const exploreLinks = [
    { name: "Living Room", href: "#collections" },
    { name: "Bedroom", href: "#collections" },
    { name: "Dining Room", href: "#collections" },
    { name: "Office Furniture", href: "#collections" },
    { name: "Chairs", href: "#collections" },
    { name: "Tables", href: "#collections" },
  ];

  const supportLinks = [
    { name: "Contact Us", href: "#contact" },
    { name: "Delivery Information", href: "#contact" },
    { name: "Furniture Care", href: "#about" },
    { name: "Privacy Policy", href: "#" },
    { name: "FAQ", href: "#contact" },
  ];

  return (
    <footer className="relative w-full py-12 sm:py-16 px-3 sm:px-6 lg:px-8 bg-[#101010] overflow-hidden flex items-center justify-center">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2400&q=95"
          alt="Luxury Furniture Showroom Background"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/45" />
      </div>

      {/* Main Glass Footer Container */}
      <div className="relative z-10 w-[calc(100%-24px)] sm:w-[calc(100%-48px)] max-w-[1540px] mx-auto bg-[#141412]/50 backdrop-blur-[18px] border border-white/14 rounded-[4px] p-7 sm:p-12 lg:p-[56px_56px_28px] shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_20px_50px_rgba(0,0,0,0.20)] text-white space-y-10">
        
        {/* Top Brand & Social Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-white/14">
          
          {/* Brand Logo (24px) */}
          <Link href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-[#1D1D1B] text-white flex items-center justify-center shrink-0 border border-white/20 group-hover:bg-[#8A6848] transition-colors duration-300">
              <Armchair className="w-5 h-5 text-[#E8DFD3]" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-[24px] font-medium tracking-tight text-white leading-none">
                Bilindu <span className="text-[#E8DFD3] font-normal">Furniture</span>
              </span>
              <span className="text-[10px] tracking-[0.12em] uppercase text-[#E8DFD3] font-semibold mt-1">
                FURNITURE SHOWROOM
              </span>
            </div>
          </Link>

          {/* Social Media Icons */}
          <div className="flex items-center gap-5 pt-2 sm:pt-0">
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-white/80 hover:text-white transform hover:-translate-y-0.5 transition-all duration-250"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-white/80 hover:text-white transform hover:-translate-y-0.5 transition-all duration-250"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-white/80 hover:text-white transform hover:-translate-y-0.5 transition-all duration-250"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>

        </div>

        {/* 4 Link Columns (16px column titles, 13.5px links) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 py-8">
          
          {/* COLUMN 1 — COMPANY */}
          <div className="space-y-3.5">
            <h4 className="font-heading text-[16px] font-semibold text-white tracking-[-0.01em]">
              Company
            </h4>
            <ul className="space-y-2.5 text-[13.5px] text-white/70 font-normal leading-[1.5]">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 2 — EXPLORE */}
          <div className="space-y-3.5">
            <h4 className="font-heading text-[16px] font-semibold text-white tracking-[-0.01em]">
              Explore
            </h4>
            <ul className="space-y-2.5 text-[13.5px] text-white/70 font-normal leading-[1.5]">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3 — SUPPORT */}
          <div className="space-y-3.5">
            <h4 className="font-heading text-[16px] font-semibold text-white tracking-[-0.01em]">
              Support
            </h4>
            <ul className="space-y-2.5 text-[13.5px] text-white/70 font-normal leading-[1.5]">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4 — SHOWROOM (13px contact info) */}
          <div className="space-y-3.5">
            <h4 className="font-heading text-[16px] font-semibold text-white tracking-[-0.01em]">
              Showroom
            </h4>

            <ul className="space-y-3 text-[13px] text-white/75 font-normal">
              {/* Address */}
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#E8DFD3] shrink-0 mt-0.5" />
                <span>{STORE_INFO.address}</span>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#E8DFD3] shrink-0" />
                <a
                  href={`tel:${STORE_INFO.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {STORE_INFO.phoneDisplay}
                </a>
              </li>

              {/* WhatsApp */}
              <li className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors font-medium"
                >
                  WhatsApp: {STORE_INFO.whatsappDisplay}
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#E8DFD3] shrink-0" />
                <a
                  href={`mailto:${STORE_INFO.email}`}
                  className="hover:text-white transition-colors"
                >
                  {STORE_INFO.email}
                </a>
              </li>

              {/* Opening Hours */}
              <li className="flex items-start gap-3 pt-1">
                <Clock className="w-4 h-4 text-[#E8DFD3] shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/85">Mon – Sat: 9:00 AM – 7:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Row (12px) */}
        <div className="pt-6 border-t border-white/14 flex flex-col sm:flex-row items-center justify-between text-[12px] text-white/68 gap-4 font-normal">
          <p>© 2026 {STORE_INFO.name}. All Rights Reserved.</p>

          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#E8DFD3]" />
          </button>
        </div>

      </div>
    </footer>
  );
}
