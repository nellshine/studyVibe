"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavLink } from "@/components/layout/nav-link";
import { mainNav, siteConfig } from "@/constants/site";

/** Sheet 기반 모바일 네비게이션 메뉴 */
export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">메뉴 열기</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="text-left">{siteConfig.name}</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-6">
          {mainNav.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-base"
            >
              {item.title}
            </NavLink>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
