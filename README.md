# jujusangsa.com

쥬쥬상사 회사소개 및 앱 포트폴리오 사이트. Next.js (App Router) + Tailwind CSS.

## 페이지 구성

- `/` — 회사 소개, 앱 포트폴리오
- `/logbook` — 이스타항공 모바일 파일럿 로그북 앱 소개
- `/privacy` — 개인정보처리방침
- `/support` — 지원 / 자주 묻는 질문

## 시작하기

```bash
npm install
npm run dev
```

http://localhost:3000 에서 확인할 수 있습니다.

## 스크린샷 추가하기

`/logbook` 페이지는 `public/screenshots/` 폴더의 이미지 6장을 사용합니다.
아래 파일명으로 넣어주세요 (자세한 내용은 `public/screenshots/README.txt` 참고):

```
public/screenshots/1-dashboard.png
public/screenshots/2-logbook-list.png
public/screenshots/3-edit-record.png
public/screenshots/4-file-import.png
public/screenshots/5-guide.png
public/screenshots/6-about.png
```

## 배포 (Vercel)

1. GitHub 저장소에 push
2. [vercel.com/new](https://vercel.com/new)에서 저장소 import
3. 카페24에서 구매한 `jujusangsa.com` 도메인을 Vercel 프로젝트의 Domains 설정에 연결
   (카페24 DNS에 Vercel이 안내하는 A/CNAME 레코드 등록)

## 빌드 확인

```bash
npm run build
```
