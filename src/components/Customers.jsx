import React from "react";
import DonutChart from "./DonutChart";

const Customers = () => {
  return (
    <div>
      {/* title */}
      <div className="flex flex-col">
        <h2 className="font-bold text-lg text-neutral-700">Customers</h2>
        <p className="font-semibold text-sm text-gray-300">
          customers that buy products
        </p>
      </div>
      <div className="flex align-center justify-center">
        <DonutChart />
      </div>
    </div>
  );
};

export default Customers;
