import type { Metadata } from "next";
import GuideContent from "../GuideContent";

export const metadata: Metadata = {
  title: "지도 앱에서 장소 가져오기",
};

export default function LayoverPlaceGuidePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">
        Guide
      </p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight">
        지도 앱에서 장소 가져오기
      </h1>
      <GuideContent />

      <p className="mt-16 text-xs text-neutral-400">
        © 2026 쥬쥬상사 (JUJU SANGSA). All rights reserved.
      </p>
    </div>
  );
}
