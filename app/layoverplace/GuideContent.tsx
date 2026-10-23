export default function GuideContent() {
  return (
    <>
      <p className="mt-4 text-lg leading-relaxed text-neutral-600">
        네이버지도나 구글맵에서 장소를 찾은 다음, 공유하기로 레이오버 플레이스에 보내면 장소 이름과 위치가 자동으로 입력됩니다.
      </p>

      <ol className="mt-10 space-y-8">
        <li className="flex gap-4">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
            1
          </span>
          <p className="pt-1 text-base leading-relaxed text-neutral-700">
            네이버지도 또는 구글맵에서 등록할 장소를 엽니다.
          </p>
        </li>
        <li className="flex gap-4">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
            2
          </span>
          <div className="pt-1">
            <p className="text-base leading-relaxed text-neutral-700">
              공유 버튼을 누릅니다.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-neutral-500">
              네이버지도는 공유 메뉴에서 <span className="font-semibold text-neutral-700">[더보기]</span>를 한 번 더 눌러야 휴대폰의 공유 화면이 열립니다.
            </p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
            3
          </span>
          <p className="pt-1 text-base leading-relaxed text-neutral-700">
            앱 목록에서 레이오버 플레이스를 누릅니다.
          </p>
        </li>
        <li className="flex gap-4">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
            4
          </span>
          <p className="pt-1 text-base leading-relaxed text-neutral-700">
            레이오버 플레이스가 열리면서 등록 화면에 이름과 위치가 채워집니다. 도시와 카테고리를 고른 뒤 등록하면 끝입니다.
          </p>
        </li>
      </ol>

      <section className="mt-12 rounded-2xl border border-black/10 bg-neutral-50 p-6">
        <p className="text-sm leading-relaxed text-neutral-600">
          목록에 레이오버 플레이스가 안 보이면 앱 목록 끝에 있는{" "}
          <span className="font-semibold text-neutral-700">[더보기]</span>를 눌러 레이오버 플레이스를 찾아 켜거나 즐겨찾기에 추가하세요. 한 번만 설정하면 다음부터는 앞쪽에 나타납니다.
        </p>
      </section>
    </>
  );
}
