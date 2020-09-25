import Head from "next/head";
import Main from "../components/Main";

export default function Home() {
  return (
    <>
      <Head >
        <title>Nenad Marinković</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="Personal Web Development and Design Portfolio"></meta>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
      </Head>
      <Main />
    </>
  );
}
