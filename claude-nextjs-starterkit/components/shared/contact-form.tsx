"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// zod 스키마 정의
const contactSchema = z.object({
  name: z.string().min(2, "이름은 2자 이상 입력해주세요."),
  email: z.string().email("올바른 이메일 주소를 입력해주세요."),
  message: z.string().min(10, "메시지는 10자 이상 입력해주세요."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

/** react-hook-form + zod 문의 폼 + sonner 토스트 */
export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    // 실제 API 호출 대신 시뮬레이션
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("폼 데이터:", data);
    toast.success("문의가 성공적으로 전송되었습니다!", {
      description: `${data.name}님, 빠른 시일 내에 답변 드리겠습니다.`,
    });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* 이름 */}
      <div className="space-y-2">
        <Label htmlFor="name">이름</Label>
        <Input
          id="name"
          placeholder="홍길동"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>

      {/* 이메일 */}
      <div className="space-y-2">
        <Label htmlFor="email">이메일</Label>
        <Input
          id="email"
          type="email"
          placeholder="hello@example.com"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>

      {/* 메시지 */}
      <div className="space-y-2">
        <Label htmlFor="message">메시지</Label>
        <Textarea
          id="message"
          placeholder="문의 내용을 입력해주세요..."
          rows={5}
          {...register("message")}
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
        {isSubmitting ? "전송 중..." : "문의하기"}
      </Button>
    </form>
  );
}
