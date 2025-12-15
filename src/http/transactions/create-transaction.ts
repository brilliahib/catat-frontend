import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { useSession } from "next-auth/react";
import { TransactionType } from "@/validators/transactions/transaction-validator";

export const createTransactionHandler = async (
  body: TransactionType,
  token: string
) => {
  const { data } = await api.post("/transactions", body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const useCreateTransaction = (
  options?: UseMutationOptions<unknown, AxiosError, TransactionType>
) => {
  const { data: session } = useSession();
  return useMutation({
    mutationFn: (body) =>
      createTransactionHandler(body, session?.access_token ?? ""),
    ...options,
  });
};
