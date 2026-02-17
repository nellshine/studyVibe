# claude-nextjs-starterkit

Next.js 모던 웹 스타터킷 — 새 프로젝트의 기반 템플릿

## 기술 스택
- Next.js 16.1.6 (App Router, RSC)
- React 19.2.3
- TypeScript 5.x (strict)
- Tailwind CSS v4 + tw-animate-css
- shadcn/ui v3 (new-york 스타일, lucide 아이콘)
- Radix UI v1.4.3
- react-hook-form + zod (폼 검증)
- next-themes (다크/라이트/시스템 테마)
- sonner (토스트 알림)

## 디렉토리 구조
```
app/                  # 페이지 및 레이아웃 (App Router)
  layout.tsx          # 루트 레이아웃 (Header + main + Footer + Toaster)
  page.tsx            # 홈페이지
  globals.css         # Tailwind v4 + shadcn 테마 변수 (oklch)
components/
  ui/                 # shadcn/ui 컴포넌트 (자동 생성, 직접 수정 지양)
  layout/             # 레이아웃 컴포넌트 (Header, Footer, NavLink, MobileNav)
  shared/             # 재사용 조합 컴포넌트 (ContactForm, PageHeader, SectionWrapper)
  sections/           # 페이지 섹션 컴포넌트 (HeroSection, FeaturesSection, CtaSection)
  theme-provider.tsx  # next-themes 래퍼
  mode-toggle.tsx     # 다크모드 토글
constants/site.ts     # 사이트 설정, 네비게이션, 피처 데이터
hooks/                # 커스텀 훅 (useBreakpoint, useIsMobile, useDebounce 등)
lib/utils.ts          # cn() 유틸리티 (clsx + tailwind-merge)
types/                # 공유 타입 정의
```

## 핵심 패턴

### 컴포넌트 작성
- Server Component 기본, 클라이언트 필요 시 `"use client"` 명시
- named export 사용: `export function ComponentName()`
- JSDoc 한줄 주석으로 컴포넌트 설명

### 스타일링
- Tailwind 유틸리티 클래스 사용, `cn()` 으로 조건부 클래스 병합
- shadcn/ui 디자인 토큰 활용 (bg-background, text-foreground 등)
- 반응형: Tailwind 브레이크포인트 (`sm:`, `md:`, `lg:`)

### 폼
- zod 스키마 정의 → zodResolver → react-hook-form → sonner 토스트
- 참고: `components/shared/contact-form.tsx`

### 설정 중앙화
- 사이트 메타/네비게이션: `constants/site.ts`의 `siteConfig`, `mainNav`
- 경로 별칭: `@/*` → 프로젝트 루트 (tsconfig paths)

## 개발 명령어
```bash
npm run dev          # 개발 서버
npm run build        # 프로덕션 빌드
npm run lint         # ESLint 검사
npx shadcn@latest add <컴포넌트>  # shadcn UI 컴포넌트 추가
```

## 주의사항
- `components/ui/` 파일은 shadcn이 생성한 코드이므로 직접 수정 지양
- 새 UI 컴포넌트는 `npx shadcn@latest add`로 추가
- html lang="ko" (한국어 사이트)
- 테마: class 기반 다크모드 (`@custom-variant dark`)
