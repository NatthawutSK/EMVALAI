'use-client'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { LucideListFilter } from 'lucide-react';
import { AiFillPlusCircle } from "react-icons/ai";
import { DueDateProManage } from "./DueDateProjectManage";
import DialogAddTask from "@/components/DialogAddTask";
export default function FilterProjectMain() {
    return (
        <div className='flex '>
            <LucideListFilter size={32} color='gray' className='mr-5' />
            <Input placeholder="Search..." className="w-[200px] mr-5" />
            <Select>
                <SelectTrigger className="w-[150px] mr-5">
                    <SelectValue placeholder="STAGE" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>STAGE</SelectLabel>
                        <SelectItem value="apple">Doing</SelectItem>
                        <SelectItem value="banana">Done</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <DueDateProManage/>
            <Button className='bg-teal-500 text-white right-0 ml-auto'>
                <AiFillPlusCircle className='mr-3' />
                Create Project
            </Button>
            <DialogAddTask state={null2}/>
        </div>
    )
}