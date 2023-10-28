"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addTask } from "@/redux/slices/TaskSlice";
import { useAppDispatch } from "@/redux/store";
import { TaskStateEnum } from "@/types";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
type Props = {
  state: TaskStateEnum;
};

export default function DialogAddTask({ state }: Props) {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState("");
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Add</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          {/* <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription> */}
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Task {state}
            </Label>
            <Input
              id="title"
              placeholder="new Task..."
              className="col-span-3"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
          {/* <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div> */}
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              onClick={() =>
                dispatch(
                  addTask({
                    id: uuidv4(),
                    title: title,
                    state: state,
                  })
                )
              }
              type="submit"
            >
              Save
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
