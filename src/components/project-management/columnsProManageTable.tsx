import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import { Button } from "../ui/button";
import { ArrowUpDown } from "lucide-react";

type Props = {};
type ProjectInfo = {
  project_id: number;
  project_name: string;
  emp_name: string;
  project_status: string;
  project_date_start: string;
  project_date_end: string;
};

export const columns: ColumnDef<ProjectInfo>[] = [
  {
    accessorKey: "project_name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "sup_name",
    header: "SUPERVISOR",
  },
  {
    accessorKey: "project_status",
    header: "STAGE",
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "due_date_project",
    header: "DUE DATE",
  },
];
