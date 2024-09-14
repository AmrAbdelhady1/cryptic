"use client";

import { useState } from "react";

import Image from "next/image";

const ProductInfo = () => {
  const [qty, setQty] = useState<number>(1);
  return (
    <div className="main-container !pt-[160px]">
      <div className="global-width flex flex-col gap-[100px]">
        <div className="flex flex-col-reverse lg:flex-row gap-20">
          <div className="lg:w-1/2 flex flex-col gap-[30px]">
            <div className="w-full rounded-[10px] overflow-hidden h-[250px] md:h-[280px] lg:h-[350px]">
              <Image
                src="/assets/images/shop/product-1.jpg"
                alt="product"
                width={550}
                height={350}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full rounded-[10px] overflow-hidden max-h-[350px]">
              <Image
                src="/assets/images/shop/product-3.jpg"
                alt="product"
                width={550}
                height={350}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:w-1/2 flex flex-col gap-[30px]">
            <p className="text-48">Case phone</p>
            <button className="uppercase !py-2 !px-5 !text-sm !h-fit btn-yellow hover:!bg-primary hover:!border-primary hover:!text-blackPrimary !bg-white !border-blackPrimary">
              Electronics
            </button>
            <p>
              There is a place where the pools are glowing like emeralds,
              straight from the fairy-tale or forest of magic.
            </p>
            <div className="lg:text-lg font-medium">
              <p>Price:</p>
              <p className="text-lg mt-1 lg:text-[22px]">$ 85.00 USD</p>
            </div>
            <input
              type="number"
              value={qty}
              onChange={(e) =>
                setQty(e.target.value ? parseInt(e.target.value) : 0)
              }
              className="border-b border-b-blackPrimary bg-transparent h-[56px] w-[200px] px-3 py-2 text-blackPrimary focus:border-b-primary focus:outline-none"
            />
            <button className="btn-yellow">Add to Cart</button>
          </div>
        </div>

        <div className="flex flex-col gap-[25px] rounded-[10px] p-4 md:p-6 lg:p-[50px] shadow-lg">
          <p className="text-48">Details</p>
          <p>
            In a world where our smartphones are an integral part of our daily
            lives, protecting them becomes a priority. Our range of phone cases
            is more than just a shield for your device; it's a stylish accessory
            that complements your lifestyle while ensuring your phone stays safe
            and functional. Experience unparalleled durability, protecting your
            phone from everyday bumps, drops, and scratches. Enjoy a slim and
            sleek profile that enhances the aesthetics of your phone without
            compromising on protection.
          </p>
          <div className="flex flex-col md:flex-row gap-[30px] w-full">
            <div className="w-full">
              <Image
                src="/assets/images/shop/info-1.jpg"
                alt="product"
                height={400}
                width={520}
                className="w-full rounded-[10px] h-full max-h-[280px] lg:max-h-[400px] object-cover"
              />
            </div>
            <div className="w-full">
              <Image
                src="/assets/images/shop/info-2.jpg"
                alt="product"
                height={400}
                width={520}
                className="w-full rounded-[10px] h-full max-h-[280px] lg:max-h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
