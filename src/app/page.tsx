import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { Services } from "@/components/site/services";
import { WhyChooseUs } from "@/components/site/why-choose-us";
import { Testimonials } from "@/components/site/testimonials";
import { Panel } from "@/components/site/panel";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";
import { WhatsappFloat } from "@/components/site/whatsapp-float";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <Panel />
        <Contact />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  );
}
