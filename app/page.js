"use client";
import Image from "next/image";
import About from "./_components/About";
import Community from "./_components/Community";
import Contact from "./_components/Contact";
import Feature from "./_components/Feature";
import Footer from "./_components/Footer";
import Header from "./_components/Header"; // Import Header
import Hero from "./_components/Hero";
import JoinAirdrop from "./_components/JoinAirdrop";
import Roadmap from "./_components/Roadmap";

import bgImage from "@/public/pepe-home.png";
import Tokomonic from "./_components/Tokomonic";
import LogoFeatured from "./_components/LogoFeatured";

export default function Home() {
  return (
    <main className="bg-[#000] overflow-x-hidden">
      {/* <section className="relative  lg:h-[120vh] h-[100vh]"> */}
      <Header />
      {/* <Image
          fill
          src={bgImage}
          alt="money-background"
          placeholder="blur"
          quality={50}
          className="object-cover object-top"
        /> */}
      <Hero />
      {/* </section> */}
      <About />
      <Tokomonic />
      <Feature />
      <Roadmap />
      <JoinAirdrop />
      <Community />
      <Contact />
      <LogoFeatured />
      <Footer />
    </main>
  );
}
