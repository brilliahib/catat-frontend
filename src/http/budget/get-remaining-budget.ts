import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { BudgetRemaining } from "@/types/budget/budget";

interface GetRemainingBudgetResponse {
  data: BudgetRemaining;
}

export const GetRemainingBudgetHandler = async (
  token: string
): Promise<GetRemainingBudgetResponse> => {
  const { data } = await api.get<GetRemainingBudgetResponse>(
    "/budgets/remaining",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return data;
};

export const useGetRemainingBudget = (
  token: string,
  options?: Partial<UseQueryOptions<GetRemainingBudgetResponse, AxiosError>>
) => {
  return useQuery({
    queryKey: ["get-remaining-budget"],
    queryFn: () => GetRemainingBudgetHandler(token),
    ...options,
  });
};
