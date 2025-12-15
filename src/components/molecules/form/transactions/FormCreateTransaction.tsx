import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCreateTransaction } from "@/http/transactions/create-transaction";
import { CATEGORY_MAP } from "@/lib/transaction-category";
import {
  transactionSchema,
  TransactionType,
} from "@/validators/transactions/transaction-validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface FormCreateTransactionProps {
  onSuccessClose?: () => void;
}

export default function FormCreateTransaction({
  onSuccessClose,
}: FormCreateTransactionProps) {
  const [open, setOpen] = useState(false);
  const [month, setMonth] = useState<Date | undefined>(new Date());
  const [amount, setAmount] = useState("0");

  const formatDate = (date?: Date) => {
    if (!date) return "";
    return date.toISOString().split("T")[0];
  };

  const handlePress = (key: string) => {
    if (key === "AC") return setAmount("0");
    if (key === "DEL")
      return setAmount((prev) => (prev.length <= 1 ? "0" : prev.slice(0, -1)));

    if (key === "000") {
      return setAmount((prev) => (prev === "0" ? "0" : prev + "000"));
    }

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

  const form = useForm<TransactionType>({
    resolver: zodResolver(transactionSchema),
    defaultValues: {
      amount: 0,
      type: "",
      notes: "",
      date: new Date(),
    },
    mode: "onChange",
  });

  useEffect(() => {
    form.setValue("amount", Number(amount), {
      shouldValidate: true,
      shouldDirty: true,
    });
  }, [amount, form]);

  const queryClient = useQueryClient();

  const { mutate: createTransactionHandler } = useCreateTransaction({
    onError: () => {
      toast.error("Gagal menambahkan transaksi baru!");
    },
    onSuccess: () => {
      toast.success("Berhasil menambahkan transaksi baru!");
      queryClient.invalidateQueries({
        queryKey: ["get-all-transactions"],
      });
      queryClient.invalidateQueries({
        queryKey: ["get-total-amount-this-month"],
      });

      onSuccessClose?.();
      form.reset();
      setAmount("0");
    },
  });

  const onSubmit = (body: TransactionType) => {
    createTransactionHandler({ ...body });
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="text-4xl font-semibold md:h-36 h-12 flex items-center justify-center gap-1 mb-8">
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

        <ScrollArea className="h-[50vh]">
          <div className="space-y-3">
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full bg-[#f7f7f7] border-0 rounded-lg py-5">
                        <SelectValue placeholder="Select Category" />
                      </SelectTrigger>

                      <SelectContent>
                        {Object.entries(CATEGORY_MAP).map(([key, cat]) => (
                          <SelectItem key={key} value={key}>
                            <div className="flex items-center gap-3">
                              <div
                                className={`flex items-center justify-center w-8 h-8 rounded-full ${cat.iconBg} ${cat.iconColor}`}
                              >
                                <span className="text-sm">{cat.icon}</span>
                              </div>
                              <span className="text-sm">{cat.title}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Popover open={open} onOpenChange={setOpen}>
                      <PopoverTrigger asChild>
                        <div className="relative w-full">
                          <Input
                            value={field.value ? formatDate(field.value) : ""}
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
                          selected={field.value}
                          month={month}
                          onMonthChange={setMonth}
                          onSelect={(d) => {
                            field.onChange(d);
                            setOpen(false);
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Notes..."
                      className="rounded-lg bg-[#f7f7f7] py-5 border-0 text-sm"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-4 gap-2 mt-8 pb-4">
              {KEYS.flat().map((key) => {
                const isSubmit = key === "OK";

                return (
                  <Button
                    key={key}
                    type={isSubmit ? "submit" : "button"}
                    onClick={isSubmit ? undefined : () => handlePress(key)}
                    className={`h-14 rounded-xl text-lg ${
                      isSubmit
                        ? "bg-primary text-white hover:bg-primary/90"
                        : ""
                    } ${key === "0" ? "col-span-2" : ""}`}
                    variant="outline"
                  >
                    {key === "DEL" ? "⌫" : key}
                  </Button>
                );
              })}
            </div>
          </div>
        </ScrollArea>
      </form>
    </Form>
  );
}
