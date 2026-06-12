import { Building2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/site";

const panels = [
  { name: "AIA", color: "from-pastel-pink to-pastel-peach" },
  { name: "Allianz", color: "from-pastel-sky to-pastel-lavender" },
  { name: "Great Eastern", color: "from-pastel-mint to-pastel-sky" },
  { name: "Prudential", color: "from-pastel-lavender to-pastel-pink" },
  { name: "Etiqa", color: "from-pastel-peach to-pastel-cream" },
  { name: "Zurich", color: "from-pastel-sky to-pastel-mint" },
  { name: "Tokio Marine", color: "from-pastel-cream to-pastel-pink" },
  { name: "MediExpress", color: "from-pastel-mint to-pastel-lavender" },
  { name: "PMCare", color: "from-pastel-pink to-pastel-sky" },
  { name: "FWD Takaful", color: "from-pastel-peach to-pastel-mint" },
  { name: "Sunway TPA", color: "from-pastel-lavender to-pastel-cream" },
  { name: "MiCare", color: "from-pastel-cream to-pastel-sky" },
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
          {panels.map((p) => (
            <div
              key={p.name}
              className="group relative flex h-24 items-center justify-center overflow-hidden rounded-2xl border border-white/70 bg-white/80 shadow-soft backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-soft-lg"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-30 transition-opacity group-hover:opacity-50`}
              />
              <div className="relative flex flex-col items-center gap-1.5 px-2 text-center">
                <Building2 className="h-5 w-5 text-foreground/60" />
                <span className="font-display text-sm font-semibold text-foreground sm:text-base">
                  {p.name}
                </span>
              </div>
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
