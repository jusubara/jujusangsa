import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DownloadButtons from "./DownloadButtons";
import FeatureTabs from "./FeatureTabs";

const SCREENSHOTS = [
  { src: "/screenshots/layoverplace/01_home_1_6.5inch.PNG", alt: "홈" },
  { src: "/screenshots/layoverplace/02_place_list_6.5inch.PNG", alt: "장소 목록" },
  { src: "/screenshots/layoverplace/03_place_detail_6.5inch.PNG", alt: "장소 상세" },
  { src: "/screenshots/layoverplace/04_city_list_6.5inch.PNG", alt: "도시 목록" },
  { src: "/screenshots/layoverplace/05_place_list_6.5inch.PNG", alt: "장소 목록 2" },
  { src: "/screenshots/layoverplace/06_offline_save_6.5inch.PNG", alt: "오프라인 저장" },
];

export const metadata: Metadata = {
  title: "레이오버 플레이스",
};

export default function LayoverPlacePage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-sky-700 to-sky-900 text-white">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-sky-200">
                Layover Place
              </p>
              <h1 className="mt-4 max-w-xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                레이오버 플레이스
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-sky-100">
                항공사 동료들이 남긴 진짜 레이오버 맛집·명소 정보를 하나의 앱에서.<br />
                승무원이 직접 쓰고, 승무원이 함께 검증합니다.
              </p>
              <DownloadButtons />
            </div>
            <Image
              src="/icons/layoverplace.png"
              alt="레이오버 플레이스 아이콘"
              width={120}
              height={120}
              className="rounded-3xl shadow-lg shrink-0"
            />
          </div>
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
          <FeatureTabs />
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
                <dd>0.2.0</dd>
              </div>
              <div className="flex gap-2">
                <dt className="w-20 shrink-0 text-neutral-400">개발</dt>
                <dd>항공 승무원 전용 폐쇄형 커뮤니티 앱</dd>
              </div>
              <div className="flex gap-2">
                <dt className="w-20 shrink-0 text-neutral-400">문의</dt>
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
          </div>
          <div>
            <h2 className="text-lg font-semibold">더 알아보기</h2>
            <div className="mt-4 flex flex-col gap-2 text-sm">
              <Link href="/layoverplace/privacy" className="text-sky-600 hover:underline">
                개인정보처리방침 보기 →
              </Link>
              <Link href="/layoverplace/support" className="text-sky-600 hover:underline">
                지원 / 자주 묻는 질문 보기 →
              </Link>
              <Link href="/layoverplace/guide" className="text-sky-600 hover:underline">
                지도 앱에서 장소 가져오기 →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
