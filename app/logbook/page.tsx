import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "이스타항공 모바일 파일럿 로그북",
  description:
    "조종사를 위한 비행 기록 관리 앱. CSV 불러오기/내보내기, PDF 출력, 기기 내 로컬 저장을 지원합니다.",
};

const SCREENSHOTS = [
  { src: "/screenshots/1-dashboard.jpeg", alt: "메인 대시보드" },
  { src: "/screenshots/2-logbook-list.jpeg", alt: "비행 기록 목록" },
  { src: "/screenshots/3-edit-record.jpeg", alt: "기록 수정 화면" },
  { src: "/screenshots/4-file-import.jpeg", alt: "파일 불러오기" },
  { src: "/screenshots/5-guide.jpeg", alt: "사용 설명서" },
  { src: "/screenshots/6-about.jpeg", alt: "저작권 및 문의" },
];

const FEATURES = [
  {
    title: "빠른 기록 작성",
    desc: "날짜, 편명, 출발/도착, BLOCK · NIGHT · INST 시간, PIC/PICUS/CO-PILOT 구분까지 실제 비행일지 양식 그대로 입력합니다.",
  },
  {
    title: "CSV 불러오기 · 내보내기",
    desc: "회사 CMS에서 다운로드한 비행기록 CSV와 앱에서 내보낸 CSV 두 형식을 자동 인식해 불러옵니다. 데이터는 언제든 CSV로 백업할 수 있습니다.",
  },
  {
    title: "PDF 출력",
    desc: "제출·보관용 B5 사이즈 출력 포맷으로 로그북을 PDF로 저장합니다.",
  },
  {
    title: "자동 합계 계산",
    desc: "연도별 · 기간별 PIC, BLOCK, NIGHT, INST, TO-D 합계를 자동으로 집계해 상단에 표시합니다.",
  },
  {
    title: "완전한 로컬 저장",
    desc: "회원가입·로그인 없이 모든 데이터가 기기 내부에만 저장됩니다. 인터넷 연결 없이도 모든 기능을 사용할 수 있습니다.",
  },
];

export default function LogbookPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-red-700 to-red-900 text-white">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-200">
            EastarJet Mobile Pilot&apos;s Logbook
          </p>
          <h1 className="mt-4 max-w-xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            이스타항공 모바일
            <br />
            파일럿 로그북
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-red-100">
            조종사의 비행 기록 작성, 조회, 백업, 출력을 하나의 앱에서.
            현장에서 실제로 쓰는 로그북 양식을 그대로 옮겨왔습니다.
          </p>
        </div>
      </section>

      {/* Screenshots */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold tracking-tight">화면 미리보기</h2>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {SCREENSHOTS.map((shot) => (
            <div
              key={shot.src}
              className="relative aspect-[9/19.5] overflow-hidden rounded-xl border border-black/10 bg-neutral-100"
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(max-width: 768px) 33vw, 16vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-black/5 bg-neutral-50">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-2xl font-bold tracking-tight">주요 기능</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-black/10 bg-white p-6"
              >
                <h3 className="font-semibold text-neutral-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h2 className="text-lg font-semibold">앱 정보</h2>
            <dl className="mt-4 space-y-2 text-sm text-neutral-600">
              <div className="flex gap-2">
                <dt className="w-20 shrink-0 text-neutral-400">버전</dt>
                <dd>1.0.0</dd>
              </div>
              <div className="flex gap-2">
                <dt className="w-20 shrink-0 text-neutral-400">개발</dt>
                <dd>이스타항공 파일럿 전용 내부 앱</dd>
              </div>
              <div className="flex gap-2">
                <dt className="w-20 shrink-0 text-neutral-400">문의</dt>
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
          </div>
          <div>
            <h2 className="text-lg font-semibold">더 알아보기</h2>
            <div className="mt-4 flex flex-col gap-2 text-sm">
              <Link href="/privacy" className="text-red-600 hover:underline">
                개인정보처리방침 보기 →
              </Link>
              <Link href="/support" className="text-red-600 hover:underline">
                지원 / 자주 묻는 질문 보기 →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
