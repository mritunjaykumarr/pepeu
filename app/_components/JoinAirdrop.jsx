"use client";
import Image from "next/image";
import { useEffect } from "react"; // Import useEffect
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

import { cardData } from "../_data/card";
import Button from "./Button";
import cardImage from "@/public/pattern-how.png";
import Link from "next/link";

function JoinAirdrop() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in ms
    });
  }, []);

  return (
    <section className="my-24 " id="how">
      <div className="relative  ">
        <div className="relative h-[1000px]">
          <Image
            src={cardImage}
            alt="background"
            fill
            quality={50}
            palaceholder={"blur"}
            className="opacity-20"
          />
        </div>

        <div className="absolute top-0 flex w-full flex-col items-center justify-center h-[1000px]">
          <h2
            className="text-3xl lg:text-6xl font-bold text-[#e1a313] leading-tight uppercase text-center py-6 text-shadow"
            data-aos="fade-in"
          >
            How to Buy
          </h2>
          <div className="container-div grid lg:grid-cols-2 gap-6 p-6 lg:p-0">
            {cardData?.map((data) => (
              <article
                className="lg:w-[566px]  gradient-card p-6 space-y-2"
                key={data.step}
                data-aos="fade-up" // Add fade-up animation to each card
              >
                <h3 className="heading-h3 font-bold text-lg lg:text-[36px]">
                  Step {data.step}
                </h3>
                <h3 className="text-white font-bold text-[14px] lg:text-xl">
                  {data.title}
                </h3>
                <div>
                  <Image
                    src={`/${data.icon}`}
                    width={0}
                    height={0}
                    alt="wallet"
                    quality={90}
                    className="lg:w-[150px] lg:h-[150px] w-[50px] h-[50px]"
                  />
                </div>
                <p className="text-[#ccc] py-2 text-[10px] lg:text-lg ">
                  {data.description}
                </p>
                {data.button && (
                  <Button className="px-20 py-2 text-base bg-primary-btn-color">
                    <Link href={data.link}>{data.button}</Link>
                  </Button>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default JoinAirdrop;
