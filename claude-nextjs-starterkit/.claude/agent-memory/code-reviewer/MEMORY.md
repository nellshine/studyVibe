# 코드 리뷰어 메모리

## 프로젝트 개요
- 이름: claude-nextjs-starterkit
- 스택: Next.js 16.1.6 (next@16), React 19.2.3, TypeScript 5, TailwindCSS v4, shadcn/ui
- 목적: 범용 웹 프로젝트 스타터킷

## 프로젝트 구조 패턴
- App Router 기반 (`app/` 디렉토리)
- 컴포넌트 분류: `components/layout/`, `components/sections/`, `components/shared/`, `components/ui/`
- 상수: `constants/site.ts` (siteConfig, mainNav, features)
- 타입: `types/nav.ts`
- 커스텀 훅: `hooks/` (use-breakpoint, use-debounce, use-local-storage, use-mounted)
- 유틸: `lib/utils.ts` (cn 함수)

## 코딩 컨벤션 (확인됨)
- 들여쓰기 2칸 사용 중
- 컴포넌트 이름 PascalCase 준수
- 변수/함수명 camelCase 준수
- JSDoc 스타일 한국어 주석 사용 (`/** ... */`)
- 상수 파일에서 타입과 데이터를 함께 정의하는 패턴

## 반복 패턴
- Server Component가 기본, 클라이언트 인터랙션 시에만 "use client" 선언
- SectionWrapper 컴포넌트로 섹션 레이아웃 일관성 유지
- 아이콘을 iconMap Record로 문자열 → 컴포넌트 매핑 (features-section.tsx)
- zod + react-hook-form 조합으로 폼 검증

## 알려진 이슈 (2026-02-17 첫 리뷰)
- Header가 "use client" 불필요 (usePathname은 NavLink에서만 사용)
- about/page.tsx에 "Next.js 16" 하드코딩 (package.json과 불일치)
- ContactForm onSubmit에 console.log 프로덕션 노출
- useBreakpoint 훅이 SSR hydration mismatch 위험 있음
- metadata에 openGraph/twitter 카드 미설정
- next.config.ts가 완전히 비어있음
- Feature.icon이 string 타입으로 타입 안전성 부족 (iconMap 키 타입 활용 권장)
- use-debounce 패키지를 직접 의존성으로 두면서 별도 hooks/use-debounce.ts re-export 중복

## 세부 리뷰 파일
- `patterns.md`: 아키텍처 패턴 상세
