import BusinessAccount from "@/components/BusinessAccount/BusinessAccount";
import ReadyBusiness from "@/components/ReadyBusiness/ReadyBusiness";
import Contact from "./Contact";
import Testimonials from "@/components/Testimonials/Testimonials";
import HeroBanner from "@/components/HeroBanner/HeroBanner";

const page = () => {
  return (
    <div>
      <HeroBanner
        title="Get in touch with Lyxis"
        desc="We envision a world where businesses of all sizes can harness the full
          potential of technology to achieve their goals, no matter how
          ambitious they may be."
        image="/assets/images/contactus/banner-img.webp"
        isBrands={true}
      />
      <Contact />
      <BusinessAccount />
      <Testimonials />
      <ReadyBusiness />
    </div>
  );
};

export default page;
