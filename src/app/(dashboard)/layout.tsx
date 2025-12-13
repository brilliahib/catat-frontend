import NavBottom from "@/components/molecules/nav/NavBottom";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) return redirect("/auth/login");

  return (
    <div>
      {children}
      <NavBottom />
    </div>
  );
}
