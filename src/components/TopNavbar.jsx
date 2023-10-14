import React from 'react'
import { FiSearch } from 'react-icons/fi'

const TopNavbar = () => {
  return (
    <div className="flex items-center justify-center lg:justify-between bg-yellow pb-8 pt-4">
      <div>
        <h2 className='text-black lg:text-lg text-2xl font-semibold'>Hello Rahul 👋,</h2>
      </div>
      <div className="lg:flex hidden items-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="border border-white rounded-md p-1 mr-2 pl-8 text-sm font-semibold" 
          />
          <FiSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" /> 
        </div>
      </div>
    </div>
  )
}

export default TopNavbar