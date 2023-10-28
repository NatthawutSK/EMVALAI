import ColumnTask from "@/components/ColumnTask";
import React from "react";

enum TaskStateEnum {
  TODO = "TODO",
  DOING = "DOING",
  DONE = "DONE",
}

type Props = {};

export default function Task({}: Props) {
  return (
    <div className="min-h-screen flex justify-center pt-28 pb-10">
      <ColumnTask state={TaskStateEnum.TODO} />
      <ColumnTask state={TaskStateEnum.DOING} />
      <ColumnTask state={TaskStateEnum.DONE} />
    </div>
  );
}
