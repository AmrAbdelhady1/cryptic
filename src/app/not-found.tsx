import React from "react";

const notfound = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen text-center text-blackPrimary">
      <p className="text-primary text-[180px] font-bold">404</p>
      <p className="font-medium text-[48px] font-dmSans">
        Something’s not right.
      </p>
      <p className="my-2">We can’t find the page your are looking for.</p>
      <button className="btn-yellow">Back to homepage</button>
    </div>
  );
};

export default notfound;
