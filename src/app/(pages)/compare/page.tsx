import React from "react";
import BusinessAccount from "@/components/BusinessAccount/BusinessAccount";
import ComparePricing from "./ComparePricing";
import StillNotSure from "@/components/StillNotSure/StillNotSure";
import HeroBanner from "@/components/HeroBanner/HeroBanner";

const page = () => {
  return (
    <div>
      <HeroBanner
        title="Compare"
        desc="We envision a world where businesses of all sizes can harness the full
          potential of technology to achieve their goals, no matter how
          ambitious they may be."
        btn="Contact Us"
        image="/assets/images/contactus/banner-img.webp"
        isBrands={true}
      />
      <ComparePricing />
      <BusinessAccount />
      <StillNotSure />
    </div>
  );
};

export default page;
