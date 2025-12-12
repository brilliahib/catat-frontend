"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useMemo } from "react";
import { Label, Pie, PieChart } from "recharts";

export default function CardExpenseReport() {
  const chartData = [
    { category: "Food", amount: 1200, fill: "var(--chart-1)" },
    { category: "Transport", amount: 450, fill: "var(--chart-2)" },
    { category: "Shopping", amount: 980, fill: "var(--chart-3)" },
    { category: "Utilities", amount: 700, fill: "var(--chart-4)" },
    { category: "Other", amount: 320, fill: "var(--chart-5)" },
  ];

  const chartConfig = {
    amount: {
      label: "Expense",
    },
    Food: {
      label: "Food",
      color: "var(--chart-1)",
    },
    Transport: {
      label: "Transport",
      color: "var(--chart-2)",
    },
    Shopping: {
      label: "Shopping",
      color: "var(--chart-3)",
    },
    Utilities: {
      label: "Utilities",
      color: "var(--chart-4)",
    },
    Other: {
      label: "Other",
      color: "var(--chart-5)",
    },
  } satisfies ChartConfig;

  const totalExpense = useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.amount, 0);
  }, []);

  return (
    <div>
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[300px]"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={chartData}
            dataKey="amount"
            nameKey="category"
            innerRadius={60}
            strokeWidth={5}
          >
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-white text-3xl font-bold"
                      >
                        {totalExpense.toLocaleString()}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-white"
                      >
                        Total Expense
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </Pie>
        </PieChart>
      </ChartContainer>
    </div>
  );
}
