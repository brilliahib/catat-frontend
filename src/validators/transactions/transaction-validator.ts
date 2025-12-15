import { categoryKeys } from "@/utils/transaction-category-key";
import z from "zod";

export const transactionSchema = z.object({
  amount: z.number().min(1, "Amount must be at least 1"),
  type: z.enum(categoryKeys, {
    message: "Silakan pilih kategori transaksi yang tersedia.",
  }),
  notes: z.string().max(255).optional(),
  date: z.date(),
});

export type TransactionType = z.infer<typeof transactionSchema>;
