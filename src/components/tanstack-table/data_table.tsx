// <!-- "use client";
// import React from "react";
// import {
// 	ColumnDef,
// 	flexRender,
// 	getSortedRowModel,
// 	getCoreRowModel,
// 	ColumnFiltersState,
// 	useReactTable,
// 	getPaginationRowModel,
// 	SortingState,
// 	getFilteredRowModel,
// 	PaginationState,
// } from "@tanstack/react-table";

// import {
// 	Table,
// 	TableBody,
// 	TableCell,
// 	TableHead,
// 	TableHeader,
// 	TableRow,
// } from "@/components/ui/table";
// import { Input } from "@/components/ui/input";
// import { DataTablePagination } from "./tablePagination";
// import { DataTableFacetedFilter } from "./dataFacetedFilter";
// import { posOption, roleOption } from "@/types/enumtable";
// import { Button } from "../ui/button";
// interface DataTableProps<TData, TValue> {
// 	columns: ColumnDef<TData, TValue>[];
// 	data: TData[];
// 	size?: string;
// }

// function DataTable<TData, TValue>({
// 	columns,
// 	data,
// 	size,
// }: DataTableProps<TData, TValue>) {
// 	const [sorting, setSorting] = React.useState<SortingState>([]);
// 	const [columnFilters, setColumnFilters] =
// 		React.useState<ColumnFiltersState>([]);

// 	const table = useReactTable({
// 		data,
// 		columns,
// 		getCoreRowModel: getCoreRowModel(),
// 		getPaginationRowModel: getPaginationRowModel(),
// 		// manualPagination: true,
// 		// onPaginationChange: setPagination,
// 		onSortingChange: setSorting,
// 		getSortedRowModel: getSortedRowModel(),
// 		onColumnFiltersChange: setColumnFilters,
// 		getFilteredRowModel: getFilteredRowModel(),
// 		initialState: {
// 			pagination: {
// 				pageSize: Number(size) | 5,
// 			},
// 		},
// 		state: {
// 			sorting,
// 			columnFilters,
// 			// pagination,
// 		},
// 	});
// 	return (
// 		<>
// 			<div className="flex flex-1 items-center space-x-2 mb-5">
// 				<div>
// 					<Input
// 						placeholder="Filter emails..."
// 						value={
// 							(table
// 								.getColumn("name")
// 								?.getFilterValue() as string) ?? ""
// 						}
// 						onChange={(event) =>
// 							table
// 								.getColumn("name")
// 								?.setFilterValue(event.target.value)
// 						}
// 						className="max-w-sm"
// 					/>
// 				</div>
// 				<div className="flex self-center">
// 					{table.getColumn("role") && (
// 						<DataTableFacetedFilter
// 							column={table.getColumn("role")}
// 							title="role"
// 							options={roleOption}
// 						/>
// 					)}
// 				</div>
// 				<div className="flex self-center">
// 					{table.getColumn("position") && (
// 						<DataTableFacetedFilter
// 							column={table.getColumn("position")}
// 							title="position"
// 							options={posOption}
// 						/>
// 					)}
// 				</div>
// 				<div className="flex">
// 					{table.getColumn("salary_base") && <Button>SADDASD</Button>}
// 				</div>
// 			</div>
// 			<div className="rounded-md border ">
// 				<Table>
// 					<TableHeader>
// 						{table.getHeaderGroups().map((headerGroup) => (
// 							<TableRow key={headerGroup.id}>
// 								{headerGroup.headers.map((header) => {
// 									return (
// 										<TableHead key={header.id}>
// 											{header.isPlaceholder
// 												? null
// 												: flexRender(
// 														header.column.columnDef
// 															.header,
// 														header.getContext()
// 												  )}
// 										</TableHead>
// 									);
// 								})}
// 							</TableRow>
// 						))}
// 					</TableHeader>
// 					<TableBody>
// 						{table.getRowModel().rows?.length ? (
// 							table.getRowModel().rows.map((row) => (
// 								<TableRow
// 									key={row.id}
// 									data-state={
// 										row.getIsSelected() && "selected"
// 									}
// 								>
// 									{row.getVisibleCells().map((cell) => (
// 										<TableCell key={cell.id}>
// 											{flexRender(
// 												cell.column.columnDef.cell,
// 												cell.getContext()
// 											)}
// 										</TableCell>
// 									))}
// 								</TableRow>
// 							))
// 						) : (
// 							<TableRow>
// 								<TableCell
// 									colSpan={columns.length}
// 									className="h-24 text-center"
// 								>
// 									No results.
// 								</TableCell>
// 							</TableRow>
// 						)}
// 					</TableBody>
// 				</Table>
// 			</div>
// 			{/* <div className="flex items-center justify-end space-x-2 py-4">
// 				<Button
// 					variant="outline"
// 					size="sm"
// 					onClick={() => table.previousPage()}
// 					disabled={!table.getCanPreviousPage()}
// 				>
// 					Previous
// 				</Button>
// 				<Button
// 					variant="outline"
// 					size="sm"
// 					onClick={() => table.nextPage()}
// 					disabled={!table.getCanNextPage()}
// 				>
// 					Next
// 				</Button>
// 			</div> */}
// 			<DataTablePagination table={table} />
// 		</>
// 	);
// }

// export default DataTable; -->

"use client";
import React from "react";
import Link from "next/link";
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
import { DataTablePagination } from "./tablePagination";
import { DataTableFacetedFilter } from "./dataFacetedFilter";

import { posOption, roleOption, stageOption } from "@/types/enumtable";
import { Button } from "../ui/button";

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
	size?: string;
}

function DataTable<TData, TValue>({
	columns,
	data,
	size,
}: DataTableProps<TData, TValue>) {
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [columnFilters, setColumnFilters] =
		React.useState<ColumnFiltersState>([]);

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
				<div>
					<Input
						placeholder="Filter name..."
						value={
							(table
								.getColumn("name")
								?.getFilterValue() as string) ?? ""
						}
						onChange={(event) =>
							table
								.getColumn("name")
								?.setFilterValue(event.target.value)
						}
						className="max-w-sm"
					/>
				</div>
				<div className="flex self-center">
					{table.getColumn("role") && (
						<DataTableFacetedFilter
							column={table.getColumn("role")}
							title="role"
							options={roleOption}
						/>
					)}
				</div>
				<div className="flex self-center">
					{table.getColumn("project_status") && (
						<DataTableFacetedFilter
							column={table.getColumn("project_status")}
							title="STAGE"
							options={stageOption}
						/>
					)}
				</div>
				<div className="flex self-center">
					{table.getColumn("position") && (
						<DataTableFacetedFilter
							column={table.getColumn("position")}
							title="position"
							options={posOption}
						/>
					)}
				</div>


        <div className="flex">
          {table.getColumn("salary_base") && (
            <Link href={"/payroll-management/salaryBase"}>
              <Button className="bg-[#64CCC5]">จัดการเงินเดือน</Button>
            </Link>
          )}
        </div>
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
                      onClick={() => router.push("/table/" + row.id)}
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

export default DataTable;
