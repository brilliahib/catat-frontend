"use client";

import PageContainer from "@/components/atoms/container/PageContainer";
import HeaderSection from "@/components/atoms/header/HeaderSection";
import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import BudgetHeaderContent from "./BudgetHeaderContent";
import BudgetContent from "./BudgetContent";
import { Info } from "lucide-react";
import { useState } from "react";
import DialogBudgetInformation from "@/components/atoms/dialog/budgets/DialogBudgetInformation";

export default function BudgetWrapper() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };
  return (
    <>
      <HeaderSection>
        <PageContainer>
          <div className="flex justify-between items-center mb-8">
            <DashboardTitle title="Budgets" />
            <Info
              className="h-5 w-5 cursor-pointer"
              onClick={handleOpenDialog}
            />
          </div>
          <BudgetHeaderContent />
        </PageContainer>
      </HeaderSection>
      <BudgetContent />

      <DialogBudgetInformation open={isDialogOpen} setOpen={setIsDialogOpen} />
    </>
  );
}
