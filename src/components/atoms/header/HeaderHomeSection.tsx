"use client";

import { Search, Settings, Eye, EyeOff } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeaderHomeSection() {
  const [hideAmount, setHideAmount] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("hideAmount");
    if (saved) setHideAmount(saved === "true");
  }, []);

  useEffect(() => {
    localStorage.setItem("hideAmount", hideAmount.toString());
  }, [hideAmount]);

  return (
    <div
      className="px-6 pt-4 pb-20 space-y-16
      [background:radial-gradient(160%_140%_at_50%_-20%,rgb(24_153_234)_0%,rgb(16_121_194)_25%,rgb(12_95_152)_35%,rgb(9_62_104)_60%,rgb(3_31_52)_100%)]"
    >
      <div className="flex justify-between items-center text-white">
        <div>
          <span className="text-white/70">Welcome,</span>
          <h1 className="font-medium">Muhammad Ahib Ibrilli</h1>
        </div>
        <div className="flex gap-4 items-center">
          <Search className="h-5 w-5" />
          <Settings className="h-5 w-5" />
        </div>
      </div>

      <div className="space-y-2 text-center text-white">
        <div className="flex justify-center items-center gap-2">
          <h1 className="font-semibold text-4xl">
            {hideAmount ? "••••••••" : "Rp 13.000.000"}
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
        </div>

        <p className="text-[#f5f5f5]">Total Pengeluaran</p>
      </div>
    </div>
  );
}
