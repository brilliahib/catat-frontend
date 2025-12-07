"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarIcon, Plus } from "lucide-react";

export default function DrawerCreateTransaction() {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [month, setMonth] = useState<Date | undefined>(new Date());
  const [value, setValue] = useState("");

  const [amount, setAmount] = useState("0");

  const formatDate = (date?: Date) => {
    if (!date) return "";
    return date.toISOString().split("T")[0];
  };

  // 🧮 Kalkulator handling
  const handlePress = (key: string) => {
    if (key === "AC") return setAmount("0");
    if (key === "DEL")
      return setAmount((prev) => (prev.length <= 1 ? "0" : prev.slice(0, -1)));

    if (key === "000") {
      return setAmount((prev) => (prev === "0" ? "0" : prev + "000"));
    }

    // prevent leading zero spam
    if (amount === "0" && key !== ".") {
      return setAmount(key);
    }

    setAmount((prev) => prev + key);
  };

  const KEYS = [
    ["AC", "×", "÷", "DEL"],
    ["7", "8", "9", "-"],
    ["4", "5", "6", "+"],
    ["1", "2", "3", "OK"],
    ["0", "000"],
  ];

  return (
    <Drawer>
      <DrawerTrigger asChild className="cursor-pointer">
        <div className="flex flex-col justify-center gap-2 items-center bg-primary rounded-full p-5 text-white">
          <Plus className="h-7 w-7" />
        </div>
      </DrawerTrigger>

      <DrawerContent className="w-full max-w-lg mx-auto min-h-[95vh] pb-10">
        <DrawerHeader className="font-semibold">
          Create Transaction
        </DrawerHeader>

        <div className="px-4 space-y-4">
          <div className="text-4xl font-semibold md:h-36 h-12 flex items-center justify-center gap-1">
            <span className="text-base font-normal text-muted-foreground">
              Rp
            </span>
            <AnimatePresence mode="wait">
              <motion.span
                key={amount}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.15 }}
              >
                {Number(amount).toLocaleString("id-ID")}
              </motion.span>
            </AnimatePresence>
          </div>

          <Select>
            <SelectTrigger className="w-full bg-[#f7f7f7] border-0 rounded-lg py-5 ">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent />
          </Select>

          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <div className="relative w-full">
                <Input
                  id="date"
                  value={value}
                  placeholder="Select date"
                  className="bg-[#f7f7f7] text-sm border-0 py-5 rounded-lg pr-10 cursor-pointer"
                  readOnly
                />
                <CalendarIcon className="absolute top-1/2 right-2 size-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
              </div>
            </PopoverTrigger>

            <PopoverContent
              className="w-auto overflow-hidden p-0 shadow-sm rounded-xl"
              align="center"
            >
              <Calendar
                mode="single"
                selected={date}
                className="rounded-xl"
                captionLayout="dropdown"
                month={month}
                onMonthChange={setMonth}
                onSelect={(d) => {
                  setDate(d);
                  setValue(formatDate(d));
                  setOpen(false);
                }}
              />
            </PopoverContent>
          </Popover>

          <Input
            placeholder="Notes..."
            className="rounded-lg bg-[#f7f7f7] py-5 border-0 text-sm"
          />

          <div className="grid grid-cols-4 gap-2">
            {KEYS.flat().map((key) => (
              <Button
                key={key}
                onClick={() => handlePress(key)}
                className={`h-14 rounded-xl text-lg ${
                  key === "OK"
                    ? "col-span-1 bg-primary text-white hover:bg-primary/90"
                    : key === "000"
                    ? "col-span-1"
                    : ""
                } ${key === "0" ? "col-span-2" : ""}`}
                variant="outline"
              >
                {key === "DEL" ? "⌫" : key}
              </Button>
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
