"use client";

import PageContainer from "@/components/atoms/container/PageContainer";
import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import HeaderSection from "@/components/atoms/header/HeaderSection";
import ReportHeaderContent from "./ReportHeaderContent";
import ReportContent from "./ReportContent";
import { Info } from "lucide-react";
import { useState } from "react";
import DialogReportInformation from "@/components/atoms/dialog/reports/DialogReportInformation";

export default function ReportWrapper() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  return (
    <>
      <HeaderSection>
        <PageContainer>
          <div className="flex justify-between items-center mb-8">
            <DashboardTitle title="Reports" />
            <Info
              className="h-5 w-5 cursor-pointer"
              onClick={handleOpenDialog}
            />
          </div>
          <ReportHeaderContent />
        </PageContainer>
      </HeaderSection>
      <ReportContent />

      <DialogReportInformation open={isDialogOpen} setOpen={setIsDialogOpen} />
    </>
  );
}
