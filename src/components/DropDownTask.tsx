import { Pencil, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { BsThreeDots } from "react-icons/bs";
import { useAppDispatch } from "@/redux/store";
import { deleteTask } from "@/redux/slices/TaskSlice";

export function DropDownTask({ taskId }: { taskId: string }) {
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
        <DropdownMenuItem>
          <Pencil className="mr-2 h-4 w-4" />
          <span>edit</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => dispatch(deleteTask(taskId))}>
          <Trash2 className="mr-2 h-4 w-4" />
          <span>delete</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
