import React from "react";

const BottomBanner = () => {
  return (
    <div className="bg-blackPrimary w-full py-[150px] flex flex-col gap-6 items-center text-center text-white mb-[130px]">
      <p className="text-[72px] font-medium max-w-[700px] leading-[1em] font-dmSans">Are you ready to unlock the future?</p>
      <p className="max-w-[700px]">
        Contact us today, and lets embark on this exciting digital adventure
        together. Your success is our passion, and we cant wait to be a part of
        it.
      </p>

      <div className="flex items-center gap-[30px] mt-5">
      <button className="bg-white border border-white text-blackPrimary rounded-[5px] py-[18px] px-[30px] text-lg font-medium duration-500 hover:bg-primary hover:border-primary">
        Who We Are
      </button>
      <button className="bg-blackPrimary border border-white rounded-[5px] py-[18px] px-[30px] text-lg font-medium duration-500 hover:bg-primary hover:border-primary">
        Start Now
      </button>
      </div>
    </div>
  );
};

export default BottomBanner;
