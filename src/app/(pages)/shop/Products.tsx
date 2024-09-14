"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import ProductCard from "@/components/ProductCard/ProductCard";

const productType = [
  {
    id: 1,
    name: "All",
    value: "all",
  },
  {
    id: 2,
    name: "On Sale",
    value: "sale",
  },
  {
    id: 3,
    name: "Headphones",
    value: "headphones",
  },
  {
    id: 4,
    name: "Accessories",
    value: "accessories",
  },
  {
    id: 5,
    name: "Electronics",
    value: "electronics",
  },
];

const products = [
  {
    id: 1,
    name: "Case phone",
    type: "electronics",
    desc: "There is a place where the pools are glowing like emeralds, straight from the fairy-tale or forest of magic.",
    image: "/assets/images/shop/product-1.jpg",
    price: "85.00",
    priceAfterDiscount: "0",
    onSale: false,
  },
  {
    id: 2,
    name: "Smartwatch",
    type: "electronics",
    desc: "Receive calls, messages, and app notifications directly on your wrist, ensuring you never miss a beat.",
    image: "/assets/images/shop/product-2.jpg",
    price: "800.00",
    priceAfterDiscount: "860.00",
    onSale: true,
  },
  {
    id: 3,
    name: "ULX Leather Wallet",
    type: "accessories",
    desc: "The Card Wallet offers ample storage for life’s essentials; cards, business cards, transport ticket and cash.",
    image: "/assets/images/shop/product-3.jpg",
    price: "150.00",
    priceAfterDiscount: "0",
    onSale: false,
  },
  {
    id: 4,
    name: "Leather Card Wallet",
    type: "accessories",
    desc: "The Card Wallet offers ample storage for life’s essentials; cards, business cards, transport ticket and cash.",
    image: "/assets/images/shop/product-4.jpg",
    price: "250.00",
    priceAfterDiscount: "300.00",
    onSale: true,
  },
  {
    id: 5,
    name: "Level On Wireless",
    type: "headphones",
    desc: "Active Noise Cancellation and UHQ audio for richer and clearer sound. 3.5mm Wired or Bluetooth wireless connectivity.",
    image: "/assets/images/shop/product-5.jpg",
    price: "450.00",
    priceAfterDiscount: "0",
    onSale: false,
  },
  {
    id: 6,
    name: "Apple AirPods",
    type: "headphones",
    desc: "AirPods — and pauses when they’re in your pocket or on a table. A great sense of detection.",
    image: "/assets/images/shop/product-6.jpg",
    price: "300.00",
    priceAfterDiscount: "0",
    onSale: false,
  },
];

const Products = () => {
  const [selectedType, setSelectedType] = useState<string>("all");
  const filteredData =
    selectedType === "all"
      ? products
      : selectedType === "sale"
      ? products.filter((product) => product.onSale)
      : products.filter((product) => product.type === selectedType);

  const handleTypeChange = (value: string) => {
    setSelectedType(value);
  };

  return (
    <div className="main-container">
      <div className="global-width flex flex-col gap-10">
        <p className="text-center text-48">Pick and buy our products</p>
        <div className="flex flex-wrap justify-center w-full gap-x-[30px] gap-y-5">
          {productType.map((type) => (
            <div
              key={type.id}
              onClick={() => handleTypeChange(type.value)}
              className={`rounded-[10px] py-[14px] px-10 duration-300 capitalize cursor-pointer border hover:bg-primary hover:border-darkGray 
            ${
              selectedType === type.value
                ? "bg-primary border-primary"
                : "bg-white border-darkGray"
            }`}
            >
              <p className="font-medium">{type.name}</p>
            </div>
          ))}
        </div>

        <motion.div
          key={selectedType}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[30px]"
        >
          {filteredData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
