import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "지원",
  description: "이스타항공 모바일 파일럿 로그북 지원 / 자주 묻는 질문",
};

const FAQS = [
  {
    q: "파일 불러오기가 안 돼요.",
    a: "회사 CMS에서 다운로드한 CSV 파일과, 본 앱에서 내보낸 CSV 파일 두 가지 형식을 지원합니다. 파일 형식이 손상되었거나 다른 프로그램에서 수정된 경우 오류가 발생할 수 있습니다.",
  },
  {
    q: "PDF 출력이 실패해요.",
    a: "기기 저장 공간이 부족하거나, 비행 기록이 너무 많은 경우 시간이 걸릴 수 있습니다. 잠시 후 다시 시도해 주세요.",
  },
  {
    q: "데이터가 사라졌어요.",
    a: "모든 데이터는 기기 내부에만 저장됩니다. 앱을 삭제하면 데이터도 함께 삭제되니, 중요한 기록은 CSV 또는 PDF로 주기적으로 내보내 백업해 주시기 바랍니다.",
  },
  {
    q: "그 외 문의사항이 있어요.",
    a: "아래 이메일로 문의해 주시면 확인 후 답변드리겠습니다.",
  },
];

export default function SupportPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
        Support
      </p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight">지원 / 문의</h1>
      <p className="mt-3 leading-relaxed text-neutral-600">
        이스타항공 모바일 파일럿 로그북 사용 중 궁금한 점이 있으신가요?
      </p>

      <div className="mt-12 space-y-8">
        {FAQS.map((item) => (
          <div key={item.q} className="border-b border-black/5 pb-8">
            <h2 className="font-semibold text-neutral-900">Q. {item.q}</h2>
            <p className="mt-2 leading-relaxed text-neutral-600">{item.a}</p>
          </div>
        ))}
      </div>

      <section className="mt-12 rounded-2xl border border-black/10 bg-neutral-50 p-6">
        <dl className="space-y-2 text-sm">
          <div className="flex gap-2">
            <dt className="w-20 shrink-0 text-neutral-400">개발자</dt>
            <dd className="text-neutral-800">Jusub Kim</dd>
          </div>
          <div className="flex gap-2">
            <dt className="w-20 shrink-0 text-neutral-400">이메일</dt>
            <dd>
              <a
                href="mailto:jujusangsacompany@gmail.com"
                className="text-red-600 hover:underline"
              >
                jujusangsacompany@gmail.com
              </a>
            </dd>
          </div>
        </dl>
      </section>

      <p className="mt-16 text-xs text-neutral-400">
        © 2026 JUJUSANGSA. All rights reserved.
      </p>
    </div>
  );
}
