import React from "react";
import Image from "next/image";

const AboutHero = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center bg-white mt-16 md:mt-32 px-4">
  <div className="w-full md:w-[650px] h-auto md:h-[478px] bg-[#007580] p-6 flex flex-col justify-start items-start text-left text-white">
    <h1 className="text-[24px] md:text-[32px] font-bold pl-4 md:pl-6 pt-8 md:pt-12">
      About Us - Comforty
    </h1>
    <p className="text-[16px] md:text-[18px] font-normal pt-4 pl-4 md:pl-6 pb-8 md:pb-20">
      At Comforty, we believe that the right chair can transform your space
      and elevate your comfort. Specializing in ergonomic design, premium
      materials, and modern aesthetics, we craft chairs that seamlessly
      blend style with functionality
    </p>
    <div className="pl-4 md:pl-6">
      <button className="bg-[#2e6a6d] text-white hover:bg-white hover:text-[#2e6a6d] duration-300 px-6 md:px-8 py-3 md:py-4 text-[14px] md:text-[16px] font-normal">
        View collection
      </button>
    </div>
  </div>
  <div className="w-full md:w-[619px] h-auto md:h-[478px] mt-6 md:mt-0 md:ml-6">
    <Image
      src="/1.jpg"
      alt="image"
      width={619}
      height={478}
      className="object-cover w-full h-full"
    />
  </div>
</div>
  );
};

export default AboutHero;