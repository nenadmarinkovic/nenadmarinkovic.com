import React, { useEffect } from "react";
import * as smoothscroll from "smoothscroll-polyfill";
import Head from "next/head";
import Main from "../components/Main";

export default function Home() {
  useEffect(() => {
    smoothscroll.polyfill();
  });

  return (
    <>
      <Head>
        <title>Nenad Marinković</title>
      </Head>
      <Main />
    </>
  );
}
