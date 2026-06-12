"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/site/logo";
import { whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-soft border-border/60"
          : "bg-white/75 backdrop-blur-sm border-white/40"
      )}
    >
      <div className="container flex h-20 items-center justify-between gap-4 sm:h-[88px]">
        <a href="#utama" aria-label="Poliklinik Rozikin" className="shrink-0">
          <Logo />
        </a>

        <Button asChild size="sm" className="sm:h-11 sm:px-6 sm:text-sm">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-4 w-4" />
            <span className="hidden xs:inline">Tempah </span>Temujanji
          </a>
        </Button>
      </div>
    </header>
  );
}
