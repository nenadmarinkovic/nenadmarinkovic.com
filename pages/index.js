import Head from "next/head";
import Main from "../components/Main";
import smoothscroll from "smoothscroll-polyfill";
smoothscroll.polyfill();

export default function Home() {
  return (
    <>
      <Head>
        <title>Nenad Marinković</title>
      </Head>
      <Main />
    </>
  );
}
