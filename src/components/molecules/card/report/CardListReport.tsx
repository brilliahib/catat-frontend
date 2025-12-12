import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// TODO: replace with real data (api)
const transactions = [
  {
    title: "Belanja",
    icon: "🛒",
    amount: 12500000,
    iconBg: "bg-blue-100/80",
    iconColor: "text-blue-500",
  },
  {
    title: "Bisnis",
    icon: "💼",
    amount: 12500000,
    iconBg: "bg-yellow-100/80",
    iconColor: "text-yellow-500",
  },
  {
    title: "Tagihan",
    icon: "🧾",
    amount: 12500000,
    iconBg: "bg-green-100/80",
    iconColor: "text-green-500",
  },
  {
    title: "Makan & Minum",
    icon: "🍽️",
    amount: 12500000,
    iconBg: "bg-red-100/80",
    iconColor: "text-red-500",
  },
  {
    title: "Transportasi",
    icon: "🚗",
    amount: 12500000,
    iconBg: "bg-purple-100/80",
    iconColor: "text-purple-500",
  },
  {
    title: "Hiburan",
    icon: "🎮",
    amount: 12500000,
    iconBg: "bg-pink-100/80",
    iconColor: "text-pink-500",
  },
  {
    title: "Kesehatan",
    icon: "💊",
    amount: 12500000,
    iconBg: "bg-teal-100/80",
    iconColor: "text-teal-500",
  },
  {
    title: "Lainnya",
    icon: "🛠️",
    amount: 12500000,
    iconBg: "bg-gray-100/80",
    iconColor: "text-gray-500",
  },
];

export default function CardListReport() {
  return (
    <div className="space-y-3">
      {transactions.map((item, idx) => (
        <Card
          className="shadow-none p-2 hover:bg-gray-100/80 transition-colors duration-200"
          key={idx}
        >
          <CardContent className="p-2 px-2">
            <div className="flex justify-between items-center gap-3">
              <div className="flex gap-3">
                <Button
                  variant={"ghost"}
                  size={"icon-lg"}
                  className={`${item.iconBg} ${item.iconColor} flex-shrink-0 rounded-full`}
                >
                  <div className={`rounded-full text-xl`}>{item.icon}</div>
                </Button>
                <div>
                  <h3 className="text-xs text-muted-foreground">
                    {item.title}
                  </h3>
                  <h3 className="text-sm font-medium">
                    {item.amount.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </h3>
                </div>
              </div>

              <span className="text-sm text-muted-foreground">19%</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
