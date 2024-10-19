import React from "react";
import image from "../assets/website/orange-pattern.jpg";

export const Notified = () => {
  return (
    <section className=" mx-auto  ">
      <img
        src={image}
        alt=""
        className="w-full h-[400px] object-cover absolute z-[-10]"
      />

      <div
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="300"
        className=" flex justify-center items-center h-[400px] flex-col gap-y-4"
      >
        <h3 className=" text-5xl font-medium capitalize text-white max-lg:text-2xl">
          get notified about new products
        </h3>

        <div className="w-[500px] h-14">
          <input
            type="text"
            className="w-full h-full rounded-md text-xl px-3"
            placeholder="Enter Your Email"
          />
        </div>
      </div>
    </section>
  );
};
