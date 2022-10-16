import type { AppProps } from "next/app";

export default function Website({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
