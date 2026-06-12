import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/site/logo";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#0e1a3a] via-[#0a1530] to-[#060d20] text-white/80">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pastel-sky/60 to-transparent" />
      <div className="container py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo variant="light" />
            <p className="mt-5 text-sm leading-relaxed text-white/70">
              Poliklinik Rozikin menyediakan rawatan perubatan yang menyeluruh,
              mesra dan berpatutan untuk seisi keluarga di Malaysia.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display text-base font-semibold text-white">
              Pautan Pantas
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {siteConfig.nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display text-base font-semibold text-white">
              Waktu Operasi
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {siteConfig.hours.map((h) => (
                <li key={h.day} className="flex flex-col">
                  <span className="text-white/60">{h.day}</span>
                  <span className="text-white">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display text-base font-semibold text-white">
              Hubungi
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex gap-2 text-white/70">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-pastel-sky" />
                <span>{siteConfig.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phoneTel}`}
                  className="flex items-center gap-2 text-white/70 hover:text-white"
                >
                  <Phone className="h-4 w-4 text-pastel-sky" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-white/70 hover:text-white break-all"
                >
                  <Mail className="h-4 w-4 shrink-0 text-pastel-sky" />
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Hak Cipta Terpelihara.
          </p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">
              Dasar Privasi
            </a>
            <a href="#" className="hover:text-white">
              Terma & Syarat
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
