import { Badge } from "@/components/ui/badge";

export default function TabTransaction() {
  return (
    <div className="flex gap-4 items-center">
      <Badge>Semua Transaksi</Badge>
      <Badge variant={"outline"}>Per Bulan</Badge>
      <Badge variant={"outline"}>Per Tahun</Badge>
    </div>
  );
}
