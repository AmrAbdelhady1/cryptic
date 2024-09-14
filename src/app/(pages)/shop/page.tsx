import React from "react";
import Products from "./Products";

const page = () => {
  return (
    <div>
      {/* header */}
      <div className="main-container bg-lightPrimary !pt-[180px]">
        <div className="global-width flex flex-col items-center text-center">
          <p className="text-72">Shop</p>
          <p className="lg:text-lg leading-[1.5em] my-[10px] max-w-[602px]">
            At Lyxis, we are a team of dedicated professionals who are
            passionate about technology and its transformative potential.
          </p>
        </div>
      </div>

      <Products />
    </div>
  );
};

export default page;
