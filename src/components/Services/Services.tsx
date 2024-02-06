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

const Services = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
      {data.map((item) => (
        <motion.div
          key={item.id}
          whileHover={{ y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-full max-w-[376px] mx-auto p-5 bg-white border border-darkGray50 rounded-[10px] cursor-pointer"
        >
          <Image
            src={item.image}
            alt="card-1"
            width={328}
            height={200}
            className="mb-5 max-w-[328px] max-h-[200px] w-full h-full"
          />
          <p className="mb-5 text-32 duration-300 ease-in-out hover:text-primary cursor-pointer">
            {item.name}
          </p>
          <p className="lg:text-lg mb-5">{item.desc}</p>

          <div className="flex items-center w-fit gap-2 hover:text-primary duration-500 ease-in-out my-5 cursor-pointer relative group">
            <p>Look More</p>
            <FaArrowRightLong size={12} />

            <div className="w-0 group-hover:w-full bg-primary h-[1.5px] absolute bottom-0 duration-700 ease-in-out"></div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Services;
