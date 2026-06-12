"use client";

import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

export function WhatsappFloat() {
  const [visible, setVisible] = useState(false);
  const [tipOpen, setTipOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 600);
    const tip = setTimeout(() => setTipOpen(true), 2200);
    return () => {
      clearTimeout(t);
      clearTimeout(tip);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-5 right-5 z-50 flex items-end gap-3 transition-all duration-500 sm:bottom-6 sm:right-6",
        visible ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-4"
      )}
    >
      {tipOpen && (
        <div className="relative max-w-[220px] rounded-2xl bg-white p-3 pr-8 text-sm shadow-soft-lg ring-1 ring-black/5">
          <p className="font-semibold text-foreground">Hai! 👋</p>
          <p className="mt-0.5 text-xs text-muted-foreground">
            Boleh saya bantu anda? Klik untuk chat di WhatsApp.
          </p>
          <button
            aria-label="Tutup"
            onClick={() => setTipOpen(false)}
            className="absolute top-2 right-2 flex h-5 w-5 items-center justify-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <X className="h-3 w-3" />
          </button>
          <span className="absolute -bottom-1.5 right-6 h-3 w-3 rotate-45 bg-white" />
        </div>
      )}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.6)] transition-all hover:scale-110 hover:shadow-[0_16px_40px_-8px_rgba(37,211,102,0.8)]"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping [animation-duration:2.5s]" />
        <MessageCircle className="relative h-6 w-6 fill-white" />
        <span className="absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-white px-1 text-[10px] font-bold text-[#25D366] shadow-md">
          1
        </span>
      </a>
    </div>
  );
}
