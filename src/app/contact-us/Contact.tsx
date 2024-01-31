import React from "react";

const Contact = () => {
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
        <div>{/* slider */}</div>
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
