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
import { Checkbox } from "@/components/ui/checkbox"

type Props = {
    emp: any[]
};


export const DialogProject: React.FC<Props> = ({ emp }) => {
    const [dateEnd, setDateEnd] = React.useState<Date>();
    const [selectedTeam, setSelectedTeam] = React.useState<string[]>([]);
    const accessToken = localStorage.getItem("accessToken");
    const [selectedSupervisor, setSelectedSupervisor] = React.useState<string | undefined>(undefined);
    const [selectMember, setSelectMember] = React.useState<string | undefined>(undefined);
    const createProject = async (data: []) => {
        try {
            const response = await fetch("http://127.0.0.1:8055/create/project", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const responseData = await response.json();
            console.log("Project created successfully:", responseData);
        } catch (error) {
            console.error("Error creating project:", error);
        }
    };

    const handleCreateProject = () => {
        const projectData = {
            title: document.getElementById("name").value,
            dueDate: dateEnd,
            supervisor: selectedSupervisor,
            member: document.getElementById("emp").value,
        };
        console.log(projectData)
        // createProject(projectData);
    };


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
                                <SelectTrigger id="supervisor">
                                    <SelectValue placeholder="Selected Supervisor" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    {emp
                                        .filter((employee) => employee.role !== "Employee")
                                        .slice(0, 5)
                                        .map((supervisor) => (
                                            <SelectItem key={supervisor._id}
                                                value={supervisor._id}
                                                onSelect={() => setSelectedSupervisor(supervisor._id)}
                                            >
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
                            <div className="flex items-center space-x-2">
                                <Checkbox id="emp" />
                                <label
                                    htmlFor="emp"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Accept terms and conditions
                                </label>
                            </div>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button onClick={handleCreateProject} type="submit">Create Project</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}
