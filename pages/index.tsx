import type { NextPage } from "next";
import { GlobalStyles } from "../styles/globals";
import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Card from "../components/Card";

const Home: NextPage = () => {
  return (
    <>
      <GlobalStyles />
      <Head>
        <title>Nenad Marinković</title>
        <meta name="description" content="Web development and design." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner
        name="Nenad"
        surname="Marinković"
        text="Software developer at DCCS IT Bussiness Solutions in Vienna,
            Austria. Working mainly with Javascript ( React, Vue, Node) on
            designing and developing web interafaces and APIs."
      />
      <Card title="Title" text="Text" reversed={false} />
      <Card title="Title" text="Text" reversed={true} />
    </>
  );
};

export default Home;
