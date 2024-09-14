import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    name: "Protecting Your Data in a Digital World",
    date: "October 3, 2023",
    image: "/assets/images/blog/blog-2.webp",
  },
  {
    id: 2,
    name: "How Lyxis Grows with Your Business",
    date: "October 3, 2023",
    image: "/assets/images/blog/blog-3.webp",
  },
  {
    id: 3,
    name: "Using Lyxis Analytics for Business Insights",
    date: "October 3, 2023",
    image: "/assets/images/blog/blog-4.webp",
  },
];

const OurBlog = () => {
  return (
    <div className="main-container bg-lightPrimary text-blackPrimary !pt-[160px]">
      <div className="global-width flex flex-col lg:flex-row lg:gap-20">
        <Link href="/blog-details" className="lg:w-[60%]">
          <p className="text-72">Our Blog</p>
          <div className="w-full mt-[60px] mb-5 rounded-[10px] overflow-hidden cursor-pointer">
            <Image
              alt="blog"
              src="/assets/images/blog/blog-1.jpg"
              width={654}
              height={400}
              className="w-full lg:h-[400px] h-full object-cover duration-1000 hover:scale-110"
            />
          </div>
          <div className="flex justify-between w-full mb-5">
            <p className="text-hover">ENTREPRENEUR</p>
            <p>October 3, 2023</p>
          </div>
          <p className="text-hover text-32">A Look into Our Customer Support</p>
        </Link>
        <div className="lg:w-[40%]">
          <div className="my-10 flex flex-col md:flex-row items-center gap-4">
            <input
              type="text"
              placeholder="Enter search keyword"
              className="h-[60px] border border-darkGray text-blackPrimary rounded-[5px] py-4 px-[22px] bg-transparent w-full focus:border-primary focus:outline-none"
            />
            <button className="btn-yellow">Search</button>
          </div>
          <div className="mb-[50px] mt-[10px] flex flex-col gap-5">
            <p className="lg:text-[28px] font-medium font-dmSans leading-[1.2em]">
              Recent Posts
            </p>
            <div className="flex flex-col gap-4">
              {blogs.map((blog) => (
                <Link
                  href="/blog-details"
                  key={blog.id}
                  className="flex gap-4 cursor-pointer"
                >
                  <div className="w-[23%] rounded-[5px] overflow-hidden">
                    <Image
                      src={blog.image}
                      alt="blog"
                      width={90}
                      height={90}
                      className="w-full object-cover h-[90px] duration-700 hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-col justify-between w-[80%]">
                    <p className="text-hover lg:text-[20px] font-dmSans font-medium leading-[1.2em]">
                      {blog.name}
                    </p>
                    <p>{blog.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-[10px] flex flex-col gap-5">
            <p className="lg:text-[28px] font-medium leading-[1.2em] font-dmSans">
              Categories
            </p>
            <div className="flex flex-wrap gap-5">
              <button className="btn-yellow btn-black !h-[40px] !text-base !font-normal">
                Startup
              </button>
              <button className="btn-yellow btn-black !h-[40px] !text-base !font-normal">
                Entrepreneur
              </button>
              <button className="btn-yellow btn-black !h-[40px] !text-base !font-normal">
                Inspire
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBlog;
