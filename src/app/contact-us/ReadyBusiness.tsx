import Image from "next/image";
import Link from "next/link";

const ReadyBusiness = () => {
  return (
    <div className="mx-[9vw] text-white mt-[9vw] bg-blackPrimary rounded-[10px] p-[60px] relative">
      <p className="max-w-[500px] text-[42px] font-dmSans font-medium leading-[1.2em] mb-10">
        Ready to take your business to new heights with Lyxis?
      </p>
      <p className="max-w-[500px] leading-[1.2em] mb-10">
        Contact us today, and lets embark on this exciting digital adventure
        together. Your success is our passion, and we cant wait to be a part of
        it.
      </p>
      <div className="flex items-center gap-8">
        <Link href={"#"} className="duration-300 hover:opacity-50 opacity-100">
          <Image
            src="/assets/images/contactus/googleplay.png"
            alt="google"
            width={142}
            height={40}
            className="h-10"
          />
        </Link>
        <Link href={"#"} className="duration-300 hover:opacity-50">
          <Image
            src="/assets/images/contactus/appstore.png"
            alt="google"
            width={129}
            height={40}
            className="h-10"
          />
        </Link>
      </div>

      <div className="absolute bottom-0 right-10">
        <Image 
        src="/assets/images/contactus/ready-bg.webp"
        alt="bg"
        width={375}
        height={500}
        />
      </div>
    </div>
  );
};

export default ReadyBusiness;
