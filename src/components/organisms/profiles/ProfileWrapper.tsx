"use client";

import PageContainer from "@/components/atoms/container/PageContainer";
import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import { useSession } from "next-auth/react";

export default function ProfileWrapper() {
  const { data: session } = useSession();
  return (
    <PageContainer>
      <DashboardTitle title="Profiles" />
    </PageContainer>
  );
}
