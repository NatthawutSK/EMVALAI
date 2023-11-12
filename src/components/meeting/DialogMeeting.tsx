import { Button } from "@/components/ui/button";

import { Checkbox } from "@/components/ui/checkbox"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea"
import React from "react";
import { ComboboxMeeting } from "./comboboxMeeting";

type Props = {};


export const DialogMeeting: React.FC<Props> = (props) => {

    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

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
                            <Input id="title" className="col-span-3" placeholder="Title Meeting" />

                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="date" className="text-right">
                                Date
                            </Label>
                            <Input id="date" className="col-span-3" type="date" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="time" className="text-right">
                                Time
                            </Label>
                            <Input
                                id="time"
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
                            <Input id="title" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="title" className="text-right">
                                Description
                            </Label>

                            <Textarea id="title" className="col-span-3" placeholder="Type your meeting description" />
                        </div>
                        {/* <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="role" className="text-right">
                                Role
                            </Label>
                        </div> */}
                        <div className="ml-10 ">
                        <ComboboxMeeting/>
                        </div>
                        
                    </div>
                    <DialogFooter className="flex items-center justify-center">
                        <Button className="bg-teal-500">Create</Button>

                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>

    )
}