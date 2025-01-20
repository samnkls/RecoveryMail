// Google Ads Pixel Measurement ID
export const GOOGLE_ADS_ID = "AW-16824697526";

// Carregar a tag do Google Ads Pixel
export const loadGoogleAds = () => {
  const script1 = document.createElement("script");
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`;
  document.head.appendChild(script1);

  const script2 = document.createElement("script");
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GOOGLE_ADS_ID}');
  `;
  document.head.appendChild(script2);
};

// Disparar eventos específicos
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category?: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== "undefined") {
    window.gtag("event", action, {
      send_to: GOOGLE_ADS_ID,
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
