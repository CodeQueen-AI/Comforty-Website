import React from "react";
import Image from "next/image";

const Instagram = () => {
  return (
    <div className="w-full h-auto bg-[#F0F2F3]">
      <div className="max-w-3xl mx-auto py-16 px-4 text-center space-y-6">
        <h2 className="font-bold text-[32px] sm:text-[50px] mt-4">
          Or Subscribe to the Newsletter
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16">
          <div className="flex flex-col items-start mt-12 sm:mt-0">
            <span className="text-[#8F9499] text-[14px] sm:text-[16px] font-semibold mb-2 ml-3">
              Email address...
            </span>
            <div className="w-[300px] sm:w-[643px] h-[2px] bg-black"></div>
          </div>
          <div className="flex flex-col items-center mt-4 sm:mt-0">
            <span className="text-[14px] sm:text-[16px] font-normal mb-2">
              SUBMIT
            </span>
            <div className="w-[91px] h-[2px] bg-black"></div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-6 space-y-8">
        <h2 className="text-[32px] sm:text-[50px] font-bold text-center">
          Follow Products and Discounts on Instagram
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 pb-24">
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src="/1.jpg"
              alt="Instagram product 1"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src="/2.jpg"
              alt="Instagram product 2"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src="/3.jpg"
              alt="Instagram product 3"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src="/4.jpg"
              alt="Instagram product 4"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src="/5.jpg"
              alt="Instagram product 5"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src="/6.jpg"
              alt="Instagram product 6"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instagram;