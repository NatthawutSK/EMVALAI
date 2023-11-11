import { ColumnDef } from '@tanstack/react-table'
import React from 'react'
import { Button } from '../ui/button'
import { ArrowUpDown } from 'lucide-react'

type Props = {}
type Meeting = {
    meet_title: string,
    meet_description: string,
    meet_date: string,
    time_hour: number,
    time_min: number,
    created_by: string
}

export const columns: ColumnDef<Meeting>[] = [
    {
        accessorKey:"meet_title",
        header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
				>
					Title
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
        
    },
    {
        accessorKey:"meet_date",
        header: "DATE"
        
    },
    {
        accessorKey:"time_hour",
        header: "TIME HOUR"
        
    },
    {
        accessorKey:"time_min",
        header: "TIME MINUTE"
        
    },
    {
        accessorKey:"created_by",
        header: "CREATED BY"
        
    }
]