"use client";
import React from "react";

import {
  ColumnDef,
  flexRender,
  getSortedRowModel,
  getCoreRowModel,
  ColumnFiltersState,
  useReactTable,
  getPaginationRowModel,
  SortingState,
  getFilteredRowModel,
  PaginationState,
} from "@tanstack/react-table";

import { useRouter } from "next/navigation";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { DataTablePagination } from "./tablePaginationProject";
import { DataTableFacetedFilter } from "./dataFacetedFilterProject";

import { stageOption } from "@/types/enumtable";
import { DialogProject } from "./DialogProjectManagement";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  size?: string;
  emp: any[];
}

function DataTableProject<TData, TValue>({
  columns,
  data,
  emp,
  size,
}: DataTableProps<TData, TValue>) {
  const [dateStart, setDateStart] = React.useState<Date>();
  const [dateEnd, setDateEnd] = React.useState<Date>();
  const [selectedTeam, setSelectedTeam] = React.useState<string[]>([]);
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );

  const router = useRouter();

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    // manualPagination: true,
    // onPaginationChange: setPagination,
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    initialState: {
      pagination: {
        pageSize: Number(size) | 5,
      },
    },
    state: {
      sorting,
      columnFilters,
    },
  });
  return (
    <>
      <div className="flex flex-1 items-center space-x-2 mb-5 ">
        <div>
          <Input
            placeholder="Filter name..."
            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("name")?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
        </div>
        {/* <p>{JSON.stringify(data)}</p> */}

        <div className="flex self-center">
          {table.getColumn("project_status") && (
            <DataTableFacetedFilter
              column={table.getColumn("project_status")}
              title="STAGE"
              options={stageOption}
            />
          )}
        </div>

        <DialogProject emp={emp} />
      </div>
      <div className="rounded-md border ">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell

                      // onClick={() => router.push("/table/" + row.id)}

                      key={cell.id}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <DataTablePagination table={table} />
    </>
  );
}

export default DataTableProject;
