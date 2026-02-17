import Link from "next/link";
import { NavLink } from "@/components/layout/nav-link";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ModeToggle } from "@/components/mode-toggle";
import { mainNav, siteConfig } from "@/constants/site";

/** sticky 헤더 + backdrop-blur */
export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center px-4">
        {/* 모바일 햄버거 메뉴 */}
        <MobileNav />

        {/* 로고 */}
        <Link href="/" className="mr-6 flex items-center gap-2 font-bold">
          {siteConfig.name}
        </Link>

        {/* 데스크톱 네비게이션 */}
        <nav className="hidden items-center gap-6 md:flex">
          {mainNav.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.title}
            </NavLink>
          ))}
        </nav>

        {/* 우측 액션 */}
        <div className="ml-auto flex items-center gap-2">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
