import DataTable from "@/components/tanstack-table/data_table";
import React from "react";
import { columns } from "../../../components/tanstack-table/columnsEmpInfoTable";
import { User } from "lucide-react";
import { MdFreeCancellation } from "react-icons/md";
import PaginationControls from "./../../../components/emp-info/PaginateEmp";
type Props = {};
const data = [
	{
		emp_id: 1,
		name: "Aubree Figger",
		position: "Dr",
		hireDate: "8/20/2014",
		email: "afigger0@vimeo.com",
		phone: "241-703-0330",
		status: "Inactive",
		role: "Manager",
	},
	{
		emp_id: 2,
		name: "Carleton Placstone",
		position: "Dr",
		hireDate: "4/27/2015",
		email: "cplacstone1@wisc.edu",
		phone: "891-492-9878",
		status: "Inactive",
		role: "Manager",
	},
	{
		emp_id: 3,
		name: "Harmon Swalwell",
		position: "Mrs",
		hireDate: "4/27/2015",
		email: "hswalwell2@php.net",
		phone: "967-273-9293",
		status: "Inactive",
		role: "Supervisor",
	},
	{
		emp_id: 4,
		name: "Benoite Isham",
		position: "Rev",
		hireDate: "8/30/2016",
		email: "bisham3@ebay.com",
		phone: "907-670-1940",
		status: "OnLeave",
		role: "Manager",
	},
	{
		emp_id: 5,
		name: "Delilah Bushen",
		position: "Honorable",
		hireDate: "8/27/2015",
		email: "dbushen4@feedburner.com",
		phone: "861-379-6259",
		status: "Inactive",
		role: "Supervisor",
	},
	{
		emp_id: 6,
		name: "Mitchel Buckham",
		position: "Honorable",
		hireDate: "7/30/2016",
		email: "mbuckham5@elpais.com",
		phone: "915-237-1743",
		status: "Inactive",
		role: "Employee",
	},
	{
		emp_id: 7,
		name: "Sigfried Cordner",
		position: "Honorable",
		hireDate: "3/1/2014",
		email: "scordner6@hexun.com",
		phone: "452-563-7099",
		status: "OnLeave",
		role: "Manager",
	},
	{
		emp_id: 8,
		name: "Kaiser Hails",
		position: "Dr",
		hireDate: "6/10/2014",
		email: "khails7@discovery.com",
		phone: "661-324-8938",
		status: "Active",
		role: "Manager",
	},
	{
		emp_id: 9,
		name: "Timmie Wasiela",
		position: "Mr",
		hireDate: "9/7/2016",
		email: "twasiela8@theguardian.com",
		phone: "721-867-3558",
		status: "Active",
		role: "Employee",
	},
	{
		emp_id: 10,
		name: "Heywood Fitzpayn",
		position: "Dr",
		hireDate: "2/12/2016",
		email: "hfitzpayn9@dropbox.com",
		phone: "201-444-0210",
		status: "OnLeave",
		role: "Supervisor",
	},
];

async function getData(page: string, size: string) {
	const res = await fetch(
		`http://localhost:8080/employees/p?page=${page}&size=${size}`
	);
	// The return value is *not* serialized
	// You can return Date, Map, Set, etc.

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error("Failed to fetch data");
	}
	return res.json();
}
const page = async ({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined };
}) => {
	const page = searchParams["page"] ?? "1";
	const per_page = searchParams["per_page"] ?? "5";
	// mocked, skipped and limited in the real app
	const start = (Number(page) - 1) * Number(per_page); // 0, 5, 10 ...
	const end = start + Number(per_page); // 5, 10, 15 ...
	const data = await getData(page as string, per_page as string);
	console.log(data);
	// const entries = data.slice(start, end);
	return (
		<div className="p-10 mt-5 h-screen">
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
			<div className="flex flex-row m-2 mb-4	justify-evenly">
				{/* BIG BOX */}
				<div className=" px-8 py-2 bg-[#00D770]  drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-lg flex flex-row space-x-3 justify-center">
					<User className="h-16 w-20 self-center" color="white" />
					<div className="self-center">
						<h1 className="text-2xl font-bold text-white">
							3124 คน
						</h1>
						<p className="text-white text-sm font-semibold">
							จำนวนพนักงาน
						</p>
					</div>
				</div>
				{/* ALL SMALL BOX */}
				<div className=" space-y-4">
					<div className=" px-10 py-2 md:px-6 rounded-lg drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-[#6359A3] flex flex-row space-x-3 ">
						<p className="text-2xl self-center text-white text-start">
							20
						</p>
						<div className="self-center">
							<h1 className="text-lg font-bold text-white">
								Supervisor
							</h1>
							<p className="text-white text-sm font-Inter font-semibold">
								จำนวนพนักงาน
							</p>
						</div>
					</div>
					<div className=" px-10 py-2 md:px-6 rounded-lg bg-[#409DB1] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex flex-row space-x-3 ">
						<p className="text-2xl self-center text-white">20</p>
						<div className="self-center">
							<h1 className="text-xl font-bold text-white">
								Supervisor
							</h1>
							<p className="text-white text-sm font-Inter font-semibold">
								จำนวนพนักงาน
							</p>
						</div>
					</div>
				</div>
				{/* BIG BOX AGAIN */}
				<div className=" space-y-4">
					<div className=" px-10 py-2 md:px-6 rounded-lg bg-[#176B87] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex flex-row space-x-3 justify-center">
						<p className="text-2xl self-center text-white">3124</p>
						<div className="self-center">
							<h1 className="text-xl font-bold text-white">
								Supervisor
							</h1>
							<p className="text-white text-sm font-Inter font-semibold">
								จำนวนพนักงาน
							</p>
						</div>
					</div>
					<div className=" px-10	 py-2 rounded-lg bg-teal-600 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex flex-row space-x-3 justify-center">
						<p className="text-2xl self-center text-white">3124</p>
						<div className="self-center">
							<h1 className="text-xl font-bold text-white">
								Supervisor
							</h1>
							<p className="text-white text-sm font-Inter font-semibold">
								จำนวนพนักงาน
							</p>
						</div>
					</div>
				</div>
				<div className=" px-8 py-3 bg-[#FF8C8C] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-lg flex flex-row space-x-3 justify-center">
					<MdFreeCancellation
						className="h-16 w-20 self-center"
						color="white"
					/>
					<div className="self-center">
						<h1 className="text-2xl font-bold text-white">
							3124 ครั้ง
						</h1>
						<p className="text-white text-sm font-Inter font-semibold">
							จำนวนการลา
						</p>
					</div>
				</div>
			</div>
			<div className="mb-5 mt-5">
				<h1 className="text-2xl font-bold">Employees</h1>
				<hr
					style={{
						background: "black",
						color: "lime",
						borderColor: "black",
						height: "3px",
						width: "160px",
					}}
				/>
			</div>

			<DataTable
				columns={columns}
				data={data.empData}
				size={per_page as string}
			/>
			<div className="flex items-center justify-end">
				<PaginationControls
					hasNextPage={end < data.totalItems}
					hasPrevPage={start > 0}
				/>
			</div>
		</div>
	);
};

export default page;
