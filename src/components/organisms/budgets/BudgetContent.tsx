import AlertBudgetReminder from "@/components/atoms/alert/budget/AlertBudgetReminder";
import CardBudgetSummary from "@/components/molecules/card/budget/CardBudgetSummary";
import FormUpdateBudget from "@/components/molecules/form/budget/FormUpdateBudget";
import { BudgetRemaining } from "@/types/budget/budget";

interface BudgetContentProps {
  data?: BudgetRemaining;
  isPending?: boolean;
}

export default function BudgetContent({ data, isPending }: BudgetContentProps) {
  return (
    <div className="md:px-6 px-4 bg-background rounded-t-3xl -mt-8 py-6 relative z-10 space-y-8">
      <AlertBudgetReminder
        isLoading={isPending}
        status={data?.status}
        percentage={data?.percentage}
      />
      {/* <FormUpdateBudget /> */}
      <CardBudgetSummary data={data} isPending={isPending} />
    </div>
  );
}
