"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import Task from "./Task";
import { useAppDispatch } from "@/redux/store";
import { useSelector } from "react-redux";
import {
  TaskSelector,
  moveTask,
  setDraggedTask,
} from "@/redux/slices/TaskSlice";
import { Input } from "./ui/input";
import { TaskStateEnum } from "@/types";
import DialogAddTask from "./DialogAddTask";
import { ScrollArea } from "./ui/scroll-area";
import DialogEditTask from "./DialogEditTask";

const MockTask = [
  {
    task: "task1",
  },
  {
    task: "task2",
  },
];

type Props = {
  state: TaskStateEnum;
};

export default function ColumnTask({ state }: Props) {
  const [drop, setDrop] = useState(false);
  const dispatch = useAppDispatch();
  const TaskReducer = useSelector(TaskSelector);
  const tasks = TaskReducer.tasks.filter((task) => task.state === state);
  const draggedTask = TaskReducer.draggedTask;
  // console.log(TaskReducer.tasks);

  return (
    <div
      className={cn("min-h-[35rem]  min-w-[23rem]  my-0 p-3  border-[4px]", {
        "border-black border-dashed": drop,
      })}
      onDragOver={(e) => {
        setDrop(true);
        e.preventDefault();
      }}
      onDragLeave={(e) => {
        setDrop(false);
        e.preventDefault();
      }}
      onDrop={() => {
        setDrop(false);
        console.log("dropped");

        if (draggedTask) {
          dispatch(moveTask({ id: draggedTask, state: state }));
          dispatch(setDraggedTask(""));
        }
      }}
    >
      <div className="flex justify-between items-center pb-4">
        <h1 className="font-bold text-lg">
          {state} : {tasks.length}
        </h1>
        <DialogAddTask state={state} />
        {/* <DialogEditTask /> */}
        {/* <button onClick={handleOpen}>Add</button> */}
      </div>
      <ScrollArea className="h-5/6 w-full" style={{ maxHeight: 500 }}>
        {tasks.map((task, index) => (
          <Task task={task} key={index} />
        ))}
      </ScrollArea>
    </div>
  );
}
