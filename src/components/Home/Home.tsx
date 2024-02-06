import HeroBanner from "../HeroBanner/HeroBanner";
import HowWorks from "./HowWorks";
import InOneApp from "./InOneApp";
import Start from "./Start";
import Plans from "../Plans/Plans";
import LatestNews from "./LatestNews";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <HeroBanner
        title="We thrive on innovation and the pursuit"
        desc="Contact Lyxis today and embark on a transformative journey towards
              sustainable growth and lasting success. Lets shape a brighter
              future for your business together."
        image="/assets/images/home/hero-banner.webp"
        isHome={true}
      />
      <HowWorks />
      <InOneApp />
      <Start />
      <Plans />
      <Testimonials />
      <LatestNews />
    </div>
  );
};

export default Home;
