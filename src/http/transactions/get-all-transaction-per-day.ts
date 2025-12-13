import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { TransactionPerDay } from "@/types/transactions/transaction-per-day";

interface GetAllTransactionPerDayResponse {
  data: TransactionPerDay[];
}

export const GetAllTransactionPerDayHandler = async (
  token: string
): Promise<GetAllTransactionPerDayResponse> => {
  const { data } = await api.get<GetAllTransactionPerDayResponse>(
    "/transactions/per-day",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return data;
};

export const useGetAllTransactionPerDay = (
  token: string,
  options?: Partial<
    UseQueryOptions<GetAllTransactionPerDayResponse, AxiosError>
  >
) => {
  return useQuery({
    queryKey: ["get-all-transactions"],
    queryFn: () => GetAllTransactionPerDayHandler(token),
    ...options,
  });
};
