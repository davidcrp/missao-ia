"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/** Meta dataset "missao ia" — the one the ad sets optimise against. */
export const META_PIXEL_ID = "2542538986212836";

/**
 * Checkout amount per Cakto link, so InitiateCheckout carries a value instead
 * of an empty event. Keys are the slugs in content/site.ts.
 */
const CHECKOUT_VALUES: Record<string, number> = {
  "32tztgo": 10, // Missao IA
  kvyy66y_1057741: 29, // Missao IA + 5 Expansoes
  "7h66j7t": 17.9, // upsell taken from the basic-plan modal
};

const pixelScript = `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${META_PIXEL_ID}');
fbq('track','PageView');`;

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Browser-side Meta pixel. Sends PageView and InitiateCheckout.
 *
 * Purchase is deliberately NOT sent from here — it comes from Cakto through
 * UTMify's Conversions API, which only fires on approved orders. Keeping the
 * two events on separate sides avoids double counting.
 */
export function MetaPixel() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  // The inline snippet already tracks the first PageView; only report the
  // client-side navigations that follow it.
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    window.fbq?.("track", "PageView");
  }, [pathname]);

  // Every checkout path is a plain <a> to pay.cakto.com.br, so one delegated
  // listener covers the pricing cards, the upsell modal and the floating CTA.
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>("a[href]");
      const href = link?.getAttribute("href") ?? "";
      if (!href.includes("pay.cakto.com.br")) return;

      const slug = href.split("?")[0].split("/").filter(Boolean).pop() ?? "";
      const value = CHECKOUT_VALUES[slug];

      window.fbq?.("track", "InitiateCheckout", {
        content_name: slug,
        currency: "BRL",
        ...(value === undefined ? {} : { value }),
      });
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {pixelScript}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}
