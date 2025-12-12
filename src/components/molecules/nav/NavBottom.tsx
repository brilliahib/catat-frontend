"use client";

import {
  ArrowLeftRight,
  ChartPie,
  CircleUserRound,
  Home,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DrawerCreateTransaction from "../drawer/DrawerCreateTransaction";

export default function NavBottom() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <footer className="pb-28">
      <div className="fixed inset-x-0 bottom-0 z-30">
        <div className="max-w-lg mx-auto">
          <nav className="bg-background py-2">
            <ul className="grid grid-cols-5 items-center">
              <li>
                <Link href={"/"}>
                  <div
                    className={`flex flex-col justify-center gap-2 items-center ${
                      isActive("/") ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    <Home className="h-6 w-6" />
                    <span className="text-xs">Home</span>
                  </div>
                </Link>
              </li>

              <li>
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

              <li className="flex justify-center relative bottom-4">
                <DrawerCreateTransaction />
              </li>

              <li>
                <Link href={"/budgets"}>
                  <div
                    className={`flex flex-col justify-center gap-2 items-center ${
                      isActive("/budgets")
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    <Wallet className="h-6 w-6" />
                    <span className="text-xs">Budget</span>
                  </div>
                </Link>
              </li>

              <li>
                <Link href={"/profiles"}>
                  <div
                    className={`flex flex-col justify-center gap-2 items-center ${
                      isActive("/profiles")
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    <CircleUserRound className="h-6 w-6" />
                    <span className="text-xs">Profile</span>
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
