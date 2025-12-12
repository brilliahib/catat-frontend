import PageContainer from "@/components/atoms/container/PageContainer";
import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import HeaderSection from "@/components/atoms/header/HeaderSection";
import ReportHeaderContent from "./ReportHeaderContent";
import ReportContent from "./ReportContent";

export default function ReportWrapper() {
  return (
    <>
      <HeaderSection>
        <PageContainer>
          <DashboardTitle title="Reports" />
          <ReportHeaderContent />
        </PageContainer>
      </HeaderSection>
      <ReportContent />
    </>
  );
}
