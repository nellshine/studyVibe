"use client";

import { useEffect, useState } from "react";

/** hydration 안전 훅 — 클라이언트 마운트 여부 반환 */
export function useMounted(): boolean {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}
