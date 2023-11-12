"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { LucideListFilter } from "lucide-react";
import { AiFillPlusCircle } from "react-icons/ai";
import DataTable from "@/components/tanstack-table/data_table";
import { columns } from "@/components/tanstack-table/columnsProManageTable";

type Props = {};
const data = [
  {
    project_id: 1,
    project_name: "SOP ",
    emp_name: "captain",
    project_status: "Doing",
    project_date_start: "8 / 20 / 2024",
    project_date_end: "12 / 20 / 2043",
  },
  {
    project_id: 2,
    project_name: "SOP U",
    emp_name: "captain",
    project_status: "Done",
    project_date_start: "8 / 20 / 2024",
    project_date_end: "12 / 20 / 2043",
  },
  {
    project_id: 3,
    project_name: "SOP M",
    emp_name: "captain",
    project_status: "Doing",
    project_date_start: "8 / 20 / 2024",
    project_date_end: "12 / 20 / 2043",
  },
  {
    project_id: 4,
    project_name: "SOP K",
    emp_name: "captain",
    project_status: "Done",
    project_date_start: "8 / 20 / 2024",
    project_date_end: "12 / 20 / 2043",
  },
];
export default function Page({}: Props) {
  const [dateStart, setDateStart] = React.useState<Date>();
  const [dateEnd, setDateEnd] = React.useState<Date>();
  const [selectedTeam, setSelectedTeam] = React.useState<string[]>([]);
  return (
    <div>
      <div className="text-4xl font-bold p-5 ml-5">Project Management</div>
      <div className=" h-screen relative gap-5 p-10">
        
        
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}