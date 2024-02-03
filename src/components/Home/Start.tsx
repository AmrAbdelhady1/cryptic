import Image from "next/image";

const Start = () => {
  return (
    <div className="text-white !bg-blackPrimary pt-[150px] gap-[150px] relative flex justify-center hero-banner-bg overflow-hidden">
      <div className="max-w-[1174px]">
        <p className="max-w-[500px] text-[42px] font-dmSans font-medium leading-[1.2em] mb-10">
          Start your 30-day free trial with Lyxis
        </p>
        <p className="max-w-[500px] leading-[1.2em] mb-10">
          Contact us today, and lets embark on this exciting digital adventure
          together. Your success is our passion, and we cant wait to be a part
          of it.
        </p>
        <button className="bg-primary text-blackPrimary py-[18px] px-[30px] rounded-[5px] duration-500 hover:bg-blackPrimary hover:border-blackPrimary hover:text-white">
          Get Started
        </button>
      </div>

      <Image
        src="/assets/images/contactus/ready-bg.webp"
        alt="bg"
        width={375}
        height={500}
      />
    </div>
  );
};

export default Start;
