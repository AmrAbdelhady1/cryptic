import Image from "next/image";
import React from "react";

const Main = () => {
  return (
    <div className="main-container !pt-[110px]">
      <div className="global-width">
        <div className="bg-lightPrimary pt-[60px] rounded-[20px] overflow-hidden">
          <div className="lg:w-[60%] mx-auto mb-10 flex flex-col items-center text-center">
            <div className="flex gap-5 items-center mb-[5px]">
              <p className="text-hover text-xs md:text-sm lg:text-base">
                ENTREPRENEUR
              </p>
              <p className="w-5 hidden md:block h-[1px] bg-blackPrimary"></p>
              <p className="text-xs md:text-sm lg:text-base">
                September 21, 2023
              </p>
            </div>
            <p className="my-[10px] text-48">
              A Look into Our Customer Support
            </p>
            <p className="lg:w-[80%] my-[10px] lg:text-lg">
              Share stories of businesses that received outstanding support from
              Lyxis. Describe the various ways customers can seek assistance.
            </p>
          </div>
          <div className="w-full h-full max-h-[450px]">
            <Image
              alt="blog"
              src="/assets/images/blog/blog-1.jpg"
              width={1200}
              height={450}
              className="blog-img"
            />
          </div>
        </div>

        <p className="mt-[100px]">
          In the fast-paced realm of business, staying ahead requires more than
          just intuition; it demands data-driven insights. Lyxis, your trusted
          ally in the digital landscape, offers a robust Analytics feature
          designed to empower your business decision-making. In this blog post,
          we explore the myriad ways in which Lyxis Analytics unlocks the door
          to unparalleled business insights.
        </p>

        <p className="text-32 my-5">A Deep Dive into Using Lyxis Analytics</p>

        <p>
          Lyxis Analytics is not just a tool; it's a strategic asset for
          businesses aiming to navigate the complexities of the modern market.
          Create visual representations of the data that matter most to your
          business, allowing for a quick and comprehensive understanding of key
          metrics.
        </p>

        <div className="border-l-[3px] border-l-primary text-center my-10 py-5 px-10">
          <p className="font-dmSans font-medium text-lg md:text-[20px] lg:text-[28px] leading-[1.5em]">Stay on top of evolving trends, respond swiftly to market changes, and make informed decisions based on the latest information.</p>
        </div>

        <p>
          Refine your marketing strategies, personalize customer experiences,
          and optimize resource allocation by understanding the distinct needs
          and behaviors of different customer segments. Combine internal and
          external data for a more comprehensive analysis, ensuring that your
          business insights are not limited to internal data alone.
        </p>

        <p className="text-32 my-5">Understanding Lyxis Analytics</p>

        <p>
          Empower every team member, regardless of technical expertise, to
          harness the power of analytics with an intuitive and user-friendly
          interface. Combine internal and external data for a more comprehensive
          analysis, ensuring that your business insights are not limited to
          internal data alone.
        </p>

        <Image
          src="/assets/images/blog/invest.webp"
          alt="invest"
          width={1200}
          height={488}
          className="w-full rounded-[10px] my-8 h-full max-h-[488px]"
        />

        <p>
          Track and measure various aspects of your business, from sales and
          customer engagement to operational efficiency, providing a holistic
          view of your organization's performance. Here's how it becomes the
          cornerstone of your data intelligence:
        </p>

        <ul className="my-5 mx-[25px] flex flex-col gap-4 list-disc">
          <li>Real-Time Data Analysis</li>
          <li>Customizable Dashboards</li>
          <li>Comprehensive Performance Metrics</li>
          <li>Predictive Analytics</li>
          <li>Data Visualization</li>
          <li>Segmentation and Targeting</li>
          <li>Integration with External Data Sources</li>
          <li>ser-Friendly Interface</li>
        </ul>

        <p className="text-32 mb-5">Unveiling Business Potential</p>

        <p>
          Track and measure various aspects of your business, from sales and
          customer engagement to operational efficiency, providing a holistic
          view of your organization's performance. Lyxis Analytics covers a
          spectrum of performance metrics. Stay on top of evolving trends,
          respond swiftly to market changes, and make informed decisions based
          on the latest information.
        </p>

        <p className="text-32 my-5">Unlocking Your Business Potential</p>

        <p>
          In the era of data-driven decision-making, Lyxis Analytics emerges as
          a catalyst for unlocking your business potential. It goes beyond
          numbers; it tells the story of your organization, providing the
          clarity and foresight needed to navigate the ever-changing business
          landscape.
        </p>
      </div>
    </div>
  );
};

export default Main;
