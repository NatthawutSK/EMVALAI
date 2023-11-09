"use client";
import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

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
import {AiFillPlusCircle} from "react-icons/ai";
type Props = {}

export default function Page({ }: Props) {
  return (
    <div className='justify-center min-h-screen '>
      <h1 className="text-4xl font-bold p-5 ml-5">
        Project Management
      </h1>
      <div className='className="min-h-[35rem] w-4/5 mx-auto mt-10'>
        <div className='flex '>
          <LucideListFilter size={32} className='mr-5'/>
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
          <Select>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="DATE" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Date</SelectLabel>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button className='bg-teal-500 text-white right-0 ml-auto'>
            <AiFillPlusCircle className='mr-3'/>
            Create Project
          </Button>
        </div>

        <Table className='border-t-2 mt-10 '>
          <TableHeader>
              <TableHead className=''>PROJECT</TableHead>
              <TableHead>SUPERVISOR</TableHead>
              <TableHead>PROJECT TYPE</TableHead>
              <TableHead>STAGE</TableHead>
              <TableHead>DUE DATE</TableHead>
          </TableHeader>
          <TableBody className='border shadow-lg'>
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
    </div>

  );
}