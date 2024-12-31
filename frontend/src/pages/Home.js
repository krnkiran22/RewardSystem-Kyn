import React from 'react';
import Image1 from "../assests/carousel.jpg";
import Image2 from "../assests/shopping.png";
import Image3 from "../assests/carousel.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: " Ms. Gayathri Thyagarajan-CEO",
    description:
      "integrates television, print, and social media to create a hyperlocal community platform",
   
  },
  {
    id: 2,
    img: Image2,
    title: "A solution for hyper-local connectivity",
    description:
      "integrates television, print, and social media to create a hyperlocal community platform",
    
  },
  {
    id: 3,
    img: Image3,
    title: "Hyper-Local App Kyn With Unique Features Launched",
    description:
      "integrates television, print, and social media to create a hyperlocal community platform",
  },
];

const Home = () => {
  const settings = {
    speed: 800, // Transition speed
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, // Slide every 2 seconds
    cssEase: "ease-out", // Ease-out transition
    arrows: false, // Add navigation arrows
   // Add navigation dots
  };

  return (
    <div className="overflow-hidden min-h-screen flex items-center justify-center relative">
      {/* Rotated background div */}
      <div className='h-[700px] w-[700px] bg-red-500 absolute -top-1/2 right-10 rotate-45 rounded-3xl -z-10'></div>
      
      <div className='container pb-10  flex justify-center'>
        {/* Slider component */}
        <Slider {...settings} className="w-[80%]    ">
        {ImageList.map((data) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Home;
