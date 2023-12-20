import React from "react";

const Products = () => {
  return (
    <section className="w-full max-w-[1600px] mx-auto py-8 flex flex-col items-center justify-center">
      <div className="text-center mb-12">
        <p>Best Quality Products</p>
        <h1 className="text-5xl font-bold">Our Products</h1>
      </div>

      <div className="flex items-center justify-between w-full">
        <div className="w-[300px] h-[300px] bg-gray-200"></div>
        <div className="w-[300px] h-[300px] bg-gray-200"></div>
        <div className="w-[300px] h-[300px] bg-gray-200"></div>
        <div className="w-[300px] h-[300px] bg-gray-200"></div>
        <div className="w-[300px] h-[300px] bg-gray-200"></div>
      </div>
    </section>
  );
};

export default Products;
