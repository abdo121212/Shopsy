import React from "react";
import img1 from "../assets/shirt/shirt.png";
import img2 from "../assets/shirt/shirt2.png";
import img3 from "../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";

export const TopProducts = () => {
  const productsData = [
    {
      id: 1,
      img: img1,
      rating: 5.0,
      title: "Casual Wear",
      auther: "white",
      aosDelay: "100",
    },
    {
      id: 2,
      img: img2,
      rating: 4.5,
      title: "Printed shirt",
      auther: "red",
      aosDelay: "200",
    },
    {
      id: 3,
      img: img3,
      rating: 4.7,
      title: "Women shirt",
      auther: "brown",
      aosDelay: "350",
    },
  ];
  return (
    <section className="dark:bg-gray-800 dark:text-white">
      <div className="container mx-auto  py-10">
        <div>
          <div className="flex flex-col justify-center items-start gap-y-4 max-sm:px-10">
            <h5
              data-aos="fade-up"
              className="text-3xl text-primary font-medium"
            >
              Top Seling Products For You
            </h5>
            <h2 data-aos="fade-up" className="text-6xl font-bold">
              Best Products
            </h2>
            <p data-aos="zoom-in" className="text-gray-600 text-lg dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga iure
              suscipit obcaecati molestias voluptatem!
            </p>
          </div>

          <div className="grid  grid-cols-1 ms:grid-cols-2 md:grid-cols-3 place-items-center mt-20 space-x-10 ">
            {productsData.map((ele) => (
              <div
                key={ele.id}
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="100"
                className="rounded-2xl bg-white max-md:mb-20 dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary shadow-2xl group  duration-500 max-w-[300px] flex flex-col items-center justify-center "
              >
                <img
                  className="max-w-[140px] group-hover:scale-125 duration-300 drop-shadow-lg transform -translate-y-16"
                  src={ele.img}
                  alt=""
                />
                <div className="-translate-y-10 flex justify-center items-center flex-col space-y-4  dark:text-white ">
                  <h4 className="font-bold text-2xl group-hover:text-white">
                    {ele.title}
                  </h4>

                  <div className="flex gap-x-2 justify-center ">
                    <FaStar size={25} className="text-yellow-500" />
                    <FaStar size={25} className="text-yellow-500" />
                    <FaStar size={25} className="text-yellow-500" />
                    <FaStar size={25} className="text-yellow-500" />
                    <FaStar size={25} className="text-yellow-500" />
                  </div>

                  <p className="text-center text-gray-600  dark:text-white group-hover:text-white">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor....
                  </p>
                  <div>
                    <button className="py-2 px-4 bg-gradient-to-r from-primary to-orange-600 rounded-xl text-white font-medium ">
                      Order New{" "}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
