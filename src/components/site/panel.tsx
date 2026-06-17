import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/site";

const panels = [
  "/images/panel/KPSB.jpeg",
  "/images/panel/medkad.png",
  "/images/panel/panel-1 (1).webp",
  "/images/panel/panel-1.webp",
  "/images/panel/panel-2.webp",
  "/images/panel/panel-3.webp",
  "/images/panel/panel-6.webp",
  "/images/panel/panel-7.webp",
  "/images/panel/panel-8.webp",
  "/images/panel/panel-9.webp",
  "/images/panel/panel-10.webp",
  "/images/panel/redalert.png",
];

export function Panel() {
  return (
    <section id="panel" className="relative py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="soft" className="mb-4">
            Panel Insurans & Korporat
          </Badge>
          <h2 className="font-display text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Kami menerima{" "}
            <span className="text-primary">pelbagai panel</span> insurans
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Poliklinik Rozikin diiktiraf oleh syarikat insurans dan TPA
            terkemuka di Malaysia. Sila hubungi kami untuk pengesahan
            perlindungan anda.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {panels.map((src) => (
            <div
              key={src}
              className="group relative flex h-24 items-center justify-center overflow-hidden rounded-2xl border border-white/70 bg-white/80 p-4 shadow-soft backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-soft-lg"
            >
              <Image
                src={src}
                alt=""
                width={200}
                height={120}
                className="max-h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 rounded-3xl border border-pastel-pink/40 bg-white/70 p-8 text-center shadow-soft backdrop-blur sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-display text-lg font-semibold text-foreground sm:text-xl">
              Tidak pasti tentang panel anda?
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Hubungi kami melalui WhatsApp untuk pengesahan dengan segera.
            </p>
          </div>
          <Button asChild>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Semak Panel Anda
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
