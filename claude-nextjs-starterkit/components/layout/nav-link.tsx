"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

/** 활성 경로 자동 표시 네비게이션 링크 */
export function NavLink({ href, children, className, onClick }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "text-sm font-medium transition-colors hover:text-foreground/80",
        isActive ? "text-foreground" : "text-foreground/60",
        className
      )}
    >
      {children}
    </Link>
  );
}
