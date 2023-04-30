import Head from "next/head";
import Image from "next/image";
import HomePage from "./homePage/HomePage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page | Practicum</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </>
  );
}
