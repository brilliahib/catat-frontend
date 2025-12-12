import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
                <Button
                  variant={"ghost"}
                  size={"icon-lg"}
                  className={`${item.iconBg} ${item.iconColor} flex-shrink-0 rounded-full`}
                >
                  <div className={`rounded-full text-xl`}>💼</div>
                </Button>
                <div className="space-y-1">
                  <h3 className="font-medium text-sm">{item.title}</h3>
                  <p className="text-muted-foreground text-xs">{item.desc}</p>
                </div>
              </div>

              <h3 className="font-medium text-sm">
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
