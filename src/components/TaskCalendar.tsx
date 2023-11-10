import { cn } from "@/lib/utils";
import { setDraggedTask } from "@/redux/slices/TaskSlice";
import { useAppDispatch } from "@/redux/store";
import { TypeTask } from "@/types";
import React from "react";
import { DropDownTask } from "./DropDownTask";
import { useSelector } from "react-redux";
import { TestSelector } from "@/redux/slices/TestSlice";

type Props = {
  task: TypeTask;
};

export default function Task({ task }: Props) {
  const dispatch = useAppDispatch();
  const TestReducer = useSelector(TestSelector);
  return (
    <div
      className=" bg-sky-500 hover:bg-sky-700 w-full p-6 rounded-md mb-3"
      onClick={() => console.log("clicked")}
      onDragStart={() => dispatch(setDraggedTask(task.id))}
    >
      <div className="text-lg container overflow-hidden ">
        <p
          //   onClick={handleTask}
          className="text-ellipsis overflow-hidden w-44 "
        >
          {task.title} : {TestReducer.count}
        </p>
      </div>
      <DropDownTask />
    </div>
  );
}
