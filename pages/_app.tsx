import type { AppProps } from "next/app";
import Script from "next/script";

export default function Website({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-0K713VRZP5`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-0K713VRZP5');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}
