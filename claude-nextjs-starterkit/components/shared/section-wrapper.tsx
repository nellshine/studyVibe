import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

/** 섹션 래퍼 — 일관된 패딩/최대 너비 */
export function SectionWrapper({ children, className }: SectionWrapperProps) {
  return (
    <section className={cn("container mx-auto px-4 py-16 md:py-24", className)}>
      {children}
    </section>
  );
}
