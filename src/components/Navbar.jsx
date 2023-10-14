import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import profile from "../Images/profile.jpg"

import { RiCustomerServiceLine } from "react-icons/ri";
import { TbReportMoney } from "react-icons/tb";
import { LuDivideCircle } from "react-icons/lu";
import { FaLaptopCode } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import TopNavbar from "./TopNavbar";
import Dashboard from "./Dashboard";

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Product", href: "#", icon: FaLaptopCode, current: false },
  { name: "Customers", href: "#", icon: UsersIcon, current: false },
  { name: "Income", href: "#", icon: TbReportMoney, current: false },
  { name: "Promote", href: "#", icon: LuDivideCircle, current: false },
  { name: "Help", href: "#", icon: RiCustomerServiceLine, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-primarycolor px-6 pb-2 ring-1 ring-white/10">
                    <div className="flex h-16 shrink-0 items-center">
                      <LuLayoutDashboard className="text-2xl text-white" />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <a
                                  href={item.href}
                                  className={classNames(
                                    "group rounded-md p-2 text-sm leading-6 font-semibold",
                                    item.current
                                      ? "bg-secondarycolor text-white flex justify-between items-center"
                                      : "text-gray-400 hover:text-white hover:bg-secondarycolor flex justify-between items-center"
                                  )}
                                >
                                  <div className="flex items-center gap-x-3">
                                    <item.icon
                                      className="h-6 w-6 shrink-0"
                                      aria-hidden="true"
                                    />
                                    {item.name}
                                  </div>
                                  {item.current ? null : (
                                    <IoIosArrowForward className="text-gray-400 font-semibold" />
                                  )}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li></li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-primarycolor px-6">
            <div className="flex h-16 shrink-0 items-center">
              <LuLayoutDashboard className="text-2xl text-white" />
              <p className="ml-2 text-xl font-semibold text-white">Dashboard</p>
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-4">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            "group rounded-md p-2 text-sm leading-6 font-semibold",
                            item.current
                              ? "bg-secondarycolor text-white flex justify-between items-center"
                              : "text-gray-400 hover:text-white hover:bg-secondarycolor flex justify-between items-center"
                          )}
                        >
                          <div className="flex items-center gap-x-3">
                            <item.icon
                              className="h-6 w-6 shrink-0"
                              aria-hidden="true"
                            />
                            {item.name}
                          </div>
                          {item.current ? null : (
                            <IoIosArrowForward className="text-gray-400 font-semibold" />
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li></li>
                <li className="-mx-6 mt-auto p-2">
                  <a
                    href="#"
                    className="bg-secondarycolor flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-secondarycolor mb-8 rounded-md"
                  >
                    <div className="flex items-center gap-x-2">
                      <img
                        className="h-8 w-8 rounded-full bg-gray-800"
                        src={profile}
                        alt=""
                      />
                    </div>

                    <div className="flex flex-col">
                      <span aria-hidden="true" className="text-[0.9rem] mt-1">
                        Rahul vats
                      </span>
                      <p
                        aria-hidden="true"
                        className="text-[0.8rem] text-gray-400" style={{ marginTop: '-0.5rem' }}
                      >
                        React Developer
                      </p>
                    </div>

                    <div className="absolute right-7">
                      <IoIosArrowDown />
                    </div>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-primarycolor px-4 py-4 shadow-sm sm:px-6 lg:hidden">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-white lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 text-lg font-semibold leading-6 text-white">
            Dashboard
          </div>
          <a href="#">
            <span className="sr-only">Your profile</span>
            <img
              className="h-8 w-8 rounded-full bg-gray-800"
              src={profile}
              alt=""
            />
          </a>
        </div>

        <Dashboard />
      </div>
    </>
  );
}
