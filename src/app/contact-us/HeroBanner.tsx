import Image from "next/image";
import React from "react";

const HeroBanner = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between w-full bg-lightPrimary px-[9vw] py-10 gap-5">
      <div className="flex flex-col text-blackPrimary text-[34px] md:text-[54px] lg:text-[72px] font-medium text-center lg:text-start lg:max-w-[480px]">
        <p className="lg:leading-[72px] mb-5">Get in touch with Lyxis</p>
        <p className="w-full text-lg font-normal">
          We envision a world where businesses of all sizes can harness the full
          potential of technology to achieve their goals, no matter how
          ambitious they may be.
        </p>
      </div>

      <Image
        src="/assets/images/contactus/banner-img.webp"
        alt="banner"
        width={680}
        height={450}
        className="object-cover rounded-[10px]"
      />
    </div>
  );
};

export default HeroBanner;
