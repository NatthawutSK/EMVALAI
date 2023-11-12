
"use client";
import React from 'react'
import { Input } from "@/components/ui/input"
import { LucideListFilter } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
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
} from "@/components/ui/table"
import DataTable from '@/components/tanstack-table/data_table';
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
  return (
    <div className=" h-screen relative gap-5 p-10">
      <div className="text-4xl font-bold p-5 ml-5">Leave</div>
      <SelectLeave/>
      <DataTableLeave
        columns={columns} data={history} />
    </div>
  )
}

export default History;