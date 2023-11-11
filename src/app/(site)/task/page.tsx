"use client";
import ColumnTask from "@/components/ColumnTask";
import WithAuth from "@/components/WithAuth";
import { UserSelector } from "@/redux/slices/UserSlice";
import { User } from "lucide-react";
import { redirect } from "next/navigation";
import router from "next/router";
import { useEffect, useLayoutEffect } from "react";
import { useSelector } from "react-redux";

enum TaskStateEnum {
  TODO = "TODO",
  DOING = "DOING",
  DONE = "DONE",
}

type Props = {};

const Task = ({}: Props) => {
  return (
    <div className="justify-center min-h-screen ">
      <h1 className="text-4xl font-bold p-5 ml-5">Project Name</h1>
      <div className="min-h-[35rem] flex  justify-evenly">
        <ColumnTask state={TaskStateEnum.TODO} />
        <ColumnTask state={TaskStateEnum.DOING} />
        <ColumnTask state={TaskStateEnum.DONE} />
      </div>
    </div>
  );
};

export default WithAuth(Task);
