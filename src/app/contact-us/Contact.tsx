"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

import SliderBtn from "./SliderBtn";

import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdMail,
} from "react-icons/md";
import { FaLocationDot, FaPhone } from "react-icons/fa6";

const addresses = [
  {
    id: 1,
    name: "London",
    location: "14 Tottenham Road, London, England",
    phone: "+1 212 425 8617",
    email: "information@office.com",
  },
  {
    id: 2,
    name: "Paris",
    location: "27 Rue de Berri, Paris, France",
    phone: "+1 212 425 8617",
    email: "information@office.com",
  },
  {
    id: 3,
    name: "New York",
    location: "5 Washington Square, New York, USA",
    phone: "+1 212 425 8617",
    email: "information@office.com",
  },
];

const Contact = () => {
  const [counter, setCounter] = useState<number>(0);
  const [status, setStatus] = useState<string>("");

  const handleSlideChange = (status: string) => {
    setStatus(status);
    setCounter(counter + 1);
  };

  return (
    <div className="py-[130px] flex justify-center gap-[100px] items-center text-blackPrimary">
      <div className="w-full max-w-[485px]">
        <p className="mt-[10px] text-[48px] font-dmSans font-medium leading-[50px] mb-5">
          Are you ready to unlock the future with Lyxis?
        </p>
        <p className="my-[10px] w-full border-b border-b-darkGray pb-[30px]">
          Contact us today, and lets embark on this exciting digital adventure
          together. Your success is our passion, and we cant wait to be a part
          of it.
        </p>
        {/* slider */}
        <div className="flex justify-between w-full mt-5">
          <Swiper
            slidesPerView={1}
            spaceBetween={24}
            loop={true}
            className="w-full h-full mySwiper"
          >
            <SliderBtn counter={counter} status={status} />
            {addresses.map((address) => (
              <SwiperSlide key={address.id} className="w-full">
                <div className="flex flex-col gap-3">
                  <p className="text-2xl font-medium">{address.name}</p>
                  <div className="flex items-center gap-2 text-primary">
                    <FaLocationDot size={17} />
                    <Link
                      href=""
                      className="text-blackPrimary duration-300 hover:text-primary"
                    >
                      {address.location}
                    </Link>
                  </div>
                  <div className="flex items-center gap-2 text-primary">
                    <FaPhone size={17} />
                    <Link
                      href=""
                      className="text-blackPrimary duration-300 hover:text-primary"
                    >
                      {address.phone}
                    </Link>
                  </div>
                  <div className="flex items-center gap-2 text-primary">
                    <MdMail size={17} />
                    <Link
                      href=""
                      className="text-blackPrimary duration-300 hover:text-primary"
                    >
                      {address.email}
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex items-center gap-1 cursor-pointer">
            <div
              className="hover:text-primary duration-300"
              onClick={() => handleSlideChange("prev")}
            >
              <MdKeyboardArrowLeft size={20} />
            </div>
            <p className="text-[10px]">|</p>
            <div
              className="hover:text-primary duration-300"
              onClick={() => handleSlideChange("next")}
            >
              <MdKeyboardArrowRight size={20} />
            </div>
          </div>
        </div>
      </div>

      <div className="p-10 w-full max-w-[585px] bg-lightPrimary rounded-[10px] flex flex-col gap-5">
        <p className="text-[32px] font-medium font-dmSans">
          Get Started with your Favorite Solutions
        </p>

        <input
          type="text"
          placeholder="Your name"
          className="w-full bg-white border border-darkGray rounded-[5px] py-[10px] px-5 focus:border-primary focus:outline-none text-blackPrimary"
        />
        <input
          type="text"
          placeholder="Your email"
          className="w-full bg-white border border-darkGray rounded-[5px] py-[10px] px-5 focus:border-primary focus:outline-none text-blackPrimary"
        />
        <select className="w-full bg-white border border-darkGray rounded-[5px] py-[10px] px-5 focus:border-primary focus:outline-none text-blackPrimary">
          <option value="">Solution</option>
          <option value="">Consulting</option>
          <option value="">Finance</option>
          <option value="">Marketing</option>
        </select>
        <textarea
          placeholder="Your text"
          className="w-full mb-5 min-h-[120px] bg-white border border-darkGray rounded-[5px] py-[10px] px-5 focus:border-primary focus:outline-none text-blackPrimary resize-none"
        ></textarea>

        <button className="bg-primary border max-w-[130px] border-primary rounded-[5px] py-[18px] px-[30px] text-lg font-medium duration-500 hover:text-white hover:bg-blackPrimary hover:border-blackPrimary">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
