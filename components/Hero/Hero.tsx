import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="h-[600px] overflow-hidden">
      <Image
        src="/images/banner-1.jpg"
        alt="Hero"
        width={1920}
        height={100}
        className="object-cover object-center w-full h-full"
      />
    </section>
  );
}
