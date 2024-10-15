"use client";
/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import { useState, useEffect } from "react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css";

import Button from "./Button";
import Link from "next/link";

// import AboutImg from "@/public/pepe-About.png";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in ms
    });
  }, []);
  return (
    <section className="my-0 section-aboutt">
      <div className="container-div grid lg:grid-cols-2 gap-12 items-center ">
        <article
          className="space-y-10 flex flex-col justify-center items-center p-2 lg:p-0"
          data-aos="fade-left"
        >
          <h2 className="text-3xl lg:text-6xl font-bold neon-heading leading-tight uppercase">
            About $pepe
          </h2>
          <p className="text-[12px] lg:text-lg  text-[#eee] text-center ">
            Pepelayer2 (L2PEPE) is a meme-based cryptocurrency built on the
            Solana blockchain, which is known for its high throughput and low
            transaction costs. Leveraging the popularity of meme culture,
            particularly the "Pepe the Frog" meme, Pepemenecoin aims to create a
            community-driven project that appeals to both crypto enthusiasts and
            fans of internet memes.
          </p>
          <Button className="px-24 bg-primary-btn-color">
            <Link href="/airDrop">Join AirDrop</Link>
          </Button>
        </article>
        <article className="relative " data-aos="fade-left">
          <img
            src="/about-pattern.png"
            alt=""
            className="absolute top-[-157px]
    right-[100px]"
          />
          {/* <div className="relative"> */}
          {/* <div className="absolute inset-0  gradient-about opacity-50 " /> */}
          <img
            src="/About.png"
            alt="about"
            className="gradient-about p-2 lg:p-0"
          />
          {/* </div> */}
        </article>
      </div>
    </section>
  );
}

export default About;
