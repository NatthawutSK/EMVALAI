"use client";

import * as React from "react";
import { addDays, format, set } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange, SelectRangeEventHandler } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useAppDispatch } from "@/redux/store";
import { TaskSelector } from "@/redux/slices/TaskSlice";
import { useSelector } from "react-redux";

type Props = {
  className?: React.HTMLAttributes<HTMLDivElement>;
  date: DateRange | undefined;
  addDate: (date: DateRange) => void;
};

export function DueDateTask({ date, addDate, className }: Props) {
  const dispatch = useAppDispatch();
  // const taskReducer = useSelector(TaskSelector);
  // const [date, setDate] = React.useState<DateRange | undefined>({
  //   from: new Date(),
  //   to: new Date(),
  // });

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        {/* <h1>{JSON.stringify(date?.from?.toLocaleDateString())}</h1> */}
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "dd/MM/yy")} -{" "}
                  {format(date.to, "dd/MM/yy")}
                </>
              ) : (
                format(date.from, "dd/MM/yy")
              )
            ) : (
              <span>Pick a date </span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={addDate as SelectRangeEventHandler}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
