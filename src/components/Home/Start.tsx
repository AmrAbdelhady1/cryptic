"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Start = () => {
  return (
    <div className="text-white !bg-blackPrimary pt-20 lg:pt-[130px] gap-10 lg:gap-[150px] relative flex flex-col lg:flex-row px-[9vw] justify-center hero-banner-bg overflow-hidden">
      <div className="max-w-[1200px]">
        <p className="max-w-[500px] text-48 font-dmSans font-medium leading-[1.2em] mb-2 lg:mb-10">
          Start your 30-day free trial with Lyxis
        </p>
        <p className="max-w-[500px] text-xs lg:text-base leading-[1.2em] mb-5 lg:mb-10">
          Contact us today, and lets embark on this exciting digital adventure
          together. Your success is our passion, and we cant wait to be a part
          of it.
        </p>
        <button className="btn-yellow !text-blackPrimary">
          Get Started
        </button>
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
  );
};

export default Start;
