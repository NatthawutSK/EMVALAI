import { cn } from "@/lib/utils";
import { deleteTask, setDraggedTask } from "@/redux/slices/TaskSlice";
import { useAppDispatch } from "@/redux/store";
import { TypeTask } from "@/types";
import { Trash2 } from "lucide-react";
import React, { useState } from "react";
import DialogEditTask from "./DialogEditTask";
import DialogDetailTask from "./DialogDetailTask";
// import { DropDownTask } from "./DropDownTask";

type Props = {
  task: TypeTask;
};

export default function Task({ task }: Props) {
  const dispatch = useAppDispatch();

  return (
    <div
      className=" mt-5 bg-[#558699] text-black p-2 rounded-md flex justify-between items-center hover:bg-[#3e5c6e] transition ease-in-out cursor-pointer"
      draggable
      // onClick={() => console.log("clicked")}
      onDragStart={() => dispatch(setDraggedTask(task.id))}
    >
      <div className="text-lg container overflow-hidden ">
        <DialogDetailTask task={task} />
      </div>
      <div className="flex gap-2">
        <DialogEditTask task={task} />
        <Trash2
          color="white"
          onClick={() => dispatch(deleteTask(task.id))}
          className="mr-2 h-5 w-5 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100"
        />
      </div>
      {/* <DropDownTask task={task} /> */}
    </div>
  );
}
