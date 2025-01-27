import React from "react";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { GoClockFill } from "react-icons/go";
import Banner from './banner'

const Page = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-24 px-4 sm:px-6">
      <h1 className="font-semibold text-4xl text-center sm:text-3xl">
        Get In Touch With Us
      </h1>

      <p className="text-[16px] text-[#9F9F9F] font-normal text-center mt-[30px] sm:w-full sm:text-sm">
        For More Information About Our Product & Services. Please Feel Free To
        Drop Us <br />An Email. Our Staff Always Be There To Help You Out. Do Not
        Hesitate!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-[60px]">
        <div className="flex flex-col space-y-8 px-6 sm:px-10">
        <div className="flex items-start space-x-4">
  <FaMapMarkerAlt className="text-black h-[35px] text-xl border-2 border-transparent rounded-full" />
  <div>
    <h2 className="text-[20px] sm:text-[24px] font-medium">Address</h2>
    <p className="text-black font-normal text-[14px] sm:text-[16px]">
      236 5th SE Avenue, New York NY10000, United States
    </p>
  </div>
</div>

<div className="flex items-start space-x-4">
  <FaPhone className="text-black h-[35px] text-xl border-2 border-transparent rounded-full" />
  <div>
    <h2 className="text-[20px] sm:text-[24px] font-medium">Phone</h2>
    <p className="text-black font-normal text-[14px] sm:text-[16px]">
      Mobile: +(84) 546-6789 <br /> Hotline: +(84) 456-6789
    </p>
  </div>
</div>

<div className="flex items-start space-x-4">
  <GoClockFill className="text-black h-[35px] text-xl border-2 border-transparent rounded-full" />
  <div>
    <h2 className="text-[20px] sm:text-[24px] font-medium">Working Time</h2>
    <p className="text-black font-normal text-[14px] sm:text-[16px]">
      Monday-Friday: 9:00 - 22:00 <br />
      Saturday-Sunday: 9:00 - 21:00
    </p>
  </div>
</div>
</div>

      {/* Form */}
        <div className="bg-white p-8 w-full sm:w-[500px] sm:ml-6 sm:mr-0">
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="text-[16px] sm:text-[18px] font-medium"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Abc"
                className="w-full sm:w-[528.75px] h-[75px] p-6 border border-[#9F9F9F] rounded-[10px] mt-5"
                required
              />
            </div>

            <div className="mb-4 mt-8">
              <label
                htmlFor="email"
                className="text-[16px] sm:text-[18px] font-medium"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Abc@def.com"
                className="w-full sm:w-[528.75px] h-[75px] p-6 border border-[#9F9F9F] rounded-[10px] mt-5"
                required
              />
            </div>

            <div className="mb-4 mt-8">
              <label
                htmlFor="subject"
                className="text-[16px] sm:text-[18px] font-medium"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="This is an optional"
                className="w-full sm:w-[528.75px] h-[75px] p-6 border border-[#9F9F9F] rounded-[10px] mt-5"
              />
            </div>

            <div className="mb-8 mt-8">
              <label
                htmlFor="message"
                className="text-[16px] sm:text-[18px] font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Hi! I’d like to ask about"
                className="w-full sm:w-[527px] h-[120px] p-6 border border-[#9F9F9F] rounded-[10px] mt-5"
                rows={4}
                required>
            </textarea>
            </div>
            <div>
              <button
                    type="submit"
                  className="w-full sm:w-[237px] h-[55px] bg-[#029FAE] border border-[#B88E2F] rounded-[5px] text-white py-3 hover:text-[#029FAE] hover:border-[#029FAE] hover:bg-white duration-300">
                  Submit
              </button>
          </div>
          </form>
        </div>
      </div>
      <Banner/>
    </div>
    
  );
};

export default Page;
