"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { format } from "date-fns"
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {};

export default function Leave({}: Props) {

  const [dateStart, setDateStart] = React.useState<Date>();
  const [dateEnd, setDateEnd] = React.useState<Date>();
  const [selectedReason, setSelectedReason] = React.useState("");

  return (
    <div>
      <div className="text-4xl font-bold p-5 ml-5">Leave</div>
      <div className="flex items-center justify-center">
        <Card className="w-[500px]">
          <CardHeader>
            <CardTitle className="text-center">Leave Request</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label>Reason for request</Label>
                  <Select value={selectedReason} onValueChange={setSelectedReason}>
                    <SelectTrigger id="reason">
                      <SelectValue placeholder="Your reason"/>
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="sick">Sick</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="vacation">Vacation</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {selectedReason === 'other' && (
                    <Input
                      type="text"
                      placeholder="Specify other reason"
                    />
                 )}
                  
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="dateEnd">Date Start</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[280px] justify-start text-left font-normal",
                          !dateStart && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {dateStart ? format(dateStart, "PPP") : <span>Pick a Date Start</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={dateStart}
                        onSelect={setDateStart}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="dateEnd">Date End</Label>
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
                        {dateEnd ? format(dateEnd, "PPP") : <span>Pick a Date End</span>}
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
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="evidence">Evidence</Label>
                  <Input id="file" placeholder="" type="file" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="note">Note</Label>
                  <Textarea placeholder="Type your note here." />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex items-center justify-center">
            <Button className="bg-teal-500">Send Request</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
