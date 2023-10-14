import React from 'react'
import { FaArrowDown, FaArrowUp, FaDollarSign } from 'react-icons/fa';
import { MdOutlineBorderColor } from 'react-icons/md';
import { TbDatabaseDollar } from 'react-icons/tb';
import { BsHandbag } from 'react-icons/bs';

const DisplayCards = () => {
  return (

    <div className="flex flex-wrap xl:flex-nowrap gap-8 justify-center">
      <div class="bg-white rounded-lg p-2 shadow-md xl:w-[17rem] md:w-[45%] w-full h-[8.5rem] flex gap-4 items-center cursor-pointer hover:scale-105 transition-all ease-in-out">
        <div class="w-1/2 flex items-center justify-center">
          <div class="w-[6.5rem] h-[6.5rem] bg-green-100 rounded-full flex items-center justify-center">
            <FaDollarSign size={40} color="green" />
          </div>
        </div>
        <div className="w-1/2 flex flex-col items-start">
          <p className="text-sm  text-gray-300 font-semibold">Earning</p>
          <p className="font-bold text-xl mb-1 text-neutral-700">$198k</p>
          <p className='text-xs flex font-semibold gap-0.5'>
            <FaArrowUp color="green" />
            <span className="text-green-600 font-bold ">
              37.8% </span>
            this month</p>
        </div>
      </div>
      <div class="bg-white rounded-lg p-2 shadow-md xl:w-[17rem] md:w-[45%] w-full h-[8.5rem] flex gap-4 items-center cursor-pointer hover:scale-105 transition-all ease-in-out">
        <div class="w-1/2 flex items-center justify-center">
          <div class="w-[6.5rem] h-[6.5rem] bg-purple-100 rounded-full flex items-center justify-center">
            <MdOutlineBorderColor size={40} color="purple" />
          </div>
        </div>
        <div className="w-1/2 flex flex-col items-start">
          <p className="text-sm  text-gray-300 font-semibold">Orders</p>
          <p className="font-bold text-xl mb-1 text-neutral-700">$2.4k</p>
          <p className='text-xs flex font-semibold gap-0.5'>
            <FaArrowDown color="red" />
            <span className="text-red-600 font-bold ">
              2% </span>
            this month</p>
        </div>
      </div>
      <div class="bg-white rounded-lg p-2 shadow-md xl:w-[17rem] md:w-[45%] w-full h-[8.5rem] flex gap-4 items-center cursor-pointer hover:scale-105 transition-all ease-in-out">
        <div class="w-1/2 flex items-center justify-center">
          <div class="w-[6.5rem] h-[6.5rem] bg-blue-100 rounded-full flex items-center justify-center">
            <TbDatabaseDollar size={40} color="blue" />
          </div>
        </div>
        <div className="w-1/2 flex flex-col items-start">
          <p className="text-sm  text-gray-300 font-semibold">Balance</p>
          <p className="font-bold text-xl mb-1 text-neutral-700">$2.4k</p>
          <p className='text-xs flex font-semibold gap-0.5'>
          <FaArrowDown color="red" />
            <span className="text-red-600 font-bold ">
              2% </span>
            this month</p>
        </div>
      </div>
      <div class="bg-white rounded-lg p-2 shadow-md xl:w-[17rem] md:w-[45%] w-full h-[8.5rem] flex gap-4 items-center cursor-pointer hover:scale-105 transition-all ease-in-out">
        <div class="w-1/2 flex items-center justify-center">
          <div class="w-[6.5rem] h-[6.5rem] bg-pink-100 rounded-full flex items-center justify-center">
            <BsHandbag size={40} color="red" />
          </div>
        </div>
        <div className="w-1/2 flex flex-col items-start">
          <p className="text-sm  text-gray-300 font-semibold">Total Sale</p>
          <p className="font-bold text-xl mb-1 text-neutral-700">$198k</p>
          <p className='text-xs flex font-semibold gap-0.5'>
            <FaArrowUp color="green" />
            <span className="text-green-600 font-bold ">
              37.8% </span>
            this month</p>
        </div>
      </div>
    </div>




  )
}

export default DisplayCards