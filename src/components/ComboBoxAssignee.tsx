"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { set } from "date-fns";
import { type } from "os";

type User = {
  value: string;
};
// get from member in project service
// {
//   userId;
//   fname;
//   lname;
// }
const users = [
  {
    value: "natthawut kongkiatpaiboon",
  },
  {
    value: "tada kongkiatpaiboon",
  },
  {
    value: "sanpich kongkiatpaiboon",
  },
  {
    value: "putiwat kongkiatpaiboon",
  },
  {
    value: "lertnarit kongkiatpaiboon",
  },
];
type Props = {
  assignee: string;
  addAssignee: (value: string) => void;
  projId: string;
};

export function ComboBoxAssignee({ assignee, addAssignee, projId }: Props) {
  const [open, setOpen] = React.useState(false);
  const [member, setMember] = useState<User[]>([]);

  const fetchMember = async () => {
    const accessToken = localStorage.getItem("accessToken");
    try {
      const response = await fetch(
        `http://localhost:8055/getAll/member/${projId}`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: `${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const newMembers = data.map((item: any) => ({
        value:
          item.firstName.toLowerCase() + " " + item.last_name.toLowerCase(),
      }));
      console.log(newMembers);
      setMember(newMembers);

      // setMember((prev: { value: string }[]) => [...prev, ...newMembers]);
      console.log(JSON.stringify(data));
      // dispatch(setTask(data));
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    fetchMember();
  }, []);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild onSelect={(e) => e.preventDefault()}>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[300px] justify-between"
        >
          {assignee
            ? member.find((user) => user.value === assignee)?.value
            : "Select user..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Search user..." />
          <CommandEmpty>No user found.</CommandEmpty>
          <CommandGroup>
            {member.map((user) => (
              <CommandItem
                key={user.value}
                value={user.value}
                onSelect={(currentValue) => {
                  addAssignee(currentValue === assignee ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    assignee === user.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {user.value}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
