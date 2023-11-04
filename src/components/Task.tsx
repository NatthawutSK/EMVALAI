import { cn } from "@/lib/utils";
import { setDraggedTask } from "@/redux/slices/TaskSlice";
import { useAppDispatch } from "@/redux/store";
import { TypeTask } from "@/types";
import React from "react";
import { DropDownTask } from "./DropDownTask";

type Props = {
  task: TypeTask;
};

export default function Task({ task }: Props) {
  const dispatch = useAppDispatch();

  return (
    <div
      className=" mt-5 bg-yellow-100 text-black p-2 rounded-md flex justify-between items-center"
      draggable
      onClick={() => console.log("clicked")}
      onDragStart={() => dispatch(setDraggedTask(task.id))}
    >
      <div className="text-lg container overflow-hidden ">
        <p
          //   onClick={handleTask}
          className="text-ellipsis overflow-hidden w-44 "
        >
          {task.title}
        </p>
      </div>
      <DropDownTask taskId={task.id} />
    </div>
  );
}
