import {
  Baby,
  Stethoscope,
  Syringe,
  HeartPulse,
  Activity,
  Pill,
  Scissors,
  ClipboardCheck,
  Microscope,
  Scale,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    icon: Stethoscope,
    title: "Konsultasi Am",
    desc: "Pemeriksaan dan rawatan untuk demam, batuk, selsema dan penyakit harian.",
    bg: "bg-pastel-pink",
    iconColor: "text-rose-700",
  },
  {
    icon: Baby,
    title: "Penjagaan Ibu & Anak",
    desc: "Pemeriksaan antenatal, postnatal, imunisasi kanak-kanak dan nasihat penyusuan.",
    bg: "bg-pastel-peach",
    iconColor: "text-amber-700",
  },
  {
    icon: Syringe,
    title: "Vaksinasi",
    desc: "Vaksin kanak-kanak, dewasa, influenza, HPV, demam kepialu dan banyak lagi.",
    bg: "bg-pastel-sky",
    iconColor: "text-sky-700",
  },
  {
    icon: HeartPulse,
    title: "Penyakit Kronik",
    desc: "Pengurusan kencing manis, darah tinggi, kolesterol tinggi dan asma.",
    bg: "bg-pastel-mint",
    iconColor: "text-emerald-700",
  },
  {
    icon: ClipboardCheck,
    title: "Pemeriksaan Kesihatan",
    desc: "Pakej pemeriksaan menyeluruh untuk individu, pra-pekerjaan dan korporat.",
    bg: "bg-pastel-lavender",
    iconColor: "text-violet-700",
  },
  {
    icon: Microscope,
    title: "Ujian Makmal",
    desc: "Ujian darah, air kencing, kehamilan, HbA1c dan saringan penyakit berjangkit.",
    bg: "bg-pastel-cream",
    iconColor: "text-amber-800",
  },
  {
    icon: Scissors,
    title: "Pembedahan Kecil",
    desc: "Jahitan luka, buang ketuat, jagaan luka dan prosedur kecil lain.",
    bg: "bg-pastel-pink",
    iconColor: "text-rose-700",
  },
  {
    icon: Activity,
    title: "Kesihatan Pekerjaan",
    desc: "Pemeriksaan FOMEMA, medical check-up pemandu dan saringan pekerja.",
    bg: "bg-pastel-sky",
    iconColor: "text-sky-700",
  },
  {
    icon: Syringe,
    title: "Suntikan Penurunan Berat Badan",
    desc: "Suntikan terkawal di bawah pengawasan doktor untuk pengurusan berat badan jangka panjang.",
    bg: "bg-pastel-pink",
    iconColor: "text-rose-700",
  },
  {
    icon: Pill,
    title: "Ubat Penurunan Berat Badan",
    desc: "Preskripsi ubat moden yang selamat untuk membantu pengurangan berat badan secara berkesan.",
    bg: "bg-pastel-mint",
    iconColor: "text-emerald-700",
  },
  {
    icon: Scale,
    title: "Penilaian Penurunan Berat Badan",
    desc: "Analisis komposisi badan dan konsultasi untuk pelan penurunan berat badan yang sesuai untuk anda.",
    bg: "bg-pastel-lavender",
    iconColor: "text-violet-700",
  },
];

export function Services() {
  return (
    <section
      id="perkhidmatan"
      className="relative py-20 lg:py-28 bg-pastel-cream/40"
    >
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="soft" className="mb-4">
            Perkhidmatan Kami
          </Badge>
          <h2 className="font-display text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Rawatan yang anda perlukan,{" "}
            <span className="text-primary">semuanya di satu tempat</span>.
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Daripada konsultasi am sehingga prosedur kecil — kami sedia
            menyediakan perkhidmatan kesihatan yang lengkap untuk anda dan
            keluarga.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-6 shadow-soft backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-soft-lg"
            >
              <div
                className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${s.bg} transition-transform group-hover:scale-110 group-hover:rotate-3`}
              >
                <s.icon className={`h-7 w-7 ${s.iconColor}`} />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
