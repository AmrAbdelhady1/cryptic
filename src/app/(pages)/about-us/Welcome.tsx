"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import Image from "next/image";

import { FaArrowRight } from "react-icons/fa6";

const Welcome = () => {
  const [activeInput, setActiveInput] = useState<boolean>(false);

  const handleBorderChange = () => {
    setActiveInput(!activeInput);
  };

  return (
    <div className="text-white !bg-blackPrimary pt-20 lg:pt-[130px] gap-20 px-[9vw] hero-banner-bg overflow-hidden">
      <div className="max-w-[1200px] flex flex-col lg:flex-row mx-auto justify-between">
        <div>
          <p className="max-w-[400px] text-48 font-dmSans font-medium leading-[1.2em] mb-2 lg:mb-5">
            Welcome to Lyxis first business{" "}
            <span className="text-primary">super-app</span>
          </p>
          <p className="max-w-[500px] text-xs lg:text-base leading-[1.2em] mb-5 lg:mb-10">
            Contact Lyxis today and embark on a transformative journey towards
            sustainable growth and lasting success. Let&apos;s shape a brighter
            future for your business together.
          </p>
          <div
            className={`h-[60px] w-full mx-auto lg:mx-0 max-w-[500px] bg-white border rounded-[10px] py-[4px] text-xs whitespace-nowrap lg:text-lg flex items-center justify-between px-1
          ${activeInput ? "border-primary" : "border-darkGray"}`}
          >
            <input
              type="text"
              placeholder="Enter your email address"
              onFocus={handleBorderChange}
              onBlur={handleBorderChange}
              className="bg-transparent border-none focus:outline-none mx-4 w-[60%] text-blackPrimary placeholder:text-blackPrimary"
            />
            <button className="h-full bg-primary py-[18px] px-5 text-white duration-300 hover:opacity-70 rounded-[5px]">
            <FaArrowRight />
            </button>
          </div>
          <p className="mt-1">We care about your data in our privacy <span className="text-primary cursor-pointer hover:text-white">policy.</span></p>
        </div>

        <motion.div
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
        >
          <Image
            src="/assets/images/contactus/ready-bg.webp"
            alt="bg"
            width={375}
            height={500}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Welcome;
