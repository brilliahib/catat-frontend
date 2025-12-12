"use client";

import { Eye, EyeOff } from "lucide-react";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function BudgetHeaderContent() {
  const [hideAmount, setHideAmount] = useState<boolean>(false);
  const [isReady, setIsReady] = useState<boolean>(false);

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

  if (!isReady) {
    return (
      <div className="flex justify-center items-center text-center">
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
            {hideAmount ? "••••••••" : "Rp500.000"}
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
