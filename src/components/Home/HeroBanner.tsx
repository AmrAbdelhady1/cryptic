"use client";

import { useState } from "react";

import Image from "next/image";

const brands = [
  "/assets/images/home/brand1.svg",
  "/assets/images/home/brand2.svg",
  "/assets/images/home/brand3.svg",
  "/assets/images/home/brand4.svg",
  "/assets/images/home/brand5.svg",
  "/assets/images/home/brand6.svg",
];

const HeroBanner = () => {
  const [activeInput, setActiveInput] = useState<boolean>(false);

  const handleBorderChange = () => {
    setActiveInput(!activeInput);
  };

  return (
    <div className="flex flex-col gap-20 py-20 w-full !bg-lightPrimary px-[9vw] hero-banner-bg">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
        <div className="flex flex-col text-blackPrimary text-[34px] md:text-[54px] lg:text-[72px] font-medium text-center lg:text-start lg:max-w-[584px]">
          <p className="lg:leading-[72px] mb-5">
            We thrive on innovation and the pursuit
          </p>
          <p className="w-full text-lg font-normal mb-[50px]">
            Contact Lyxis today and embark on a transformative journey towards
            sustainable growth and lasting success. Lets shape a brighter future
            for your business together.
          </p>

          <div
            className={`h-[70px] w-full max-w-[500px] bg-white border rounded-[10px] py-[4px] text-lg flex items-center justify-between px-1
          ${activeInput ? "border-primary" : "border-darkGray"}`}
          >
            <input
              type="text"
              placeholder="Enter your email"
              onFocus={handleBorderChange}
              onBlur={handleBorderChange}
              className="bg-transparent border-none focus:outline-none mx-4"
            />
            <button className="h-full bg-primary py-[18px] px-5 text-blackPrimary duration-300 hover:opacity-30 rounded-[5px]">
              Get Started
            </button>
          </div>
        </div>

        <div className="">
          <Image
            src="/assets/images/home/hero-banner.webp"
            alt="banner"
            width={680}
            height={450}
            className="object-cover rounded-[10px] max-w-[362px]"
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-between items-center gap-10">
        {brands.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt="brand"
            width={140}
            height={32}
            className="w-[140px] h-[32px]"
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
