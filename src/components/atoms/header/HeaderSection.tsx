interface HeaderSectionProps {
  children: React.ReactNode;
}

export default function HeaderSection({ children }: HeaderSectionProps) {
  return (
    <div className="pb-8 [background:radial-gradient(160%_140%_at_50%_-20%,rgb(24_153_234)_0%,rgb(16_121_194)_25%,rgb(12_95_152)_35%,rgb(9_74_115)_100%)] text-white">
      {children}
    </div>
  );
}
