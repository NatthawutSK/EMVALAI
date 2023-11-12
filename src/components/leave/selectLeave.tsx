import React from "react"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
type Props = {};

export const SelectLeave: React.FC<Props> = (props) => {
    return (
        <div className='ml-auto  w-3/12'>
            <Select defaultValue={'DEFAULT'}>
                <SelectTrigger id="reason">
                    <SelectValue placeholder="Approve" />
                </SelectTrigger>
                <SelectContent position="popper">
                    <SelectItem value="DEFAULT">Approve</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="reject">Reject</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}

