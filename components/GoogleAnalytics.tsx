"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { GOOGLE_ADS_IDS, event } from "@/lib/gtag";

export default function GoogleAdsPixel() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + searchParams.toString();
    // Disparar um evento de page_view para todas as IDs
    GOOGLE_ADS_IDS.forEach((id) => {
      event({ action: "page_view", category: "engagement", label: url });
    });
  }, [pathname, searchParams]);

  return (
    <>
      {/* Carregar Google Ads Pixel para todas as IDs */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            ${GOOGLE_ADS_IDS.map((id) => `gtag('config', '${id}');`).join("\n")}
          `,
        }}
      />
    </>
  );
}
