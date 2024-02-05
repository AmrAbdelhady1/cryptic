import Image from "next/image";

const Trail = () => {
  return (
    <div className="pt-[130px] flex items-center justify-between max-w-[1200px] mx-auto">
      <div className="flex flex-col w-[48%] gap-5 text-lg">
        <p className="text-[48px] font-medium leading-[1.2em] font-dmSans mb-[30px]">
          Start your 30-day free trial with Lyxis
        </p>
        <p>
          Contact us today, and lets embark on this exciting digital adventure
          together. Your success is our passion, and we cant wait to be a part
          of it.
        </p>
        <button className="btn-yellow">
          Get Started
        </button>
      </div>

      <div className="w-1/2 flex justify-end">
      <Image 
        src="/assets/images/faq/trail.png"
        alt="trail"
        width={505}
        height={550}
        className="h-full w-full max-w-[500px] max-h-[550px] object-contain"
      />
      </div>
    </div>
  );
};

export default Trail;
