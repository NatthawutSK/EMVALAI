"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon } from "lucide-react";
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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { LucideListFilter } from "lucide-react";
import { AiFillPlusCircle } from "react-icons/ai";
import DataTable from "@/components/tanstack-table/data_table";
import { columns } from "@/components/tanstack-table/columnsProManageTable";

type Props = {};
const data = [
  {
    project_id: 1,
    project_name: "SOP ",
    emp_name: "captain",
    project_status: "Doing",
    project_date_start: "8 / 20 / 2024",
    project_date_end: "12 / 20 / 2043",
  },
  {
    project_id: 2,
    project_name: "SOP U",
    emp_name: "captain",
    project_status: "Done",
    project_date_start: "8 / 20 / 2024",
    project_date_end: "12 / 20 / 2043",
  },
  {
    project_id: 3,
    project_name: "SOP M",
    emp_name: "captain",
    project_status: "Doing",
    project_date_start: "8 / 20 / 2024",
    project_date_end: "12 / 20 / 2043",
  },
  {
    project_id: 4,
    project_name: "SOP K",
    emp_name: "captain",
    project_status: "Done",
    project_date_start: "8 / 20 / 2024",
    project_date_end: "12 / 20 / 2043",
  },
];
export default function Page({}: Props) {
  const [dateStart, setDateStart] = React.useState<Date>();
  const [dateEnd, setDateEnd] = React.useState<Date>();
  const [selectedTeam, setSelectedTeam] = React.useState<string[]>([]);
  return (
    <div>
      <div className="text-4xl font-bold p-5 ml-5">Project Management</div>
      <div className=" h-screen relative gap-5 p-10">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              className="bg-teal-500 text-white right-0 ml-auto mb-5"
              variant="outline"
            >
              <AiFillPlusCircle className="mr-3" />
              Create Project
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Create New Project</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Title Project
                </Label>
                <Input
                  id="name"
                  className="col-span-3"
                  placeholder="Your Project"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="dateEnd">Start Project</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[280px] justify-start text-left font-normal",
                          !dateStart && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {dateStart ? format(dateStart, "PPP") : <span>Date Start</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={dateStart}
                        onSelect={setDateStart}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="dateEnd">End Project</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[280px] justify-start text-left font-normal",
                          !dateEnd && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {dateEnd ? format(dateEnd, "PPP") : <span>Date End</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={dateEnd}
                        onSelect={setDateEnd}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Project Chief
                </Label>
                <Select>
                    <SelectTrigger id="reason">
                      <SelectValue placeholder="Selected Supervisor"/>
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="sick">Sick</SelectItem>
                    </SelectContent>
                  </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Project Team
                </Label>
                <Select>
                    {/* <SelectTrigger id="reason">
                      <SelectValue placeholder="Selected Employee"/>
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="sick"></SelectItem>
                    </SelectContent> */}
                    <SelectTrigger id="team">
                      <SelectValue>
                        {selectedTeam.length === 0
                          ? 'Select Project Team'
                          : selectedTeam.join(', ')}
                      </SelectValue>
                    </SelectTrigger>
                    
                  </Select>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Create Project</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
