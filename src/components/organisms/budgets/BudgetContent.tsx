import AlertBudgetReminder from "@/components/atoms/alert/budget/AlertBudgetReminder";
import FormUpdateBudget from "@/components/molecules/form/budget/FormUpdateBudget";

export default function BudgetContent() {
  return (
    <div className="md:px-6 px-4 bg-background rounded-t-3xl -mt-8 py-6 relative z-10 space-y-8">
      <AlertBudgetReminder />
      <FormUpdateBudget />
    </div>
  );
}
