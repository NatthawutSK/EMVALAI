"use client";
import { BanknotesIcon } from "@heroicons/react/24/outline";
import { Banknote } from "lucide-react";
import React from "react";
import { GiBanknote } from "react-icons/gi";
import { MdCurrencyExchange } from "react-icons/md";
import dynamic from "next/dynamic";

type Props = {
	chartData: chartData[];
};
type chartData = {
	name: string;
	salary: number;
	deduction: number;
	"net-salary": number;
};

type PayrollAggreateType = {
	payroll_date: string;
	payroll_cost: string;
	payroll_deduction: string;
	payroll_addition: string;
	net_salary: string;
};
const PayrollChart = dynamic(() => import("./PayrollChart"), { ssr: false });
const DashBoardPayrollBoxes = ({
	chartData,
	aggreateData,
}: {
	chartData: chartData[];
	aggreateData: PayrollAggreateType;
}) => {
	return (
		<div className="flex flex-row justify-center ">
			<div className="flex flex-col px-8 py-3 space-y-6 bg-white rounded-lg drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
				<div className="block">
					<p className="text-lg text-[#0D7411]">วันจ่ายเงินเดือน</p>
					<p className="  text-[#0D7411]">(payroll date)</p>
				</div>
				<div className="flex flex-col space-y-2  rounded-lg justify-center">
					<BanknotesIcon
						className="h-16 w-20 self-center text-center bg-[#44A82C] rounded-lg p-2"
						color="white"
					/>
					<p className="text-2xl text-center font-bold text-[#246D27]">
						{aggreateData.payroll_date}
					</p>
				</div>
				<p className="text-sm text-[#0D7411]">ครั้งถัดไป - 13/12/23</p>
			</div>
			<div className="flex flex-col justify-center mx-2 space-y-6">
				<div className="flex flex-row px-6  py-3 space-y-5 space-x-2 bg-white rounded-lg drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
					<div className="space-y-4 w-36">
						<p className="text-lg text-red-800">ต้นทุนเงินเดือน</p>
						<p className="text-2xl text-center font-bold text-[#8F3F3F]">
							{aggreateData.payroll_cost}
						</p>
						<p className="text-sm text-start text-[#8F3F3F]">
							(Payroll Cost)
						</p>
					</div>
					<div className=" bg-red-800 w-fit h-fit p-2 rounded-full">
						<MdCurrencyExchange className="h-8 w-8" color="white" />
					</div>
				</div>
				<div className="flex flex-row px-6 py-3 space-y-5 space-x-2 bg-white rounded-lg drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
					<div className="space-y-4 w-36">
						<p className="text-lg text-[#6359A3]">
							เงินเดือนที่ถูกหัก
						</p>

						<p className="text-2xl text-center font-bold text-[#6359A3]">
							{aggreateData.payroll_deduction}
						</p>
						<p className="text-sm text-[#6359A3]">
							(Payroll Deductions)
						</p>
					</div>
					<div className=" bg-[#9163D1] w-fit h-fit p-2 rounded-full">
						<MdCurrencyExchange className="h-8 w-8" color="white" />
					</div>
				</div>
			</div>
			<div className="flex flex-col justify-center mx-2 space-y-6">
				<div className="flex flex-row px-8 py-3 space-y-5 space-x-2 bg-white rounded-lg drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
					<div className="space-y-4  w-36 ">
						<p className="text-lg text-[#56BCD8]">
							เงินเดือนที่ถูกเพิ่ม
						</p>

						<p className="text-2xl text-center font-bold text-[#409DB1]">
							{aggreateData.payroll_addition}
						</p>
						<p className="text-sm text-[#56BCD8]">
							(Payroll Deductions)
						</p>
					</div>
					<div className=" bg-[#56BCD8] w-fit h-fit p-2 rounded-full">
						<MdCurrencyExchange className="h-8 w-8" color="white" />
					</div>
				</div>
				<div className="flex flex-row px-8 py-3 space-y-5 space-x-2 bg-white rounded-lg drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
					<div className="space-y-4 w-36">
						<p className="text-lg text-[#176B87]">เงินเดือนสุทธิ</p>

						<p className="text-2xl text-center font-bold text-[#176B87]">
							{aggreateData.net_salary}
						</p>
						<p className="text-sm text-[#176B87]">
							(Payroll Deductions)
						</p>
					</div>
					<div className=" bg-[#9163D1] w-fit h-fit p-2 rounded-full">
						<MdCurrencyExchange className="h-8 w-8" color="white" />
					</div>
				</div>
			</div>

			<PayrollChart data={chartData} />
		</div>
	);
};

export default DashBoardPayrollBoxes;
