import React from "react";
import image3 from "../assets/hero/sale.png";
import image1 from "../assets/hero/shopping.png";
import image2 from "../assets/hero/women.png";
import Slider from "react-slick";

export const Hero = () => {
  const images = [
    {
      id: 1,
      img: image1,
      title: "Up To 50% off on all men's Wear",
      description:
        "lorem his life will forever be changed dolor sit amet , consecuetetur adipiscing elit , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua .",
    },

    {
      id: 2,

      img: image2,
      title: "Up To 30% off on all women's Wear",
      description:
        "lorem his life will forever be changed dolor sit amet , consecuetetur adipiscing elit , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua .",
    },
    {
      id: 3,

      img: image3,
      title: "Up To 70% off on all products sale",
      description:
        "lorem his life will forever be changed dolor sit amet , consecuetetur adipiscing elit , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua .",
    },
  ];
  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEasy: "easy-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <>
      <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-200 z-[-1] dark:bg-gray-950 ">
        <div className="h-[700px] w-[700px] bg-primary/40 rounded-3xl absolute  right-0 -top-3/4 rotate-45 z-[-10] "></div>
        <div className="container mx-auto ">
          <Slider {...settings}>
            {images.map((ele) => (
              <div className="h-screen w-full flex justify-center items-center dark:text-white ">
                <div className="flex justify-center items-center w-full h-screen max-md:flex-col  max-md:gap-6 gap-x-10 ">
                  <div className="w-[40%] space-y-4 max-md:order-1 max-md:text-center">
                    <h4
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl font-bold max-lg:text-3xl dark:text-white  "
                    >
                      {ele.title}
                    </h4>
                    <p
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-delay="100"
                      className="text-gray-700 max-lg:text-[12px] dark:text-white"
                    >
                      {ele.description}
                    </p>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-delay="300"
                      className=""
                    >
                      <button className="bg-gradient-to-r from-primary max-md:text-[11px] to-orange-500 py-2 max-lg:text-[10px] w-1/2 px-3 rounded-lg text-white font-medium ">
                        Order New
                      </button>
                    </div>
                  </div>

                  <div>
                    <img
                      data-aos="zoom-in"
                      data-aos-once="300"
                      src={ele.img}
                      className="max-lg:w-[450px] lg:w-[650px] object-contain"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};
