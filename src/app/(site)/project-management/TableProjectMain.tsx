'use-client'
type Props = {}
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


export default function TableProjectMain({ }: Props) {
    return (
        <div>
            <Table className='border-t-2 mt-10 '>
                <TableHeader>
                    <TableHead className=''>PROJECT</TableHead>
                    <TableHead>SUPERVISOR</TableHead>
                    <TableHead>PROJECT TYPE</TableHead>
                    <TableHead>STAGE</TableHead>
                    <TableHead>DUE DATE</TableHead>
                </TableHeader>
                <TableBody className='shadow-lg'>
                    <TableRow >
                        <TableCell className="">Project title</TableCell>
                        <TableCell>Sornkhiew</TableCell>
                        <TableCell>Business</TableCell>
                        <TableCell className="">Doing</TableCell>
                        <TableCell className="">10/07/2023</TableCell>
                    </TableRow>

                    <TableRow >
                        <TableCell className="">Project title</TableCell>
                        <TableCell>Sornkhiew</TableCell>
                        <TableCell>Business</TableCell>
                        <TableCell className="">Doing</TableCell>
                        <TableCell className="">10/07/2023</TableCell>
                    </TableRow>

                    <TableRow >
                        <TableCell className="">Project title</TableCell>
                        <TableCell>Sornkhiew</TableCell>
                        <TableCell>Business</TableCell>
                        <TableCell className="">Doing</TableCell>
                        <TableCell className="">10/07/2023</TableCell>
                    </TableRow>

                </TableBody>
            </Table>
        </div>
    );
}