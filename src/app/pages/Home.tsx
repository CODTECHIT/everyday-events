import { Hero } from "@/app/components/Hero";
import { TrustBar } from "@/app/components/TrustBar";
import { EventCategories } from "@/app/components/EventCategories";
import { ServicesGrid } from "@/app/components/ServicesGrid";
import { Portfolio } from "@/app/components/Portfolio";
import { WhyUs } from "@/app/components/WhyUs";
import { ProcessTimeline } from "@/app/components/ProcessTimeline";
import { Testimonials } from "@/app/components/Testimonials";
import { ClientLogos } from "@/app/components/ClientLogos";
import { CTASection } from "@/app/components/CTASection";
import { ContactSection } from "@/app/components/ContactFooter";

export function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <EventCategories />
      <ServicesGrid />
      <Portfolio />
      <WhyUs />
      <ProcessTimeline />
      <Testimonials />
      <ClientLogos />
      <CTASection />
      <ContactSection />
    </>
  );
}
