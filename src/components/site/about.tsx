import {
  HeartHandshake,
  Users,
  Award,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const highlights = [
  {
    icon: HeartHandshake,
    title: "Mesra & Penyayang",
    desc: "Doktor dan kakitangan kami melayan setiap pesakit seperti keluarga sendiri.",
    bg: "bg-pastel-pink",
    iconColor: "text-rose-700",
  },
  {
    icon: Users,
    title: "Semua Peringkat Umur",
    desc: "Dari bayi yang baru lahir sehingga warga emas — kami sedia membantu.",
    bg: "bg-pastel-sky",
    iconColor: "text-sky-700",
  },
  {
    icon: Award,
    title: "Berpengalaman",
    desc: "Lebih 10 tahun memberikan rawatan kesihatan kepada komuniti tempatan.",
    bg: "bg-pastel-mint",
    iconColor: "text-emerald-700",
  },
  {
    icon: Sparkles,
    title: "Suasana Selesa",
    desc: "Klinik yang bersih, ceria dan dilengkapi kemudahan moden untuk anda.",
    bg: "bg-pastel-lavender",
    iconColor: "text-violet-700",
  },
];

export function About() {
  return (
    <section id="tentang" className="relative py-20 lg:py-28">
      <div className="container">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Badge variant="soft" className="mb-4">
              Tentang Kami
            </Badge>
            <h2 className="font-display text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Klinik keluarga yang anda boleh{" "}
              <span className="text-primary">percayai</span>.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                Poliklinik Rozikin ditubuhkan dengan satu hasrat — untuk
                menyediakan rawatan perubatan yang berkualiti, mesra dan mampu
                milik untuk setiap ahli keluarga di komuniti kita.
              </p>
              <p>
                Dengan barisan doktor dan kakitangan yang berpengalaman, kami
                komited untuk memberikan penjagaan yang menyeluruh — bermula
                dari pemeriksaan kesihatan harian, rawatan penyakit kronik,
                penjagaan ibu dan anak, sehinggalah perkhidmatan kesihatan
                pekerjaan.
              </p>
              <p className="font-medium text-foreground">
                Kesihatan anda, keutamaan kami. ❤
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="group relative rounded-3xl border border-white/60 bg-white/70 p-6 shadow-soft backdrop-blur transition-all hover:-translate-y-1 hover:shadow-soft-lg"
              >
                <div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${h.bg}`}
                >
                  <h.icon className={`h-6 w-6 ${h.iconColor}`} />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {h.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {h.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
