import { Button } from "@/components/ui/button";

import { Checkbox } from "@/components/ui/checkbox";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { ComboboxMeeting } from "./comboboxMeeting";

import MultiSelect from "../payroll/MultiSelect";
import { roleOption } from "@/types/enumtable";
import { DialogClose } from "@radix-ui/react-dialog";

type Props = {};

export const DialogMeeting: React.FC<Props> = (props) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  console.log(user);
  const name = user.fname + " " + user.lname;
  const [created_by, setCreatedBy] = React.useState(name);
  const [description, setDescription] = React.useState("");
  const [role, setRole] = React.useState<string[]>([]);
  const { toast: showToast } = useToast();

  const postData = async () => {
    // Perform localStorage action
    const accessToken = localStorage.getItem("accessToken");
    if (title === "") {
      showToast({
        title: "Plase fill the form",
        description: "Title is required",
        variant: "destructive",
      });
    } else if (date === "") {
      showToast({
        title: "Plase fill the form",
        description: "Date is required",
        variant: "destructive",
      });
    } else if (time === "") {
      showToast({
        title: "Plase fill the form",
        description: "Time is required",
        variant: "destructive",
      });
    } else if (description === "") {
      showToast({
        title: "Plase fill the form",
        description: "Description is required",
        variant: "destructive",
      });
    } else if (created_by === "") {
      showToast({
        title: "Plase fill the form",
        description: "Created by is required",
        variant: "destructive",
      });
    } else if (role.length === 0) {
      showToast({
        title: "Plase fill the form",
        description: "Role is required",
        variant: "destructive",
      });
    } else {
      try {
        console.log(
          JSON.stringify({
            meet_title: title,
            meet_description: description,
            meet_date: date + "T" + time + ":00.000Z",
            created_by: created_by,
            role: role,
          })
        );
        const res = await fetch(
          "http://localhost:8082/meeting-service/meeting",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}	`,
            },
            body: JSON.stringify({
              meet_title: title,
              meet_description: description,
              meet_date: date + "T" + time + ":00.000Z",
              created_by: created_by,
              role: role,
            }),
          }
        );
        console.log(res);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await res.json();
        return data;
      } catch (error) {
        console.error(error);
        return error;
      }
    }
  };

  return (
    <div className="ml-auto  ">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="bg-[#14b8a6] text-white">
            Create Meeting
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle className="text-center">Add Meeting</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title Meeting
              </Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="col-span-3"
                placeholder="Title Meeting"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="date" className="text-right">
                Date
              </Label>
              <Input
                id="date"
                className="col-span-3"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                type="date"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="time" className="text-right">
                Time
              </Label>
              <Input
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="col-span-3"
                type="time"
                min="00:00"
                max="23:59"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Created By
              </Label>
              <Input
                id="title"
                value={created_by}
                onChange={(e) => setCreatedBy(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Description
              </Label>

              <Textarea
                id="title"
                className="col-span-3"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Type your meeting description"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="role" className="text-right">
                Role
              </Label>
              <div>
                <MultiSelect
                  title={"Role"}
                  options={roleOption}
                  setVal={setRole}
                />
              </div>
            </div>
            <div className="ml-10 justify-center text-right ">
              {/* <ComboboxMeeting /> */}
            </div>
          </div>
          <DialogClose className="flex items-center justify-center">
            <Button className="bg-teal-500" onClick={() => postData()}>
              Create
            </Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  );
};
