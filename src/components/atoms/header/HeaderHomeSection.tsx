"use client";

import { Search, Settings, Eye, EyeOff } from "lucide-react";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { useSession } from "next-auth/react";
import { useGetTotalAmountThisMonth } from "@/http/transactions/get-total-amount-this-month";
import { formatPrice } from "@/utils/price";

export default function HeaderHomeSection() {
  const [hideAmount, setHideAmount] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const { data: session, status } = useSession();
  const { data, isPending } = useGetTotalAmountThisMonth(
    session?.access_token as string,
    {
      enabled: status === "authenticated",
    }
  );

  useEffect(() => {
    const saved = localStorage.getItem("hideAmount");
    setHideAmount(saved === "true");
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (isReady) {
      localStorage.setItem("hideAmount", hideAmount.toString());
    }
  }, [hideAmount, isReady]);

  const isLoading = isPending || !isReady;

  return (
    <div
      className="px-6 pt-4 pb-20 space-y-16
      [background:radial-gradient(160%_140%_at_50%_-20%,rgb(24_153_234)_0%,rgb(16_121_194)_25%,rgb(12_95_152)_35%,rgb(9_62_104)_60%,rgb(3_31_52)_100%)]"
    >
      <div className="flex justify-between items-center text-white">
        <div>
          <span className="text-white/70">Welcome,</span>
          <h1 className="font-medium">{session?.user?.name}</h1>
        </div>

        <div className="flex gap-4 items-center">
          <Search className="h-5 w-5" />
          <Settings className="h-5 w-5" />
        </div>
      </div>

      <div className="space-y-2 text-center text-white">
        <div className="flex justify-center items-center gap-2">
          {isLoading ? (
            <>
              <Skeleton className="w-40 h-10 bg-white/20" />
              <Skeleton className="w-6 h-6 rounded-full bg-white/20" />
            </>
          ) : (
            <>
              <h1 className="font-semibold text-4xl">
                {hideAmount ? "••••••••" : formatPrice(data?.data.total ?? 0)}
              </h1>

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
            </>
          )}
        </div>

        <p className="text-[#f5f5f5]">Total Pengeluaran</p>
      </div>
    </div>
  );
}
