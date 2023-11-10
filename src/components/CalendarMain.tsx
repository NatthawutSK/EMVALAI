"use client"

import * as React from "react"
 
import { CalendarM } from "@/components/ui/calendarm"
 
export function CalendarMain() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
 
  return (
    <CalendarM
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  )
}