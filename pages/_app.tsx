import type { AppProps } from "next/app";

export default function Website({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-54KLXK121W"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        
        {`  
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-54KLXK121W');

            
        `}
      </Script> */}

      <Component {...pageProps} />
    </>
  );
}
