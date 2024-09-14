import Image from "next/image";
import React from "react";

const Control = () => {
  return (
    <div className="main-container">
      <div className="global-width flex flex-col gap-[60px]">
        <div className="flex flex-col text-center lg:text-start lg:flex-row gap-10 lg:gap-20">
          <p className="lg:w-[40%] text-48">We give you control of your business</p>
          <p className="lg:w-[60%] text-xs md:text-base lg:text-lg">
            At Lyxis, we are a team of dedicated professionals who are
            passionate about technology and its transformative potential. Our
            developers, designers, and strategists come from diverse backgrounds
            and bring a wealth of experience to the table. We thrive on
            innovation, collaboration.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="h-full w-full max-h-[500px] rounded-[10px] overflow-hidden">
            <Image
              src="/assets/images/aboutus/main-1.webp"
              alt="main"
              width={550}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-full w-full max-h-[500px] rounded-[10px] overflow-hidden">
            <Image
              src="/assets/images/aboutus/main-2.webp"
              alt="main"
              width={550}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Control;
