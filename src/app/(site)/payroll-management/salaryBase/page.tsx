"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export interface Payroll {
  position: string;
  salary_base: number;
  employees: number;
  salary_cost: number;
}

interface PayrollProps {
  data: Payroll[];
}

const mockData: Payroll[] = [
  {
    position: "Manager",
    salary_base: 150000,
    employees: 1,
    salary_cost: 150000,
  },
  {
    position: "Supervisor",
    salary_base: 80000,
    employees: 3,
    salary_cost: 240000,
  },
  {
    position: "Front-End",
    salary_base: 35000,
    employees: 10,
    salary_cost: 350000,
  },
  {
    position: "Back-End",
    salary_base: 40000,
    employees: 10,
    salary_cost: 400000,
  },
  {
    position: "UI Designer",
    salary_base: 30000,
    employees: 10,
    salary_cost: 300000,
  },
  {
    position: "UX Designer",
    salary_base: 30000,
    employees: 10,
    salary_cost: 300000,
  },
  {
    position: "Tester",
    salary_base: 32000,
    employees: 10,
    salary_cost: 320000,
  },
];

type Props = {};

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



export default function SalaryBase({ data = mockData }: PayrollProps) {
  
  const [salaryBase, setSalaryBase] = useState<string>("");
  const [selectedPositionOption, setSelectedPositionOption] = useState<string | null>(null);
  const [empInfo, setEmpInfo] = React.useState<any>();
  
  
  const handlePositionChange = (value: string | null) => {
    setSelectedPositionOption(value);
  };

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
      setPositionInfo(data.position)
      return data;
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  const [positionInfo, setPositionInfo] = React.useState<any>([]);

  useEffect(() => {
       const fetchData = async () => {
         try {
           const data = await getPosition();

           console.log(data);
           if (!Array.isArray(data.position)) {
             throw new Error("Data is not an array");
           }

           const processedData = data.position.map((pos: any) => ({
             position: pos.position_name,
             salary_base: pos.position_salary,
             employees: 1,
             salary_cost: pos.position_salary,
           }));

           setPositionInfo(processedData);
           console.log("useEffect In EmpInfo -> ", processedData);
         } catch (error) {
           console.error("Error fetching position:", error);
         }
       };

       fetchData();

  }, []);

  const updateSalaryBase = async (position:any, newSalary:any) => {
    const accessToken = localStorage.getItem("accessToken");

    console.log("DEBUGGING: ", position, newSalary)
    try {
      const res = await fetch("http://localhost:3001/update_salarybase", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          position: position,
          salary: newSalary,
        }),
      });

      window.location.reload();
      
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


  const handleApplyBtn = async (position:any, newSalary:any) => {
    console.log("ON CLICK BTN -", position, newSalary)
    try {
      const updatedData = await updateSalaryBase(position, newSalary);
      console.log("Updated data:", updatedData);
    } catch (error) {
      console.error("Error updating salary base:", error);
    }
  };
  

  return (
    <div className="p-10">
      <div className="flex">
        <div className="w-[35%] border-2 border-gray-500 rounded-md relative">
          <div className="flex items-center flex-col mt-5 mb-5 font-bold">
            Salary Form
          </div>
          <div className="flex px-10 py-5">
            <div className="flex justify-center items-center font-medium">
              Position:{" "}
            </div>
            <Select onValueChange={handlePositionChange}>
              <SelectTrigger className="w-[180px] border-gray-400 border-2 ml-5">
                <SelectValue placeholder="POSITION" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Position</SelectLabel>
                  <SelectItem value="Manager">Manager</SelectItem>
                  <SelectItem value="Supervisor">Supervisor</SelectItem>
                  <SelectItem value="Front-End">Front-End</SelectItem>
                  <SelectItem value="Back-End">Back-End</SelectItem>
                  <SelectItem value="UI Designer">UI-Designer</SelectItem>
                  <SelectItem value="UX Designer">UX-Designer</SelectItem>
                  <SelectItem value="Tester">Tester</SelectItem>
                  <SelectItem value="HR">HR</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-2  pb-5">
            <div className="flex justify-center items-center font-medium">
              Salary Base:
            </div>
            <Input
              className="border-gray-400 border-2 w-32 text-left"
              placeholder="0 ฿"
              value={salaryBase}
              onChange={(e) => setSalaryBase(e.target.value)}
              style={{ textAlign: "left" }}
            />
          </div>

          <div className="flex justify-end items-end p-5">
            <Button
              className="bg-[#C75656] "
              onClick={() => handleApplyBtn(selectedPositionOption, salaryBase)}
            >
              Apply
            </Button>
          </div>
        </div>
        <div className="w-[65%] border-2 border-gray-500 p-2 ml-5 rounded-md">
          <div>
            <Table>
              {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">POSITION</TableHead>
                  <TableHead className="text-right">SALARY BASE</TableHead>
                  <TableHead className="text-right">EMPLOYEES</TableHead>
                  <TableHead className="text-right">SALARY COST</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {positionInfo ? (
                  positionInfo.map((row: any, index: any) => (
                    <TableRow key={index}>
                      <TableCell className="font-bold">
                        {row.position}
                      </TableCell>
                      <TableCell className="text-right">
                        {row.salary_base} ฿
                      </TableCell>
                      <TableCell className="text-right">
                        {row.employees}
                      </TableCell>
                      <TableCell className="text-right">
                        {row.salary_cost} ฿
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={4}>No data available</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
