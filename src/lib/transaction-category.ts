export type TransactionCategory = {
  icon: string;
  iconBg: string;
  iconColor: string;
  title: string;
};

const CATEGORY_MAP: Record<string, TransactionCategory> = {
  Eating: {
    title: "Makan & Minum",
    icon: "🍽️",
    iconBg: "bg-red-100/80",
    iconColor: "text-red-500",
  },
  Shopping: {
    title: "Belanja",
    icon: "🛒",
    iconBg: "bg-blue-100/80",
    iconColor: "text-blue-500",
  },
  Business: {
    title: "Bisnis",
    icon: "💼",
    iconBg: "bg-yellow-100/80",
    iconColor: "text-yellow-500",
  },
  Bills: {
    title: "Tagihan",
    icon: "🧾",
    iconBg: "bg-green-100/80",
    iconColor: "text-green-500",
  },
  Transport: {
    title: "Transportasi",
    icon: "🚗",
    iconBg: "bg-purple-100/80",
    iconColor: "text-purple-500",
  },
  Entertainment: {
    title: "Hiburan",
    icon: "🎮",
    iconBg: "bg-pink-100/80",
    iconColor: "text-pink-500",
  },
  Health: {
    title: "Kesehatan",
    icon: "💊",
    iconBg: "bg-teal-100/80",
    iconColor: "text-teal-500",
  },
  Other: {
    title: "Lainnya",
    icon: "🛠️",
    iconBg: "bg-gray-100/80",
    iconColor: "text-gray-500",
  },
};

export function getTransactionCategory(type: string): TransactionCategory {
  return CATEGORY_MAP[type] ?? CATEGORY_MAP.Other;
}
