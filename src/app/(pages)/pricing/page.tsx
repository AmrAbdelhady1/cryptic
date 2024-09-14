import React from "react";
import Plans from "../../../components/Plans/Plans";
import BusinessAccount from "@/components/BusinessAccount/BusinessAccount";
import ReadyBusiness from "@/components/ReadyBusiness/ReadyBusiness";
import HeroBanner from "@/components/HeroBanner/HeroBanner";

const page = () => {
  return (
    <div>
      <HeroBanner
        title="Pick a plan tailored to your business needs"
        desc="Contact Lyxis today and embark on a transformative journey towards
          sustainable growth and lasting success. Lets shape a brighter future
          for your business together.."
        image="/assets/images/pricing/banner-img.webp"
      />
      <Plans />
      <BusinessAccount />
      <p className="mb-[130px]" />
      <ReadyBusiness />
    </div>
  );
};

export default page;
