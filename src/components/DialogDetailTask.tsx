"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { TaskSelector } from "@/redux/slices/TaskSlice";
import { useAppDispatch } from "@/redux/store";
import { TypeTask } from "@/types";
import { CalendarClock } from "lucide-react";
import { BiTask } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { useSelector } from "react-redux";
type Props = {
  task: TypeTask;
};

export default function DialogDetailTask({ task }: Props) {
  const dispatch = useAppDispatch();
  const taskReducer = useSelector(TaskSelector);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <p
          //   onClick={handleTask}
          className="text-ellipsis overflow-hidden w-44 text-white hover:underline "
        >
          {task.taskName}
        </p>
        {/* <Button variant="default" size={}>ADD</Button> */}
      </DialogTrigger>
      <DialogContent className=" max-w-[30rem] h-auto">
        <div>
          <DialogHeader className="mb-6">
            <DialogTitle>Detail Task</DialogTitle>
          </DialogHeader>
          <div className=" flex justify-between items-center mb-6 gap-5">
            <span className="flex gap-1 items-center">
              <BiTask size={30} />
              <Label className="text-lg" htmlFor="title">
                Task
              </Label>
            </span>
            <div className="w-[250px]">
              <p className="text-left  break-words w-[15rem]">
                {task.taskName}
              </p>
            </div>
          </div>
          <div className=" flex justify-between items-center mb-6 gap-8">
            <span className="flex gap-1.5 items-center">
              <BsPeopleFill size={28} />
              <Label className="text-lg" htmlFor="title">
                Assignee
              </Label>
            </span>
            <div className="w-[250px]">
              <p className="text-left  break-words w-[20rem]">
                {task.userName}
              </p>
            </div>
          </div>
          <div className=" flex justify-between items-center mb-6 gap-8">
            <span className="flex gap-1.5 items-center">
              <CalendarClock size={28} />
              <Label className="text-lg" htmlFor="title">
                Due date
              </Label>
            </span>
            <div className="w-[250px]">
              <p className="text-left  break-words w-[20rem]">
                {task.createdDate} - {task.dueDate}
              </p>
            </div>
          </div>
          <div className="grid w-full gap-1.5 ">
            <Label className="text-lg" htmlFor="message">
              Task Description
            </Label>
            <div>
              <p className="text-gray-900 break-words w-[25rem]">
                {task.taskDesc}
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
