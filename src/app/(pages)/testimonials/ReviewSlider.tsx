"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Image from "next/image";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const data = [
  {
    id: 1,
    name: "Theresa Webb",
    job: "Director of International Expansion at Globe Services Ltd.",
    desc: "Lyxis market entry strategy was spot on. Their meticulous research and customized approach helped us confidently expand into new markets. Their guidance saved us from costly mistakes and ensured a successful global launch.",
    image: "/assets/images/reviews/review-7.webp",
  },
  {
    id: 2,
    name: "Sarah Thompson",
    job: "COO of RetailXpress",
    desc: "Working with Lyxis was an absolute pleasure. Their operational efficiency recommendations streamlined our processes, saving us time and resources. Our fulfillment speed has never been faster, and our customers are noticing the difference.",
    image: "/assets/images/reviews/review-5.webp",
  },
  {
    id: 3,
    name: "Koray Okumus",
    job: "CFO of Manufacturing Dynamics Ltd",
    desc: "Lyxis financial restructuring expertise was exactly what our company needed. They identified areas for improvement we hadn't even considered. Their solutions transformed our financial landscape, driving significant cost savings and improved profitability.",
    image: "/assets/images/reviews/review-1.jpg",
  },
];

const ReviewSlider = () => {
  const [activeReview, setActiveReview] = useState<number>(0);

  const handleNextReview = () => {
    if (activeReview === data.length - 1) {
      setActiveReview(0);
    } else {
      setActiveReview(activeReview + 1);
    }
  };

  const handlePrevReview = () => {
    if (activeReview === 0) {
      setActiveReview(data.length - 1);
    } else {
      setActiveReview(activeReview - 1);
    }
  };

  return (
    <div className="main-container !bg-blackPrimary">
      <div className="global-width text-white relative">
        <motion.div
          key={activeReview}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          className="w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-[100px] justify-between"
        >
          <Image
            src={data[activeReview].image}
            alt="image"
            width={480}
            height={500}
            className="w-full max-w-[480px] h-[350px] md:h-[450px] lg:h-[500px] rounded-[10px] object-cover"
          />
          <div className="lg:max-w-[570px]">
            <p className="text-32 mb-10">&quot;{data[activeReview].desc}&quot;</p>
            <p className="my-[10px] font-medium font-dmSans text-2xl leading-[1.2em]">
              {data[activeReview].name}
            </p>
            <p className="my-[10px] leading-[1.5em] lg:max-w-[355px]">
              {data[activeReview].job}
            </p>
          </div>
        </motion.div>
        <div className="absolute lg:bottom-0 right-0 flex items-center gap-5 cursor-pointer text-xl">
          <div
            onClick={handlePrevReview}
            className="bg-white text-primary w-[51px] h-[51px] rounded-[10px] flex items-center justify-center duration-300 hover:bg-primary hover:text-blackPrimary"
          >
            <FaArrowLeft />
          </div>
          <div
            onClick={handleNextReview}
            className="bg-white text-primary w-[51px] h-[51px] rounded-[10px] flex items-center justify-center duration-300 hover:bg-primary hover:text-blackPrimary"
          >
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSlider;
