import Image from "next/image";

const HeroBanner = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between w-full bg-lightPrimary px-[9vw] py-10 gap-5">
      <div className="flex flex-col text-blackPrimary text-[34px] md:text-[54px] lg:text-[72px] font-medium text-center lg:text-start lg:max-w-[584px]">
        <p className="lg:leading-[72px] mb-5">Our talented individuals</p>
        <p className="w-full text-lg font-normal">
          At Lyxis, we take pride in assembling a team of dedicated
          professionals who are experts in their respective fields. Our team
          members bring a wealth of experience and diverse skills.
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
