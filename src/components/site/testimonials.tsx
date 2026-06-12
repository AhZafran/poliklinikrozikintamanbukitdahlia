"use client";

import { useEffect, useRef, useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Testimonial = {
  name: string;
  role: string;
  content: string;
  rating: number;
  initials: string;
  bg: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Nurzulhairah Jamil",
    role: "Ulasan Google",
    content:
      "Saya datang malam 30/5 Jam 11.30 mlm & 31/5 Jam 4.30 pagi bawa anak sempat tdk. Doktor yg consult sgt bagus, walaupun ddtn malam & tgh pagi. Lembut berkata-kata & tenang. Biasa kalau saya dtg waktu2 mcm atas ni di klinik lain..biasanya doc layan nak tak nak je.. moga Rozikin kekalkan servis & ambil doc yg mcm ni…terbaik.",
    rating: 5,
    initials: "NJ",
    bg: "bg-pastel-pink",
  },
  {
    name: "Brain Gym",
    role: "Ulasan Google",
    content:
      "Puas hati kalau datang sini. Dr lelaki ke dr perempuan ke, dua-dua check betul2 dan ambik history patient full. Takde skip2, dan explain pun panjang dan ada bg rawatan follow-up if masih tak ok. I jauh pun suka dtg sini.",
    rating: 5,
    initials: "BG",
    bg: "bg-pastel-sky",
  },
  {
    name: "Sha Ibrahim",
    role: "Ulasan Google",
    content:
      "Doktor explain dengan details dan follow up untuk next treatment. Advice yang bagus drpd doktor dan mudah untuk faham.",
    rating: 5,
    initials: "SI",
    bg: "bg-pastel-mint",
  },
  {
    name: "Sarah Aisyah",
    role: "Ulasan Google",
    content:
      "Hantar my nenek pergi klinik sbb demam.. very recommended.. servis laju.. staff baik.. doctor pun baik sangat.",
    rating: 5,
    initials: "SA",
    bg: "bg-pastel-lavender",
  },
  {
    name: "Syah Reez",
    role: "Ulasan Google",
    content:
      "Doktor & staff very friendly, service laju.. dtg mlm pun alhamdulillah tak ada masalah doktor tak ada..",
    rating: 5,
    initials: "SR",
    bg: "bg-pastel-peach",
  },
  {
    name: "Kamal Hakim",
    role: "Ulasan Google",
    content:
      "Dari staf sampai doctor terbaik, doctor yang peramah. Sy dah jumpa 3 doktor kt situ semua terbaik, staf peramah, tak tahu terus boleh tanya.",
    rating: 5,
    initials: "KH",
    bg: "bg-pastel-cream",
  },
  {
    name: "Nurul Aisyah",
    role: "Ulasan Google",
    content:
      "Klinik paling best i pernah pergi.. staff peramah, doctor explain bagus.",
    rating: 5,
    initials: "NA",
    bg: "bg-pastel-pink",
  },
  {
    name: "Anak Perantau",
    role: "Ulasan Google",
    content:
      "Best klinik, staff n dokter cantik, comel… terbaikkk Poliklinik Rozikin. Rasa macam hari-hari nak dtg, smua staf cntik.",
    rating: 5,
    initials: "AP",
    bg: "bg-pastel-sky",
  },
  {
    name: "Nur Zahra'",
    role: "Ulasan Google",
    content:
      "Doktor faham keadaan pesakit. Mudah berurusan dgn doktor & staf.",
    rating: 5,
    initials: "NZ",
    bg: "bg-pastel-mint",
  },
  {
    name: "Nurzailah Hana Nasir",
    role: "Ulasan Google",
    content:
      "Good consultation.. doctor & staff very friendly.. Price reasonable.",
    rating: 5,
    initials: "NH",
    bg: "bg-pastel-lavender",
  },
  {
    name: "Nur Huda",
    role: "Ulasan Google",
    content:
      "The best klinik.. doktor dgn staff lembut je bercakap.. tidak tergesa-gesa utk merawat.",
    rating: 5,
    initials: "NH",
    bg: "bg-pastel-peach",
  },
  {
    name: "Khaei Runner",
    role: "Ulasan Google",
    content:
      "Buat khatan dewasa kat klinik ni… staff baik dan peramah, doktor yang sunat pun sangat baik. Terima kasih.",
    rating: 5,
    initials: "KR",
    bg: "bg-pastel-cream",
  },
  {
    name: "Azizi Adil",
    role: "Ulasan Google",
    content:
      "Pleasant experience. Great service by receptionist, felt welcomed. Love it. Had good consultation with the doctor as well.",
    rating: 5,
    initials: "AA",
    bg: "bg-pastel-pink",
  },
  {
    name: "Hafizul Imran",
    role: "Ulasan Google",
    content:
      "Layanan bagus, service pon pantas… yang penting doktor lawa mat.",
    rating: 5,
    initials: "HI",
    bg: "bg-pastel-sky",
  },
];

export function Testimonials() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateButtons = () => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    updateButtons();
    const el = scrollerRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateButtons, { passive: true });
    window.addEventListener("resize", updateButtons);
    return () => {
      el.removeEventListener("scroll", updateButtons);
      window.removeEventListener("resize", updateButtons);
    };
  }, []);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: step * dir, behavior: "smooth" });
  };

  return (
    <section
      id="testimoni"
      className="relative py-20 lg:py-28 bg-gradient-to-b from-pastel-cream/40 to-pastel-sky/30"
    >
      <div className="container">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <Badge variant="soft" className="mb-4">
              Testimoni Pesakit
            </Badge>
            <h2 className="font-display text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Apa kata pesakit{" "}
              <span className="text-primary">kami</span>?
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Setiap senyuman dan ucapan terima kasih daripada pesakit adalah
              keberkatan bagi kami.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scrollBy(-1)}
              disabled={!canPrev}
              aria-label="Sebelumnya"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scrollBy(1)}
              disabled={!canNext}
              aria-label="Seterusnya"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((t) => (
            <article
              key={t.name}
              data-card
              className="snap-start shrink-0 w-[88%] sm:w-[420px] rounded-3xl border border-white/70 bg-white/85 p-6 shadow-soft backdrop-blur-sm"
            >
              <Quote className="h-8 w-8 text-pastel-pink" />
              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="mt-4 text-base leading-relaxed text-foreground/85">
                &ldquo;{t.content}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-pastel-pink/30 pt-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full ${t.bg} font-display text-lg font-semibold text-foreground`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
