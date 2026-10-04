"use client";

import { useState } from "react";
import { STORE_INFO, getWhatsAppUrl } from "@/data/furnitureData";
import { MapPin, Phone, MessageSquare, Mail, Clock, ArrowRight, CheckCircle2 } from "lucide-react";

// Premium furniture showroom / interior background photographs
const SHOWROOM_IMG = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop";
const SHOWROOM_IMG_FALLBACK = "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop";

export default function ContactSection() {
  const [showroomImg, setShowroomImg] = useState(SHOWROOM_IMG);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    productInterest: "General Furniture Inquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-[80px] sm:py-[100px] px-5 sm:px-10 lg:px-12 bg-[#FAF8F5] text-[#1D1D1B]">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-[40px] sm:mb-[50px] max-w-3xl text-left">
          <span className="text-[12px] font-semibold tracking-[0.12em] text-[#8A6848] uppercase block mb-2">
            GET IN TOUCH
          </span>
          <h2 className="font-heading text-[30px] sm:text-[36px] lg:text-[42px] font-semibold text-[#1D1D1B] leading-[1.1] tracking-[-0.03em]">
            Visit Our Showroom <br className="hidden sm:inline" />
            or Start a Conversation.
          </h2>
          <p className="text-[15px] text-[#1D1D1B]/70 mt-3 font-normal leading-[1.65] max-w-2xl">
            Questions about dimensions, finishes or custom furniture? Our team is here to help.
          </p>
        </div>

        {/* Main 40 / 60 Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-[60px] sm:mb-[80px]">
          
          {/* Left Side (40%): Full Showroom Image Card */}
          <div className="lg:col-span-5 relative rounded-[4px] overflow-hidden min-h-[540px] sm:min-h-[600px] flex flex-col justify-end group shadow-sm">
            {/* Showroom Background Image */}
            <img
              src={showroomImg}
              onError={() => setShowroomImg(SHOWROOM_IMG_FALLBACK)}
              alt="Bilindu Furniture Showroom"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
            />
            {/* Dark Gradient Overlay */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `linear-gradient(180deg, rgba(12,12,12,0.15) 0%, rgba(12,12,12,0.55) 45%, rgba(12,12,12,0.92) 100%)`
              }}
            />

            {/* Glass Contact Information Panel */}
            <div className="relative z-10 m-4 sm:m-6 p-6 rounded-[4px] border border-white/16 bg-[rgba(20,20,18,0.48)] backdrop-blur-[18px] text-white space-y-4.5">
              <div>
                <h3 className="font-heading text-[22px] font-medium text-white">
                  {STORE_INFO.name}
                </h3>
                <p className="text-[10px] font-semibold tracking-[0.12em] text-[#E8DFD3] uppercase mt-0.5">
                  DESIGN DISTRICT SHOWROOM
                </p>
              </div>

              {/* Clean outline contact rows */}
              <div className="space-y-[16px] text-[13px] text-white/90 font-normal">
                
                {/* Showroom Address */}
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-4 h-4 text-[#E8DFD3] shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-medium text-white text-[12px]">Showroom Address</span>
                    <span className="text-white/80">{STORE_INFO.address}</span>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="flex items-start gap-3.5">
                  <Phone className="w-4 h-4 text-[#E8DFD3] shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-medium text-white text-[12px]">Phone Number</span>
                    <a href={`tel:${STORE_INFO.phone}`} className="text-white/80 hover:text-white transition-colors">
                      {STORE_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* WhatsApp Direct */}
                <div className="flex items-start gap-3.5">
                  <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-medium text-white text-[12px]">WhatsApp Direct</span>
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      {STORE_INFO.whatsappDisplay}
                    </a>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start gap-3.5">
                  <Mail className="w-4 h-4 text-[#E8DFD3] shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-medium text-white text-[12px]">Email Address</span>
                    <a href={`mailto:${STORE_INFO.email}`} className="text-white/80 hover:text-white transition-colors">
                      {STORE_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-3.5 pt-2 border-t border-white/12">
                  <Clock className="w-4 h-4 text-[#E8DFD3] shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-medium text-white text-[12px]">Opening Hours</span>
                    <p className="text-white/80 leading-relaxed">
                      {STORE_INFO.hours.weekdays}<br />
                      {STORE_INFO.hours.weekend}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Side (60%): Modern Clean Form Container */}
          <div className="lg:col-span-7 bg-[rgba(255,255,255,0.60)] border border-[rgba(40,30,20,0.08)] rounded-[4px] p-6 sm:p-[40px] flex flex-col justify-between shadow-sm">
            
            {formSubmitted ? (
              <div className="my-auto py-12 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-full bg-[#E8DFD3] text-[#8A6848] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6 text-[#8A6848]" />
                </div>
                <h3 className="font-heading text-[24px] font-medium text-[#1D1D1B]">
                  Thank You, {formData.name}!
                </h3>
                <p className="text-[14px] text-[#1D1D1B]/75 font-normal max-w-md mx-auto leading-relaxed">
                  Your inquiry has been received. One of our showroom specialists will reach out to you within 2 hours.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: "", phone: "", email: "", productInterest: "General Furniture Inquiry", message: "" });
                  }}
                  className="mt-4 bg-[#1D1D1B] hover:bg-[#8A6848] text-white text-[13px] px-6 py-2.5 rounded-[3px] font-medium transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="font-heading text-[24px] font-medium text-[#1D1D1B] tracking-[-0.02em]">
                    Send an Inquiry
                  </h3>
                  <p className="text-[14px] text-[#1D1D1B]/70 mt-1 font-normal">
                    Tell us what you&apos;re looking for and our showroom team will get back to you.
                  </p>
                </div>

                {/* Row 1: Your Name (13px label, 14px input) | Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[13px] font-medium text-[#1D1D1B] block">
                      Your Name <span className="text-[#8A6848]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-[54px] px-4 rounded-[3px] border border-[rgba(30,30,30,0.14)] bg-[rgba(255,255,255,0.55)] text-[14px] text-[#1D1D1B] focus:outline-none focus:border-[#8A6848] focus:ring-4 focus:ring-[#8A6848]/10 transition-all font-normal"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[13px] font-medium text-[#1D1D1B] block">
                      Phone Number <span className="text-[#8A6848]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +1 (555) 019-2834"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full h-[54px] px-4 rounded-[3px] border border-[rgba(30,30,30,0.14)] bg-[rgba(255,255,255,0.55)] text-[14px] text-[#1D1D1B] focus:outline-none focus:border-[#8A6848] focus:ring-4 focus:ring-[#8A6848]/10 transition-all font-normal"
                    />
                  </div>
                </div>

                {/* Row 2: Email Address | Product Interest Dropdown */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[13px] font-medium text-[#1D1D1B] block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. sarah@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full h-[54px] px-4 rounded-[3px] border border-[rgba(30,30,30,0.14)] bg-[rgba(255,255,255,0.55)] text-[14px] text-[#1D1D1B] focus:outline-none focus:border-[#8A6848] focus:ring-4 focus:ring-[#8A6848]/10 transition-all font-normal"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[13px] font-medium text-[#1D1D1B] block">
                      Product Interest
                    </label>
                    <select
                      value={formData.productInterest}
                      onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                      className="w-full h-[54px] px-4 rounded-[3px] border border-[rgba(30,30,30,0.14)] bg-[rgba(255,255,255,0.55)] text-[14px] text-[#1D1D1B] focus:outline-none focus:border-[#8A6848] focus:ring-4 focus:ring-[#8A6848]/10 transition-all cursor-pointer font-normal"
                    >
                      <option>General Furniture Inquiry</option>
                      <option>Living Room</option>
                      <option>Bedroom</option>
                      <option>Dining Room</option>
                      <option>Office Furniture</option>
                      <option>Chairs</option>
                      <option>Tables</option>
                      <option>Custom Furniture</option>
                    </select>
                  </div>
                </div>

                {/* Row 3: Message */}
                <div className="space-y-1.5">
                  <label className="text-[13px] font-medium text-[#1D1D1B] block">
                    Message / Special Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your room space, preferred dimensions, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full h-[130px] p-4 rounded-[3px] border border-[rgba(30,30,30,0.14)] bg-[rgba(255,255,255,0.55)] text-[14px] text-[#1D1D1B] focus:outline-none focus:border-[#8A6848] focus:ring-4 focus:ring-[#8A6848]/10 transition-all resize-none font-normal"
                  />
                </div>

                {/* Submit Button (14px / 500) */}
                <button
                  type="submit"
                  className="group w-full h-[54px] bg-[#1D1D1B] hover:bg-[#8A6848] text-white rounded-[3px] font-medium text-[14px] transition-colors duration-300 flex items-center justify-center gap-2.5 shadow-sm active:scale-[0.99]"
                >
                  <span>Send Inquiry</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-[3px] transition-transform duration-200" />
                </button>

                {/* Quick Contact Row */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-[13px] text-[#1D1D1B]/70 border-t border-[rgba(30,30,30,0.08)]">
                  <span className="font-normal">Prefer a quick conversation?</span>
                  <div className="flex items-center gap-5 font-medium text-[13px]">
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[#1D1D1B] hover:text-[#25D366] transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                      <span>WhatsApp Us →</span>
                    </a>
                    <a
                      href={`tel:${STORE_INFO.phone}`}
                      className="inline-flex items-center gap-1.5 text-[#1D1D1B] hover:text-[#8A6848] transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#8A6848]" />
                      <span>Call Showroom →</span>
                    </a>
                  </div>
                </div>

              </form>
            )}

          </div>

        </div>

        {/* Find Our Showroom Location Map Section */}
        <div className="space-y-4">
          <h3 className="font-heading text-[24px] font-medium text-[#1D1D1B] tracking-[-0.02em]">
            Find Our Showroom
          </h3>
          <div className="relative w-full h-[350px] sm:h-[400px] rounded-[4px] overflow-hidden border border-[rgba(40,30,20,0.12)] shadow-sm bg-[#EFECE6]">
            {/* Embedded Google Maps iframe */}
            <iframe
              title="Maison & Living Showroom Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2177261899017!2d-73.998!3d40.725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598f828a2a8b%3A0x6e8f4bf0e4567890!2sSoHo%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "contrast(0.95) saturate(0.85)" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />

            {/* Floating Glass Overlay Card over the Map */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 p-4 sm:p-5 rounded-[4px] border border-white/20 bg-[rgba(20,20,18,0.78)] backdrop-blur-[16px] text-white shadow-xl max-w-xs z-10 space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#E8DFD3]" />
                <h4 className="font-heading text-[18px] font-medium text-white">{STORE_INFO.name}</h4>
              </div>
              <p className="text-[10px] text-[#E8DFD3] uppercase tracking-[0.12em] font-semibold">
                Design District Showroom
              </p>
              <p className="text-[13px] text-white/80 leading-relaxed font-normal">
                {STORE_INFO.address}
              </p>
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[12px] text-[#E8DFD3] font-medium hover:text-white pt-1 transition-colors group"
              >
                <span>Get Directions</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
