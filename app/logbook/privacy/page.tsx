import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: "모바일 파일럿 로그북 개인정보처리방침",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
        Privacy Policy
      </p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight">
        개인정보처리방침
      </h1>
      <p className="mt-3 text-sm text-neutral-500">
        모바일 파일럿 로그북 · 최종 수정일: 2026년 10월 7일
      </p>

      <div className="mt-12 space-y-10">
        <section>
          <h2 className="text-lg font-semibold text-neutral-900">
            1. 수집하는 개인정보
          </h2>
          <p className="mt-3 leading-relaxed text-neutral-600">
            본 앱은 이용자의 개인정보를 수집하거나 서버로 전송하지 않습니다.
            이용자가 입력한 비행 기록(날짜, 편명, 노선, 비행시간, 편조 이름
            등)은 모두 이용자의 기기 내부에만 저장됩니다. 개발자는 이
            데이터에 접근할 수 없습니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-900">
            2. 기기 내 자동 백업
          </h2>
          <p className="mt-3 leading-relaxed text-neutral-600">
            데이터가 변경되면 앱이 백업용 CSV 파일을 기기에 자동으로
            저장합니다. 이 파일은 이용자의 기기(앱 내부 저장소 또는 이용자가
            직접 선택한 폴더)에만 저장되며, 외부로 전송되지 않습니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-900">
            3. Google Drive 백업 (선택 기능)
          </h2>
          <p className="mt-3 leading-relaxed text-neutral-600">
            이용자가 직접 선택하는 경우에 한해, 본인의 Google 계정으로
            로그인하여 비행 기록 백업 파일(CSV)을 본인의 Google Drive에 저장할
            수 있습니다.
          </p>
          <ul className="mt-3 space-y-2 text-neutral-600 leading-relaxed list-none">
            <li className="flex gap-2">
              <span className="shrink-0 text-neutral-400">·</span>
              <span>이 기능은 이용자가 연결하기 전까지 사용되지 않습니다.</span>
            </li>
            <li className="flex gap-2">
              <span className="shrink-0 text-neutral-400">·</span>
              <span>
                요청하는 권한은 drive.file 하나이며, 본 앱이 생성한 백업
                파일에만 접근합니다. 이용자의 Drive에 있는 다른 파일은
                열람하거나 수정할 수 없습니다.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="shrink-0 text-neutral-400">·</span>
              <span>
                Google 로그인 인증 정보(액세스 토큰)는 이용자의 기기 보안
                저장소에만 저장됩니다.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="shrink-0 text-neutral-400">·</span>
              <span>
                개발자는 이용자의 Google 계정 정보, 이메일 주소, 백업 파일
                내용을 수집, 저장, 열람하지 않으며 제3자에게 제공하지
                않습니다. 백업 파일은 이용자의 기기와 이용자 본인의 Google
                Drive 사이에서만 전송됩니다.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="shrink-0 text-neutral-400">·</span>
              <span>
                앱의 "저작권 및 문의" 화면에서 언제든 연결을 해제할 수
                있으며, 연결 해제 시 기기에 저장된 인증 정보가 삭제됩니다.
                Drive에 올라간 백업 파일은 이용자가 Drive에서 직접 삭제하실
                수 있습니다.
              </span>
            </li>
          </ul>
          <div className="mt-4 rounded-xl border border-black/10 bg-neutral-50 p-4 text-sm text-neutral-600 leading-relaxed">
            <p className="font-semibold text-neutral-700">
              Google API 서비스 이용자 데이터 정책 준수 안내
            </p>
            <p className="mt-1">
              모바일 파일럿 로그북이 Google API를 통해 받은 정보를 사용하고
              다른 앱으로 전송할 때는 제한적 사용 요건을 포함한 Google API
              서비스 사용자 데이터 정책(Google API Services User Data
              Policy)을 준수합니다.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-900">
            4. 데이터 삭제
          </h2>
          <p className="mt-3 leading-relaxed text-neutral-600">
            앱을 삭제하면 기기에 저장된 데이터가 함께 삭제됩니다. 기기 내
            백업 파일과 Google Drive에 저장된 백업 파일은 이용자가 직접
            삭제하셔야 합니다.
          </p>
        </section>

        <section className="rounded-2xl border border-black/10 bg-neutral-50 p-6">
          <h2 className="text-sm font-semibold text-neutral-700 mb-4">
            5. 문의
          </h2>
          <dl className="space-y-2 text-sm">
            <div className="flex gap-2">
              <dt className="w-28 shrink-0 text-neutral-400">회사명</dt>
              <dd className="text-neutral-800">쥬쥬상사 (JUJUSANGSA)</dd>
            </div>
            <div className="flex gap-2">
              <dt className="w-28 shrink-0 text-neutral-400">대표자</dt>
              <dd className="text-neutral-800">김주섭</dd>
            </div>
            <div className="flex gap-2">
              <dt className="w-28 shrink-0 text-neutral-400">사업자등록번호</dt>
              <dd className="text-neutral-800">216-30-01412</dd>
            </div>
            <div className="flex gap-2">
              <dt className="w-28 shrink-0 text-neutral-400">이메일</dt>
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
        </section>
      </div>

      <p className="mt-16 text-xs text-neutral-400">
        © 2026 JUJUSANGSA. All rights reserved.
      </p>
    </div>
  );
}
