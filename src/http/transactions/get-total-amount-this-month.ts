import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";

interface GetTotalAmountThisMonthResponse {
  data: {
    month: Date;
    total: number;
  };
}

export const GetTotalAmountThisMonthHandler = async (
  token: string
): Promise<GetTotalAmountThisMonthResponse> => {
  const { data } = await api.get<GetTotalAmountThisMonthResponse>(
    "/transactions/total/current-month",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return data;
};

export const useGetTotalAmountThisMonth = (
  token: string,
  options?: Partial<
    UseQueryOptions<GetTotalAmountThisMonthResponse, AxiosError>
  >
) => {
  return useQuery({
    queryKey: ["get-total-amount-this-month"],
    queryFn: () => GetTotalAmountThisMonthHandler(token),
    ...options,
  });
};
