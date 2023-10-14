import React from "react";
import { FaSearch } from "react-icons/fa";

const Product = () => {
  return (
    <div className="xl:px-0 lg:px-6 md:px-8">
      <div className="mt-5 bg-white rounded-lg  shadow-md">
        <div className="flex items-center p-3 px-4 justify-between flex-col md:flex-row">
          <h2 className="text-xl font-bold text-neutral-700 mb-2 md:mb-0">
            Product Sell
          </h2>
          <div className="flex items-center gap-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="border bg-gray-100 border-gray-100 rounded-md p-1 mr-2 pl-8"
              />
              <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
            <div className="">
              <p className=" text-gray-500 p-2 bg-gray-100 text-sm rounded-md">
                Last 30 days
              </p>
            </div>
          </div>
        </div>
        <table className="table-auto w-full md:mx-4 mx-0">
          <thead className="text-xs font-semibold  text-gray-400">
            <tr>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">
                  <div className="md:hidden">Product</div>
                  <div className="md:hidden">Name</div>
                  <div className="hidden md:inline lg:inline xl:inline">
                    Product Name
                  </div>
                </div>
              </th>
              <th className="p-2 whitespace-nowrap align-top">
                <div className="font-semibold text-left">Stock</div>
              </th>
              <th className="p-2 whitespace-nowrap align-top">
                <div className="font-semibold text-left">Price</div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">
                  <div className="md:hidden">Total</div>
                  <div className="md:hidden">Sales</div>
                  <div className="hidden md:inline lg:inline xl:inline">
                    Total Sales
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-gray-100">
            <tr>
              <td className="p-2 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                    <img
                      className="rounded-md"
                      src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                      width={40}
                      height={40}
                      alt="Alex Shatov"
                    />
                  </div>
                  <div className="font-medium text-gray-800">
                    <span>Abstract 3D</span>
                    <p className="text-xs text-gray-400 hidden md:block">
                      loreum ipsum dolar sit amet const ipsum dolar loreum
                    </p>
                  </div>
                </div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-left text-sm text-gray-700">
                  32 in stock
                </div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-left text-sm text-neutral-700">
                  $ 45.99
                </div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-sm text-center text-neutral-700">20</div>
              </td>
            </tr>
            <tr>
              <td className="p-2 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                    <img
                      className="rounded-md"
                      src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                      width={40}
                      height={40}
                      alt="Philip Harbach"
                    />
                  </div>
                  <div className="font-medium text-gray-800">
                    <span>Abstract 3D</span>
                    <p className="text-xs text-gray-400 hidden md:block">
                      loreum ipsum dolar sit amet const ipsum dolar loreum
                    </p>
                  </div>
                </div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-left text-sm text-gray-700">
                  32 in stock
                </div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-left text-sm text-neutral-700">
                  $ 45.99
                </div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-sm text-center text-neutral-700">20</div>
              </td>
            </tr>
            <tr>
              <td className="p-2 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                    <img
                      className="rounded-md"
                      src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                      width={40}
                      height={40}
                      alt="Mirko Fisuk"
                    />
                  </div>
                  <div className="font-medium text-gray-800">
                    <span>Abstract 3D</span>
                    <p className="text-xs text-gray-400 hidden md:block">
                      loreum ipsum dolar sit amet const ipsum dolar loreum
                    </p>
                  </div>
                </div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-left text-sm text-gray-700">
                  32 in stock
                </div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-left text-sm text-neutral-700">
                  $ 45.99
                </div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-sm text-center text-neutral-700">20</div>
              </td>
            </tr>
            <tr>
              <td className="p-2 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                    <img
                      className="rounded-md"
                      src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                      width={40}
                      height={40}
                      alt="Olga Semklo"
                    />
                  </div>
                  <div className="font-medium text-gray-800">
                    <span>Abstract 3D</span>
                    <p className="text-xs text-gray-400 hidden md:block">
                      loreum ipsum dolar sit amet const ipsum dolar loreum
                    </p>
                  </div>
                </div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-left text-sm text-gray-700">
                  32 in stock
                </div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-left text-sm text-neutral-700">
                  $ 45.99
                </div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-sm text-center text-neutral-700">20</div>
              </td>
            </tr>
            <tr>
              <td className="p-2 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                    <img
                      className="rounded-md"
                      src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                      width={40}
                      height={40}
                      alt="Burak Long"
                    />
                  </div>
                  <div className="font-medium text-gray-800">
                    <span>Abstract 3D</span>
                    <p className="text-xs text-gray-400 hidden md:block">
                      loreum ipsum dolar sit amet const ipsum dolar loreum
                    </p>
                  </div>
                </div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-left text-sm text-gray-700">
                  32 in stock
                </div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-left text-sm text-neutral-700">
                  $ 45.99
                </div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-sm text-center text-neutral-700">20</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Product;
