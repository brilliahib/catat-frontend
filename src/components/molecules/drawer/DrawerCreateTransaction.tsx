"use client";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import FormCreateTransaction from "../form/transactions/FormCreateTransaction";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function DrawerCreateTransaction() {
  const [open, setOpen] = useState(false);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild className="cursor-pointer">
        <div className="flex flex-col justify-center gap-2 items-center bg-primary rounded-full md:p-5 p-3 text-white">
          <Plus className="h-7 w-7" />
        </div>
      </DrawerTrigger>

      <DrawerContent className="w-full max-w-lg mx-auto min-h-[70vh] pb-10">
        <DrawerHeader className="font-semibold">
          Create Transaction
        </DrawerHeader>

        <div className="px-4 space-y-4">
          <FormCreateTransaction onSuccessClose={() => setOpen(false)} />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
