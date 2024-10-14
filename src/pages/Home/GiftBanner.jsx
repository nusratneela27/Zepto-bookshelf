import React from "react";
import fixedBanner from "../../assets/fixed-banner.webp";
import Button from "../../components/Buttons/Button";

const GiftBanner = () => {
  return (
    <div
      className="relative w-full h-64 md:h-[500px] bg-fixed bg-cover mt-40"
      style={{ backgroundImage: `url(${fixedBanner})` }}
    >
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-amber-50 bg-opacity-10 space-y-5">
        <h1 className="text-3xl md:text-5xl text-sky-800 font-bold">
          Celebrate with Gifts!
        </h1>
        <h2 className="text-black md:text-xl font-semibold">
          Give your family and friends a book
        </h2>
        <Button label={"Shop Now"}></Button>
      </div>
    </div>
  );
};

export default GiftBanner;
