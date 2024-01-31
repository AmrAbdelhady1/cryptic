import Image from "next/image";
import React from "react";

const HeroBanner = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between w-full bg-white px-[9vw] py-10 gap-5">
      <div className="flex flex-col text-blackPrimary text-[34px] md:text-[54px] lg:text-[72px] font-medium text-center lg:text-start lg:max-w-[584px]">
        <p className="lg:leading-[72px] mb-5">
          Pick a plan tailored to your business needs
        </p>
        <p className="w-full text-lg font-normal">
          Contact Lyxis today and embark on a transformative journey towards
          sustainable growth and lasting success. Lets shape a brighter future
          for your business together..
        </p>
      </div>

      <Image
        src="/assets/images/pricing/banner-img.webp"
        alt="banner"
        width={680}
        height={450}
        className="object-cover rounded-[10px]"
      />
    </div>
  );
};

export default HeroBanner;
