"use client";

import { useMediaQuery } from "react-responsive";

// TailwindCSS v4 기본 브레이크포인트 프리셋
const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

type Breakpoint = keyof typeof breakpoints;

/** TailwindCSS 브레이크포인트 기준 미디어쿼리 훅 */
export function useBreakpoint(breakpoint: Breakpoint): boolean {
  return useMediaQuery({ minWidth: breakpoints[breakpoint] });
}

/** 모바일 여부 (< 768px) */
export function useIsMobile(): boolean {
  return useMediaQuery({ maxWidth: breakpoints.md - 1 });
}

/** 데스크톱 여부 (>= 1024px) */
export function useIsDesktop(): boolean {
  return useMediaQuery({ minWidth: breakpoints.lg });
}
