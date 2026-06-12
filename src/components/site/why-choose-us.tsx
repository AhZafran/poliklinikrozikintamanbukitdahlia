import { Badge } from "@/components/ui/badge";

const reasons = [
  {
    title: "Doktor Berpengalaman",
    desc: "Pasukan kami terdiri daripada doktor dan jururawat yang berkelayakan dan berpengalaman luas.",
  },
  {
    title: "Klinik Bersih & Selesa",
    desc: "Suasana klinik yang ceria, bersih dan mengikut standard penjagaan kesihatan moden.",
  },
  {
    title: "Masa Menunggu Singkat",
    desc: "Sistem tempahan dan giliran teratur untuk memastikan anda tidak menunggu terlalu lama.",
  },
  {
    title: "Tempat Letak Kereta Luas",
    desc: "Lokasi strategik dengan parkir yang banyak — senang untuk semua keluarga datang.",
  },
  {
    title: "Panel Insurans & Korporat",
    desc: "Kami diiktiraf oleh pelbagai syarikat insurans dan panel TPA terkemuka di Malaysia.",
  },
  {
    title: "Harga Berpatutan",
    desc: "Caj rawatan yang telus dan mampu milik tanpa menjejaskan kualiti perkhidmatan.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="mengapa" className="relative overflow-hidden py-20 lg:py-28">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-pastel-lavender/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 h-80 w-80 rounded-full bg-pastel-mint/40 blur-3xl" />

      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="soft" className="mb-4">
            Mengapa Pilih Kami
          </Badge>
          <h2 className="font-display text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Sebab-sebab keluarga{" "}
            <span className="text-primary">memilih kami</span>.
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Lebih dari sekadar klinik — kami adalah rakan kongsi penjagaan
            kesihatan jangka panjang anda.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-soft backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-soft-lg"
            >
              <h3 className="font-display text-lg font-semibold text-foreground">
                {r.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
