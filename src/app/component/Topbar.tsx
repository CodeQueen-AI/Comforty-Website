import React from "react";
import Link from "next/link";
import { FaChevronDown, FaCheck, FaExclamationCircle } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="w-full bg-[#272343] py-[14px] flex items-center justify-center sm:justify-between h-[45px] sm:h-[50px]">
      <div className="max-w-screen-xl mx-auto container flex items-center justify-center sm:justify-between w-full px-4">
        <p className="text-white flex items-center space-x-2 font-normal text-center text-[12px]">
          <FaCheck className="text-white" />
          <span>Free shipping on all orders over $50</span>
        </p>

        <ul className="hidden sm:flex text-white items-center space-x-4 font-normal text-[12px]">
          <li className="flex items-center space-x-1 cursor-pointer">
            <span>Eng</span>
            <FaChevronDown />
          </li>
          <Link href="/faq">
            <li className="cursor-pointer">FAQs</li>
          </Link>
          <li className="flex items-center space-x-2 cursor-pointer">
            <FaExclamationCircle className="text-white" />
            <span>Need Help</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;
