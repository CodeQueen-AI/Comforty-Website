"use client";
import Link from "next/link";
import { FaHome, FaInfoCircle, FaPhoneAlt } from "react-icons/fa";
import { CiShop } from "react-icons/ci";
import { LuNotebookPen } from "react-icons/lu";

const Navbar = () => {
  return (
    <nav className="w-full bg-white pt-[14px] pb-[14px] shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 lg:px-0">
        <div className="hidden md:flex gap-8 ml-3">
          <Link
            href="/"
            className="text-[#007580] text-[14px] font-medium hover:text-[#00B5A5] hover:underline underline-offset-4 transition-all duration-300 ease-in-out"
          >
            Home
          </Link>
          <Link
            href="/product"
            className="text-[#636270] text-[14px] font-medium hover:text-[#00B5A5] hover:underline underline-offset-4 transition-all duration-300 ease-in-out"
          >
            Shop
          </Link>
          <Link
            href="/faq"
            className="text-[#636270] text-[14px] font-medium hover:text-[#00B5A5] hover:underline underline-offset-4 transition-all duration-300 ease-in-out"
          >
            Pages
          </Link>
          <Link
            href="/about"
            className="text-[#636270] text-[14px] font-medium hover:text-[#00B5A5] hover:underline underline-offset-4 transition-all duration-300 ease-in-out"
          >
            About
          </Link>
        </div>

        {/* Icons for small screens */}
        <div className="flex gap-3 ml-3 md:hidden">
          <Link
            href="/"
            className="relative group p-2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-105 transform transition duration-300"
          >
            <FaHome size={18} className="text-black" />
          </Link>
          <Link
            href="/product"
            className="relative group p-2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-105 transform transition duration-300"
          >
            <CiShop size={18} className="text-black" />
          </Link>
          <Link
            href="/faq"
            className="relative group p-2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-105 transform transition duration-300"
          >
            <LuNotebookPen size={18} className="text-black" />
          </Link>
          <Link
            href="/about"
            className="relative group p-2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-105 transform transition duration-300"
          >
            <FaInfoCircle size={18} className="text-black" />
          </Link>
          <Link
            href="/contact"
            className="relative group p-2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-105 transform transition duration-300"
          >
            <FaPhoneAlt size={18} className="text-black" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


