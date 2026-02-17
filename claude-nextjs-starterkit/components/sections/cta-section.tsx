import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/shared/section-wrapper";

/** CTA(Call To Action) 섹션 */
export function CtaSection() {
  return (
    <SectionWrapper className="text-center">
      <div className="mx-auto max-w-2xl rounded-lg border bg-card p-8 md:p-12">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          지금 바로 시작하세요
        </h2>
        <p className="mt-4 text-muted-foreground">
          궁금한 점이 있으시면 언제든지 문의해주세요.
          <br />
          빠른 시일 내에 답변 드리겠습니다.
        </p>
        <Button asChild size="lg" className="mt-6">
          <Link href="/contact">문의하기</Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
