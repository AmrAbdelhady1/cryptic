"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import Image from "next/image";

const data = [
  {
    id: 1,
    name: "John Smith",
    job: "CEO of Tech Innovators Inc.",
    desc: "Lyxis financial restructuring expertise was exactly what our company needed. They identified areas for improvement we hadn't even considered. Their solutions transformed our financial landscape, driving significant cost savings.",
    image: "/assets/images/home/test-1.webp",
  },
  {
    id: 2,
    name: "Michelle Adams",
    job: "HR Manager at HealthUnity Group",
    desc: "Lyxis strategic insights were a game-changer for us. Their expert guidance and tailored strategies helped us navigate challenges and tap into new growth avenues. Thanks to Lyxis, we're not just surviving, but thriving in a competitive tech landscape.",
    image: "/assets/images/home/test-2.webp",
  },
  {
    id: 3,
    name: "Sarah Thompson",
    job: "COO of RetailXpress",
    desc: "Working with Lyxis was an absolute pleasure. Their operational efficiency recommendations streamlined our processes, saving us time and resources. Our fulfillment speed has never been faster, and our customers are noticing the difference.",
    image: "/assets/images/home/test-3.webp",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleIndex = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex flex-col items-center py-[130px] text-blackPrimary text-center gap-10 px-[9vw]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        key={activeIndex}
        transition={{duration: 0.7}}
        className="flex flex-col items-center text-center gap-3"
      >
        <p className="text-sm font-medium">TESTIMONIALS</p>
        <p className="max-w-[850px] text-32">
          &quot;{data[activeIndex].desc}&quot;
        </p>
        <p className="mt-3 text-[20px] font-medium">{data[activeIndex].name}</p>
        <p>{data[activeIndex].job}</p>
      </motion.div>

      <div className="flex items-center justify-center gap-8 mt-2">
        {data.map((item, index) => (
          <div
            key={item.id}
            className={`rounded-[10px] cursor-pointer duration-700 ease-in-out border-[10px]
            ${
              activeIndex === index
                ? "scale-125 border-primary"
                : "border-transparent"
            }
            `}
            onClick={() => handleIndex(index)}
          >
            <Image
              src={item.image}
              alt="avatar"
              width={60}
              height={60}
              className="rounded-[4px] w-12 h-12 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
