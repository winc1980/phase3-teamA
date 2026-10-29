import Link from "next/link";
import { averageEasy, courses, stars } from "@/data/dummy";

export default function RankingSection() {
  return (
    <section className="space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2 px-1">
        <h2 className="text-lg font-bold text-zinc-900">
          📊 人気の授業ランキング
        </h2>

        <div className="flex items-center gap-2">
          <label
            htmlFor="ranking-department"
            className="text-xs font-bold text-zinc-700"
          >
            学部選択：
          </label>
          <select
            id="ranking-department"
            className="rounded-lg border border-zinc-300 bg-white px-3 py-1.5 text-xs font-medium text-zinc-800 focus:border-[#8e1728] focus:outline-none"
          >
            <option>全学部（総合）</option>
            <option>政治経済学部</option>
            <option>法学部</option>
            <option>商学部</option>
            <option>基幹理工学部</option>
            <option>創造理工学部</option>
            <option>先進理工学部</option>
          </select>
        </div>
      </div>

      {/* 切り替えタブ */}
      <div className="grid grid-cols-3 overflow-hidden rounded-lg bg-zinc-200 p-1 text-xs font-bold sm:text-sm">
        <button
          type="button"
          className="rounded-md bg-[#8e1728] py-2 text-white shadow-sm"
        >
          ♛ 総合人気
        </button>
        <button
          type="button"
          className="rounded-md py-2 text-zinc-700 hover:bg-zinc-300/60"
        >
          ☆ 楽単ランキング
        </button>
        <button
          type="button"
          className="rounded-md py-2 text-zinc-700 hover:bg-zinc-300/60"
        >
          ♡ 面白さランキング
        </button>
      </div>

      {/* ランキングカード一覧 */}
      <ul className="grid grid-cols-1 gap-3 pt-1">
        {courses.map((course, index) => {
          const rank = index + 1;
          const avg = averageEasy(course);

          const funScores = [4.2, 4.6, 2.5];
          const funAvg = funScores[index % funScores.length];
          const fullHearts = Math.round(funAvg);
          const heartMarks =
            "♥".repeat(fullHearts) + "♡".repeat(5 - fullHearts);

          const courseTagsList = [
            ["過去問あり", "出席ゆるい", "テスト重視"],
            ["毎週課題あり", "実力がつく", "演習中心"],
            ["期末試験難", "出席必須", "語学必修"],
          ];
          const tags = courseTagsList[index % courseTagsList.length];

          const badgeColor =
            rank === 1
              ? "bg-amber-500 text-white"
              : rank === 2
                ? "bg-zinc-400 text-white"
                : rank === 3
                  ? "bg-amber-700 text-white"
                  : "bg-zinc-200 text-zinc-700";

          const crownColor =
            rank === 1
              ? "text-amber-400"
              : rank === 2
                ? "text-zinc-400"
                : rank === 3
                  ? "text-amber-700"
                  : "text-zinc-300";

          return (
            <li key={course.id}>
              <Link
                href="/class-detail"
                className="flex items-start gap-4 rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:border-[#8e1728] hover:shadow-md"
              >
                <div className="flex flex-col items-center justify-center pt-0.5">
                  <span className={`text-2xl leading-none ${crownColor}`}>
                    ♛
                  </span>
                  <span
                    className={`mt-1 whitespace-nowrap rounded-md px-2.5 py-0.5 text-xs font-bold ${badgeColor}`}
                  >
                    {rank}位
                  </span>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div className="text-base font-bold text-zinc-900 sm:text-lg">
                      {course.name}{" "}
                      <span className="text-xs font-normal text-zinc-600 sm:text-sm">
                        [担当：{course.teacher}]
                      </span>
                    </div>
                  </div>

                  <div className="mt-1.5 flex flex-wrap items-center gap-3 text-sm">
                    {course.reviews.length > 0 ? (
                      <>
                        <span className="font-bold text-amber-500">
                          {stars(avg)}{" "}
                          <span className="ml-0.5 text-zinc-800">
                            {avg.toFixed(1)}
                          </span>
                        </span>
                        <span className="font-bold text-rose-600">
                          {heartMarks}{" "}
                          <span className="ml-0.5 text-zinc-800">
                            {funAvg.toFixed(1)}
                          </span>
                        </span>
                        <span className="text-xs text-zinc-500">
                          （口コミ {course.reviews.length}件）
                        </span>
                      </>
                    ) : (
                      <span className="text-zinc-400">口コミなし</span>
                    )}
                  </div>

                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#e6b8be] bg-[#fbeeef] px-2.5 py-0.5 text-xs font-bold text-[#8e1728]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-2.5 flex items-end justify-between gap-3">
                    {course.reviews.length > 0 ? (
                      <p className="line-clamp-2 text-xs leading-relaxed text-zinc-700 sm:text-sm">
                        {course.reviews[0].text}
                      </p>
                    ) : (
                      <span />
                    )}
                    <span className="shrink-0 text-xs font-bold text-[#8e1728]">
                      詳細を見る →
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>

      {/* もっと順位を見るボタン */}
      <div className="pt-4 pb-2 text-center">
        <Link
          href="/rankings"
          className="inline-flex items-center justify-center gap-1.5 rounded-full border border-zinc-300 bg-white px-6 py-2.5 text-sm font-bold text-zinc-700 shadow-sm transition hover:border-[#8e1728] hover:bg-zinc-50 hover:text-[#8e1728]"
        >
          <span>もっと順位を見る</span>
          <svg
            aria-hidden="true"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}