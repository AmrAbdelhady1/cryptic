import Image from "next/image";

const InOneApp = () => {
  return (
    <div className="flex flex-col w-full items-center gap-10  pt-10 text-center px-[9vw] lg:px-0">
      <p className="text-48 max-w-[660px]">
        All your business finances in one{" "}
        <span className="text-primary">App Lyxis</span>
      </p>

      <div className="flex items-center justify-center gap-[30px]">
        <button className="btn-yellow">Start Now</button>
        <button className="btn-yellow hover:!bg-primary hover:!border-primary hover:!text-blackPrimary !bg-white !border-blackPrimary">
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
