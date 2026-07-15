"use client";

// iOS 앱스토어 출시 후 아래 href를 앱스토어 링크로 교체하세요.
// 예: href="https://apps.apple.com/app/id000000000"
const IOS_APP_STORE_URL = ""; // TODO: 앱스토어 링크로 교체

const ANDROID_APK_URL =
  "https://expo.dev/artifacts/eas/-z7NM0DVikrmijBChCwjFqy-U71kkHDn-nufnlvWc8s.apk";

export default function DownloadButtons() {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      {/* iOS 버튼 — 앱스토어 출시 전까지 alert 표시 */}
      <button
        onClick={() => alert("아직 준비중입니다")}
        className="flex flex-col items-center gap-1 rounded-full bg-white/10 px-8 py-3 text-white ring-1 ring-white/30 backdrop-blur-sm transition hover:bg-white/20"
      >
        <span className="text-base font-semibold leading-none">iOS</span>
        <span className="text-xs text-red-200">준비중</span>
      </button>

      {/* Android 버튼 — APK 직접 다운로드 */}
      <a
        href={ANDROID_APK_URL}
        download
        className="flex flex-col items-center gap-1 rounded-full bg-red-600 px-8 py-3 text-white ring-1 ring-red-500 transition hover:bg-red-500"
      >
        <span className="text-base font-semibold leading-none">Android</span>
        <span className="text-xs text-red-200">APK 다운로드</span>
      </a>
    </div>
  );
}
