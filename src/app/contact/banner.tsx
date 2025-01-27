import React from "react";
import { BsTrophy } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import { BiSupport } from "react-icons/bi";

const ContactSection = () => {
  return (
    <div className="w-full max-w-screen-xl h-auto bg-[#F4F4F4] flex flex-wrap items-center justify-between px-8 py-6">
      <div className="flex items-center space-x-4 mb-6 sm:mb-0">
        <BsTrophy className="w-[52.77px] h-[60px] text-black" />
        <div>
          <h2
            className="font-semibold text-[20px] sm:text-[25px]"
          >
            High Quality
          </h2>
          <p
            className="font-medium text-[16px] sm:text-[20px] text-[#898989]"
          >
            crafted from top materials
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-4 mb-6 sm:mb-0">
        <GoVerified className="w-[60px] h-[60px] text-black" />
        <div>
          <h2
            className="font-semibold text-[20px] sm:text-[25px]"
          >
            Warranty Protection
          </h2>
          <p
            className="font-medium text-[16px] sm:text-[20px] text-[#898989]"
          >
            Over 2 years
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-4 mr-6">
        <BiSupport className="w-[52.77px] h-[60px] text-black" />
        <div>
          <h2
            className="font-semibold text-[20px] sm:text-[25px]"
          >
            24 / 7 Support
          </h2>
          <p
            className="font-medium text-[16px] sm:text-[20px] text-[#898989]"
          >
            Dedicated support
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;