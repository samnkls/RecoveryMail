// Google Ads Pixel Measurement IDs
export const GOOGLE_ADS_IDS = [
  "AW-11540932161",
  "AW-11549189858",
  "AW-16824697526",
  "AW-16839092290",
];

// Carregar a tag do Google Ads Pixel
export const loadGoogleAds = () => {
  const script1 = document.createElement("script");
  script1.async = true;
  script1.src = "https://www.googletagmanager.com/gtag/js";
  document.head.appendChild(script1);

  const script2 = document.createElement("script");
  script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    `;
  document.head.appendChild(script2);

  // Configurar todas as IDs
  GOOGLE_ADS_IDS.forEach((id) => {
    const scriptConfig = document.createElement("script");
    scriptConfig.innerHTML = `gtag('config', '${id}');`;
    document.head.appendChild(scriptConfig);
  });
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
    GOOGLE_ADS_IDS.forEach((id) => {
      window.gtag("event", action, {
        send_to: id,
        event_category: category,
        event_label: label,
        value: value,
      });
    });
  }
};
