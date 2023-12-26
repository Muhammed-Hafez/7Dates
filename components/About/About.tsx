import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="w-full max-w-[1600px] mx-auto py-8 flex flex-col-reverse lg:flex-row items-center justify-evenly lg:gap-8">
      <div className="lg:w-1/2 flex items-center justify-center overflow-hidden">
        <img
          src="/images/about/about-1.jpg"
          alt="About"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="lg:w-1/2 text-center lg:text-left mb-8 md:mb-0">
        <p className="text-green-500">About Us</p>
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">
          The success history of <br /> 7Dates in 18 years
        </h1>
        <p className="text-gray-600">
          With a legacy spanning over 18 years, Seven Dates Factory Packing and
          Processing Dates LLC has been a pioneer in sourcing and packing the
          finest date products. Our journey is rooted in a dedication to
          quality, customer satisfaction, and a passion for delivering the best
          of the UAE's date varieties.
        </p>
      </div>
    </section>
  );
};

export default About;
