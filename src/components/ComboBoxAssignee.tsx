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
};

export function ComboBoxAssignee({ assignee, addAssignee }: Props) {
  const [open, setOpen] = React.useState(false);

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
            ? users.find((user) => user.value === assignee)?.value
            : "Select user..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Search user..." />
          <CommandEmpty>No user found.</CommandEmpty>
          <CommandGroup>
            {users.map((user) => (
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
