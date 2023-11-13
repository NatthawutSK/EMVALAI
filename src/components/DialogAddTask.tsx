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
import { TaskSelector, addTask } from "@/redux/slices/TaskSlice";
import { useAppDispatch } from "@/redux/store";
import { TaskStateEnum, TypeTask } from "@/types";
import { useState } from "react";
import { BiTask } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";
import { ComboBoxAssignee } from "./ComboBoxAssignee";
import { CalendarClock, CalendarIcon } from "lucide-react";
import { DueDateTask } from "./DueDateTask";
import { Textarea } from "./ui/textarea";
import { DateRange } from "react-day-picker";
import { useSelector } from "react-redux";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";
import { cn } from "@/lib/utils";
type Props = {
  state: TaskStateEnum;
  projId: string;
};

export default function DialogAddTask({ state, projId }: Props) {
  const dispatch = useAppDispatch();
  const taskReducer = useSelector(TaskSelector);
  const [title, setTitle] = useState("");
  // const [date, setDate] = useState<DateRange | undefined>({
  //   from: new Date(),
  //   to: new Date(),
  // });
  const [date, setDate] = useState<Date>();
  const [desc, setDesc] = useState("");
  const [assignee, setAssignee] = useState("");
  // const addDate = (date: Date) => {
  //   setDate(date);
  // };
  const addAssignee = (value: string) => {
    setAssignee(value);
  };

  const AddTaskDb = async () => {
    const accessToken = localStorage.getItem("accessToken");
    try {
      const response = await fetch("http://localhost:8082/task-service/task", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          taskName: title,
          taskDesc: desc,
          projectId: projId,
          taskStatus: state,
          userId: "test userid",
          dueDate: date ? format(date, "dd/MM/yy") : "",
          createdDate: format(new Date(), "dd/MM/yy"),
          userName: assignee,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data: TypeTask = await response.json();
      dispatch(
        addTask({
          id: uuidv4(),
          taskName: data.taskName,
          taskStatus: data.taskStatus,
          createdDate: data.createdDate,
          dueDate: data.dueDate,
          taskDesc: data.taskDesc,
          userId: data.userId,
          userName: data.userName,
          projectId: data.projectId,
          _id: data._id,
        })
      );
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">ADD</Button>
      </DialogTrigger>
      <DialogContent className=" max-w-[35rem] h-[30rem]">
        <div>
          <DialogHeader className="mb-6">
            <DialogTitle>Add Task</DialogTitle>
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
            <ComboBoxAssignee
              projId={projId}
              assignee={assignee}
              addAssignee={addAssignee}
            />
          </div>
          <div className=" flex justify-between items-center mb-6">
            <span className="flex gap-1 items-center">
              <CalendarClock size={30} />
              <Label htmlFor="title">due date</Label>
            </span>
            <div className="">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[300px] justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "dd/MM/yy") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            {/* <DueDateTask date={date} addDate={addDate} /> */}
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
          <DialogClose asChild>
            <Button onClick={() => AddTaskDb()} type="submit">
              Save
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
