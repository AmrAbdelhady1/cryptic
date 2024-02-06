"use client";

import { motion } from "framer-motion";

import { IoMdCheckmark } from "react-icons/io";

const plans = [
  {
    id: 1,
    name: "Starter Plan",
    price: "$19",
    desc: "Suitable for Large Business or Enterprise companies",
    features: [
      "Economic Market Survey",
      "Auto Intelligence",
      "Premium support",
      "Mobile app",
      "Expense management",
    ],
  },
  {
    id: 2,
    name: "Premium Plan",
    price: "$39",
    desc: "All the basics for businesses that are just getting started",
    features: [
      "Economic Market Survey",
      "Auto Intelligence",
      "Premium support",
      "Expense management",
      "Physical Mastercard",
    ],
  },
  {
    id: 3,
    name: "Pro Plan",
    price: "$59",
    desc: "Suitable for Large Business or Enterprise companies",
    features: [
      "Economic Market Survey",
      "Auto Intelligence",
      "Premium support",
      "24/7 Support",
      "Physical Mastercard",
    ],
  },
];

const Plans = () => {
  return (
    <div className="bg-lightPrimary px-[9vw] w-full py-[130px] flex flex-col gap-10 text-blackPrimary">
      <p className="text-48 w-full mx-auto max-w-[700px] leading-10 text-center">
        Run the cost-effective business you need
      </p>

      <div className="flex flex-wrap justify-center gap-[30px]">
        {plans.map((plan) => (
          <motion.div
            key={plan.id}
            whileHover={{ y: -16 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
            className={`border border-darkGray price-card-shadow duration-300 rounded-[14px] w-full max-w-[370px] 
            pt-5 pb-[30px] flex flex-col items-center
            ${plan.id === 3 ? "bg-blackPrimary text-white" : "bg-white"}
            `}
          >
            <div className="flex flex-col items-center gap-5 text-center pb-5 border-b border-b-darkGray px-[30px] leading-5">
              <p className="text-[28px] font-medium font-dmSans mt-[10px]">
                {plan.name}
              </p>
              <p className="text-primary text-[54px] font-semibold mt-5">
                {plan.price}
                <span className="text-xl font-medium text-gray-400">
                  /month
                </span>
              </p>
              <p className="mb-5">{plan.desc}</p>
            </div>

            <div className="flex flex-col px-[30px] items-start gap-5 mb-5 mt-[30px] w-full">
              {plan.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div
                    className={`p-[1px] bg-primary rounded-full font-bold ${
                      plan.id === 3 ? "text-blackPrimary" : "text-white"
                    }`}
                  >
                    <IoMdCheckmark size={20} />
                  </div>
                  <p>{feature}</p>
                </div>
              ))}
            </div>
            <button className="mt-5 bg-white text-blackPrimary border border-black rounded-[5px] py-[18px] px-[30px] text-lg font-medium duration-500 hover:bg-primary hover:border-primary">
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
