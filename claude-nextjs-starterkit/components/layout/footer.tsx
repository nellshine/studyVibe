import { siteConfig } from "@/constants/site";

/** 사이트 푸터 */
export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto flex flex-col items-center gap-2 py-6 px-4 text-center text-sm text-muted-foreground md:flex-row md:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </p>
        <p>
          Built with Next.js & shadcn/ui
        </p>
      </div>
    </footer>
  );
}
