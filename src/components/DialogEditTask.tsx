"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TaskSelector, editTask } from "@/redux/slices/TaskSlice";
import { useAppDispatch } from "@/redux/store";
import { TypeTask } from "@/types";
import { CalendarClock, Pencil } from "lucide-react";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { BiTask } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { ComboBoxAssignee } from "./ComboBoxAssignee";
import { DueDateTask } from "./DueDateTask";
import { Textarea } from "./ui/textarea";

type Props = {
  task: TypeTask;
};

export default function DialogEditTask({ task }: Props) {
  const dispatch = useAppDispatch();
  const taskReducer = useSelector(TaskSelector);
  const [title, setTitle] = useState(task.title);
  let partFrom = task.createDate.split("/");
  const dateForm = new Date();
  dateForm.setFullYear(
    parseInt(partFrom[2], 10),
    parseInt(partFrom[0], 10) - 1,
    parseInt(partFrom[1], 10)
  );
  let partTo = task.dueDate.split("/");
  const dateTo = new Date();
  dateForm.setFullYear(
    parseInt(partTo[2], 10),
    parseInt(partTo[0], 10) - 1,
    parseInt(partTo[1], 10)
  );
  const [date, setDate] = useState<DateRange | undefined>({
    from: dateTo,
    to: dateForm,
  });
  const [desc, setDesc] = useState(task.desc);
  const [assignee, setAssignee] = useState(task.assignee);
  const addDate = (date: DateRange) => {
    setDate(date);
  };
  const addAssignee = (value: string) => {
    setAssignee(value);
  };

  return (
    <Dialog
    //   open={taskReducer.openEdit}
    //   onOpenChange={() => dispatch(openEdit())}
    >
      <DialogTrigger asChild>
        <Pencil
          color="white"
          className="mr-2 h-5 w-5 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100"
        />
      </DialogTrigger>
      <DialogContent className=" max-w-[35rem] h-[30rem]">
        <div>
          <DialogHeader className="mb-6">
            <DialogTitle>Edit Task</DialogTitle>
          </DialogHeader>
          <div className=" flex justify-between items-center mb-3">
            <span className="flex gap-1 items-center">
              <BiTask size={30} />
              <Label htmlFor="title">Task</Label>
            </span>
            <Input
              className="w-[300px]"
              id="title"
              placeholder="new Task..."
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
          <div className=" flex justify-between items-center mb-3">
            <span className="flex gap-1 items-center">
              <BsPeopleFill size={30} />
              <Label htmlFor="title">assignee</Label>
            </span>
            <ComboBoxAssignee assignee={assignee} addAssignee={addAssignee} />
          </div>
          <div className=" flex justify-between items-center mb-6">
            <span className="flex gap-1 items-center">
              <CalendarClock size={30} />
              <Label htmlFor="title">due date</Label>
            </span>
            <DueDateTask date={date} addDate={addDate} />
          </div>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="message">Task Description</Label>
            <Textarea
              className="resize-none"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Type your message here."
              id="message"
              rows={5}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogTrigger asChild>
            <Button
              onClick={() => {
                dispatch(
                  editTask({
                    id: task.id,
                    title,
                    desc,
                    assignee,
                    createDate: dateForm.toLocaleDateString(),
                    dueDate: dateTo.toLocaleDateString(),
                    state: task.state,
                  })
                );
              }}
              type="submit"
            >
              Save
            </Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
