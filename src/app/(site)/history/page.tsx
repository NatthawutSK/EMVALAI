
"use client";
import React, {useState, useEffect} from 'react'
import { columns } from '@/components/tanstack-table/columnsLeaveHistory';
import { SelectLeave } from '@/components/leave/selectLeave';
import DataTableLeave from '@/components/leave/dataTableLeave';

type Props = {}
const History = (props: Props) => {
  const history = [
    {
      first_name: "Lee",
      last_name: "Lax",
      role: "Employee",
      leave_type: "Vacation",
      start_date: "November 9th, 2023",
      end_date: "November 11th, 2023",
    },
    {
      first_name: "Alex",
      last_name: "Lax",
      role: "Employee",
      leave_type: "Business",
      start_date: "November 10th, 2023",
      end_date: "November 11th, 2023",
    },
    {
      first_name: "Suki",
      last_name: "Lax",
      role: "Employee",
      leave_type: "Sick",
      start_date: "November 10th, 2023",
      end_date: "November 12th, 2023",
    }
  ]
  const [data, setData] = useState([]);
  const [leaveStatus, setLeaveStatus] = useState([]);
  const accessToken = localStorage.getItem("accessToken");
  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    try {
      const queryString = leaveStatus !== null ? `?leave_status=${leaveStatus}` : '';
      const response = await fetch("http://localhost:8080", {
        method: "GET",
        headers: {
          'Authorization': `${accessToken}`
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  return (
    <div className=" h-screen relative gap-5 p-10">
      <div className="text-4xl font-bold">Leave History</div>
      <SelectLeave/>
      <DataTableLeave
        columns={columns} data={data} />
    </div>
  )
}

export default History;