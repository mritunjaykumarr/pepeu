"use client";
import Image from "next/image";
import { IoCopyOutline } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast"; // Import toast
import featureBg from "@/public/pepe-token-bg.jpg";
import Button from "./Button";
import { useState, useEffect } from "react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import { handleCopy } from "../_utlis/CopyToClipboard";

function Feature() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in ms
    });
  }, []);

  // const handleCopy = async (address) => {
  //   try {
  //     await navigator.clipboard.writeText(address); // Copy the address to clipboard
  //     toast.success("Address copied!"); // Show success message
  //   } catch (err) {
  //     toast.error("Failed to copy the address."); // Handle any copy errors
  //   }
  // };

  return (
    <section className="lg:mt-0 mt-[440px]" id="roadmap">
      <div className="container-div py-12 lg:grid grid-cols-2 gap-20 items-center ">
        <div className="relative p-8 lg:p-0" data-aos="fade-left">
          {" "}
          {/* AOS applied here */}
          <Image
            src={featureBg}
            alt="feature bg"
            placeholder="blur"
            quality={50}
            className="img-box"
          />
        </div>
        <div
          className="space-y-10 flex justify-center items-center lg:items-start flex-col mt-8"
          data-aos="fade-left"
        >
          {" "}
          {/* AOS applied here */}
          <h1 className="text-4xl lg:text-7xl font-bold text-[#e1a313] line-hight text-shadow ">
            Pepe Layer <br /> Token
          </h1>
          <div className="space-y-4 p-2 lg:p-0">
            {/* Second button */}
            <Button
              className=" lg:p-0 pr-0 lg:text-base bg-[''] hover:bg-black flex  text-[10px] flex-col rounded-lg lg:flex-row lg:px-0 lg:py-0"
              onClick={() =>
                handleCopy("0x5E20B1d17376A10c66f539004bC970Af59F2DC08")
              }
            >
              <span className="bg-yellow-600 p-3 lg:rounded-s-lg  rounded-sm">
                0x5E20B1d17376A10c66f539004bC970Af59F2DC08
              </span>
              <span className="bg-green-800 p-3 px-4 lg:rounded-e-lg flex gap-2 items-center w-full justify-center rounded-sm">
                <IoCopyOutline />
                COPY
              </span>
            </Button>
          </div>
          <p className="text-sm md:text-xl text-[#eee]">
            <span>
              <i class="fa-solid fa-minus w-6 h-6 text-primary-heading-color pr-1"></i>
            </span>
            Stay tuned for something amazing!
          </p>
        </div>
      </div>
      {/* Toaster to display notifications */}
      <Toaster />
    </section>
  );
}

export default Feature;
