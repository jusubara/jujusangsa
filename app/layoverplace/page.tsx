import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "레이오버 플레이스",
};

export default function LayoverPlacePage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-sky-700 to-sky-900 text-white">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-200">
            Layover Place
          </p>
          <h1 className="mt-4 max-w-xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            레이오버 플레이스
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <Link href="/layoverplace/privacy" className="text-sky-600 hover:underline text-sm">
          개인정보처리방침 보기 →
        </Link>
      </section>
    </div>
  );
}
