import { Card, CardContent } from "@/components/ui/card";
import { Handbag } from "lucide-react";

// TODO: replace with real data (api)
const transactions = [
  {
    title: "Shopping",
    desc: "Beli macbook di DP Mall",
    amount: 12500000,
    iconBg: "bg-blue-100/50",
    iconColor: "text-blue-500",
  },
  {
    title: "Shopping",
    desc: "Beli macbook di DP Mall",
    amount: 12500000,
    iconBg: "bg-blue-100/50",
    iconColor: "text-blue-500",
  },
  {
    title: "Shopping",
    desc: "Beli macbook di DP Mall",
    amount: 12500000,
    iconBg: "bg-blue-100/50",
    iconColor: "text-blue-500",
  },
  {
    title: "Shopping",
    desc: "Beli macbook di DP Mall",
    amount: 12500000,
    iconBg: "bg-blue-100/50",
    iconColor: "text-blue-500",
  },
];

export default function CardListTransaction() {
  return (
    <Card className="border-0 shadow-none p-0">
      <CardContent className="space-y-4 p-0">
        <div className="space-y-6">
          {transactions.map((item, idx) => (
            <div key={idx} className="flex justify-between gap-3">
              <div className="flex gap-3">
                <div className={`p-4 rounded-full w-fit ${item.iconBg}`}>
                  <Handbag className={`h-5 w-5 ${item.iconColor}`} />
                </div>
                <div>
                  <h3 className="font-medium md:text-base text-sm">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground md:text-base text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>

              <h3 className="md:text-base text-sm">
                {item.amount.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
              </h3>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
