import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Card from "../components/Card";


const Home: NextPage = () => {
  return (
    <>
   
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
      <Card
        title="Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        reversed={false}
        boxColor="pink"
        boxTitle="Design"
        boxText="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      />
      <Card
        title="Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        reversed={true}
        boxColor="blue"
        boxTitle="Develop"
        boxText="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      />
      <Card
        title="Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        reversed={false}
        boxColor="green"
        boxTitle="Deploy"
        boxText="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      />
    </>
  );
};

export default Home;
