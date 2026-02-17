import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { siteConfig } from "@/constants/site";

/** 히어로 섹션 */
export function HeroSection() {
  return (
    <SectionWrapper className="flex flex-col items-center text-center">
      <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
        어떤 프로젝트든
        <br />
        <span className="text-primary/80">즉시 시작</span>할 수 있는 스타터킷
      </h1>
      <p className="mt-6 max-w-xl text-lg text-muted-foreground">
        {siteConfig.description}
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Button asChild size="lg">
          <Link href="/about">자세히 보기</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/contact">문의하기</Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
