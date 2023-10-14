import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Overview = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <h2 className="font-bold text-lg text-neutral-700">Overview</h2>
          <p className="font-semibold text-xs text-gray-300">Monthly Earning</p>
        </div>
        <div className="bg-gray-100 flex gap-2 rounded-md px-2 py-1 h-[1.5rem]">
          <p className="font-semibold text-xs text-gray-400">Quarterly</p>
          <IoIosArrowDown className="text-gray-400 font-semibold" />
        </div>
      </div>
      <div className="flex-grow"></div>
      {/* Spacer to push graph div to the bottom */}
      <div className="flex md:gap-4 gap-2">
        <div
          className="flex flex-col items-center"
          style={{ alignSelf: "flex-end" }}
        >
          <div className="md:w-10 w-4  h-28 bg-gray-100 rounded-xl hover:bg-blue-700 cursor-pointer transition duration-300 ease-in-out"></div>
          <p className="md:text-sm text-xs font-semibold text-gray-500 mt-4">Jan</p>
        </div>

        <div
          className="flex flex-col items-center"
          style={{ alignSelf: "flex-end" }}
        >
          <div className="md:w-10 w-4  h-28 bg-gray-100 rounded-xl hover:bg-blue-700 cursor-pointer transition duration-300 ease-in-out"></div>
          <p className="md:text-sm text-xs font-semibold text-gray-500 mt-4">Feb</p>
        </div>
        <div
          className="flex flex-col items-center"
          style={{ alignSelf: "flex-end" }}
        >
          <div className="md:w-10 w-4  h-40 bg-gray-100 rounded-xl hover:bg-blue-700 cursor-pointer transition duration-300 ease-in-out"></div>
          <p className="md:text-sm text-xs font-semibold text-gray-500 mt-4">Mar</p>
        </div>
        <div
          className="flex flex-col items-center"
          style={{ alignSelf: "flex-end" }}
        >
          <div className="md:w-10 w-4 h-32 bg-gray-100 rounded-xl hover:bg-blue-700 cursor-pointer transition duration-300 ease-in-out"></div>
          <p className="md:text-sm text-xs font-semibold text-gray-500 mt-4">Apr</p>
        </div>
        <div
          className="flex flex-col items-center"
          style={{ alignSelf: "flex-end" }}
        >
          <div className="md:w-10 w-4 h-36 bg-gray-100 rounded-xl hover:bg-blue-700 cursor-pointer transition duration-300 ease-in-out"></div>
          <p className="md:text-sm text-xs font-semibold text-gray-500 mt-4">May</p>
        </div>
        <div
          className="flex flex-col items-center"
          style={{ alignSelf: "flex-end" }}
        >
          <div className="md:w-10 w-4 h-16 bg-gray-100 rounded-xl hover:bg-blue-700 cursor-pointer transition duration-300 ease-in-out"></div>
          <p className="md:text-sm text-xs font-semibold text-gray-500 mt-4">Jun</p>
        </div>
        <div
          className="flex flex-col items-center"
          style={{ alignSelf: "flex-end" }}
        >
          <div className="md:w-10 w-4 h-32 bg-gray-100 rounded-xl hover:bg-blue-700 cursor-pointer transition duration-300 ease-in-out"></div>
          <p className="md:text-sm text-xs font-semibold text-gray-500 mt-4">Jul</p>
        </div>
        <div
          className="flex flex-col items-center"
          style={{ alignSelf: "flex-end" }}
        >
          <div className="md:w-10 w-4 h-40 bg-blue-700 rounded-xl hover:bg-blue-700 cursor-pointer transition duration-300 ease-in-out fill-from-bottom"></div>
          <p className="md:text-sm text-xs font-semibold text-gray-500 mt-4">Aug</p>
        </div>
        <div
          className="flex flex-col items-center"
          style={{ alignSelf: "flex-end" }}
        >
          <div className="md:w-10 w-4 h-36 bg-gray-100 rounded-xl hover:bg-blue-700 cursor-pointer transition duration-300 ease-in-out"></div>
          <p className="md:text-sm text-xs font-semibold text-gray-500 mt-4">Sep</p>
        </div>
        <div
          className="flex flex-col items-center"
          style={{ alignSelf: "flex-end" }}
        >
          <div className="md:w-10 w-4  h-28 bg-gray-100 rounded-xl hover:bg-blue-700 cursor-pointer transition duration-300 ease-in-out"></div>
          <p className="md:text-sm text-xs font-semibold text-gray-500 mt-4">Oct</p>
        </div>
        <div
          className="flex flex-col items-center"
          style={{ alignSelf: "flex-end" }}
        >
          <div className="md:w-10 w-4 h-24 bg-gray-100 rounded-xl hover:bg-blue-700 cursor-pointer transition duration-300 ease-in-out"></div>
          <p className="md:text-sm text-xs font-semibold text-gray-500 mt-4">Nov</p>
        </div>
        <div
          className="flex flex-col items-center"
          style={{ alignSelf: "flex-end" }}
        >
          <div className="md:w-10 w-4 h-32 bg-gray-100 rounded-xl hover:bg-blue-700 cursor-pointer transition duration-300 ease-in-out"></div>
          <p className="md:text-sm text-xs font-semibold text-gray-500 mt-4">Dec</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
