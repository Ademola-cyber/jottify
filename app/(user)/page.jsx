import React from "react";

const page = () => {
  return (
    <div className="bg-[url('/jotter.jpeg')] h-dvh w-full bg-cover bg-center">
      <div className="h-dvh w-full bg-black/50 items-center justify-center flex">
        <div className="text-white lg:w-[70rem]">
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
            facere ad dignissimos delectus ullam ut architecto magnam fugit
            eaque id quos quis sequi non laborum magni repudiandae obcaecati
            cumque, debitis omnis! Consequatur reprehenderit doloribus, impedit
            natus sint accusamus voluptate dolore et eos provident ipsam
            necessitatibus architecto nisi tempore ratione.
          </p>
          <div className="flex items-center justify-center w-full lg:pt-20 gap-10">
            <button className="border border-white rounded-md py-2 px-4 hover:bg-white hover:text-black">
              Lorem
            </button>
            <button className="border border-white rounded-md py-2 px-4 hover:bg-white hover:text-black">
              LOrem
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
