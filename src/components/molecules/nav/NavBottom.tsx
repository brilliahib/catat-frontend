"use client";

import { ArrowLeftRight, ChartPie, Plus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBottom() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <footer className="pb-28">
      <div className="fixed inset-x-0 bottom-0 z-30">
        <div className="max-w-lg mx-auto">
          <nav className="bg-background py-2">
            <ul className="flex items-center justify-around gap-6">
              <li className="flex-1">
                <Link href={"/"}>
                  <div
                    className={`flex flex-col justify-center gap-2 items-center ${
                      isActive("/") ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    <ArrowLeftRight className="h-6 w-6" />
                    <span className="text-xs">Transactions</span>
                  </div>
                </Link>
              </li>

              {/* Add Button */}
              <li className="relative bottom-4 min-w-[56px]">
                <div className="flex flex-col justify-center gap-2 items-center bg-primary rounded-full p-5 text-white">
                  <Plus className="h-7 w-7" />
                </div>
              </li>

              {/* Reports */}
              <li className="flex-1">
                <Link href={"/reports"}>
                  <div
                    className={`flex flex-col justify-center gap-2 items-center ${
                      isActive("/reports")
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    <ChartPie className="h-6 w-6" />
                    <span className="text-xs">Reports</span>
                  </div>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
