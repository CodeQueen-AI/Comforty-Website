import React from "react";
import Image from "next/image";

const CompanyLogo = () => {
  return (
    <div className="w-full flex flex-wrap justify-center items-center gap-20 pt-14 px-4">
      <div className="flex justify-center items-center">
        <Image src="/logo1.png" 
        alt="img" 
        width={85} 
        height={85} />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/logo2.png"
          alt="img"
          width={100}
          height={100}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/logo3.png"
          alt="img"
          width={130}
          height={130}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/logo4.png"
          alt="img"
          width={60}
          height={60}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/logo5.png"
          alt="img"
          width={100}
          height={100}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/logo6.png"
          alt="img"
          width={100}
          height={100}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image src="/logo7.png" 
        alt="img" 
        width={80} 
        height={80} />
      </div>
    </div>
  );
};

export default CompanyLogo;