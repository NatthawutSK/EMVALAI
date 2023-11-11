import DashBoardPayrollBoxes from "@/components/payroll/DashBoardPayrollBoxes";
import DataTable from "@/components/tanstack-table/data_table";
import React from "react";
import { columns } from "@/components/payroll/columnsPayroll";
type Props = {};
type PayrollTableInfoType = {
	empId: string | number;
	name: string;
	role: string;
	position: string;
	lastPay: string;
	salary_base: string;
	net_salary: string;
	bonus: string;
};
const payrollData: PayrollTableInfoType[] = [
	{
		empId: 101,
		name: "Alice Johnson",
		role: "Manager",
		position: "Marketing Specialist",
		lastPay: "2023-11-05",
		salary_base: "$70,000",
		net_salary: "$55,000",
		bonus: "$4,000",
	},
	{
		empId: 102,
		name: "Bob Smith",
		role: "Employee",
		position: "Sales Manager",
		lastPay: "2023-11-03",
		salary_base: "$90,000",
		net_salary: "$70,000",
		bonus: "$7,000",
	},
	{
		empId: 103,
		name: "Charlie Brown",
		role: "Supervisor",
		position: "Software Developer",
		lastPay: "2023-11-01",
		salary_base: "$80,000",
		net_salary: "$60,000",
		bonus: "$6,000",
	},
	{
		empId: 104,
		name: "David Clark",
		role: "Manager",
		position: "Finance Analyst",
		lastPay: "2023-11-02",
		salary_base: "$75,000",
		net_salary: "$58,000",
		bonus: "$5,000",
	},
	{
		empId: 105,
		name: "Eva Davis",
		role: "Employee",
		position: "Customer Support",
		lastPay: "2023-11-04",
		salary_base: "$65,000",
		net_salary: "$50,000",
		bonus: "$3,000",
	},
	{
		empId: 106,
		name: "Frank Evans",
		role: "Supervisor",
		position: "Project Manager",
		lastPay: "2023-11-06",
		salary_base: "$95,000",
		net_salary: "$75,000",
		bonus: "$8,000",
	},
	{
		empId: 107,
		name: "Grace Garcia",
		role: "Manager",
		position: "Human Resources",
		lastPay: "2023-11-07",
		salary_base: "$85,000",
		net_salary: "$65,000",
		bonus: "$7,000",
	},
	{
		empId: 108,
		name: "Harry Harris",
		role: "Employee",
		position: "Quality Assurance",
		lastPay: "2023-11-08",
		salary_base: "$70,000",
		net_salary: "$55,000",
		bonus: "$4,000",
	},
	{
		empId: 109,
		name: "Ivy Ingram",
		role: "Supervisor",
		position: "Graphic Designer",
		lastPay: "2023-11-09",
		salary_base: "$60,000",
		net_salary: "$45,000",
		bonus: "$2,000",
	},
	{
		empId: 110,
		name: "Jack Johnson",
		role: "Manager",
		position: "IT Administrator",
		lastPay: "2023-11-10",
		salary_base: "$75,000",
		net_salary: "$58,000",
		bonus: "$5,000",
	},
];

// Accessing information for each employee

const page = (props: Props) => {
	return (
		<div className="h-screen mt-5 p-10">
			<div className="mb-10">
				<h1 className="text-4xl font-bold">Human Resources</h1>
				<hr
					style={{
						background: "black",
						color: "lime",
						borderColor: "black",
						height: "3px",
						width: "350px",
					}}
				/>
			</div>
			<DashBoardPayrollBoxes />
			<div className="mt-5">
				<DataTable columns={columns} data={payrollData} />
			</div>
			<div className="h-5"></div>
		</div>
	);
};

export default page;
