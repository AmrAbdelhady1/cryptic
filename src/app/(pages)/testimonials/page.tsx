import Testimonials from "@/components/Testimonials/Testimonials";
import React from "react";
import Header from "./Header";
import Reviews from "./Reviews";
import ReviewSlider from "./ReviewSlider";

const page = () => {
  return (
    <div>
      <Header />
      <Reviews />
      <ReviewSlider />
      <Testimonials />
    </div>
  );
};

export default page;
