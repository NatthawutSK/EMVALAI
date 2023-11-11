
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
        <div className=''>
            <div className="text-4xl font-bold p-5 ml-5">Leave</div>
            <div className='ml-auto  w-3/12'>
                <Select defaultValue={'DEFAULT'}>
                    <SelectTrigger id="reason">
                      <SelectValue placeholder="Approve"/>
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="DEFAULT">Approve</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="reject">Reject</SelectItem>
                    </SelectContent>
                  </Select>
            </div>
            <DataTable
            columns={columns} data={history}/>
        </div>
      )
}

export default History;