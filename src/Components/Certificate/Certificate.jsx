import { FaCertificate } from "react-icons/fa6";
import React, { Component } from "react";
import Slider from "react-slick";

const Certificate = ({ imageUrls }) => {
  const settings = {
    customPaging: function (i) {
      return (
        <div className=" flex items-center   ">
          <img src={imageUrls[i]} alt={`Thumbnail ${i + 1}`} />
        </div>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="ml-[20%] mr-auto max-w-screen-lg pb-10">
      <h2 className="font-serif text-3xl text-white pt-16 flex items-center justify-center">
        <FaCertificate className="mr-2" />
        Certificados
      </h2>
      <div className=" w-[5%] h-[5%] ">
        <Slider {...settings}>
          {imageUrls.map((imageUrl, index) => (
            <div key={index} className="flex items-center justify-center ">
              <img src={imageUrl} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Certificate;
