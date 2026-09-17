import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: "이스타항공 모바일 파일럿 로그북 개인정보처리방침",
};

const SECTIONS = [
  {
    title: "1. 수집하는 정보",
    body: "본 앱(이스타항공 모바일 파일럿 로그북)은 회원가입이나 로그인 기능이 없으며, 어떠한 개인정보도 외부 서버로 전송하거나 수집하지 않습니다. 사용자가 입력하는 비행 기록(날짜, 편명, 출발/도착지, 비행시간, 동승 승무원 이름 등)은 오직 사용자의 기기 내부에만 저장되며, 개발자를 포함한 어떠한 제3자도 이 데이터에 접근할 수 없습니다.",
  },
  {
    title: "2. 데이터 저장 위치",
    body: "모든 데이터는 사용자의 iOS 기기 내 로컬 데이터베이스에 저장됩니다. 인터넷 연결 없이도 앱의 모든 기능(비행 기록 작성, 조회, PDF/CSV 내보내기)을 사용할 수 있습니다.",
  },
  {
    title: "3. 데이터 삭제",
    body: "앱을 삭제하면 기기에 저장된 모든 데이터가 함께 삭제됩니다. 앱 내에서 개별 기록의 수정 및 삭제도 가능합니다.",
  },
  {
    title: "4. 제3자 제공",
    body: "본 앱은 어떠한 개인정보도 제3자에게 제공하거나 공유하지 않습니다.",
  },
  {
    title: "5. 문의처",
    body: "본 개인정보처리방침에 대해 문의사항이 있으시면 아래 연락처로 문의해 주시기 바랍니다.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
        Privacy Policy
      </p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight">
        개인정보처리방침
      </h1>
      <p className="mt-3 text-sm text-neutral-500">
        이스타항공 모바일 파일럿 로그북 · 최종 수정일: 2026년 7월 10일
      </p>

      <div className="mt-12 space-y-10">
        {SECTIONS.map((s) => (
          <section key={s.title}>
            <h2 className="text-lg font-semibold text-neutral-900">
              {s.title}
            </h2>
            <p className="mt-3 leading-relaxed text-neutral-600">{s.body}</p>
          </section>
        ))}

        <section className="rounded-2xl border border-black/10 bg-neutral-50 p-6">
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
      </div>

      <p className="mt-16 text-xs text-neutral-400">
        © 2026 JUJUSANGSA. All rights reserved.
      </p>
    </div>
  );
}
