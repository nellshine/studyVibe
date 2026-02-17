import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/shared/section-wrapper";

export default function NotFound() {
  return (
    <SectionWrapper className="flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-xl text-muted-foreground">
        페이지를 찾을 수 없습니다
      </p>
      <p className="mt-2 text-muted-foreground">
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">홈으로 돌아가기</Link>
      </Button>
    </SectionWrapper>
  );
}
