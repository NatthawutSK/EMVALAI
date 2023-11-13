import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { cn } from "@/lib/utils";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns"
import { ComboboxProject } from "./comboboxProject";
type Props = {
    emp: any[]
};


export const DialogProject: React.FC<Props> = ({ emp }) => {
    const [dateEnd, setDateEnd] = React.useState<Date>();
    const [selectedTeam, setSelectedTeam] = React.useState<string[]>([]);
    return (
        <div className="ml-auto ">
            <Dialog>
                <DialogTrigger asChild >
                    <Button
                        className="bg-teal-500 text-white"
                        variant="outline"
                    >
                        <AiFillPlusCircle className="mr-3" />
                        Create Project
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px] ">
                    <DialogHeader>
                        <DialogTitle>Create New Project</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Title Project
                            </Label>
                            <Input
                                id="name"
                                className="col-span-3"
                                placeholder="Your Project"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label className="text-right" htmlFor="dateEnd">Due date</Label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant={"outline"}
                                        className={cn(
                                            "w-[280px] justify-start text-left font-normal",
                                            !dateEnd && "text-muted-foreground"
                                        )}
                                    >
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {dateEnd ? format(dateEnd, "PPP") : <span>Due date</span>}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <Calendar
                                        mode="single"
                                        selected={dateEnd}
                                        onSelect={setDateEnd}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Project Chief
                            </Label>
                            <Select>
                                <SelectTrigger id="reason">
                                    <SelectValue placeholder="Selected Supervisor" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    {emp
                                        .filter((employee) => employee.role === "supervisor")
                                        .map((supervisor) => (
                                            <SelectItem key={supervisor._id} value={supervisor._id}>
                                                {supervisor.fname + " " + supervisor.lname}
                                            </SelectItem>
                                        ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Project Team
                            </Label>
                            <ComboboxProject />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Create Project</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}
