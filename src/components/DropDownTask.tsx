import { Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { deleteTask } from "@/redux/slices/TaskSlice";
import { useAppDispatch } from "@/redux/store";
import { TypeTask } from "@/types";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import DialogEditTask from "./DialogEditTask";
export function DropDownTask({ task }: { task: TypeTask }) {
  const dispatch = useAppDispatch();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="top-0 right-0 relative ">
          <Button variant="ghost" size={"icon"}>
            {" "}
            <BsThreeDots />
          </Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-20">
        <DropdownMenuItem
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <DialogEditTask task={task} />
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => dispatch(deleteTask(task.id))}>
          <Trash2 className="mr-2 h-4 w-4" />
          <span>delete</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
