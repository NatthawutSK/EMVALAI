"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TaskSelector, editTask } from "@/redux/slices/TaskSlice";
import { useAppDispatch } from "@/redux/store";
import { TypeTask } from "@/types";
import { CalendarClock, CalendarIcon, Pencil } from "lucide-react";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { BiTask } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { ComboBoxAssignee } from "./ComboBoxAssignee";
import { DueDateTask } from "./DueDateTask";
import { Textarea } from "./ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";

type Props = {
  task: TypeTask;
};

export default function DialogEditTask({ task }: Props) {
  const dispatch = useAppDispatch();
  const taskReducer = useSelector(TaskSelector);
  const [title, setTitle] = useState(task.taskName);
  // let datePart = task.dueDate.split("/");
  // const dateForm = new Date();
  // dateForm.setFullYear(
  //   parseInt(datePart[2], 10),
  //   parseInt(datePart[0], 10) - 1,
  //   parseInt(datePart[1], 10)
  // );
  const [day, month, year] = task.dueDate.split("/").map(Number);

  // Adjust the year if needed (e.g., assuming '21' refers to 2021)
  const adjustedYear = year >= 0 && year <= 21 ? 2000 + year : 1900 + year;

  // Create a new Date object
  const formattedDate = new Date(adjustedYear, month - 1, day);

  const [date, setDate] = useState<Date>(formattedDate);

  const [desc, setDesc] = useState(task.taskDesc);
  const [assignee, setAssignee] = useState(task.userId);
  const addAssignee = (value: string) => {
    setAssignee(value);
  };

  return (
    <Dialog

    //   open={taskReducer.openEdit}
    //   onOpenChange={() => dispatch(openEdit())}
    >
      <DialogTrigger asChild>
        <Pencil
          color="white"
          className="mr-2 h-5 w-5 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100"
        />
      </DialogTrigger>
      <DialogContent className=" max-w-[35rem] h-[30rem]">
        <div>
          <DialogHeader className="mb-6">
            <DialogTitle>Edit Task</DialogTitle>
          </DialogHeader>
          <div className=" flex justify-between items-center mb-3">
            <span className="flex gap-1 items-center">
              <BiTask size={30} />
              <Label htmlFor="title">Task</Label>
            </span>
            <Input
              className="w-[300px]"
              id="title"
              placeholder="new Task..."
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
          <div className=" flex justify-between items-center mb-3">
            <span className="flex gap-1 items-center">
              <BsPeopleFill size={30} />
              <Label htmlFor="title">assignee</Label>
            </span>
            <ComboBoxAssignee assignee={assignee} addAssignee={addAssignee} />
          </div>
          <div className=" flex justify-between items-center mb-6">
            <span className="flex gap-1 items-center">
              <CalendarClock size={30} />
              <Label htmlFor="title">due date</Label>
            </span>
            {/* <DueDateTask date={date} addDate={addDate} /> */}
            <div className="">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[300px] justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {/* <span>{format(date, "dd/MM/yy")}</span> */}
                    {/* <span>{JSON.stringify(formattedDate)}</span> */}
                    {date ? format(date, "dd/MM/yy") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(date) => setDate(date as Date)}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="message">Task Description</Label>
            <Textarea
              className="resize-none"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Type your message here."
              id="message"
              rows={5}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogTrigger asChild>
            <Button
              onClick={() => {
                dispatch(
                  editTask({
                    id: task.id,
                    taskName: title,
                    taskDesc: desc,
                    userName: assignee,
                    createdDate: task.createdDate,
                    dueDate: date ? format(date, "dd/MM/yy") : "",
                    taskStatus: task.taskStatus,
                    projectId: task.projectId,
                    userId: task.userId,
                    _id: task._id,
                  })
                );
              }}
              type="submit"
            >
              Save
            </Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
