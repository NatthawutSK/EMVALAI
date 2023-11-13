"use client";
import DataTable from "@/components/tanstack-table/data_table";
import React, { useEffect } from "react";
import { columns } from "@/components/emp-info/columnsEmpInfoTable";
import { User } from "lucide-react";
import { MdFreeCancellation } from "react-icons/md";
import PaginationControls from "../../../components/emp-info/PaginateEmp";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import DashboardBoxes from "@/components/emp-info/DashboardBoxes";
import MultiSelect from "@/components/payroll/MultiSelect";
import { roleOption } from "@/types/enumtable";
import Empinfo from "./../employees-card/page";
import WithAuth from "@/components/WithAuth";
type Props = {};
const EmpInfoData = {
  boxes: {
    allEmp: "1000",
    empSupervisor: "200",
    empHR: "200",
    empEmployee: "600",
    empLeaveCount: "120",
  },
  positions: {
    designer: 100,
    tester: 100,
    frontend: 400,
    backend: 300,
    pm: 100,
  },
  allEmp: [
    {
      empId: 1,
      name: "Aubree Figger",
      position: "Dr",
      hireDate: "8/20/2014",
      email: "afigger0@vimeo.com",
      phone: "241-703-0330",
      status: "Inactive",
      role: "Manager",
    },
    {
      empId: 2,
      name: "Carleton Placstone",
      position: "Dr",
      hireDate: "4/27/2015",
      email: "cplacstone1@wisc.edu",
      phone: "891-492-9878",
      status: "Inactive",
      role: "Manager",
    },
    {
      empId: 3,
      name: "Harmon Swalwell",
      position: "Mrs",
      hireDate: "4/27/2015",
      email: "hswalwell2@php.net",
      phone: "967-273-9293",
      status: "Inactive",
      role: "Supervisor",
    },
    {
      empId: 4,
      name: "Benoite Isham",
      position: "Rev",
      hireDate: "8/30/2016",
      email: "bisham3@ebay.com",
      phone: "907-670-1940",
      status: "OnLeave",
      role: "Manager",
    },
    {
      empId: 5,
      name: "Delilah Bushen",
      position: "Honorable",
      hireDate: "8/27/2015",
      email: "dbushen4@feedburner.com",
      phone: "861-379-6259",
      status: "Inactive",
      role: "Supervisor",
    },
    {
      empId: 6,
      name: "Mitchel Buckham",
      position: "Honorable",
      hireDate: "7/30/2016",
      email: "mbuckham5@elpais.com",
      phone: "915-237-1743",
      status: "Inactive",
      role: "Employee",
    },
    {
      empId: 7,
      name: "Sigfried Cordner",
      position: "Honorable",
      hireDate: "3/1/2014",
      email: "scordner6@hexun.com",
      phone: "452-563-7099",
      status: "OnLeave",
      role: "Manager",
    },
    {
      empId: 8,
      name: "Kaiser Hails",
      position: "Dr",
      hireDate: "6/10/2014",
      email: "khails7@discovery.com",
      phone: "661-324-8938",
      status: "Active",
      role: "Manager",
    },
    {
      empId: 9,
      name: "Timmie Wasiela",
      position: "Mr",
      hireDate: "9/7/2016",
      email: "twasiela8@theguardian.com",
      phone: "721-867-3558",
      status: "Active",
      role: "Employee",
    },
    {
      empId: 10,
      name: "Heywood Fitzpayn",
      position: "Dr",
      hireDate: "2/12/2016",
      email: "hfitzpayn9@dropbox.com",
      phone: "201-444-0210",
      status: "OnLeave",
      role: "Supervisor",
    },
  ],
};
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
          Authorization: `Bearer ${accessToken}	`,
        },
      }
    );
    console.log(res);
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

const Page = () => {
  const [empInfo, setEmpInfo] = React.useState<any>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getEmpData();
      setEmpInfo(
        data.map((emp: any) => {
          return {
            empId: emp.id,
            name: emp.firstName + " " + emp.lastName,
            position: emp.position,
            hireDate: emp.hireDate,
            email: emp.email,
            phone: emp.phone,
            status: emp.status,
            role: emp.role,
          };
        })
      );
    };
    fetchData();
  }, []);
  // const data = await getEmpData();
  const boxesData = {
    boxes: {
      allEmp: empInfo.length,
      empSupervisor: empInfo.filter((emp: any) => emp.role === "Supervisor")
        .length,
      empHR: empInfo.filter((emp: any) => emp.role === "HR").length,
      empEmployee: empInfo.filter((emp: any) => emp.role === "Employee").length,
      allposition: 5,
    },
    positions: {
      designer: empInfo.filter((emp: any) => emp.position === "UX/UI").length,
      tester: empInfo.filter((emp: any) => emp.position === "Tester").length,
      frontend: empInfo.filter((emp: any) => emp.position === "Frontend")
        .length,
      backend: empInfo.filter((emp: any) => emp.position === "Backend").length,
      pm: empInfo.filter((emp: any) => emp.position === "Project Manager")
        .length,
    },
  };
  console.log(boxesData);
  return (
    <div className="p-10 mt-5 space-y-5 h-screen">
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
      {/* <h1 className="bg-red-900">{JSON.stringify(empInfo)}</h1> */}
      <DashboardBoxes boxdata={boxesData} />
      {/* <div>
				<MultiSelect title={"TEST"} options={roleOption} />
			</div> */}

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
      <div className="mb-10">
        <DataTable
          columns={columns}
          data={empInfo}
          // size={per_page as string}
        />
      </div>
      <div className="h-5"></div>
    </div>
  );
};

export default Page;
