import { CalendarHeart, Stethoscope, ShieldCheck, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="utama"
      className="relative overflow-hidden bg-pastel-gradient pt-32 pb-20 lg:pt-40 lg:pb-28"
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-pastel-sky/60 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute top-40 -right-24 h-80 w-80 rounded-full bg-pastel-sky/60 blur-3xl animate-blob [animation-delay:2s]" />
      <div className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-pastel-mint/60 blur-3xl animate-blob [animation-delay:4s]" />

      <div className="container relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="text-center lg:text-left">
            <h1 className="font-display text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Penjagaan Kesihatan{" "}
              <span className="relative inline-block text-primary">
                Sepenuh Hati
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 9C50 2 150 2 198 9"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    className="text-pastel-peach"
                  />
                </svg>
              </span>{" "}
              Untuk Seisi Keluarga
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0 mx-auto">
              Di Poliklinik Rozikin, kami menyediakan rawatan perubatan
              menyeluruh — dari bayi sehingga warga emas — dalam suasana yang
              mesra, selesa dan berpatutan.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Button size="lg" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <CalendarHeart className="h-5 w-5" />
                  Tempah Temujanji
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#perkhidmatan">
                  <Stethoscope className="h-5 w-5" />
                  Lihat Perkhidmatan
                </a>
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 max-w-sm lg:mx-0 mx-auto">
              <Stat value="10+" label="Tahun Pengalaman" />
              <Stat value="1000+" label="Pesakit Dirawat" />
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
              {/* Doctor image card */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-pastel-sky via-pastel-lavender to-pastel-cream shadow-soft-lg overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.6),transparent_50%)]" />
                <DoctorIllustration />
              </div>

              {/* Floating cards */}
              <div className="absolute -left-6 top-12 hidden sm:flex items-center gap-3 rounded-2xl bg-white/90 backdrop-blur p-3 shadow-soft animate-float">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pastel-mint">
                  <ShieldCheck className="h-5 w-5 text-emerald-700" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Bertauliah</p>
                  <p className="text-sm font-semibold">MOH Berdaftar</p>
                </div>
              </div>

              <div className="absolute -right-4 bottom-16 hidden sm:flex items-center gap-3 rounded-2xl bg-white/90 backdrop-blur p-3 shadow-soft animate-float [animation-delay:1s]">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pastel-sky">
                  <Clock className="h-5 w-5 text-sky-700" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Buka Sentiasa</p>
                  <p className="text-sm font-semibold">Klinik 24 Jam</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center lg:text-left">
      <p className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
        {value}
      </p>
      <p className="mt-1 text-xs leading-tight text-muted-foreground sm:text-sm">
        {label}
      </p>
    </div>
  );
}

function DoctorIllustration() {
  return (
    <svg
      viewBox="0 0 320 400"
      className="absolute inset-0 h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {/* Background circles */}
      <circle cx="160" cy="170" r="110" fill="rgba(255,255,255,0.35)" />
      <circle cx="160" cy="170" r="80" fill="rgba(255,255,255,0.45)" />

      {/* Doctor silhouette */}
      <g>
        {/* Head */}
        <circle cx="160" cy="135" r="42" fill="#FFE0CB" />
        {/* Hijab/Hair */}
        <path d="M120 130 Q120 80 160 80 Q200 80 200 130 Q200 165 195 190 L125 190 Q120 165 120 130 Z" fill="#5B3D5E" />
        <path d="M125 175 L125 210 L195 210 L195 175 Z" fill="#5B3D5E" opacity="0.6" />
        {/* Face features */}
        <circle cx="146" cy="138" r="2.5" fill="#3a2a3b" />
        <circle cx="174" cy="138" r="2.5" fill="#3a2a3b" />
        <path d="M150 155 Q160 162 170 155" stroke="#3a2a3b" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* Body / coat */}
        <path d="M90 220 Q90 200 130 195 L190 195 Q230 200 230 220 L230 360 L90 360 Z" fill="#ffffff" />
        <path d="M150 200 L160 240 L170 200 Z" fill="#FFB3C7" />
        {/* Stethoscope */}
        <path d="M140 210 Q140 250 160 260 Q180 250 180 210" stroke="#3a2a3b" strokeWidth="3" fill="none" />
        <circle cx="160" cy="268" r="8" fill="#3a2a3b" />
        <circle cx="160" cy="268" r="4" fill="#FFB3C7" />
        {/* Pocket / badge */}
        <rect x="190" y="240" width="22" height="14" rx="3" fill="#FFE5D4" />
      </g>
    </svg>
  );
}
