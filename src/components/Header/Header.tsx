"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { BsCart3 } from "react-icons/bs";
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

const links = [
  {
    name: "Who We Are",
    link: "/",
  },
  {
    name: "Compare",
    link: "/",
  },
  {
    name: "Solutions",
    link: "/",
  },
  {
    name: "Pricing",
    link: "/",
  },
  {
    name: "Contact Us",
    link: "/",
  },
];

const whitePages = ["/testimonials"];

const Header = () => {
  const pathName = usePathname();
  const isWhitePage = whitePages.includes(pathName);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleMenuChange = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div
      className="main-container !py-8 absolute top-0"
    >
      <nav className="flex items-center justify-between global-width">
        <Link href={"/"}>
          <Image
            priority
            src={
              "https://assets-global.website-files.com/64c23f195be66bd1bd16a74d/65084984eed9d642c2bc912d_logo%20dark.svg"
            }
            alt="logo"
            width={111}
            height={42}
          />
        </Link>

        <div className="hidden lg:flex items-center gap-[2vw]">
          {links.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="text-blackPrimary font-medium duration-300 ease-in-out hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center">
          {/* <div className="relative cursor-pointer text-primary">
            <BsCart3 size={20} />
            <div className="absolute rounded-full bg-blackPrimary px-[6px] text-white top-[-12px] right-[-16px]">
              0
            </div>
          </div> */}
          <div
            className="text-blackPrimary cursor-pointer block lg:hidden"
            onClick={handleMenuChange}
          >
            <CgMenuRight size={25} />
          </div>
          <button className="hidden lg:block h-[60px] px-[30px] bg-blackPrimary text-white tracking-[0.5px] border border-black rounded-[5px] text-lg font-medium duration-500 ease-in-out hover:bg-primary hover:border-primary hover:text-blackPrimary">
            Book a Demo
          </button>
        </div>

        <div
          className={`fixed min-h-screen w-full max-w-[350px] bg-white top-0 block lg:hidden z-10 duration-500 ease-in-out
      ${openMenu ? "left-0" : "left-[-100%]"}
      `}
        >
          <div className="p-4 flex items-center justify-between">
            <Link href={"/"}>
              <Image
                priority
                src={
                  "https://assets-global.website-files.com/64c23f195be66bd1bd16a74d/65084984eed9d642c2bc912d_logo%20dark.svg"
                }
                alt="logo"
                width={111}
                height={42}
              />
            </Link>
            <div
              className="cursor-pointer text-blackPrimary hover:text-primary duration-300 ease-in-out"
              onClick={handleMenuChange}
            >
              <IoMdClose size={30} />
            </div>
          </div>

          <div className="flex flex-col gap-5 p-4 my-5">
            {links.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="text-blackPrimary font-medium duration-300 ease-in-out hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button className="mx-4 mt-3 h-[60px] px-[30px] bg-blackPrimary text-white tracking-[0.5px] border border-black rounded-[5px] text-lg font-medium duration-500 ease-in-out hover:bg-primary hover:border-primary hover:text-blackPrimary">
            Book a Demo
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
