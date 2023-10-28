import React from "react";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
} from "@/components/ui/card";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PhoneCall, Mail, MoreHorizontal } from "lucide-react";
import { Button } from "../ui/button";

export enum Status {
	Active = "Active",
	InActive = "InActive",
	OnLeave = "OnLeave",
}
export type EmpinfoType = {
	name: string;
	position: string;
	department: string;
	hireDate: string;
	email: string;
	phone: string;
	status: Status;
};
export type CardEmpProps = {
	item: EmpinfoType;
};
const CardEmps = ({ item }: CardEmpProps) => {
	return (
		<>
			<Card className="m-5 border-red-950 border-2 ">
				<div className="p-3 flex justify-end items-center space-x-3">
					<div className="bg-green-600 p-1 px-2 rounded-lg">
						<p className="font-bold text-white">{item.status}</p>
					</div>
					<Popover>
						<PopoverTrigger>
							<MoreHorizontal className="text-black " />
						</PopoverTrigger>
						<PopoverContent className="max-w-52">
							<button>Place content for the popover here.</button>
							<button>Place content for the popover here.</button>
							<button>Place content for the popover here.</button>
						</PopoverContent>
					</Popover>
				</div>
				<CardHeader className="flex-1 justify-center items-center p-1">
					<picture>
						<img
							src="https://github.com/shadcn.png"
							alt="Shad"
							width={50}
							height={50}
							className="rounded-full text-center"
						/>
					</picture>
					<CardTitle>{item.name}</CardTitle>
					<CardDescription>{item.position}</CardDescription>
				</CardHeader>
				<CardContent className="space-y-3 p-4">
					<div className="bg-[#64CCC5] p-2 space-y-2 rounded-xl">
						<div className=" flex rounded-md justify-between">
							<div className="flex-row px-2  max-w-[120px]">
								<p className="font-bold text-sm">Department</p>
								<p className="truncate">Dev Team</p>
							</div>
							<div className="flex-row px-2">
								<p className="font-bold text-sm">Hire Date</p>
								<p className="text-base">32/10/2099</p>
							</div>
						</div>
						<div className="flex justify-center">
							<Mail />
							<span className="ms-4">ssdasf385835835</span>
						</div>
						<div className="flex justify-center">
							<PhoneCall />
							<span className="ms-4">ssdasf385835835</span>
						</div>
					</div>
				</CardContent>
			</Card>
		</>
	);
};

export default CardEmps;
