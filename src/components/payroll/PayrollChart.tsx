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

const PayrollChart = (props: Props) => {
	const data = [
		{
			name: "Jan",
			salary: 590,
			deduction: 800,
			"net-salary": 1400,
		},
		{
			name: "Feb",
			salary: 868,
			deduction: 967,
			"net-salary": 1506,
		},
		{
			name: "Mar",
			salary: 1397,
			deduction: 1098,
			"net-salary": 989,
		},
		{
			name: "Apr",
			salary: 1480,
			deduction: 1200,
			"net-salary": 1228,
		},
		{
			name: "May",
			salary: 1520,
			deduction: 1108,
			"net-salary": 1100,
		},
		{
			name: "Jun",
			salary: 1400,
			deduction: 680,
			"net-salary": 1700,
		},
		{
			name: "Jul",
			salary: 1400,
			deduction: 680,
			"net-salary": 1700,
		},
		{
			name: "Aug",
			salary: 1400,
			deduction: 680,
			"net-salary": 1700,
		},
		{
			name: "Sep",
			salary: 1400,
			deduction: 680,
			"net-salary": 1700,
		},
		{
			name: "Oct",
			salary: 1400,
			deduction: 680,
			"net-salary": 1700,
		},
		{
			name: "Nov",
			salary: 1400,
			deduction: 680,
			"net-salary": 1700,
		},
		{
			name: "Dec",
			salary: 1400,
			deduction: 680,
			"net-salary": 1700,
		},
	];

	return (
		<ComposedChart
			width={350}
			height={350}
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
			<Scatter dataKey="cnt" fill="red" />
		</ComposedChart>
	);
};

export default PayrollChart;
