import { BiRightArrowAlt } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { BiSearchAlt2 } from "react-icons/bi";
import React from "react";
import logo from "../../assets/logo.png";
import { DarkMode } from "./DarkMode";

export const 
Navbar = () => {
  const menu = [
    {
      id: 1,
      name: "home",
      link: "/#",
    },

    {
      id: 2,
      name: "Top Rated",
      link: "/#services",
    },

    {
      id: 3,
      name: "Kids Wear",
      link: "/#",
    },

    {
      id: 4,
      name: "Mens Wear",
      link: "/#",
    },

    {
      id: 5,
      name: "Electronics",
      link: "/#",
    },
  ];
  return (
    <>
      <nav className="w-full bg-primary/40 shadow-md dark:bg-gray-900 py-2 dark:text-white z-50 relative">
        <div className="container mx-auto   flex justify-between items-center">
          <div>
            <div className="flex justify-center items-center space-x-2">
              <img src={logo} alt="logo" className="uppercase  w-[50px]" />
              <span className="uppercase font-bold  text-2xl">Shopsy</span>
            </div>
          </div>

          <div className="flex space-x-3 justify-center items-center">
            <div className="group relative max-md:hidden ">
              <input
                type="search"
                placeholder="Search"
                className=" rounded-full transition-all duration-300 group-hover:w-[300px] border border-gray-300  px-2 py-1 focus:outline-none w-[200px] sm:w-[200px] focus:border-1 focus:border-primary"
              />
              <BiSearchAlt2
                size={20}
                className="absolute top-2 right-2 group-hover:text-primary duration-300 text-gray-400 "
              />
            </div>

            <div>
              <button
                onClick={() => {
                  alert("Ordering not available yet");
                }}
                className="bg-primary px-3 py-1 group rounded-full transition-all duration-500 flex justify-center items-center space-x-2"
              >
                <FaShoppingCart size={20} className="text-white" />
                <span className="text-white hidden group-hover:block ">
                  Order
                </span>
              </button>
            </div>

            <DarkMode />
          </div>
        </div>
      </nav>
      <div className="dark:text-white dark:bg-gray-800 relative z-40 ">
        <ul className=" justify-center items-center gap-6 py-1 hidden sm:flex shadow-xl">
          {menu.map((ele) => (
            <li key={ele.id}>
              <a href={ele.link} className="hover:text-primary duration-300">
                {" "}
                {ele.name}
              </a>
            </li>
          ))}
          <div className="flex group justify-center items-center space-x-1 cursor-pointer relative">
            <li>Trending Products</li>
            <BiRightArrowAlt
              size={20}
              className="group-hover:rotate-90 duration-500"
            />

            <div className="absolute bg-white px-2 py-3 rounded-md w-full top-[28px] hidden group-hover:block dark:text-black">
              <ul className="flex flex-col justify-center items-center  space-y-1">
                <li className="hover:text-primary duration-200 ">
                  Trending Products
                </li>
                <li className="hover:text-primary duration-200 ">
                  Best Selling
                </li>
                <li className="hover:text-primary duration-200 ">Top Rated</li>
              </ul>
            </div>
          </div>
        </ul>
      </div>
    </>
  );
};
