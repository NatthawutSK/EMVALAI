"use client";
import React from "react";

import DataTableProject from "@/components/project-management/DataTableProject";
import { columns } from "@/components/project-management/columnsProManageTable"

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
export default function Page({ }: Props) {
  return (
    <div className=" h-screen relative gap-5 p-10">
      <div className="text-4xl font-bold p-5 ml-5">Project Management</div>
      <DataTableProject columns={columns} data={data} />
    </div>
  );
}