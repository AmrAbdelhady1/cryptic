import Image from "next/image";

const data = [
  {
    id: 1,
    name: "Eduard Franz",
    job: "Designer, Facebook",
    desc: "Lyxis strategic insights were a game-changer for us. Their expert guidance and tailored strategies helped us navigate challenges and tap into new growth avenues. Thanks to Lyxis, we're not just surviving, but thriving in a competitive tech landscape.",
    image: "/assets/images/reviews/review-1.jpg",
  },
  {
    id: 2,
    name: "David Chen",
    job: "CEO, Quicky",
    desc: "Lyxis financial restructuring expertise was exactly what our company needed. They identified areas for improvement we hadn't even considered. Their solutions transformed our financial landscape, driving significant cost savings and improved.",
    image: "/assets/images/reviews/review-2.webp",
  },
  {
    id: 3,
    name: "Sarah Thompson",
    job: "COO of RetailXpress",
    desc: "Working with Lyxis was an absolute pleasure. Their operational efficiency recommendations streamlined our processes, saving us time and resources. Our fulfillment speed has never been faster, and our customers are noticing the difference.",
    image: "/assets/images/reviews/review-3.webp",
  },
  {
    id: 4,
    name: "Loki Bright",
    job: "Manager, Barst",
    desc: "Lyxis financial restructuring expertise was exactly what our company needed. They identified areas for improvement we hadn't even considered. Their solutions transformed our financial landscape, driving significant cost savings and improved.",
    image: "/assets/images/reviews/review-4.webp",
  },
  {
    id: 5,
    name: "Emily Martinez",
    job: "CFO of Manufacturing",
    desc: "Lyxis strategic insights were a game-changer for us. Their expert guidance and tailored strategies helped us navigate challenges and tap into new growth avenues. Thanks to Lyxis, we're not just surviving, but thriving in a competitive tech landscape.",
    image: "/assets/images/reviews/review-5.webp",
  },
  {
    id: 6,
    name: "Michelle Adams",
    job: "HR Manager",
    desc: "Lyxis change management expertise transformed our merger into a harmonious transition. Their strategies boosted employee morale, minimized disruption, and merged our cultures seamlessly. Their dedication to our success was truly commendable.",
    image: "/assets/images/reviews/review-6.webp",
  },
];  

const Reviews = () => {
  return (
    <div className="main-container !pt-0">
      <div className="global-width grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-between gap-5 bg-lightPrimary border border-darkGray rounded-[10px] md:py-5 p-4 md:px-[30px] max-w-[400px] mx-auto leading-[1.5em]"
          >
            <p className="md:my-[10px] md:text-lg">"{item.desc}"</p>
            <div className="flex items-center gap-2 md:gap-5">
              <Image
                src={item.image}
                alt="avatar"
                width={60}
                height={60}
                className="w-[60px] h-[60px] rounded-[10px] object-cover"
              />
              <div className="flex flex-col gap-1 md:gap-[10px]">
                <p className="md:text-xl font-medium font-dmSans leading-[1.2em]">
                  {item.name}
                </p>
                <p>{item.job}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
