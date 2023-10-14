import React from 'react'
import Customers from './Customers'
import Overview from './Overview'

const ThirdSection = () => {
  return (
    <div className="mt-5 flex flex-col xl:flex-row gap-10 xl:h-[20rem] h-[40rem] lg:py-4 lg:px-6 xl:px-0 md:px-8">
    <div className="xl:w-[65%] w-full pr-4  bg-white rounded-lg  shadow-md p-6">
      <Overview />
    </div>
    <div className="xl:w-[35%] w-full bg-white  rounded-lg  shadow-md p-6">
      <Customers />
    </div>
  </div>
  )
}

export default ThirdSection
