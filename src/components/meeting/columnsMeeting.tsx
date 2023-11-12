import { ColumnDef } from '@tanstack/react-table'
import React from 'react'
import { Button } from '../ui/button'
import { ArrowUpDown } from 'lucide-react'

type Props = {}
type Meeting = {
    meet_title: string,
    meet_description: string,
    meet_date: string,

    meet_time: string,

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

        accessorKey:"meet_time",
        header: "TIME"

        
    },
    {
        accessorKey:"created_by",
        header: "CREATED BY"
        
    }
]