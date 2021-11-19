import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import About from "../src/components/About";
import Specialties from "../src/components/Specialties";
import { data } from "../data";
import MenuPage from "../src/components/MenuPage";
import Contact from "../src/components/Contact";
import Newsletter from "../src/components/Newsletter";
import Footer from "../src/components/Footer";


export default function Home({ specialties }) {


  return (
    <>
      <div className={styles.homeBgColor}>
        <div className={styles.container}>
          <Head>
            <title>Create Next App</title>
            <meta name='description' content='Generated by create next app' />
            <link rel='icon' href='/favicon.ico' />
          </Head>
          <Navbar />
          <Hero />
          <About />
          <Specialties specialties={specialties} />
          <MenuPage />
          <Contact />
          <Newsletter />
          <Footer />
        </div>
      </div>
    </>
  );
}

export const getStaticProps = () => {
  const specialties = data;
  return {
    props: { specialties },
  };
};
