"use client";
import React from "react";
import {
	ComposedChart,
	Line,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	Scatter,
} from "recharts";

type Props = {};
type chartData = {
	name: string;
	salary: number;
	deduction: number;
	"net-salary": number;
};
const PayrollChart = ({ data }: { data: chartData[] }) => {
	return (
		<ComposedChart
			width={350}
			height={300}
			data={data}
			margin={{
				top: 20,
				right: 20,
				bottom: 20,
				left: 20,
			}}
		>
			<CartesianGrid stroke="#f5f5f5" />
			<XAxis dataKey="name" />
			<YAxis />
			<Tooltip />
			<Legend />
			<Bar dataKey="deduction" stackId="a" fill="#8884d8" />
			<Bar dataKey="salary" stackId="a" fill="#82ca9d" />
			<Line type="monotone" dataKey="net-salary" stroke="#ff7300" />
		</ComposedChart>
	);
};

export default PayrollChart;
