import { ColumnDef } from '@tanstack/react-table'
import React from 'react'
import { Button } from '../ui/button'
import { ArrowUpDown } from 'lucide-react'

type Props = {}
type Leave_History = {
    first_name: string,
    last_name: string,
    role: string,
    leave_type: string,
    start_date: string,

    end_date: string

}

export const columns: ColumnDef<Leave_History>[] = [
    {
        accessorKey:"first_name",
        header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
				>
					Name
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
        
    },
    {
        accessorKey:"last_name",
        header: "LAST NAME"
        
    },
    {
        accessorKey:"role",
        header: "ROLE"
        
    },
    {
        accessorKey:"leave_type",
        header: "LEAVE TYPE"
        
    },
    {
        accessorKey:"start_date",
        header: "START DATE"
        
    },
    {
        accessorKey:"end_date",
        header: "END DATE"
        
    },
]