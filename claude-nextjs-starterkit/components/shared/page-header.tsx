interface PageHeaderProps {
  title: string;
  description?: string;
}

/** 페이지 상단 헤더 */
export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-2 pb-8">
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h1>
      {description && (
        <p className="text-lg text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
