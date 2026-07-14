import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jujusangsa.com"),
  title: {
    default: "쥬쥬상사 | JUJUSANGSA",
    template: "%s | 쥬쥬상사",
  },
  description:
    "쥬쥬상사는 실용적인 모바일 앱을 만드는 1인 개발 스튜디오입니다. 이스타항공 파일럿 로그북 등 항공 실무 도구를 개발합니다.",
  openGraph: {
    title: "쥬쥬상사 | JUJUSANGSA",
    description:
      "쥬쥬상사는 실용적인 모바일 앱을 만드는 1인 개발 스튜디오입니다.",
    url: "https://jujusangsa.com",
    siteName: "쥬쥬상사",
    locale: "ko_KR",
    type: "website",
  },
};

const NAV_LINKS = [
  { href: "/", label: "홈" },
  { href: "/logbook", label: "파일럿 로그북" },
  { href: "/support", label: "지원" },
  { href: "/privacy", label: "개인정보처리방침" },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold tracking-tight text-neutral-900">
          쥬쥬상사
        </Link>
        <nav className="flex items-center gap-6 text-sm text-neutral-600">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-neutral-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-black/5 bg-neutral-50">
      <div className="mx-auto max-w-5xl px-6 py-10 text-sm text-neutral-500">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-medium text-neutral-700">쥬쥬상사 · JUJUSANGSA</p>
          <nav className="flex gap-5">
            <Link href="/privacy" className="hover:text-neutral-900">
              개인정보처리방침
            </Link>
            <Link href="/support" className="hover:text-neutral-900">
              지원
            </Link>
            <a href="mailto:jujusangsacompany@gmail.com" className="hover:text-neutral-900">
              문의하기
            </a>
          </nav>
        </div>
        <p className="mt-6 text-xs text-neutral-400">
          © 2026 JUJUSANGSA. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-neutral-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
