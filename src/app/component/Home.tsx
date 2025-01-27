import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-screen-xl h-auto bg-[#F0F2F3] flex flex-col sm:flex-row justify-between items-center px-6 sm:px-10 lg:px-16 py-6">
        <div className="flex flex-col justify-center items-center sm:items-start w-full sm:w-1/2 space-y-4 sm:space-y-6">
          <h1 className="text-[14px] pt-[50px] sm:pt-[119px] font-normal text-[#272343] text-center sm:text-left">
            WELCOME TO CHAIRY
          </h1>
          <p className="w-full sm:w-[557px] text-[40px] sm:text-[60px] font-bold text-center sm:text-left mb-6">
            Best Furniture Collection for your interior
          </p>
          <button className="bg-[#029FAE] w-[171px] text-white py-3 px-6 rounded-[8px] flex items-center gap-[20px] border-2 border-transparent hover:border-[#029FAE] hover:bg-white hover:text-[#029FAE] duration-300 mx-auto sm:mx-0">
              <span>Shop Now</span>
              <FaArrowRight />
          </button>
        </div>
        <div className="w-full sm:w-1/2 mt-6 sm:mt-0 sm:ml-[130px] flex justify-center">
          <Image
            src="/Home img.png"
            alt="img"
            width={450}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;