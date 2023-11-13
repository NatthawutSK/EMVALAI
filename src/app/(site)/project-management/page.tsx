"use client";
import React, {useState, useEffect} from "react";
import DataTableProject from "@/components/project-management/DataTableProject";
import { columns } from "@/components/project-management/columnsProManageTable"
type Props = {};

export default function Page({ }: Props) {
  const [data, setData] = useState([]);
  const [emp, setEmp] = useState([])
  const accessToken = localStorage.getItem("accessToken");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8055/projects",{
        method: "GET",
        headers: {
          'Authorization': `${accessToken}`
        },
      }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    try {

      const emp = await fetch("http://localhost:8082/user-service/user/getAllUser",{
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${accessToken}`
        },
      })
      if (!emp.ok) {
        throw new Error(`HTTP error! Status: ${emp.status}`);
      }

      const responseEmp = await emp.json();
      setEmp(responseEmp);
    } catch (error) {
      console.error("Error fetching Employee:", error);
    }
  };
  console.log(emp);
  return (
    <div className=" h-screen relative gap-5 p-10">
      <div className="text-4xl font-bold p-5 ml-5">Project Management</div>
      <DataTableProject columns={columns} data={data} emp={emp}/>
    </div>
  );
}