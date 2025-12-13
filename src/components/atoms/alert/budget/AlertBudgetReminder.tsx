import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { CheckCircle2Icon, AlertTriangleIcon } from "lucide-react";

type AlertBudgetReminderProps = {
  status?: "safe" | "warning";
  percentage?: number;
  isLoading?: boolean;
};

export default function AlertBudgetReminder({
  status = "safe",
  percentage = 1,
  isLoading = false,
}: AlertBudgetReminderProps) {
  if (isLoading) {
    return (
      <Alert className="border border-border bg-muted/40">
        <Skeleton className="h-5 w-5 rounded-full" />

        <div className="space-y-2">
          <Skeleton className="h-4 w-40" />
          <Skeleton className="h-4 w-64" />
        </div>
      </Alert>
    );
  }

  const usedPercentage = Math.round((1 - percentage) * 100);
  const isSafe = status === "safe";

  return (
    <Alert
      className={`border ${
        isSafe
          ? "border-green-500 bg-green-100/40 text-green-700"
          : "border-red-500 bg-red-100/40 text-red-700"
      }`}
    >
      {isSafe ? <CheckCircle2Icon /> : <AlertTriangleIcon />}

      <div>
        <AlertTitle>
          {isSafe ? "Budget Aman nih!" : "Budget Hampir Habis!"}
        </AlertTitle>

        <AlertDescription
          className={isSafe ? "text-green-700" : "text-red-700"}
        >
          {isSafe
            ? `Budget baru kepake ${usedPercentage}%, masih aman buat kebutuhan lain.`
            : `Budget sudah kepake ${usedPercentage}%, sebaiknya mulai dikontrol.`}
        </AlertDescription>
      </div>
    </Alert>
  );
}
