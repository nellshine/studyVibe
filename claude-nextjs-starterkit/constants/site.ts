import type { NavItem } from "@/types/nav";

export const siteConfig = {
  name: "StarterKit",
  description: "Next.js 모던 웹 스타터킷 — 어떤 프로젝트에서든 즉시 활용 가능한 템플릿",
  url: "https://example.com",
} as const;

export const mainNav: NavItem[] = [
  { title: "홈", href: "/" },
  { title: "소개", href: "/about" },
  { title: "문의", href: "/contact" },
];

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export const features: Feature[] = [
  {
    title: "컴포넌트 계층 구조",
    description: "Atoms → Molecules → Organisms → Templates → Pages 아키텍처로 체계적인 컴포넌트 관리",
    icon: "Layers",
  },
  {
    title: "다크/라이트 테마",
    description: "next-themes 기반 시스템/다크/라이트 테마 전환을 즉시 지원",
    icon: "Moon",
  },
  {
    title: "반응형 레이아웃",
    description: "모바일부터 데스크톱까지 모든 화면에 최적화된 레이아웃",
    icon: "Smartphone",
  },
  {
    title: "폼 검증 시스템",
    description: "react-hook-form + zod로 타입 안전한 폼 검증과 sonner 토스트 알림",
    icon: "ShieldCheck",
  },
  {
    title: "커스텀 훅",
    description: "검증된 라이브러리 기반 훅 시스템 — 브레이크포인트, 디바운스, 로컬 스토리지",
    icon: "Puzzle",
  },
  {
    title: "TypeScript 네이티브",
    description: "전체 프로젝트가 TypeScript로 작성되어 타입 안전성 보장",
    icon: "Code",
  },
];
