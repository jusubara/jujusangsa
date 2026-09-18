import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DownloadButtons from "./DownloadButtons";

const FEATURES = [
  { title: "도시별 맛집·쇼핑·명소 정보", desc: "같은 항공사 동료들이 직접 다녀온 레이오버 도시의 맛집, 쇼핑, 명소 정보를 한곳에서 확인하세요." },
  { title: "대표메뉴·가격·해시태그", desc: "대표메뉴와 가격, #웨이팅필수 #새벽까지영업 같은 실용적인 태그로 필요한 정보를 빠르게 파악할 수 있습니다." },
  { title: "좋아요·댓글로 검증된 정보", desc: "좋아요 순으로 인기 장소를 확인하고, 댓글로 최신 정보를 주고받으며 신뢰할 수 있는 정보를 함께 만들어갑니다." },
  { title: "지도 공유로 간편 등록", desc: "구글맵이나 네이버맵에서 장소를 공유하기만 하면 좌표까지 자동으로 등록됩니다." },
  { title: "오프라인 저장", desc: "비행 중에도 저장해둔 도시의 정보를 확인할 수 있어, 인터넷 연결 없이도 걱정 없습니다." },
  { title: "폐쇄형 커뮤니티", desc: "사전 등록된 항공사 이메일을 보유한 승무원만 가입할 수 있는 안전한 폐쇄형 서비스입니다." },
];

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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
