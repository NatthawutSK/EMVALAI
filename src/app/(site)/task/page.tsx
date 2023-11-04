"use client";
import ColumnTask from "@/components/ColumnTask";
import { Button } from "@/components/ui/button";
import { TestSelector, addCount } from "@/redux/slices/TestSlice";
import { useAppDispatch } from "@/redux/store";

import React from "react";
import { useSelector } from "react-redux";

enum TaskStateEnum {
  TODO = "TODO",
  DOING = "DOING",
  DONE = "DONE",
}

type Props = {};

export default function Task({}: Props) {
  const TestReducer = useSelector(TestSelector);
  const dispatch = useAppDispatch();

  return (
    <div className="justify-center min-h-screen ">
      <h1 className="text-4xl font-bold p-5 ml-5">
        Project Name {TestReducer.count}
      </h1>
      <Button onClick={() => dispatch(addCount(5))}>test click</Button>
      <div className="min-h-[35rem] flex  justify-evenly">
        <ColumnTask state={TaskStateEnum.TODO} />
        <ColumnTask state={TaskStateEnum.DOING} />
        <ColumnTask state={TaskStateEnum.DONE} />
      </div>
    </div>
  );
}
