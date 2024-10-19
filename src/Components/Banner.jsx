import { MdOutlineLocalOffer } from "react-icons/md";
import { SiContactlesspayment } from "react-icons/si";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { MdHighQuality } from "react-icons/md";
import React from "react";
import img2 from "../assets/women/women2.jpg";

export const Banner = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-white">
      <div className="pt-16 container mx-auto py-10">
        <div className="flex justify-center items-center gap-x-36 flex-row max-lg:space-y-16  max-lg:flex-col max-md:gap-y-14  max-sm:px-16">
          <img
            data-aos="zoom-in"
            data-aos-delay="500"
            src={img2}
            alt="image"
            className="drop-shadow-[-10px_10px_12px_rgba(0,0,1)]"
          />

          <div className="flex justify-start items-start flex-col space-y-6">
            <h4
              className="font-bold text-6xl max-lg:text-3xl "
              data-aos="fade-up"
            >
              Winter Sale upto 50% Off
            </h4>
            <p
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              className=" text-gray-700"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              reiciendis inventore iste ratione ex alias quis magni at optio...
            </p>

            <div
              data-aos="fade-right"
              className="flex  justify-center items-start space-y-7 flex-col w-full"
            >
              <div className="flex justify-center items-center gap-7">
                <div className="w-14 h-14 bg-[#ede9fe] flex justify-center items-center rounded-full">
                  <MdHighQuality size={30} className=" dark:text-primary rounded-full" />
                </div>
                <span className="font-medium text-xl capitalize ">
                  hight Quality
                </span>
              </div>

              <div className="flex justify-center items-center gap-7 ">
                <div className="w-14 h-14 bg-[#ffedd5] flex justify-center items-center rounded-full">
                  <MdOutlineDeliveryDining
                    size={30}
                 className="  dark:text-primary   rounded-full"
                  />
                </div>
                <span className="font-medium text-xl capitalize ">
                  Fast Delivery
                </span>
              </div>

              <div className="flex justify-center items-center gap-7 ">
                <div className="w-14 h-14 bg-[#dcfce7] flex justify-center items-center rounded-full">
                  <SiContactlesspayment size={30} className=" dark:text-primary rounded-full" />
                </div>
                <span className="font-medium text-xl capitalize ">
                  Easey Payment method
                </span>
              </div>

              <div className="flex justify-center items-center gap-7 ">
                <div className="w-14 h-14 bg-[#fef9c3] flex justify-center items-center rounded-full">
                  <MdOutlineLocalOffer size={30} className=" dark:text-primary rounded-full" />
                </div>
                <span className="font-medium text-xl capitalize ">
                  Get Offers
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
