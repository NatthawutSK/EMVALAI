"use client"
import DashBoardPayrollBoxes from "@/components/payroll/DashBoardPayrollBoxes";
import DataTable from "@/components/tanstack-table/data_table";
import React, { useState, useEffect } from "react";
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
type PayrollChartType = {
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
type PayrollInfoType = {
	allEmp: PayrollTableInfoType[];
	payroll_aggreate: PayrollAggreateType;
	dataChart: PayrollChartType[];
};

const PayrollInfo: PayrollInfoType = {
	allEmp: [
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
	],
	payroll_aggreate: {
		payroll_date: "2023-11-05",
		payroll_cost: "$100,000",
		payroll_deduction: "$10,000",
		payroll_addition: "$20,000",
		net_salary: "$110,000",
	},
	dataChart: [
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
	],
};
// Accessing information for each employee

const getEmpData = async () => {
  // Perform localStorage action
  const accessToken = localStorage.getItem("accessToken");
  try {
    const res = await fetch(
      "http://localhost:8082/user-service/user/getAllUser",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    if (!res.ok) {
		throw new Error("Network response was not ok");
    }
	
    const data = await res.json();
	console.log("HERE IS EmpData ->> ", data);
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

// const getPayroll = async () => {
//   // Perform localStorage action
//   const accessToken = localStorage.getItem("accessToken");

//   try {
//     const res = await fetch("http://localhost:3001/payroll_all", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${accessToken}`,
//       },
//     });
//     if (!res.ok) {
// 		throw new Error("Network response was not ok");
//     }
	
//     const data = await res.json();
// 	console.log("HERE IS PayrollData ->>", data);
//     return data;
//   } catch (error) {
//     console.error(error);
//     return error;
//   }
// };

const getPosition = async () => {
  // Perform localStorage action
  const accessToken = localStorage.getItem("accessToken");

  try {
    const res = await fetch("http://localhost:3001/position_info", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (!res.ok) {
		throw new Error("Network response was not ok");
    }
	
    const data = await res.json();
	console.log("HERE IS POSITION ->>", data);
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

const Page = (props: Props) => {
   const [empInfo, setEmpInfo] = React.useState<any>([]);

//    const data_payroll = getPosition();
   useEffect(() => {
     const data = getEmpData();
	 
     data.then((res) => {
       setEmpInfo(
         res.map((emp: any) => {
           return {
             empId: emp.id,
             name: emp.fname + " " + emp.lname,
             position: emp.position,
             hireDate: emp.hireDate,
             email: emp.email,
             phone: emp.phone,
             status: emp.status,
             role: emp.role,
           };
         })
       );
     });
	}, []);

	//  data_payroll.then((res) => {
	//    setEmpInfo(
	//      res.map((payRoll: any) => {
	//        return {
	//          salaryBase: payRoll
	//        };
	//      })
	//    );
	//  });

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
      <DashBoardPayrollBoxes
        chartData={PayrollInfo.dataChart}
        aggreateData={PayrollInfo.payroll_aggreate}
        // empData={empInfo}
      />
      <div className="mt-5">
        <DataTable columns={columns} data={PayrollInfo.allEmp} />
      </div>
      <div className="h-5"></div>
    </div>
  );
};

export default Page;
