"use client";

import { Eye, EyeOff } from "lucide-react";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { BudgetRemaining } from "@/types/budget/budget";
import { formatPrice } from "@/utils/price";

interface BudgetHeaderContentProps {
  data?: BudgetRemaining;
  isPending?: boolean;
}

export default function BudgetHeaderContent({
  data,
  isPending = false,
}: BudgetHeaderContentProps) {
  const [hideAmount, setHideAmount] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("hideBudgetAmount");
    setHideAmount(saved === "true");
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (isReady) {
      localStorage.setItem("hideBudgetAmount", hideAmount.toString());
    }
  }, [hideAmount, isReady]);

  if (isPending || !isReady) {
    return (
      <div className="flex justify-center items-center text-center pb-8">
        <div className="flex flex-col gap-2">
          <Skeleton className="w-24 h-4 mx-auto" />
          <div className="flex justify-center items-center gap-2">
            <Skeleton className="w-32 h-10" />
            <Skeleton className="w-6 h-6 rounded-full" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center text-center pb-8">
      <div className="flex flex-col gap-2">
        <span className="text-muted">Sisa Budget</span>

        <div className="flex justify-center items-center gap-2">
          <h3 className="font-semibold text-4xl">
            {hideAmount ? "••••••••" : formatPrice(data?.remaining ?? 0)}
          </h3>

          {hideAmount ? (
            <EyeOff
              className="h-6 w-6 cursor-pointer"
              onClick={() => setHideAmount(false)}
            />
          ) : (
            <Eye
              className="h-6 w-6 cursor-pointer"
              onClick={() => setHideAmount(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
