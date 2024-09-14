import OurBlog from "./OurBlog";
import LatestNews from "@/components/Home/LatestNews";

const page = () => {
  return (
    <div className="flex flex-col gap-[130px]">
      <OurBlog />
      <LatestNews />
    </div>
  );
};

export default page;
