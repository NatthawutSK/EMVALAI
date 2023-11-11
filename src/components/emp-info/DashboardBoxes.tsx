"use client";
import { User } from "lucide-react";
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PositionCircular from "./PositionCircular";
type Props = {};

type BoxesPropType = {
	boxes: Boxes;
	positions: Positions;
};

type Positions = {
	designer: number;
	tester: number;
	frontend: number;
	backend: number;
	pm: number;
};

type Boxes = {
	allEmp: string;
	empSupervisor: string;
	empHR: string;
	empEmployee: string;
	empLeaveCount: string;
};
const DashboardBoxes = ({ boxdata }: { boxdata: BoxesPropType }) => {
	return (
		<div className="mb-5 mt-5">
			<div className="flex flex-row m-2 mb-4	justify-evenly">
				{/* BIG BOX */}
				<div className=" px-8 py-2 bg-[#00D770]  drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-lg flex flex-row space-x-3 justify-around">
					<User className="h-16 w-20 self-center" color="white" />
					<div className="self-center">
						<h1 className="text-2xl font-bold text-white">
							{boxdata.boxes.allEmp}
						</h1>
						<p className="text-white text-sm font-semibold">
							จำนวนพนักงาน
						</p>
					</div>
				</div>

				{/* BIG BOX AGAIN */}
				<div className=" px-4 py-2 bg-[#FF8C8C] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-lg flex flex-row space-x-3 justify-start">
					<div className="space-y-2 ">
						<PositionCircular
							value={Math.floor(
								(Number(boxdata.positions.backend) /
									Number(boxdata.boxes.allEmp)) *
									100
							)}
							text={
								(Number(boxdata.positions.backend) /
									Number(boxdata.boxes.allEmp)) *
									100 +
								"%"
							}
							position={"Backend Dev"}
							amount={boxdata.positions.backend}
						/>
						<PositionCircular
							value={Math.floor(
								(Number(boxdata.positions.frontend) /
									Number(boxdata.boxes.allEmp)) *
									100
							)}
							text={
								(Number(boxdata.positions.frontend) /
									Number(boxdata.boxes.allEmp)) *
									100 +
								"%"
							}
							position={"Frontend Dev"}
							amount={boxdata.positions.frontend}
						/>
						<PositionCircular
							value={Math.floor(
								(Number(boxdata.positions.designer) /
									Number(boxdata.boxes.allEmp)) *
									100
							)}
							text={
								(Number(boxdata.positions.designer) /
									Number(boxdata.boxes.allEmp)) *
									100 +
								"%"
							}
							position={"Designer"}
							amount={boxdata.positions.designer}
						/>
						<PositionCircular
							value={Math.floor(
								(Number(boxdata.positions.tester) /
									Number(boxdata.boxes.allEmp)) *
									100
							)}
							text={
								(Number(boxdata.positions.tester) /
									Number(boxdata.boxes.allEmp)) *
									100 +
								"%"
							}
							position={"Tester"}
							amount={boxdata.positions.tester}
						/>
						<PositionCircular
							value={Math.floor(
								(Number(boxdata.positions.pm) /
									Number(boxdata.boxes.allEmp)) *
									100
							)}
							text={
								(Number(boxdata.positions.pm) /
									Number(boxdata.boxes.allEmp)) *
									100 +
								"%"
							}
							position={"Project Manager"}
							amount={boxdata.positions.pm}
						/>

						{/* <div className="flex flex-row justify-center space-x-5">
							<div className="w-10 h-10">
								<CircularProgressbar
									value={Math.floor(
										Number(boxdata.positions.backend) /
											Number(boxdata.boxes.allEmp)
									)}
									text={
										Number(boxdata.positions.backend) /
											Number(boxdata.boxes.allEmp) +
										"%"
									}
									background
									backgroundPadding={6}
									styles={buildStyles({
										textColor: "red",
										pathColor: "orange",
										backgroundColor: "white",
									})}
								/>
							</div>
							<h2 className="self-center">Backend Dev</h2>
						</div>
						<div className="flex flex-row justify-center space-x-5">
							<div className="w-10 h-10">
								<CircularProgressbar
									value={Math.floor(
										Number(boxdata.positions.backend) /
											Number(boxdata.boxes.allEmp)
									)}
									text={
										Number(boxdata.positions.backend) /
											Number(boxdata.boxes.allEmp) +
										"%"
									}
									background
									backgroundPadding={6}
									styles={buildStyles({
										textColor: "red",
										pathColor: "orange",
										backgroundColor: "white",
									})}
								/>
							</div>
							<h2 className="self-center">Backend Dev</h2>
						</div>
						<div className="flex flex-row justify-center  space-x-5">
							<div className="w-10 h-10">
								<CircularProgressbar
									value={Math.floor(
										Number(boxdata.positions.backend) /
											Number(boxdata.boxes.allEmp)
									)}
									text={
										Number(boxdata.positions.backend) /
											Number(boxdata.boxes.allEmp) +
										"%"
									}
									background
									backgroundPadding={6}
									styles={buildStyles({
										textColor: "red",
										pathColor: "orange",
										backgroundColor: "white",
									})}
								/>
							</div>
							<h2 className="self-center">Backend Dev</h2>
						</div> */}
					</div>
				</div>
				{/* ALL SMALL BOX */}
				<div className=" space-y-4 self-center">
					<div className=" px-10 py-2 md:px-6 min-w-[200px] max-w-[270px] rounded-lg drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-[#6359A3] flex flex-row space-x-3 justify-around">
						<p className="text-2xl self-center text-white text-start">
							{boxdata.boxes.empSupervisor}
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
					<div className=" px-10 py-2 md:px-6 min-w-[200px] max-w-[270px] rounded-lg bg-[#409DB1] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex flex-row space-x-3 justify-around">
						<p className="text-2xl self-center text-white">
							{boxdata.boxes.empHR}
						</p>
						<div className="self-center">
							<h1 className="text-lg font-bold  text-white">
								Human Resources
							</h1>
							<p className="text-white text-sm font-Inter font-semibold">
								จำนวนพนักงาน
							</p>
						</div>
					</div>
				</div>
				<div className=" space-y-4 self-center">
					<div className=" px-10 py-2 md:px-6 min-w-[200px] max-w-[250px] rounded-lg bg-[#176B87] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex flex-row space-x-3 justify-around">
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
					<div className=" px-10	 py-2 rounded-lg min-w-[200px] max-w-[250px] bg-teal-600 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex flex-row space-x-3 justify-around">
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
			</div>
		</div>
	);
};

export default DashboardBoxes;
