"use client";

// iOS 앱스토어 출시 후 아래 href를 앱스토어 링크로 교체하세요.
// 예: href="https://apps.apple.com/app/id000000000"
const IOS_APP_STORE_URL = ""; // TODO: 앱스토어 링크로 교체

const ANDROID_APK_URL =
  "https://expo.dev/artifacts/eas/-z7NM0DVikrmijBChCwjFqy-U71kkHDn-nufnlvWc8s.apk";

function AppleIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 4.5C12 4.5 11 2 8.5 2C6 2 4 4 4 6.5C4 10 7 12 7 12" />
      <path d="M12 4.5C12 4.5 13 2 15.5 2C18 2 20 4 20 6.5C20 10 17 12 17 12" />
      <path d="M7 12C5.5 13.5 4 16 4 18.5C4 20.5 5 22 7 22C8.5 22 10 21 12 21C14 21 15.5 22 17 22C19 22 20 20.5 20 18.5C20 16 18.5 13.5 17 12" />
      <path d="M7 12H17" />
    </svg>
  );
}

function AndroidIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 16V10C5 7 7.5 4.5 12 4.5C16.5 4.5 19 7 19 10V16" />
      <rect x="3" y="10" width="18" height="8" rx="2" />
      <path d="M8 22V20" />
      <path d="M16 22V20" />
      <path d="M8 4L6 2" />
      <path d="M16 4L18 2" />
      <circle cx="9" cy="14" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="14" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function DownloadButtons() {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {/* iOS 버튼 — 앱스토어 출시 전까지 alert 표시 */}
      <button
        onClick={() => alert("아직 준비중입니다")}
        className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50"
      >
        <AppleIcon />
        iOS 앱스토어 (준비중)
      </button>

      {/* Android 버튼 — APK 직접 다운로드 */}
      <a
        href={ANDROID_APK_URL}
        download
        className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50"
      >
        <AndroidIcon />
        Android 다운로드
      </a>
    </div>
  );
}
