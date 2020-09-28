import * as smoothscroll from "smoothscroll-polyfill";
import Head from "next/head";
import Main from "../components/Main";
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
