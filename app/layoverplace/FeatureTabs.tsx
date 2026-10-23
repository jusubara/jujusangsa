"use client";

import { useState } from "react";
import GuideContent from "./GuideContent";

const FEATURES = [
  { title: "도시별 맛집·쇼핑·명소 정보", desc: "같은 항공사 동료들이 직접 다녀온 레이오버 도시의 맛집, 쇼핑, 명소 정보를 한곳에서 확인하세요." },
  { title: "대표메뉴·가격·해시태그", desc: "대표메뉴와 가격, #웨이팅필수 #새벽까지영업 같은 실용적인 태그로 필요한 정보를 빠르게 파악할 수 있습니다." },
  { title: "좋아요·댓글로 검증된 정보", desc: "좋아요 순으로 인기 장소를 확인하고, 댓글로 최신 정보를 주고받으며 신뢰할 수 있는 정보를 함께 만들어갑니다." },
  { title: "지도 공유로 간편 등록", desc: "구글맵이나 네이버맵에서 장소를 공유하기만 하면 좌표까지 자동으로 등록됩니다." },
  { title: "오프라인 저장", desc: "비행 중에도 저장해둔 도시의 정보를 확인할 수 있어, 인터넷 연결 없이도 걱정 없습니다." },
  { title: "폐쇄형 커뮤니티", desc: "사전 등록된 항공사 이메일을 보유한 승무원만 가입할 수 있는 안전한 폐쇄형 서비스입니다." },
];

const TABS = ["주요 기능", "공유 방법"] as const;
type Tab = (typeof TABS)[number];

export default function FeatureTabs() {
  const [active, setActive] = useState<Tab>("주요 기능");

  return (
    <>
      <div role="tablist" className="flex gap-6 border-b border-black/10">
        {TABS.map((tab) => (
          <button
            key={tab}
            role="tab"
            aria-selected={active === tab}
            onClick={() => setActive(tab)}
            className={`pb-3 text-2xl font-bold tracking-tight transition-colors ${
              active === tab
                ? "border-b-2 border-sky-600 text-sky-600"
                : "text-neutral-400"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {active === "주요 기능" && (
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
      )}

      {active === "공유 방법" && (
        <div className="mt-8 max-w-3xl">
          <GuideContent />
        </div>
      )}
    </>
  );
}
