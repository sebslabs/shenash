"use client";

import { MessageSquare } from "lucide-react";
import { getWhatsAppUrl } from "@/data/furnitureData";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 group">
      {/* Tooltip on Hover Only */}
      <div className="opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 bg-white/95 backdrop-blur-md text-[#202020] px-3.5 py-2 rounded-[4px] shadow-xl border border-[#E8DFD3] text-xs whitespace-nowrap">
        <p className="font-semibold text-[11px] text-[#8A6848]">Need Furniture Advice?</p>
        <p className="text-[11px] text-[#202020]/80">Chat live on WhatsApp</p>
      </div>

      {/* Floating Action Button */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="w-[58px] h-[58px] bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-[1.06] active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-6 h-6 fill-current" />
      </a>
    </div>
  );
}
