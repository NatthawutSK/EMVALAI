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
import { DataTablePagination } from "./tablePaginationMeeting";
import { DataTableFacetedFilter } from "./dataFacetedFilter";

import { posOption, roleOption, stageOption } from "@/types/enumtable";
import { Button } from "../ui/button";
import { DialogMeeting } from "./DialogMeeting";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  size?: string;
}

function DataTableMeeting<TData, TValue>({
  columns,
  data,
  size,
}: DataTableProps<TData, TValue>) {
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
      // pagination,
    },
  });
  return (
    <>
      <div className="flex flex-1 items-center space-x-2 mb-5">
        {/* <div>
          <Input
            placeholder="Filter Title ..."
            value={(table.getColumn("meet_title")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("meet_title")?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
          
        </div> */}
        <DialogMeeting />
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
                      onClick={() => router.push("/table/" + row.id)} // ลิงค์ไปหน้าไหน
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
      {/* <div className="flex items-center justify-end space-x-2 py-4">
				<Button
					variant="outline"
					size="sm"
					onClick={() => table.previousPage()}
					disabled={!table.getCanPreviousPage()}
				>
					Previous
				</Button>
				<Button
					variant="outline"
					size="sm"
					onClick={() => table.nextPage()}
					disabled={!table.getCanNextPage()}
				>
					Next
				</Button>
			</div> */}
      <DataTablePagination table={table} />
    </>
  );
}

export default DataTableMeeting;
