import React from "react";
import image1 from "../assets/Imagesclient/download.jpeg";
import image2 from "../assets/Imagesclient/images (1).jpeg";
import image3 from "../assets/Imagesclient/images (2).jpeg";
import image4 from "../assets/Imagesclient/images (3).jpeg";
import image5 from "../assets/Imagesclient/images.jpeg";
import Slider from "react-slick/lib/slider";

export const TestImonials = () => {
  const data = [
    {
      id: 1,
      img: image1,
      name: "Ahmed All",
    },
    {
      id: 2,
      img: image2,
      name: "Mo sonsy",
    },

    {
      id: 3,
      img: image3,
      name: "salma Ahmed",
    },

    {
      id: 4,
      img: image4,
      name: "Amr Aly",
    },

    {
      id: 5,
      img: image5,
      name: "Rana Kh",
    },
  ];

  const setting = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEasy: "easy-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <section className="dark:bg-gray-800 dark:text-[#f2f2f2] ">
      <div className="container mx-auto  ">
        <div className="py-7">
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
              className="text-gray-600 text-lg dark:text-white  "
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga iure
              suscipit obcaecati molestias voluptatem!
            </p>
          </div>
        </div>

        <Slider {...setting}>
          {data.map((ele) => (
            <div
              key={ele.id}
              className="bg-[#fdfdfd] flex flex-col shadow-2xl py-8 px-6  rounded-lg dark:bg-gray-700  "
            >
              <div className="flex justify-items-center items-center flex-col gap-y-4">
                <img
                  src={ele.img}
                  alt={ele.name}
                  className="rounded-full h-[200px] w-[200px] object-fill"
                />

                <span className="font-bold text-xl capitalize  dark:text-white">{ele.name}</span>
              </div>

              <p className="text-gray-600 text-center py-3  dark:text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
                optio odit, cum mollitia dolor cupiditate numquam animi
                explicabo ipsam quasi, nihil neque!{" "}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
