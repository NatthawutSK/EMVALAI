import CardEmps, { EmpinfoType, Status } from "@/components/emp-info/CardEmps";
import PaginationControls from "@/components/emp-info/PaginateEmp";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import React from "react";

type Props = {};
const Data: EmpinfoType[] = [
	{
		name: "hahahaXD1",
		position: "UX/UI Design",
		department: "Design Team",
		hireDate: "32/10/2099",
		email: "ssdasf385835835",
		phone: "ssdasf385835835",
		status: Status.OnLeave,
	},
	{
		name: "hahahaXD2",
		position: "UX/UI Design",
		department: "Design Team",
		hireDate: "32/10/2099",
		email: "ssdasf385835835",
		phone: "ssdasf385835835",
		status: Status.InActive,
	},
	{
		name: "hahahaXD3",
		position: "UX/UI Design",
		department: "Design Team",
		hireDate: "32/10/2099",
		email: "ssdasf385835835",
		phone: "ssdasf385835835",
		status: Status.Active,
	},
	{
		name: "hahahaXD4",
		position: "UX/UI Design",
		department: "Design Team",
		hireDate: "32/10/2099",
		email: "ssdasf385835835",
		phone: "ssdasf385835835",
		status: Status.Active,
	},
	{
		name: "hahahaXD5",
		position: "UX/UI Design",
		department: "Design Team",
		hireDate: "32/10/2099",
		email: "ssdasf385835835",
		phone: "ssdasf385835835",
		status: Status.Active,
	},
	{
		name: "hahahaXD6",
		position: "UX/UI Design",
		department: "Design Team",
		hireDate: "32/10/2099",
		email: "ssdasf385835835",
		phone: "ssdasf385835835",
		status: Status.Active,
	},
	{
		name: "hahahaXD7",
		position: "UX/UI Design",
		department: "Design Team",
		hireDate: "32/10/2099",
		email: "ssdasf385835835",
		phone: "ssdasf385835835",
		status: Status.Active,
	},
	{
		name: "hahahaXD8",
		position: "UX/UI Design",
		department: "Design Team",
		hireDate: "32/10/2099",
		email: "ssdasf385835835",
		phone: "ssdasf385835835",
		status: Status.Active,
	},
	{
		name: "hahahaXD9",
		position: "UX/UI Design",
		department: "Design Team",
		hireDate: "32/10/2099",
		email: "ssdasf385835835",
		phone: "ssdasf385835835",
		status: Status.InActive,
	},
	{
		name: "hahahaXD10",
		position: "UX/UI Design",
		department: "Design Team",
		hireDate: "32/10/2099",
		email: "ssdasf385835835",
		phone: "ssdasf385835835",
		status: Status.Active,
	},
];
function Empinfo({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined };
}) {
	const page = searchParams["page"] ?? "1";
	const per_page = searchParams["per_page"] ?? "5";

	// mocked, skipped and limited in the real app
	const start = (Number(page) - 1) * Number(per_page); // 0, 5, 10 ...
	const end = start + Number(per_page); // 5, 10, 15 ...

	const entries = Data.slice(start, end);
	return (
		<div className="p-10  overflow-x-hidden h-screen justify-center items-center content-center flex-1">
			<div className="mb-5">
				<p className="text-2xl font-bold text-left ">Employees</p>
				<hr
					style={{
						background: "black",
						color: "lime",
						borderColor: "black",
						height: "3px",
						width: "150px",
					}}
				/>
			</div>
			<div className="flex justify-start space-x-4">
				<Input className="w-52" placeholder="Search Employee"></Input>
				<Select>
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder="Status" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="light">Active</SelectItem>
						<SelectItem value="dark">Inactive</SelectItem>
						<SelectItem value="system">On Leave</SelectItem>
					</SelectContent>
				</Select>
			</div>
			<div className="flex flex-wrap content-center item justify-center mb-3">
				{entries.map((entry, index) => (
					<CardEmps key={index} item={entry} />
				))}
			</div>
			<div className="flex items-center justify-end">
				<PaginationControls
					hasNextPage={end < Data.length}
					hasPrevPage={start > 0}
				/>
			</div>
		</div>
	);
}

export default Empinfo;
