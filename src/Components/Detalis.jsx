import { AiOutlinePhone } from "react-icons/ai";
import { BiCurrentLocation } from "react-icons/bi";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import React from "react";
import logo from "../assets/logo.png";

export const Detalis = () => {
  return (
    <section className="w-full   pt-20 dark:bg-gray-800 ">
      <div id="image-footer" className="w-full h-full lg:h-[400px] text-white ">
        <div className="container  mx-auto pt-10 px-10">
          <div className="flex justify-between items-start gap-11 max-lg:flex-col  max-lg:justify-start max-lg:items-start max-lg:space-y-5q">
            <div className=" flex  flex-col space-y-4 ">
              <div className="flex  justify-start items-center space-x-3">
                <img src={logo} alt="Logo" className="w-[100px]" />
                <h3 className="font-bold text-2xl ">Shopsy</h3>
              </div>

              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </div>

            <div className="max-lg:hidden">
              <h3 className="font-bold text-3xl pb-5">Important Links</h3>

              <ul className="flex justify-start items-center  flex-col space-y-4">
                <li>
                  <a
                    href="/giga"
                    className="hover:text-primary duration-300 hover:ml-6 text-xl"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    href="/giga"
                    className="hover:text-primary duration-300 hover:ml-6 text-xl"
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    href="/giga"
                    className="hover:text-primary duration-300 hover:ml-6 text-xl"
                  >
                    Contact Us
                  </a>
                </li>

                <li>
                  <a
                    href="/giga"
                    className="hover:text-primary duration-300 hover:ml-6 text-xl"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-3xl pb-5">Links</h3>

              <ul className="flex justify-start items-center  flex-col space-y-4">
                <li>
                  <a
                    href="/giga"
                    className="hover:text-primary duration-300 hover:ml-6 text-xl"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    href="/giga"
                    className="hover:text-primary duration-300 hover:ml-6 text-xl"
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    href="/giga"
                    className="hover:text-primary duration-300 hover:ml-6 text-xl"
                  >
                    Contact Us
                  </a>
                </li>

                <li>
                  <a
                    href="/giga"
                    className="hover:text-primary duration-300 hover:ml-6 text-xl"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col  gap-y-5">
              <div className="flex justify-center items-center gap-x-5">
                <CgFacebook
                  size={40}
                  className="cursor-pointer duration-300 hover:text-primary hover:scale-125"
                />
                <AiFillInstagram
                  size={40}
                  className="cursor-pointer duration-300 hover:text-primary hover:scale-125"
                />
                <AiFillLinkedin
                  size={40}
                  className="cursor-pointer duration-300 hover:text-primary hover:scale-125"
                />
              </div>
              <div className="flex justify-center items-center gap-x-3">
                <BiCurrentLocation
                  size={35}
                  className="cursor-pointer duration-300 hover:text-primary hover:scale-125"
                />
                <span className="text-xl  font-medium">Egypt , Elfayoum</span>
              </div>

              <div className="flex justify-center items-center gap-x-3 max-lg:pb-10">
                <AiOutlinePhone
                  size={35}
                  className="cursor-pointer duration-300 hover:text-primary hover:scale-125"
                />
                <span className="text-xl  font-medium ">+2010 675 800 75</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
