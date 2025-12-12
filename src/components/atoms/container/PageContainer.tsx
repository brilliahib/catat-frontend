interface PageContainerProps {
  children: React.ReactNode;
}

export default function PageContainer({ children }: PageContainerProps) {
  return <section className="md:p-6 p-4">{children}</section>;
}
