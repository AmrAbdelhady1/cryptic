"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { FaArrowRightLong } from "react-icons/fa6";

const data = [
  {
    id: 1,
    image: "/assets/images/contactus/card-2.png",
    name: "Customer service",
    desc: "Our success in Lyxis is intertwined with yours.",
  },
  {
    id: 2,
    image: "/assets/images/contactus/card-2.png",
    name: "Pricing",
    desc: "Your satisfaction is at the core of everything we do",
  },
  {
    id: 3,
    image: "/assets/images/contactus/card-2.png",
    name: "Premium support",
    desc: "Lyxis has a proven track record of assisting businesses",
  },
];

const HowWorks = () => {
  return (
    <div className="flex flex-col gap-10 py-20 w-full px-[9vw] text-blackPrimary">
      <div className="flex items-center justify-between w-full max-w-[1174px] mx-auto">
        <p className="font-medium text-[48px]">How it works</p>
        <button className="bg-blackPrimary text-white text-lg font-medium border border-blackPrimary py-[19px] px-[30px] rounded-[5px] duration-500 hover:bg-primary hover:border-primary">
          Our Solutions
        </button>
      </div>

      <div className="flex flex-wrap gap-8 justify-center w-full">
        {data.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -16 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full max-w-[370px] p-5 bg-white border border-darkGray50 rounded-[10px] cursor-pointer"
          >
            <Image
              src={item.image}
              alt="card-1"
              width={328}
              height={200}
              className="mb-5 max-w-[328px] max-h-[200px] w-full h-full"
            />
            <p className="mb-5 text-[32px] font-medium font-dmSans duration-300 ease-in-out hover:text-primary cursor-pointer">
              {item.name}
            </p>
            <p className="text-lg mb-5">{item.desc}</p>

            <div className="flex items-center w-fit gap-2 hover:text-primary duration-500 ease-in-out my-5 cursor-pointer relative group">
              <p>Look More</p>
              <FaArrowRightLong size={12} />

              <div className="w-0 group-hover:w-full bg-primary h-[1px] absolute bottom-0 duration-1000 ease-in-out"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HowWorks;
