import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pb-20 pt-24 sm:pt-32">
        <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
          JUJUSANGSA
        </p>
        <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          현업의 문제를 아는 사람이 만드는,
          <br />
          실용적인 모바일 앱
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-600">
          쥬쥬상사는 실제 업무 현장의 불편함에서 출발한 앱을 만듭니다.
          첫 번째 프로젝트는 항공사 조종사를 위한 비행 기록 앱,
          &lsquo;이스타항공 모바일 파일럿 로그북&rsquo;입니다.
        </p>
        <div className="mt-10 flex gap-4">
          <Link
            href="/logbook"
            className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-neutral-700"
          >
            앱 소개 보기
          </Link>
          <a
            href="mailto:jujusangsacompany@gmail.com"
            className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-800 transition-colors hover:border-neutral-500"
          >
            문의하기
          </a>
        </div>
      </section>

      {/* About */}
      <section className="border-t border-black/5 bg-neutral-50">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-2xl font-bold tracking-tight">회사 소개</h2>
          <p className="mt-6 max-w-3xl leading-relaxed text-neutral-600">
            쥬쥬상사(JUJUSANGSA)는 특정 업계·직군의 실무 워크플로우에 맞춘
            모바일 앱을 개발합니다. 크고 화려한 기능보다, 매일 반복되는
            작업을 얼마나 빠르고 정확하게 처리할 수 있는지를 우선순위로 둡니다.
            모든 데이터는 사용자 기기 안에만 저장되는 방식을 기본 원칙으로,
            개인정보를 최소한으로 다루는 앱을 지향합니다.
          </p>
        </div>
      </section>

      {/* Portfolio */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-2xl font-bold tracking-tight">앱 포트폴리오</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <Link
            href="/logbook"
            className="group block overflow-hidden rounded-2xl border border-black/10 bg-white transition-shadow hover:shadow-lg"
          >
            <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-red-600 to-red-800 p-8">
              <div className="text-center text-white">
                <p className="text-xs font-semibold tracking-widest opacity-80">
                  EASTAR JET
                </p>
                <p className="mt-2 text-xl font-bold leading-snug">
                  모바일 파일럿 로그북
                </p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-neutral-900">
                이스타항공 모바일 파일럿 로그북
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                조종사를 위한 비행 기록 관리 앱. CSV 불러오기/내보내기,
                PDF 출력, 기기 내 로컬 저장을 지원합니다.
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-red-600 group-hover:underline">
                자세히 보기 →
              </span>
            </div>
          </Link>

          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-black/10 bg-white p-8 text-center text-neutral-400">
            <p className="text-sm font-medium">다음 앱을 준비 중입니다</p>
          </div>
        </div>
      </section>
    </div>
  );
}
