import { SectionWrapper } from "@/components/shared/section-wrapper";
import { PageHeader } from "@/components/shared/page-header";
import { ContactForm } from "@/components/shared/contact-form";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <SectionWrapper>
      <PageHeader
        title="문의"
        description="궁금한 점이 있으시면 아래 양식을 통해 문의해주세요."
      />
      <Card className="mx-auto max-w-lg">
        <CardContent className="pt-6">
          <ContactForm />
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
