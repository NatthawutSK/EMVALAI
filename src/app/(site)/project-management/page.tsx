"use client";
import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { LucideListFilter } from 'lucide-react';
import { AiFillPlusCircle } from "react-icons/ai";
import DataTable from '@/components/tanstack-table/data_table';
import { columns } from '@/components/tanstack-table/columnsProManageTable';


type Props = {}
const data = [
  {
    project_id: 1,
    project_name: "SOP ",
    emp_name: "captain",
    project_status: true,
    project_date_start: '8 / 20 / 2024',
    project_date_end: '12 / 20 / 2043'
  },
  {
    project_id: 2,
    project_name: "SOP U",
    emp_name: "captain",
    project_status: true,
    project_date_start: '8 / 20 / 2024',
    project_date_end: '12 / 20 / 2043'
  },
  {
    project_id: 3,
    project_name: "SOP M",
    emp_name: "captain",
    project_status: true,
    project_date_start: '8 / 20 / 2024',
    project_date_end: '12 / 20 / 2043'
  },
  {
    project_id: 4,
    project_name: "SOP K",
    emp_name: "captain",
    project_status: true,
    project_date_start: '8 / 20 / 2024',
    project_date_end: '12 / 20 / 2043',
  },
]
export default function Page({ }: Props) {
  return (
    <div className=" h-screen relative gap-5 p-10">
      <DataTable
        columns={columns}
        data={data}
      />
    </div>


  );
}