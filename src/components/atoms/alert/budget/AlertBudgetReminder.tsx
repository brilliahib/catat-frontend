import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2Icon } from "lucide-react";

export default function AlertBudgetReminder() {
  return (
    <Alert className="border-green-500 border bg-green-100/40 text-green-600">
      <CheckCircle2Icon />
      <AlertTitle>Budget Aman nih!</AlertTitle>
      <AlertDescription className="text-green-600">
        Budgetnya baru kepake 30%, masih banyak sisa buat kebutuhan lain.
      </AlertDescription>
    </Alert>
  );
}
