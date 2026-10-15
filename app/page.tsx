import { offerBar } from "@/content/site";
import { Author } from "@/components/Author";
import { Bonuses } from "@/components/Bonuses";
import { Faq } from "@/components/Faq";
import { Features } from "@/components/Features";
import { FinalCta, SiteFooter } from "@/components/FinalCta";
import { FloatingCta } from "@/components/FloatingCta";
import { Hero, OfferBar } from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import { Problem } from "@/components/Problem";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";

/**
 * Band order follows the reference funnel structure:
 * hero → stats → problem → benefits → bonuses → pricing → proof → author → faq → cta
 *
 * Order bumps and the guarantee sit after pricing because they belong to this
 * offer; the reference has neither.
 */
export default function Home() {
  return (
    <>
      <OfferBar text={offerBar} />
      <Hero />
      <Stats />
      <Problem />
      <Features />
      <Bonuses />
      <Pricing />
      <Testimonials />
      <Author />
      <Faq />
      <FinalCta />
      <SiteFooter />
      <FloatingCta />
    </>
  );
}
