import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig, whatsappUrl } from "@/lib/site";

export function Contact() {
  return (
    <section id="hubungi" className="relative py-20 lg:py-28 bg-pastel-cream/40">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="soft" className="mb-4">
            Hubungi Kami
          </Badge>
          <h2 className="font-display text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Kami sedia <span className="text-primary">melayani anda</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Hubungi kami untuk sebarang pertanyaan, tempahan temujanji atau
            maklumat lanjut tentang perkhidmatan kami.
          </p>
        </div>

        <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-2">
          {/* Contact info */}
          <div className="space-y-4">
            <InfoItem
              icon={MapPin}
              title="Lokasi Kami"
              content={siteConfig.address}
              bg="bg-pastel-pink"
              iconColor="text-rose-700"
            />
            <InfoItem
              icon={Phone}
              title="Telefon"
              content={siteConfig.phone}
              href={`tel:${siteConfig.phoneTel}`}
              bg="bg-pastel-mint"
              iconColor="text-emerald-700"
            />
            <InfoItem
              icon={Mail}
              title="E-mel"
              content={siteConfig.email}
              href={`mailto:${siteConfig.email}`}
              bg="bg-pastel-sky"
              iconColor="text-sky-700"
            />
            <div className="rounded-3xl border border-white/70 bg-white/80 p-5 shadow-soft backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-pastel-lavender">
                  <Clock className="h-5 w-5 text-violet-700" />
                </div>
                <p className="font-display text-base font-semibold text-foreground">
                  Waktu Operasi
                </p>
              </div>
              <dl className="mt-4 space-y-2 text-sm">
                {siteConfig.hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between gap-4 border-b border-border/40 pb-2 last:border-0 last:pb-0"
                  >
                    <dt className="text-muted-foreground">{h.day}</dt>
                    <dd className="text-right font-medium text-foreground">
                      {h.time}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <Button asChild variant="whatsapp" size="lg" className="w-full">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Chat Terus melalui WhatsApp
              </a>
            </Button>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-3xl border border-white/70 bg-white/80 shadow-soft min-h-[420px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.491032211477!2d103.89531699999999!3d1.4779362999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da6b256917a0f1%3A0x3657673180801522!2sPOLIKLINIK%20ROZIKIN%20TAMAN%20BUKIT%20DAHLIA!5e0!3m2!1sen!2smy!4v1781164174632!5m2!1sen!2smy"
              className="h-full w-full min-h-[420px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta lokasi Poliklinik Rozikin"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoItem({
  icon: Icon,
  title,
  content,
  href,
  bg,
  iconColor,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  content: string;
  href?: string;
  bg: string;
  iconColor: string;
}) {
  const Wrapper: any = href ? "a" : "div";
  const props = href
    ? { href, target: href.startsWith("http") ? "_blank" : undefined }
    : {};
  return (
    <Wrapper
      {...props}
      className="flex gap-4 rounded-3xl border border-white/70 bg-white/80 p-5 shadow-soft backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:shadow-soft-lg"
    >
      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${bg}`}
      >
        <Icon className={`h-5 w-5 ${iconColor}`} />
      </div>
      <div className="min-w-0">
        <p className="font-display text-base font-semibold text-foreground">
          {title}
        </p>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
          {content}
        </p>
      </div>
    </Wrapper>
  );
}
