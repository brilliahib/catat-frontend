import { CATEGORY_MAP } from "@/lib/transaction-category";

export const categoryKeys = Object.keys(CATEGORY_MAP) as [
  keyof typeof CATEGORY_MAP,
  ...(keyof typeof CATEGORY_MAP)[]
];
