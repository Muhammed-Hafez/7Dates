import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="w-full max-w-[1600px] mx-auto py-8 flex items-start justify-evenly">
      <div className="flex items-center justify-center overflow-hidden">
        <Image src="/images/about.jpg" width={500} height={500} alt="About" />
      </div>

      <div className="">
        <p className="text-green-500">Best Quality Products</p>
        <h1>We offer convenience, quality, and flexibility.</h1>
      </div>
    </section>
  );
};

export default About;
