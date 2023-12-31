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

import { Input } from "@/components/ui/input";
import { DataTablePagination } from "./tablePagination";


interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
	size?: string;
}

function DataTablePM<TData, TValue>({
	columns,
	data,
	size,
}: DataTableProps<TData, TValue>) {
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [columnFilters, setColumnFilters] =
		React.useState<ColumnFiltersState>([]);

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
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
						placeholder="Search..."
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
                {/* <div className="flex self-center">
					{table.getColumn("stage") && (
						<DataTableFacetedFilter
							column={table.getColumn("stage")}
							title="stage"
							options={stagePM}
						/>
					)}
				</div> */}
				{/* <div className="flex self-center">
					{table.getColumn("role") && (
						<DataTableFacetedFilter
							column={table.getColumn("role")}
							title="role"
							options={roleOption}
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
				</div> */}
			</div>
			<div className="rounded-md border ">
				{/* <Table>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => {
									return (
										<TableHead key={header.id}>
											{header.isPlaceholder
												? null
												: flexRender(
														header.column.columnDef
															.header,
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
									data-state={
										row.getIsSelected() && "selected"
									}
								>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id}>
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
				</Table> */}
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

export default DataTablePM;
