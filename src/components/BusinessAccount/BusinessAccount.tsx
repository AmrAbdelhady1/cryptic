"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const data = [
  {
    id: 1,
    image: "/assets/images/contactus/card-1.png",
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
    image: "/assets/images/contactus/card-3.png",
    name: "Premium support",
    desc: "Lyxis has a proven track record of assisting businesses",
  },
];

const BusinessAccount = () => {
  return (
    <div className="bg-blackPrimary px-[9vw] w-full py-[6vw] flex flex-col gap-10 text-white">
      <div className="text-center flex flex-col">
        <p className="text-[48px] font-medium font-dmSans">
          Open your business account
        </p>
        <p className="text-[48px] font-medium font-dmSans">online with Lyxis</p>
        <p>
          We thrive on innovation, collaboration, and the pursuit of excellence.
        </p>
      </div>

      <div className="flex flex-wrap gap-8 justify-center">
        {data.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -16 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full max-w-[370px] p-5 bg-blackPrimary border border-darkGray50 rounded-[10px]"
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

export default BusinessAccount;
