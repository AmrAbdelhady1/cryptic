"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { MdKeyboardArrowDown } from "react-icons/md";

const data1 = [
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

const data2 = [
  {
    id: 4,
    question:
      "What analytics and reporting features does Lyxis offer for performance monitoring?",
    answer:
      "Lyxis employs state-of-the-art encryption protocols and follows industry compliance standards to secure user data, ensuring a robust and safe digital environment.",
  },
  {
    id: 5,
    question: "How does Lyxis ensure scalability as our business grows?",
    answer:
      "Lyxis offers comprehensive onboarding processes, detailed user guides, and responsive customer support to ensure users have the necessary resources and assistance as they get acquainted with the platform.",
  },
  {
    id: 6,
    question:
      "What makes Lyxis stand out from other SaaS solutions in the market?",
    answer:
      "Yes, Lyxis is highly customizable, allowing businesses to tailor the platform to their unique requirements, including integrations with existing systems and adaptability to specific workflows.",
  },
];

const CommonQuesttion = () => {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  const handleTabChange = (id: number) => {
    if (id === activeTab) {
      setActiveTab(null);
    } else {
      setActiveTab(id);
    }
  };

  return (
    <div className="py-[130px] w-full flex flex-col items-center gap-10 text-blackPrimary">
      <p className="my-[10px] text-[48px] font-medium leading-[1.2em] font-dmSans">
        The most common questions
      </p>

      <div className="flex gap-[30px] w-full justify-center px-2">
        <div className="flex flex-col gap-4 w-full max-w-[550px]">
          {data1.map((item) => (
            <div
              key={item.id}
              onClick={() => handleTabChange(item.id)}
              className={`bg-white cursor-pointer border border-darkGray p-5 rounded-[10px] w-full flex flex-col gap-5
              ${activeTab === item.id && "text-primary"}`}
            >
              <div className="flex justify-between w-full">
                <p className="max-w-[460px] text-2xl font-medium font-dmSans">
                  {item.question}
                </p>
                <motion.span
                  animate={{ rotate: activeTab === item.id ? 180 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="h-fit"
                >
                  <MdKeyboardArrowDown size={28} />
                </motion.span>
              </div>
              {activeTab === item.id && (
                <p className="text-blackPrimary w-full">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 w-full max-w-[550px]">
          {data2.map((item) => (
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
                <motion.span
                  animate={{ rotate: activeTab === item.id ? 180 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="h-fit"
                >
                  <MdKeyboardArrowDown size={28} />
                </motion.span>
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

export default CommonQuesttion;
