import type { AppProps } from "next/app";
import Script from "next/script";
import "../styles/styles.css";

export default function Website({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-54KLXK121W"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-54KLXK121W');
    `}
      </Script>

      <Component {...pageProps} />
    </>
  );
}
