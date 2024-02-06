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

interface Props {
  title: string;
  desc: string;
  image: string;
  isHome?: boolean;
  btn?: string;
}

const HeroBanner = ({ ...props }: Props) => {
  const [activeInput, setActiveInput] = useState<boolean>(false);

  const handleBorderChange = () => {
    setActiveInput(!activeInput);
  };

  return (
    <div className="hero-banner-bg main-container !py-20 !bg-lightPrimary">
      <div className="flex flex-col gap-20 w-full global-width">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
          <div className="flex flex-col text-blackPrimary text-[34px] md:text-[54px] lg:text-[72px] font-medium text-center lg:text-start lg:max-w-[584px]">
            <p className="lg:leading-[72px] mb-5">{props.title}</p>
            <p className="w-full text-lg font-normal mb-[50px]">{props.desc}</p>

            {props.isHome && (
              <div
                className={`h-[70px] w-full mx-auto lg:mx-0 max-w-[500px] bg-white border rounded-[10px] py-[4px] text-xs whitespace-nowrap lg:text-lg flex items-center justify-between px-1
          ${activeInput ? "border-primary" : "border-darkGray"}`}
              >
                <input
                  type="text"
                  placeholder="Enter your email"
                  onFocus={handleBorderChange}
                  onBlur={handleBorderChange}
                  className="bg-transparent border-none focus:outline-none mx-4 w-[60%]"
                />
                <button className="h-full bg-primary py-[18px] px-5 text-blackPrimary duration-300 hover:opacity-30 rounded-[5px]">
                  Get Started
                </button>
              </div>
            )}

            {props.btn && (
              <button className="btn-yellow mx-auto lg:mx-0">
                {props.btn}
              </button>
            )}
          </div>

          <div className="w-full flex justify-end">
            <Image
              src={props.image}
              alt="banner"
              width={500}
              height={450}
              className="object-contain rounded-[10px] w-full max-w-[545px] max-h-[600px]"
            />
          </div>
        </div>
        {props.isHome && (
          <div className="flex flex-wrap justify-between items-center gap-4">
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
        )}
      </div>
    </div>
  );
};

export default HeroBanner;
