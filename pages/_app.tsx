import type { AppProps } from "next/app";
import Script from "next/script";

export default function Website({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-54KLXK121W`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-54KLXK121W', {
            page_path: window.location.pathname
          });`,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}