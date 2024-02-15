"use client";
import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarDays } from "lucide-react";
import { useState } from "react";

export function DatePicker({ className }) {
  const [date, setDate] = useState({
    from: new Date(),
    to: addDays(new Date(), 10),
  });

  return (
    <div className={cn("grid gap-2 ", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              " justify-start text-left font-normal border border-gray-300",
              !date && "text-muted-foreground border border-gray-300"
            )}
          >
            <CalendarDays className="mr-2 h-4 w-4" />
            <span>Date</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 mr-10" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
