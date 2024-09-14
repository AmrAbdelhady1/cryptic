"use client";

import { useState } from "react";

import Image from "next/image";

import { MdKeyboardArrowDown } from "react-icons/md";

const data = [
  {
    id: 1,
    question: "How does Lyxis ensure data security for its users?",
    answer:
      "Lyxis employs state-of-the-art encryption protocols and follows industry compliance standards to secure user data, ensuring a robust and safe digital environment.",
  },
  {
    id: 2,
    question:
      "What kind of support and training does Lyxis provide for new users?",
    answer:
      "Lyxis offers comprehensive onboarding processes, detailed user guides, and responsive customer support to ensure users have the necessary resources and assistance as they get acquainted with the platform.",
  },
  {
    id: 3,
    question:
      "Can Lyxis be customized to fit the specific needs of our business?",
    answer:
      "Yes, Lyxis is highly customizable, allowing businesses to tailor the platform to their unique requirements, including integrations with existing systems and adaptability to specific workflows.",
  },
];

const StillNotSure = () => {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  const handleTabChange = (id: number) => {
    if (id === activeTab) {
      setActiveTab(null);
    } else {
      setActiveTab(id);
    }
  };

  return (
    <div className="pt-[130px] flex justify-center gap-[60px] max-w-[1200px] mx-auto text-blackPrimary mb-[130px]">
      <div className="w-1/2 overflow-hidden relative rounded-[10px] h-fit">
        <Image
          alt="any"
          src="/assets/images/home/sure.webp"
          width={550}
          height={600}
          className="w-full h-full max-h-[600px] object-cover"
        />
        <Image
          alt="any"
          src="/assets/images/home/sure-2.png"
          width={200}
          height={80}
          className="w-[200px] left-[2%] bottom-[18%] object-cover absolute rounded-[5px]"
        />
      </div>

      <div className="flex flex-col gap-5 max-w-[555px]">
        <p className="text-[48px] font-medium">Still not sure?</p>
        <p className="mb-[30px] text-lg">
          Open a business account from your phone. Use digital and physical
          debit cards. Send and track certified invoices. Make payments with
          ease.
        </p>

        <div className="flex flex-col gap-4">
          {data.map((item) => (
            <div
              key={item.id}
              onClick={() => handleTabChange(item.id)}
              className={`bg-white cursor-pointer border border-darkGray p-5 rounded-[10px] w-full flex flex-col gap-5
              ${activeTab === item.id && "text-primary"}`}
            >
              <div className="flex justify-between">
                <p className="max-w-[460px] text-2xl font-medium font-dmSans">
                  {item.question}
                </p>
                <div
                  className={`duration-300 ease-in-out ${
                    activeTab === item.id && ""
                  }`}
                >
                  <MdKeyboardArrowDown size={28} />
                </div>
              </div>
              {activeTab === item.id && (
                <p className="text-blackPrimary">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StillNotSure;
