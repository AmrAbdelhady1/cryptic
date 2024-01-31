import Image from "next/image";
import Link from "next/link";

import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const team = [
  {
    id: 1,
    name: "Alexandra Bennett",
    job: "CEO and Founder",
    image: "/assets/images/our-team/team-1.webp",
  },
  {
    id: 2,
    name: "Mishel Ramirez",
    job: "Business Strategy Expert",
    image: "/assets/images/our-team/team-2.webp",
  },
  {
    id: 3,
    name: "Jonathan Parker",
    job: "Process Optimization",
    image: "/assets/images/our-team/team-3.webp",
  },
  {
    id: 4,
    name: "Sophia Nguyen",
    job: "Market Research Analyst",
    image: "/assets/images/our-team/team-4.webp",
  },
  {
    id: 5,
    name: "Alexander Bennett",
    job: "Financial Advisor",
    image: "/assets/images/our-team/team-5.webp",
  },
  {
    id: 6,
    name: "David Turner",
    job: "Change Management",
    image: "/assets/images/our-team/team-6.webp",
  },
];

const OurTeam = () => {
  return (
    <div className="py-[60px] flex flex-col items-center gap-10 text-blackPrimary">
      <div className="w-full mx-auto max-w-[700px] text-center">
        <p className="text-[48px] font-medium font-dmSans leading-[50px] mb-5">
          Our team members bring a wealth of experience
        </p>
        <p>
          Our team thrives on collaboration and a shared commitment to
          delivering outstanding results for our clients.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-[30px] justify-center">
        {team.map((item) => (
          <div
            key={item.id}
            className="w-full rounded-[10px] overflow-hidden bg-lightPrimary"
          >
            <Image
              alt="pic"
              src={item.image}
              width={370}
              height={400}
              className="h-full max-h-[400px] max-w-[370px] object-cover"
            />

            <div className="pt-[10px] pb-[30px] text-center">
              <p className="my-[10px] font-dmSans text-[28px] font-medium">
                {item.name}
              </p>
              <p className="mb-5 mt-[10px] text-lg">{item.job}</p>
              <div className="flex items-center justify-center gap-5 text-lg">
                <Link
                  href={"https://www.twitter.com/"}
                  target="_blank"
                  className="w-[50px] h-[50px] border border-blackPrimary rounded-[5px] flex items-center justify-center duration-300 ease-in-out hover:bg-primary hover:border-primary"
                >
                  <FaXTwitter />
                </Link>
                <Link
                  href={"https://www.linkedin.com/"}
                  target="_blank"
                  className="w-[50px] h-[50px] border border-blackPrimary rounded-[5px] flex items-center justify-center duration-300 ease-in-out hover:bg-primary hover:border-primary"
                >
                  <FaLinkedin />
                </Link>
                <Link
                  href={"https://www.facebook.com/"}
                  target="_blank"
                  className="w-[50px] h-[50px] border border-blackPrimary rounded-[5px] flex items-center justify-center duration-300 ease-in-out hover:bg-primary hover:border-primary"
                >
                  <FaFacebookF />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
