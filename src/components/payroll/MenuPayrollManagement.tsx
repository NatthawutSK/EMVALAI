"use client";
import React from "react";

import { CgCalendar, CgProfile } from "react-icons/cg";
import { usePathname } from "next/navigation";
import Link from "next/link";

function MenuPayrollManagement() {
  const pathname = usePathname();
  const payrollMenus = [
    {
      name: "Salary Base",
      href: "/payroll-management/salaryBase",
      icon: "",
    },
    {
      name: "Addition",
      href: "/payroll-management/addition",
      icon: "",
    },
    {
      name: "Deduction",
      href: "/payroll-management/deduction",
      icon: "",
    },
  ];
  return (
    <div className="flex">
      <Link href="/payroll-management/salaryBase">
        <div
          className={`shadow-md rounded-sm w-[18em] h-[7em] m-5 p-5 ml-10 cursor-pointer ${
            pathname == "/payroll-management/salaryBase"
              ? "bg-[#C75656] text-white shadow-xl shadow-[#C98080]"
              : "bg-gray-100"
          }`}
        >
          <div className="flex">
            <img
              className=" w-[60px] h-[60px] mt-2"
              src={`${
                pathname == "/payroll-management/salaryBase"
                  ? "https://media.discordapp.net/attachments/948968777918345216/1172969709164052520/salary-base-onclick-icon.png?ex=6562402b&is=654fcb2b&hm=dd25c32a41edc3831046a586c115e014c614d2609d063140247fd9f31e4b00db&=&width=206&height=206"
                  : "https://media.discordapp.net/attachments/948968777918345216/1172969692659462265/salary-base-icon.png?ex=65624027&is=654fcb27&hm=56832d6c3ca0a31f56d0ea034b31b3204e0c2bf9a5d02cfd774c375df1fca6f8&=&width=206&height=206"
              }`}
              alt="image description"
            />
            <div className="flex flex-col px-4 py-2">
              <div
                className={`text-[#818181] font-semibold ${
                  pathname == "/payroll-management/salaryBase"
                    ? "text-white"
                    : "text-[#818181]"
                }`}
              >
                Salary base
              </div>
              <div className="font-bold mt-2">฿ 30 M</div>
            </div>
          </div>
        </div>
      </Link>

      <Link href="/payroll-management/deduction">
        <div
          className={`shadow-md rounded-sm w-[18em] h-[7em] m-5 p-5 ml-10 cursor-pointer ${
            pathname == "/payroll-management/deduction"
              ? "bg-[#9163D1] text-white shadow-xl shadow-[#AA87DA]"
              : "bg-gray-100"
          }`}
        >
          <div className="flex">
            <img
              className=" w-[60px] h-[60px] mt-2"
              src={`${
                pathname == "/payroll-management/deduction"
                  ? "https://media.discordapp.net/attachments/948968777918345216/1173084253588815922/deduction-onclick-icon.png?ex=6562aad8&is=655035d8&hm=ea9713952b6962c73961f7cd7b0f4955bb78b711209b054a6876f1042a364c68&=&width=206&height=206"
                  : "https://media.discordapp.net/attachments/948968777918345216/1173084234290827264/deduction-Icon.png?ex=6562aad4&is=655035d4&hm=48254fb7eaed556022985740782de97eb49e47a588e9e74a52959008ac2f5e45&=&width=206&height=206"
              }`}
              alt="image description"
            />
            <div className="flex flex-col px-4 py-2">
              <div
                className={`text-[#818181] font-semibold ${
                  pathname == "/payroll-management/deduction"
                    ? "text-white"
                    : "text-[#818181]"
                }`}
              >
                Deductions
              </div>
              <div className="font-bold mt-2">฿ 30 M</div>
            </div>
          </div>
        </div>
      </Link>

      <Link href="/payroll-management/addition">
        <div
          className={`shadow-md rounded-sm w-[18em] h-[7em] m-5 p-5 ml-10 cursor-pointer ${
            pathname == "/payroll-management/addition"
              ? "bg-[#56BCD8] text-white shadow-xl shadow-[#8DCEE0]"
              : "bg-gray-100"
          }`}
        >
          <div className="flex">
            <img
              className=" w-[60px] h-[60px] mt-2"
              src={`${
                pathname == "/payroll-management/addition"
                  ? "https://media.discordapp.net/attachments/948968777918345216/1173084295515090984/addition-onclick-icon.png?ex=6562aae2&is=655035e2&hm=a9f4838a4673a06cb340d922a247893cb5ac28fbbb3c1ca72beac7130b2fbccf&=&width=206&height=206"
                  : "https://media.discordapp.net/attachments/948968777918345216/1173084279081803806/addition-icon.png?ex=6562aade&is=655035de&hm=bf977fd4a8f70f68f46c77888b353e591f7713a679f08f8f817e7c5985bf15e1&=&width=206&height=206"
              }`}
              alt="image description"
            />
            <div className="flex flex-col px-4 py-2">
              <div
                className={`text-[#818181] font-semibold ${
                  pathname == "/payroll-management/addition"
                    ? "text-white"
                    : "text-[#818181]"
                }`}
              >
                Additions
              </div>
              <div className="font-bold mt-2">฿ 30 M</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MenuPayrollManagement;
