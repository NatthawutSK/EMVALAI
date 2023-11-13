"use client";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";
import { CgCalendar, CgProfile } from "react-icons/cg";
import { AiOutlineTeam } from "react-icons/ai";
import { MdOutlinePayment } from "react-icons/md";
import { FaRegComments } from "react-icons/fa";
import { BiMessageSquareDots, BiHomeAlt } from "react-icons/bi";
import { usePathname } from "next/navigation";
import Link from "next/link";
// import WithAuth from "./WithAuth";

function SideNavbar() {
  const pathname = usePathname();
  const sidebarItems = [
    {
      name: "Calendar",
      href: "/calendar",
      icon: CgCalendar,
    },
    {
      name: "Profile",
      href: "/profile",
      icon: CgProfile,
    },
    {
      name: "Employees Dashboard",
      href: "/employees-dashboard",
      icon: MdOutlineSpaceDashboard,
    },
    {
      name: "Payroll Dashboard",
      href: "/payroll-dashboard",
      icon: MdOutlinePayment,
    },
    {
      name: "Projects",
      href: "/project-management",
      icon: AiOutlineTeam,
    },
  ];
  return (
    // <div>
    // <Disclosure as="nav">
    //   <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
    //     <GiHamburgerMenu
    //       className="block md:hidden h-6 w-6"
    //       aria-hidden="true"
    //     />
    //   </Disclosure.Button>
    // <div className="flex">
    <div className="relative p-0 w-1/2 h-screen z-20 top-0 -left-80 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
      <div className="w-64 h-screen bg-gray-300 transition-all  overflow-hidden p-4 flex flex-col justify-start item-center">
        <Link href="/">
          <h1 className="text-base text-center cursor-pointer font-bold text-blue-900 p-8 w-full">
            EMVALAI
          </h1>
        </Link>
        {sidebarItems.map(({ name, href, icon: Icon }, index) => (
          <Link key={index} href={href}>
            <div
              className={`flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-xl group cursor-pointer hover:shadow-lg m-auto ${
                pathname == href ? "bg-slate-500" : ""
              }`}
            >
              <span className="text-2xl text-gray-600 group-hover:text-white ">
                <Icon />
              </span>
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                {name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
    // </div>
    // </Disclosure>
    // </div>
  );
}

export default SideNavbar;
