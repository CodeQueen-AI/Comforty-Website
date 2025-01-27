import Image from "next/image";
import React from "react";

const AboutPopularProduct = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-32 px-6">
      <div className="mb-10 flex items-center gap-4">
        <div className="h-16 w-[14px] bg-[#00B5A5] rounded-full"></div>
        <h1 className="text-4xl font-extrabold text-[#1C1B1F] tracking-tight">
          Our Popular Products
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row lg:flex-row justify-between gap-8">
        <div className="flex flex-col items-center h-auto">

          <Image
            src="/10.jpg"
            alt="img"
            width={590}
            height={400}/>
          <p className="pt-5 text-[20px] font-normal text-left w-full">
            The Poplar Suede Sofa
          </p>
          <p className="pt-2 text-[18px] font-normal text-left w-full">$99.00</p>
        </div>

        <div className="flex flex-col items-center h-auto">
          <Image
            src="/11.jpg"
            alt="img"
            width={400}
            height={400}/>
          <p className="pt-5 text-[20px] font-normal text-left w-full">
            The Dandy Chair
          </p>
          <p className="pt-2 text-[18px] font-normal text-left w-full">$99.00</p>
        </div>

        <div className="flex flex-col items-center h-auto">
          <Image
            src="/12.jpg"
            alt="img"
            width={400}
            height={400}/>
          <p className="pt-5 text-[20px] font-normal text-left w-full">
            The Dandy Chair
          </p>
          <p className="pt-2 text-[18px] font-normal text-left w-full">$99.00</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPopularProduct;
