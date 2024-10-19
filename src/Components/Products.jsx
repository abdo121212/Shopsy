import { AiFillStar } from "react-icons/ai";
import React from "react";
import img1 from "../assets/women/women.png";
import img2 from "../assets/women/women2.jpg";
import img3 from "../assets/women/women3.jpg";
import img4 from "../assets/women/women4.jpg";

export const Products = () => {
  const productsData = [
    {
      id: 1,
      img: img1,
      rating: 5.0,
      title: "Women Ethnic",
      auther: "white",
      aosDelay: "0",
    },
    {
      id: 2,
      img: img2,
      rating: 4.5,
      title: "Women Weatern",
      auther: "red",
      aosDelay: "200",
    },
    {
      id: 3,
      img: img3,
      rating: 4.7,
      title: "Goggles",
      auther: "brown",
      aosDelay: "350",
    },

    {
      id: 1,
      img: img4,
      rating: 5.0,
      title: "Women Ethnic",
      auther: "white",
      aosDelay: "0",
    },
    {
      id: 5,
      img: img3,
      rating: 5.3,
      title: "Goggles",
      auther: "brown",
      aosDelay: "350",
    },
  ];
  return (
    <>
      <section className="dark:bg-gray-800 dark:text-white">
        <div className="py-10 container mx-auto px-10 ">
          <div>
            <div className="flex flex-col justify-center items-center gap-y-4 ">
              <h5
                data-aos="fade-up"
                className="text-3xl text-primary font-medium"
              >
                Top Seling Products For You
              </h5>
              <h2 data-aos="fade-up" className="text-6xl font-bold">
                Products
              </h2>
              <p
                data-aos="fade-up"
                className="text-gray-600 text-lg dark:text-white"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                iure suscipit obcaecati molestias voluptatem!
              </p>
            </div>
            <div className="grid grid-cols-1  sm:grid-cols-3  md:gird-cols-4 lg:grid-cols-5 mt-8 gap-6">
              {productsData.map((product) => (
                <div
                  data-aos="fade-up"
                  key={product.id}
                  className="flex  flex-col justify-center items-center space-y-2    "
                >
                  <img
                    className="h-[320px] w-[350px] object-cover rounded-lg"
                    src={product.img}
                    alt={product.title}
                  />
                  <h5 className="font-semibold ">{product.title}</h5>
                  <p>{product.auther}</p>

                  <div className="flex gap-x-2 items-center">
                    <AiFillStar className="text-yellow-500" size={25} />
                    <span>{product.rating}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center items-center my-20">
              <button
                data-aos="fade-left"
                data-aos-duration="500"
                className="bg-gradient-to-r from-primary to-yellow-700 font-medium rounded-2xl py-3 text-2xl px-4  hover:scale-125 duration-500"
              >
                View All Products
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
