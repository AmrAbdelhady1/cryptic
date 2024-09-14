"use client";

import Image from "next/image";

import { FaArrowRightLong } from "react-icons/fa6";

const data = [
  {
    id: 1,
    image: "/assets/images/home/news-1.jpg",
    name: "A Look into Our Customer Support",
  },
  {
    id: 2,
    image: "/assets/images/home/news-2.jpg",
    name: "Protecting Your Data in a Digital World",
  },
  {
    id: 3,
    image: "/assets/images/home/news-3.jpg",
    name: "How Lyxis Grows with Your Business",
  },
];

const LatestNews = () => {
  return (
    <div className="flex flex-col gap-10 pb-[130px] w-full px-[9vw] text-blackPrimary">
      <div className="flex justify-center w-full">
        <p className="font-medium text-48">Latest news</p>
      </div>

      <div className="flex flex-wrap gap-8 justify-center w-full max-w-[1200px] mx-auto">
        {data.map((item) => (
          <div
            key={item.id}
            className="w-full max-w-[360px] bg-white rounded-[10px]"
          >
            <div className="overflow-hidden mb-10 rounded-[10px]">
              <Image
                src={item.image}
                alt="card-1"
                width={328}
                height={200}
                className="h-[250px] lg:h-[320px] w-full object-cover rounded-[10px] hover:scale-110 duration-700"
              />
            </div>
            <p className="mb-[5px] uppercase duration-300 ease-in-out hover:text-primary cursor-pointer">
              Entrepreneur
            </p>
            <p className="mb-3 text-xl lg:text-[24px] font-medium font-dmSans duration-300 ease-in-out hover:text-primary cursor-pointer">
              {item.name}
            </p>

            <div className="flex items-center w-fit gap-2 hover:text-primary duration-500 ease-in-out my-5 cursor-pointer relative group">
              <p>Read Full Post</p>
              <FaArrowRightLong size={12} />

              <div className="w-0 group-hover:w-full bg-primary h-[2px] absolute bottom-0 duration-1000 ease-in-out"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
