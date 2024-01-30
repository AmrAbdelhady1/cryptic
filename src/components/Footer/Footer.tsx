import Image from "next/image";
import Link from "next/link";

import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const linksType = [
  {
    name: "Quick Links",
    pages: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "About Us",
        link: "/about-us",
      },
      {
        name: "Our Team",
        link: "/our-tema",
      },
      {
        name: "Solutions",
        link: "/solutions",
      },
    ],
  },
  {
    name: "Useful links",
    pages: [
      {
        name: "Pricing",
        link: "/pricing",
      },
      {
        name: "Blog",
        link: "/blog",
      },
      {
        name: "Compare",
        link: "/compare",
      },
      {
        name: "Testimonials",
        link: "/testimonials",
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className="py-[60px] bg-blackPrimary w-full px-[9vw] text-white text-xs md:text-sm lg:text-base leading-[1.5em]">
      <div className="flex flex-wrap justify-between items-start mb-12 gap-5">
        <div className="flex flex-col">
          <Link href={"/"}>
            <Image
              priority
              src={
                "https://assets-global.website-files.com/64c23f195be66bd1bd16a74d/650849846b0dc5da8d714498_logo%20light.svg"
              }
              alt="logo"
              width={111}
              height={42}
            />
          </Link>
          <p className="mt-[25px] mb-[50px] text-lightPrimary max-w-[310px] w-full">
            Choosing Lyxis means embracing a transformative experience that
            unlocks your business full potential.
          </p>
          <div className="flex items-center gap-5 text-lg">
            <Link
              href={"https://www.facebook.com/"}
              target="_blank"
              className="w-[50px] h-[50px] border border-primary rounded-[5px] flex items-center justify-center duration-300 ease-in-out hover:bg-primary"
            >
              <FaFacebookF />
            </Link>
            <Link
              href={"https://www.linkedin.com/"}
              target="_blank"
              className="w-[50px] h-[50px] border border-primary rounded-[5px] flex items-center justify-center duration-300 ease-in-out hover:bg-primary"
            >
              <FaLinkedin />
            </Link>
            <Link
              href={"https://www.twitter.com/"}
              target="_blank"
              className="w-[50px] h-[50px] border border-primary rounded-[5px] flex items-center justify-center duration-300 ease-in-out hover:bg-primary"
            >
              <FaXTwitter />
            </Link>
          </div>
        </div>

        {linksType.map((type) => (
          <div key={type.name} className="flex flex-col gap-[30px]">
            <h1 className="text-2xl font-medium font-dmSans">{type.name}</h1>
            <div className="flex flex-col gap-4">
              {type.pages.map((page) => (
                <Link
                  href={page.link}
                  key={page.name}
                  className="duration-300 ease-in-out hover:text-primary"
                >
                  {page.name}
                </Link>
              ))}
            </div>
          </div>
        ))}

        <div className="flex flex-col gap-[30px]">
          <h1 className="text-2xl font-medium font-dmSans">Stay Tuned</h1>
          <p>Subscribe to our newsletter and never miss our news.</p>
          <input
            type="text"
            placeholder="Enter your phone number"
            className="w-full max-w-[414px] bg-transparent border border-darkGray focus:outline-none focus:border-primary rounded-[5px] py-[18px] px-[22px] h-[60px]"
          />
          <button className="w-full md:max-w-[166px] bg-primary font-medium hover:bg-white text-blackPrimary h-[60px] flex items-center justify-center text-[18px] duration-500 ease-in-out rounded-[5px]">
            Subscribe
          </button>
        </div>
      </div>
      <div className="border-t border-t-darkGray pt-10 w-full text-center">
        <p>© Lyxis. All Rights Reserved 2024. Licensing</p>
        <p>Template by wCopilot Powered by Webflow</p>
      </div>
    </div>
  );
};

export default Footer;
