import Image from "next/image";

const InOneApp = () => {
  return (
    <div className="flex flex-col w-full items-center gap-10  pt-10 text-blackPrimary text-center">
      <p className="text-[48px] font-medium max-w-[660px]">
        All your business finances in one{" "}
        <span className="text-primary">App Lyxis</span>
      </p>

      <div className="flex items-center justify-center gap-[30px]">
        <button className="bg-primary font-medium border border-primary py-[18px] px-[30px] duration-500 rounded-[6px] hover:bg-blackPrimary hover:text-white hover:border-blackPrimary">
          Start Now
        </button>
        <button className="bg-white font-medium border border-blackPrimary py-[18px] px-[30px] duration-500 rounded-[6px] hover:bg-primary hover:border-primary">
          Learn More
        </button>
      </div>

      <div className="one-app-bg w-full h-full flex justify-center pb-10">
        <Image
          src="/assets/images/home/cards.png"
          alt="cards"
          width={700}
          height={700}
        />
      </div>
    </div>
  );
};

export default InOneApp;
