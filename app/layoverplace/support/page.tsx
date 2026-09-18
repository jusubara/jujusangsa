import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "지원",
  description: "레이오버 플레이스 지원 / 자주 묻는 질문",
};

const FAQS = [
  {
    q: "회원가입은 어떻게 하나요?",
    a: "레이오버 플레이스는 사전 등록된 항공사 이메일을 보유한 운항승무원·객실승무원을 위한 폐쇄형 서비스입니다. 앱 실행 후 회사 이메일로 인증하시면 가입이 완료됩니다.",
  },
  {
    q: "오프라인에서도 사용할 수 있나요?",
    a: "네. 도시 화면에서 \"오프라인 저장\" 기능을 이용하시면, 인터넷 연결 없이도 저장된 도시의 장소 정보를 확인하실 수 있습니다.",
  },
  {
    q: "계정 삭제를 원합니다.",
    a: "jujusangsacompany@gmail.com으로 \"계정 삭제 요청\" 제목의 이메일을 보내주시면 영업일 기준 7일 이내에 계정 및 관련 데이터를 삭제해 드립니다.",
  },
  {
    q: "등록한 장소 정보가 잘못되었어요.",
    a: "장소 상세 화면의 \"정보 변경 요청\" 또는 댓글 기능을 통해 알려주시면 확인 후 반영하겠습니다.",
  },
];

export default function LayoverPlaceSupportPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">
        Support
      </p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight">지원 / 문의</h1>
      <p className="mt-3 leading-relaxed text-neutral-600">
        레이오버 플레이스 이용 중 궁금하신 점이나 불편하신 점이 있으시면 언제든지 아래 이메일로 문의해 주세요.
      </p>

      <section className="mt-10 rounded-2xl border border-black/10 bg-neutral-50 p-6">
        <dl className="space-y-2 text-sm">
          <div className="flex gap-2">
            <dt className="w-20 shrink-0 text-neutral-400">이메일</dt>
            <dd>
              <a
                href="mailto:jujusangsacompany@gmail.com"
                className="text-sky-600 hover:underline"
              >
                jujusangsacompany@gmail.com
              </a>
            </dd>
          </div>
        </dl>
        <p className="mt-4 text-sm leading-relaxed text-neutral-500">
          문의 주실 때 아래 정보를 함께 남겨주시면 더 빠르게 답변드릴 수 있습니다.
        </p>
        <ul className="mt-2 space-y-1 text-sm text-neutral-500 list-disc list-inside">
          <li>사용 중인 기기 (예: iPhone 15, Galaxy S24 등)</li>
          <li>운영체제 버전 (예: iOS 18, Android 14)</li>
          <li>앱 버전 (마이 &gt; 버전 정보에서 확인 가능)</li>
          <li>문의 내용 또는 오류가 발생한 상황</li>
        </ul>
      </section>

      <h2 className="mt-14 text-xl font-bold tracking-tight">자주 묻는 질문</h2>
      <div className="mt-6 space-y-8">
        {FAQS.map((item) => (
          <div key={item.q} className="border-b border-black/5 pb-8">
            <h3 className="font-semibold text-neutral-900">Q. {item.q}</h3>
            <p className="mt-2 leading-relaxed text-neutral-600">{item.a}</p>
          </div>
        ))}
      </div>

      <section className="mt-12 rounded-2xl border border-black/10 bg-neutral-50 p-6">
        <h2 className="text-sm font-semibold text-neutral-700">개인정보처리방침</h2>
        <p className="mt-2 text-sm leading-relaxed text-neutral-600">
          레이오버 플레이스의 개인정보처리방침은 아래 링크에서 확인하실 수 있습니다.
        </p>
        <Link
          href="/layoverplace/privacy"
          className="mt-3 inline-block text-sm text-sky-600 hover:underline"
        >
          개인정보처리방침 보기 →
        </Link>
      </section>

      <p className="mt-16 text-xs text-neutral-400">
        © 2026 쥬쥬상사 (JUJU SANGSA). All rights reserved.
      </p>
    </div>
  );
}
