import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function TabTransaction() {
  return (
    <ScrollArea className="w-96 rounded-md whitespace-nowrap">
      <div className="flex gap-4 items-center">
        <Badge>Semua Transaksi</Badge>
        <Badge variant={"outline"}>Per Bulan</Badge>
        <Badge variant={"outline"}>Per Tahun</Badge>
      </div>
    </ScrollArea>
  );
}
