import { cn } from "@/lib/utils";
import {
  TaskSelector,
  deleteTask,
  setDraggedTask,
} from "@/redux/slices/TaskSlice";
import { useAppDispatch } from "@/redux/store";
import { TypeTask } from "@/types";
import { Pencil, Trash2 } from "lucide-react";
import React, { useState } from "react";
import DialogEditTask from "./DialogEditTask";
import DialogDetailTask from "./DialogDetailTask";
import { useSelector } from "react-redux";
// import { DropDownTask } from "./DropDownTask";

type Props = {
  task: TypeTask;
};

export default function Task({ task }: Props) {
  const dispatch = useAppDispatch();
  const TaskReducer = useSelector(TaskSelector);

  const handleDelete = async () => {
    const accessToken = localStorage.getItem("accessToken");
    try {
      const response = await fetch(
        `http://localhost:8082/task-service/task/delTask/${task._id}`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      dispatch(deleteTask(task.id));
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className=" mt-5 bg-[#558699] text-black p-2 rounded-md flex justify-between items-center hover:bg-[#3e5c6e] transition ease-in-out cursor-pointer"
      draggable={TaskReducer.disableTask}
      onDragStart={() => dispatch(setDraggedTask(task.id))}
    >
      <div className="text-lg container overflow-hidden ">
        <DialogDetailTask task={task} />
      </div>
      <div className="flex gap-2">
        {TaskReducer.disableTask ? <DialogEditTask task={task} /> : null}

        {TaskReducer.disableTask ? (
          <Trash2
            color="white"
            onClick={() => handleDelete()}
            className="mr-2 h-5 w-5 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100"
          />
        ) : null}
      </div>
    </div>
  );
}
