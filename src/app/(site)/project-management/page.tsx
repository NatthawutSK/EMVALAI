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

type Props = {}

export default function Page({ }: Props) {
  return (
    <div className='justify-center min-h-screen'>
      <h1 className="text-4xl font-bold p-5 ml-5">
        Project Management
      </h1>
      <div className='className="min-h-[35rem] flex  justify-evenly'>
        <div>
          <Input placeholder="Search..." />
          <Select>
            <SelectTrigger className="w-[180px]">
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
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="DATE" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Date</SelectLabel>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button className='bg-green-500 text-white'>Create Project</Button>
        </div>

        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead >PROJECT</TableHead>
              <TableHead>SUPERVISOR</TableHead>
              <TableHead>PROJECT TYPE</TableHead>
              <TableHead>STAGE</TableHead>
              <TableHead>DUE DATE</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
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