import React from "react";
import img1 from "../assets/img/img1.png";
import img2 from "../assets/img/img2.png";
import img3 from "../assets/img/img3.png";
import img4 from "../assets/img/img4.png";
import img5 from "../assets/img/img5.png";
import img6 from "../assets/img/img6.png";

const About = () => {
  return (
    <div className="text-center my-20">
      <div className="text-center">
        <p className="uppercase text-xl text-gray-500">AOBUT US</p>
        <h2 className="uppercase text-indigo-500 py-2">
          The Mission of Discount?
        </h2>
        <p className="mt-4 text-2xl font-semibold text-gray-500 max-w-[680px] mx-auto">
          Discount is a free cloud mining platform developed by crypto
          enthusiastic.
        </p>
        <p className="mt-4 font-semibold text-gray-500 max-w-[680px] mx-auto">
          Our goal at Discount is to give miners a streamlined, reliable, and
          secure cloud mining platform. One of the top cloud mining platforms in
          the cryptocurrency industry for both experts and beginners is
          Discount. We provide new miners ideal cloud mining solutions in
          addition to free mining possibilities so they may test out our
          services before upgrading to our premium mining plans. People do not
          trust bitcoin mining with their hard-earned money since it is so
          difficult. Discount gives customers the chance to try out our mining
          services prior to purchasing premium programs.
        </p>
      </div>
      <div className="my-4 grid grid-cols-2 xl:grid-cols-3 max-w-[720px] mx-auto gap-2">
        <div className="overflow-hidden">
          <img
            className="w-full h-full object-cover hover:scale-110 duration-200"
            src={img4}
            alt=""
          />
        </div>
        <div className="overflow-hidden">
          <img
            className="w-full h-full object-cover hover:scale-110 duration-200"
            src={img3}
            alt=""
          />
        </div>
        <div className="overflow-hidden">
          <img
            className="w-full h-full object-cover hover:scale-110 duration-200"
            src={img6}
            alt=""
          />
        </div>
        <div className="overflow-hidden">
          <img
            className="w-full h-full object-cover hover:scale-110 duration-200"
            src={img6}
            alt=""
          />
        </div>
        <div className="overflow-hidden">
          <img
            className="w-full h-full object-cover hover:scale-110 duration-200"
            src={img2}
            alt=""
          />
        </div>
        <div className="overflow-hidden">
          <img
            className="w-full h-full object-cover hover:scale-110 duration-200"
            src={img3}
            alt=""
          />
        </div>
      </div>
      {/* 
      <button className="text-indigo-500 font-semibold border-2 border-indigo-500 rounded-full py-2 px-10 mt-6">
        Load More
      </button> */}
    </div>
  );
};

export default About;
