import Image from "next/image";
import React from "react";

const ComparePricing = () => {
  return (
    <div className="py-[130px] flex flex-col items-center gap-10 text-blackPrimary">
      <div className="w-full mx-auto max-w-[700px] text-center">
        <p className="text-[48px] font-medium font-dmSans leading-[50px] mb-5">
          All your business finances in one App Lyxis
        </p>
        <p>
          Make data-driven decisions with ease. We provide powerful analytics
          and reporting tools to transform raw data into actionable insights.
        </p>
      </div>

      <Image src="/assets/images/compare/main-img.png" alt="main" width={1200} height={1400} />

      <button className="btn-yellow">
          Book a Demo
        </button>
    </div>
  );
};

export default ComparePricing;
