import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침 | 레이오버 플레이스",
  description: "레이오버 플레이스 개인정보처리방침",
};

const SECTIONS = [
  {
    title: "1. 수집하는 개인정보의 항목 및 수집방법",
    body: (
      <div className="mt-3 space-y-4 leading-relaxed text-neutral-600">
        <div>
          <p className="font-medium text-neutral-700">가. 수집 항목</p>
          <p className="mt-2 font-medium text-neutral-700">필수 항목</p>
          <ul className="mt-1 list-disc pl-5 space-y-1">
            <li>이메일 주소 (회원가입 및 본인확인 목적)</li>
            <li>닉네임</li>
          </ul>
          <p className="mt-3 font-medium text-neutral-700">서비스 이용 과정에서 생성·수집되는 정보</p>
          <ul className="mt-1 list-disc pl-5 space-y-1">
            <li>장소(맛집·쇼핑·명소 등) 등록 시 입력하는 상호명, 주소, 좌표(위도·경도), 설명, 대표메뉴, 사진, 해시태그</li>
            <li>댓글, 정보 변경 요청 내용</li>
            <li>좋아요 등 서비스 이용 기록</li>
            <li>사용자가 업로드한 사진 파일</li>
          </ul>
          <p className="mt-3 font-medium text-neutral-700">자동 수집 정보</p>
          <ul className="mt-1 list-disc pl-5 space-y-1">
            <li>접속 로그, 기기 정보(OS 종류, 앱 버전 등)</li>
            <li>오프라인 저장 기능 이용 시 기기 로컬 저장소에 저장되는 콘텐츠(도시별 장소 정보 및 사진)</li>
          </ul>
        </div>
        <div>
          <p className="font-medium text-neutral-700">나. 수집 방법</p>
          <ul className="mt-1 list-disc pl-5 space-y-1">
            <li>회원가입 및 서비스 이용 과정에서 이용자가 직접 입력</li>
            <li>서비스 이용 과정에서 자동으로 생성되어 수집</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "2. 개인정보의 수집 및 이용목적",
    body: (
      <div className="mt-3 leading-relaxed text-neutral-600">
        <p>회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.</p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>회원 관리: 본인 확인, 부정 이용 방지, 가입 의사 확인</li>
          <li>서비스 제공: 승무원 간 레이오버 도시 정보(맛집·쇼핑·명소) 공유, 장소 등록·조회·검색, 댓글·좋아요 등 커뮤니티 기능 제공</li>
          <li>서비스 개선: 오프라인 저장 등 편의 기능 제공, 서비스 이용 통계 분석을 통한 기능 개선</li>
          <li>고지 및 안내: 서비스 관련 공지사항 전달</li>
        </ul>
      </div>
    ),
  },
  {
    title: "3. 개인정보의 보유 및 이용기간",
    body: (
      <p className="mt-3 leading-relaxed text-neutral-600">
        회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 다만, 회원 탈퇴 시에도 이용자가 등록한 장소 정보, 댓글 등 커뮤니티 콘텐츠는 다른 이용자의 이용 경험 보호를 위해 등록자 식별정보를 제외하고 유지될 수 있습니다. 관계 법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 관계 법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.
      </p>
    ),
  },
  {
    title: "4. 개인정보의 제3자 제공",
    body: (
      <div className="mt-3 leading-relaxed text-neutral-600">
        <p>회사는 이용자의 개인정보를 본 방침에서 고지한 범위를 초과하여 이용하거나 원칙적으로 이용자의 동의 없이 제3자에게 제공하지 않습니다. 다만, 다음의 경우는 예외로 합니다.</p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>이용자가 사전에 동의한 경우</li>
          <li>법령의 규정에 의거하거나 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
        </ul>
      </div>
    ),
  },
  {
    title: "5. 개인정보처리 위탁",
    body: (
      <div className="mt-3 leading-relaxed text-neutral-600">
        <p>회사는 원활한 서비스 제공을 위하여 아래와 같이 개인정보 처리업무를 외부 업체에 위탁하고 있습니다.</p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-black/10 bg-neutral-100">
                <th className="px-4 py-2 text-left font-semibold text-neutral-700">수탁업체</th>
                <th className="px-4 py-2 text-left font-semibold text-neutral-700">위탁업무 내용</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Supabase Inc.", "회원 정보 및 서비스 데이터 저장·관리(데이터베이스, 인증)"],
                ["Resend", "회원가입 인증 및 안내 이메일 발송"],
                ["Google (Google Maps Platform)", "지도 표시 및 위치 기반 서비스 제공"],
                ["NAVER Cloud Platform", "국내 지역 지도 표시 서비스 제공"],
              ].map(([company, work]) => (
                <tr key={company} className="border-b border-black/5">
                  <td className="px-4 py-3 text-neutral-700 whitespace-nowrap">{company}</td>
                  <td className="px-4 py-3 text-neutral-600">{work}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4">회사는 위탁계약 체결 시 개인정보 보호법 관련 법령에 따라 위탁업무 수행 목적 외 개인정보 처리 금지, 기술적·관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리·감독 등을 계약서 등 문서에 명시하고 있습니다.</p>
      </div>
    ),
  },
  {
    title: "6. 정보주체의 권리·의무 및 행사방법",
    body: (
      <div className="mt-3 leading-relaxed text-neutral-600">
        <p>이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며, 회원 탈퇴를 요청할 수 있습니다.</p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>앱 내 마이페이지를 통한 열람·정정</li>
          <li>아래 문의처를 통한 열람, 정정, 삭제, 처리정지 요청</li>
        </ul>
        <p className="mt-4">서비스 운영 특성상, 회사는 회원가입 시 수집한 이메일 정보를 통해 특정 닉네임 사용자의 신원을 기술적으로 확인할 수 있는 상태에 있습니다. 이는 부정 이용 방지, 우수 기여자 파악 등 서비스 운영 목적으로만 활용되며, 그 외의 목적으로 임의로 조회하지 않습니다.</p>
      </div>
    ),
  },
  {
    title: "7. 개인정보의 파기절차 및 방법",
    body: (
      <p className="mt-3 leading-relaxed text-neutral-600">
        회사는 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 재생이 불가능한 방법으로 지체 없이 파기합니다. 전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없도록 삭제합니다.
      </p>
    ),
  },
  {
    title: "8. 개인정보의 안전성 확보조치",
    body: (
      <div className="mt-3 leading-relaxed text-neutral-600">
        <p>회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.</p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>개인정보에 대한 접근권한 관리 및 접근통제</li>
          <li>개인정보를 안전하게 저장·전송할 수 있는 암호화 기술 적용</li>
          <li>해킹 등에 대비한 기술적 대책</li>
        </ul>
      </div>
    ),
  },
  {
    title: "9. 폐쇄형 커뮤니티 운영에 관한 사항",
    body: (
      <p className="mt-3 leading-relaxed text-neutral-600">
        본 서비스는 특정 항공사 소속 승무원(운항승무원·객실승무원)을 대상으로 하는 폐쇄형 서비스로, 사전에 등록된 항공사 이메일 도메인을 보유한 자만 가입할 수 있습니다. 이메일 도메인 확인 절차는 본인이 해당 항공사 소속임을 확인하기 위한 목적으로만 사용되며, 그 외의 목적으로 이용되지 않습니다.
      </p>
    ),
  },
  {
    title: "10. 개인정보 보호책임자",
    body: (
      <div className="mt-3 leading-relaxed text-neutral-600">
        <p>회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고 이용자의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
      
        </ul>
        <p className="mt-3">개인정보와 관련한 문의사항이 있으시면 페이지 하단의 연락처로 연락 주시기 바라며, 회사는 이용자의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.</p>
      </div>
    ),
  },
  {
    title: "11. 고지의 의무",
    body: (
      <p className="mt-3 leading-relaxed text-neutral-600">
        본 개인정보처리방침의 내용 추가, 삭제 및 수정이 있을 시에는 개정 최소 7일 전부터 앱 내 공지사항을 통하여 고지할 것입니다.
      </p>
    ),
  },
];

export default function LayoverPlacePrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">
        Privacy Policy
      </p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight">
        개인정보처리방침
      </h1>
      <p className="mt-3 text-sm text-neutral-500">
        레이오버 플레이스 · 최종 수정일: 2026년 9월 18일
      </p>
      <p className="mt-4 leading-relaxed text-neutral-600">
        쥬쥬상사(JUJU SANGSA)(이하 "회사")는 「개인정보 보호법」 등 관련 법령을 준수하며, 회사가 제공하는 모바일 애플리케이션 "레이오버 플레이스"(이하 "서비스")를 이용하는 이용자의 개인정보를 보호하기 위해 다음과 같이 개인정보처리방침을 수립·공개합니다.
      </p>

      <div className="mt-12 space-y-10">
        {SECTIONS.map((s) => (
          <section key={s.title}>
            <h2 className="text-lg font-semibold text-neutral-900">{s.title}</h2>
            {s.body}
          </section>
        ))}

        <section className="rounded-2xl border border-black/10 bg-neutral-50 p-6">
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
