import { Search, Settings } from "lucide-react";

export default function HeaderHomeSection() {
  return (
    <div className="relative px-4 pt-4">
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(160% 140% at 50% -20%, rgb(24, 153, 234) 0%, rgb(16, 121, 194) 25%, rgb(12, 95, 152) 35%, rgb(9, 62, 104) 60%, rgb(3, 31, 52) 100%)",
        }}
      />

      <div className="relative z-10 space-y-16 pb-16">
        <div className="flex justify-between items-center text-white">
          <h1 className="font-semibold">CATAT</h1>
          <div className="flex gap-4 items-center">
            <Search className="h-5 w-5" />
            <Settings className="h-5 w-5" />
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-muted">Total Pengeluaran</p>
          <h1 className="font-bold text-4xl text-white">Rp 13.000.000</h1>
        </div>
      </div>
    </div>
  );
}
