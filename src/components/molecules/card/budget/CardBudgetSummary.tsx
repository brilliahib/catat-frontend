import { Card, CardContent } from "@/components/ui/card";
import { BudgetRemaining } from "@/types/budget/budget";
import { formatPrice } from "@/utils/price";
import { CheckCircle2, AlertTriangle } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

interface CardBudgetSummaryProps {
  data?: BudgetRemaining;
  isPending?: boolean;
}

export default function CardBudgetSummary({
  data,
  isPending = false,
}: CardBudgetSummaryProps) {
  const isSafe = data?.status === "safe";
  const isWarning = data?.status === "warning";

  const statusLabel = isSafe ? "Aman" : isWarning ? "Peringatan" : "-";

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        {/* Budget Type */}
        <Card>
          <CardContent>
            <div className="flex flex-col gap-1">
              <span className="text-muted-foreground text-sm">Tipe Budget</span>
              {isPending ? (
                <Skeleton className="h-6 w-20" />
              ) : (
                <h3 className="font-semibold text-lg">{data?.type}</h3>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Total Budget */}
        <Card>
          <CardContent>
            <div className="flex flex-col gap-1">
              <span className="text-muted-foreground text-sm">
                Total Budget
              </span>
              {isPending ? (
                <Skeleton className="h-6 w-28" />
              ) : (
                <h3 className="font-semibold text-lg">
                  {formatPrice(data?.budget ?? 0)}
                </h3>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Total Expenditure */}
        <Card>
          <CardContent>
            <div className="flex flex-col gap-1">
              <span className="text-muted-foreground text-sm">
                Total Pengeluaran
              </span>
              {isPending ? (
                <Skeleton className="h-6 w-28" />
              ) : (
                <h3 className="font-semibold text-lg">
                  {formatPrice(data?.used ?? 0)}
                </h3>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Status */}
        <Card>
          <CardContent>
            <div className="flex flex-col gap-1">
              <span className="text-muted-foreground text-sm">Status</span>

              {isPending ? (
                <Skeleton className="h-6 w-24" />
              ) : (
                <div
                  className={`flex items-center gap-2 font-semibold text-lg ${
                    isSafe ? "text-green-600" : isWarning ? "text-red-600" : ""
                  }`}
                >
                  {isSafe && <CheckCircle2 className="h-5 w-5" />}
                  {isWarning && <AlertTriangle className="h-5 w-5" />}
                  <span>{statusLabel}</span>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Remaining Budget */}
        <Card>
          <CardContent>
            <div className="flex flex-col gap-1">
              <span className="text-muted-foreground text-sm">Sisa Budget</span>
              {isPending ? (
                <Skeleton className="h-6 w-28" />
              ) : (
                <h3 className="font-semibold text-lg">
                  {formatPrice(data?.remaining ?? 0)}
                </h3>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Percentage Remaining */}
        <Card>
          <CardContent>
            <div className="flex flex-col gap-1">
              <span className="text-muted-foreground text-sm">
                Persentase Sisa
              </span>
              {isPending ? (
                <Skeleton className="h-6 w-16" />
              ) : (
                <h3 className="font-semibold text-lg">
                  {data ? `${Math.round(data.percentage * 100)}%` : "-"}
                </h3>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <Button className="w-full">Mau ganti budget dong</Button>
    </div>
  );
}
