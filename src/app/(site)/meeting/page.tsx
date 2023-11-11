"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import DataTable from "@/components/tanstack-table/data_table";
import { columns } from "@/components/tanstack-table/columnsMeeting";

type Props = {};

const Meeting = (props: Props) => {
    const meeting = [
        {
           meet_title: "UI Meeting",
           meet_description: "คุยงานออกแบบ UI",
           meet_date: "11/11/2023",
           meet_time: "13.30",
           created_by: "Alex Lee",
        },
       {
        meet_title: "Daily Meeting",
        meet_description: "คุยๆงานๆ",
        meet_date: "13/11/2023",
        meet_time: "08.30",
        created_by: "Archan Palanuphat",
     },
      ]
  return (
    <div>
      <div className="text-4xl font-bold p-5 ml-5">Meeting</div>
      <div className="mb-5 ml-10 flex">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="bg-[#14b8a6] text-white">
              Add Meeting
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle className="text-center">Add Meeting</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right" placeholder="Title">
                  Title Meeting
                </Label>
                <Input id="title" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="date" className="text-right">
                  Date
                </Label>
                <Input id="date" className="col-span-3" type="date" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="time" className="text-right">
                  Time
                </Label>
                <Input
                  id="time"
                  className="col-span-3"
                  type="time"
                  min="00:00"
                  max="23:59"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="role" className="text-right">
                  Role
                </Label>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Role" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                        {/* <SelectLabel>Fruits</SelectLabel> */}
                        <SelectItem value="manager">Manager</SelectItem>
                        <SelectItem value="supervisor">Supervisor</SelectItem>
                        <SelectItem value="employee">Employee</SelectItem>
                        <SelectItem value="hr">HR</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">
                  Created By
                </Label>
                <Input id="title" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">
                  Description
                </Label>
                <Input id="title" className="col-span-3" />
              </div>
            </div>
            <DialogFooter className="flex items-center justify-center">
              <Button type="submit" className="bg-[#14b8a6]">Add</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <DataTable columns={columns} data={meeting}/>
    </div>
  );
};

export default Meeting;
