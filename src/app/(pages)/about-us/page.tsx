import HeroBanner from "@/components/HeroBanner/HeroBanner";
import Testimonials from "@/components/Testimonials/Testimonials";
import Welocome from "./Welcome";
import Control from "./Control";

const page = () => {
  return (
    <div>
      <HeroBanner
        title="Lyxis grows as you grow"
        desc="We envision a world where businesses of all sizes can harness the full potential of technology to achieve their goals, no matter how ambitious they may be."
        image="/assets/images/aboutus/banner-img.webp"
        btn="Contact Us"
        isBrands={true}
      />
      <Control />
      <Welocome />
      <Testimonials />
    </div>
  );
};

export default page;
