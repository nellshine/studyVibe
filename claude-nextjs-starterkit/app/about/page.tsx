import { SectionWrapper } from "@/components/shared/section-wrapper";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const techStack = [
  { name: "Next.js 16", description: "React 기반 풀스택 프레임워크" },
  { name: "React 19", description: "최신 React with Server Components" },
  { name: "TailwindCSS v4", description: "유틸리티 우선 CSS 프레임워크" },
  { name: "shadcn/ui", description: "재사용 가능한 UI 컴포넌트 라이브러리" },
  { name: "TypeScript", description: "타입 안전한 JavaScript 슈퍼셋" },
  { name: "Zod", description: "TypeScript 네이티브 스키마 검증" },
];

export default function AboutPage() {
  return (
    <SectionWrapper>
      <PageHeader
        title="소개"
        description="이 스타터킷에 대해 알아보세요."
      />

      <div className="space-y-8">
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground">
            이 프로젝트는 어떤 웹 프로젝트에서든 즉시 활용 가능한 Next.js 모던 웹 스타터킷입니다.
            Atomic Design 패턴을 기반으로 체계적인 컴포넌트 계층 구조를 제공하며,
            검증된 라이브러리를 활용한 커스텀 훅 시스템과 반응형 레이아웃을 포함합니다.
          </p>
        </div>

        <div>
          <h2 className="mb-6 text-2xl font-bold tracking-tight">기술 스택</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {techStack.map((tech) => (
              <Card key={tech.name}>
                <CardHeader>
                  <CardTitle className="text-base">{tech.name}</CardTitle>
                  <CardDescription>{tech.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
