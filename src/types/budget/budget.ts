export interface BudgetRemaining {
  type: string;
  budget: number;
  used: number;
  remaining: number;
  percentage: number;
  status: "warning" | "safe";
}
