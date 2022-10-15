import type { AppProps } from "next/app";
import Script from "next/script";

export default function Website({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-0K713VRZP5`}
      />
  
      <Component {...pageProps} />
    </>
  );
}