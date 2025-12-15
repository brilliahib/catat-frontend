"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useGetAllTransactionPerDay } from "@/http/transactions/get-all-transaction-per-day";
import { useSession } from "next-auth/react";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { getTransactionCategory } from "@/lib/transaction-category";
import { Skeleton } from "@/components/ui/skeleton";
import { formatPrice } from "@/utils/price";

function CardListTransactionSkeleton() {
  return (
    <Card className="border-0 shadow-none p-0">
      <CardContent className="space-y-6 p-0">
        {[1, 2].map((day) => (
          <div key={day} className="space-y-4">
            <Skeleton className="h-4 w-40" />
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex justify-between items-start">
                  <div className="flex gap-3">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-28" />
                      <Skeleton className="h-3 w-40" />
                    </div>
                  </div>
                  <Skeleton className="h-4 w-20" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default function CardListTransaction() {
  const { data: session, status } = useSession();

  const { data, isPending } = useGetAllTransactionPerDay(
    session?.access_token as string,
    {
      enabled: status === "authenticated",
    }
  );

  if (isPending) return <CardListTransactionSkeleton />;

  return (
    <Card className="border-0 shadow-none p-0">
      <CardContent className="space-y-6 p-0">
        {data?.data.map((day) => (
          <div key={day.date.toString()} className="space-y-4">
            <h3 className="text-sm text-muted-foreground">
              {format(new Date(day.date), "EEEE, dd MMM yyyy", {
                locale: id,
              })}
            </h3>

            <div className="space-y-4">
              {day.transactions.map((trx) => {
                const category = getTransactionCategory(trx.type);

                return (
                  <Card key={trx.id} className="border-0 shadow-none p-0">
                    <CardContent className="p-0">
                      <div className="flex justify-between items-start">
                        <div className="flex gap-3">
                          <Button
                            variant="ghost"
                            size="icon-lg"
                            className={`rounded-full ${category.iconBg}`}
                          >
                            <span className={`text-xl ${category.iconColor}`}>
                              {category.icon}
                            </span>
                          </Button>

                          <div>
                            <h3 className="text-sm font-medium">
                              {category.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {trx.notes}
                            </p>
                          </div>
                        </div>

                        <p className="text-sm font-medium">
                          {formatPrice(trx.amount)}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
