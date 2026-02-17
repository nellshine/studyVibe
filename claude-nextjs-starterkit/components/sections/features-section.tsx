import {
  Layers,
  Moon,
  Smartphone,
  ShieldCheck,
  Puzzle,
  Code,
  type LucideIcon,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { features } from "@/constants/site";

// 아이콘 이름 → 컴포넌트 매핑
const iconMap: Record<string, LucideIcon> = {
  Layers,
  Moon,
  Smartphone,
  ShieldCheck,
  Puzzle,
  Code,
};

/** 기능 카드 그리드 섹션 */
export function FeaturesSection() {
  return (
    <SectionWrapper>
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight">주요 기능</h2>
        <p className="mt-2 text-muted-foreground">
          프로덕션 레벨의 기능을 바로 사용할 수 있습니다
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => {
          const Icon = iconMap[feature.icon];
          return (
            <Card key={feature.title}>
              <CardHeader>
                {Icon && <Icon className="mb-2 h-8 w-8 text-primary/80" />}
                <CardTitle className="text-lg">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
