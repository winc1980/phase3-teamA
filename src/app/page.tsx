import Link from "next/link";
import { averageEasy, courses, stars } from "@/data/dummy";

// トップ画面：検索エリア ＋ 授業の一覧
export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      {/* ① 検索・カテゴリ絞り込みエリア（見た目） */}
      <section className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
        <div className="space-y-4">
          {/* キーワード検索 */}
          <div>
            <label
              htmlFor="keyword-search"
              className="mb-1.5 block text-sm font-bold text-zinc-800"
            >
              キーワード検索
            </label>
            <input
              id="keyword-search"
              type="text"
              placeholder="授業名・先生の名前で検索..."
              className="w-full rounded-lg border border-zinc-300 px-3.5 py-2 text-sm focus:border-[#8e1728] focus:outline-none"
            />
          </div>

          {/* 学部・科目群・曜日時限*/}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div>
              <label
                htmlFor="department-select"
                className="mb-1 block text-xs font-bold text-zinc-700"
              >
                学部
              </label>
              <select
                id="department-select"
                className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm"
              >
                <option>すべて</option>
                <option>政治経済学部</option>
                <option>法学部</option>
                <option>商学部</option>
                <option>基幹理工学部</option>
                <option>創造理工学部</option>
                <option>先進理工学部</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="category-select"
                className="mb-1 block text-xs font-bold text-zinc-700"
              >
                科目群
              </label>
              <select
                id="category-select"
                className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm"
              >
                <option>すべて</option>
                <option>基礎科目</option>
                <option>専門必修科目</option>
                <option>専門選択科目</option>
                <option>一般教養</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="schedule-select"
                className="mb-1 block text-xs font-bold text-zinc-700"
              >
                曜日・時限
              </label>
              <select
                id="schedule-select"
                className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm"
              >
                <option>すべて</option>
                <option>月曜 1限</option>
                <option>火曜 2限</option>
                <option>水曜 3限</option>
                <option>木曜 3限</option>
                <option>金曜 4限</option>
              </select>
            </div>
          </div>

          {/* チェックボックス絞り込み */}
          <div className="flex flex-wrap items-center gap-5 pt-1 text-sm font-medium text-zinc-700">
            <label className="flex cursor-pointer items-center gap-1.5">
              <input
                type="checkbox"
                className="h-4 w-4 accent-[#8e1728]"
                defaultChecked
              />
              <span>☆3以上</span>
            </label>
            <label className="flex cursor-pointer items-center gap-1.5">
              <input type="checkbox" className="h-4 w-4 accent-[#8e1728]" />
              <span>♡3以上</span>
            </label>
            <label className="flex cursor-pointer items-center gap-1.5">
              <input type="checkbox" className="h-4 w-4 accent-[#8e1728]" />
              <span>楽単</span>
            </label>
            <label className="flex cursor-pointer items-center gap-1.5">
              <input type="checkbox" className="h-4 w-4 accent-[#8e1728]" />
              <span>面白い</span>
            </label>
          </div>
        </div>
      </section>

      {/* ② 授業一覧エリア（既存のダミーデータをカード型で表示） */}
      <section className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <h2 className="text-base font-bold text-zinc-800">
            授業一覧（{courses.length}件）
          </h2>
          <select
            aria-label="並び替え"
            className="rounded-md border border-zinc-300 bg-white px-2.5 py-1 text-xs text-zinc-700"
          >
            <option>並び替え：楽単度順</option>
            <option>並び替え：口コミ数順</option>
            <option>並び替え：新着順</option>
          </select>
        </div>

        <ul className="grid grid-cols-1 gap-3">
          {courses.map((course) => {
            const avg = averageEasy(course);
            return (
              <li key={course.id}>
                <Link
                  href={`/courses/${course.id}`}
                  className="block rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:border-[#8e1728] hover:shadow-md"
                >
                  {/* 授業名と先生の名前 */}
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div className="text-lg font-bold text-zinc-900">
                      {course.name}{" "}
                      <span className="ml-1 text-sm font-normal text-zinc-500">
                        担当：{course.teacher}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-[#8e1728]">
                      詳細を見る →
                    </span>
                  </div>

                  {/* 星評価と口コミ件数 */}
                  <div className="mt-2 flex items-center gap-3 text-sm">
                    {course.reviews.length > 0 ? (
                      <>
                        <span className="font-bold text-amber-500">
                          {stars(avg)}{" "}
                          <span className="ml-1 text-zinc-800">
                            {avg.toFixed(1)}
                          </span>
                        </span>
                        <span className="text-zinc-500">
                          （口コミ {course.reviews.length}件）
                        </span>
                      </>
                    ) : (
                      <span className="text-zinc-400">口コミなし</span>
                    )}
                  </div>

                  {/* タグ風デザイン（アクセント） */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    <span className="rounded-full border border-[#e6b8be] bg-[#fbeeef] px-2.5 py-0.5 text-xs font-bold text-[#8e1728]">
                      早稲田科目
                    </span>
                    {course.reviews.length > 0 && (
                      <span className="rounded-full border border-zinc-200 bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600">
                        レビューあり
                      </span>
                    )}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
