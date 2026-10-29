const DAYS = ["月", "火", "水", "木", "金"];
const PERIODS = ["1限", "2限", "3限", "4限", "5限"];

export default function SearchSection() {
  return (
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

        {/* 学部・科目群 */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <label
              htmlFor="department-select"
              className="mb-1 block text-xs font-bold text-zinc-700"
            >
              学部
            </label>
            <select
              id="department-select"
              className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm focus:border-[#8e1728] focus:outline-none"
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
              className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm focus:border-[#8e1728] focus:outline-none"
            >
              <option>すべて</option>
              <option>基礎科目</option>
              <option>専門必修科目</option>
              <option>専門選択科目</option>
              <option>一般教養</option>
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

        {/* 詳細検索 */}
        <details className="group border-t border-zinc-200 pt-3">
          <summary className="flex cursor-pointer list-none items-center justify-between rounded-lg px-2 py-1.5 text-sm font-bold text-zinc-700 transition hover:bg-zinc-50 [&::-webkit-details-marker]:hidden">
            <span className="flex items-center gap-2">
              <span>詳細検索（授業コード・年度・曜日時限など）</span>
            </span>
            <svg
              aria-hidden="true"
              className="h-5 w-5 text-zinc-500 transition-transform duration-200 group-open:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          {/* 展開される詳細検索の中身 */}
          <div className="mt-4 space-y-5 px-1">
            <div>
              <label
                htmlFor="course-code"
                className="mb-1.5 block text-xs font-bold text-zinc-700"
              >
                授業コード
              </label>
              <input
                id="course-code"
                type="text"
                placeholder="一部でも検索可能（例: ABCX101L）"
                className="w-full rounded-lg border border-zinc-300 px-3.5 py-2 text-sm focus:border-[#8e1728] focus:outline-none"
              />
            </div>

            {/* 開講年度 ＆ 開講学期 */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="year-input"
                  className="mb-1.5 block text-xs font-bold text-zinc-700"
                >
                  開講年度
                </label>
                <div className="flex">
                  <input
                    id="year-input"
                    type="number"
                    defaultValue={2026}
                    className="w-full rounded-l-lg border border-r-0 border-zinc-300 px-3.5 py-2 text-sm focus:border-[#8e1728] focus:outline-none"
                  />
                  <span className="inline-flex items-center rounded-r-lg border border-zinc-300 bg-zinc-50 px-3.5 text-sm text-zinc-700">
                    年度
                  </span>
                </div>
              </div>

              <div>
                <span className="mb-1.5 block text-xs font-bold text-zinc-700">
                  開講学期
                </span>
                <div className="flex items-center gap-6 py-2 text-sm text-zinc-700">
                  <label className="flex cursor-pointer items-center gap-2">
                    <input
                      type="radio"
                      name="semester"
                      className="h-4 w-4 accent-[#8e1728]"
                    />
                    <span>すべて</span>
                  </label>
                  <label className="flex cursor-pointer items-center gap-2">
                    <input
                      type="radio"
                      name="semester"
                      className="h-4 w-4 accent-[#8e1728]"
                    />
                    <span>前期</span>
                  </label>
                  <label className="flex cursor-pointer items-center gap-2">
                    <input
                      type="radio"
                      name="semester"
                      defaultChecked
                      className="h-4 w-4 accent-[#8e1728]"
                    />
                    <span>後期</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* 曜日・時限 */}
              <div className="max-w-md rounded-lg border border-zinc-200 bg-white">
                <details className="group/schedule" open>
                  <summary className="flex cursor-pointer list-none items-center justify-between border-b border-zinc-100 px-4 py-3 text-sm font-bold text-zinc-800 [&::-webkit-details-marker]:hidden">
                    <div className="flex items-center gap-2">
                      <svg
                        aria-hidden="true"
                        className="h-4 w-4 text-zinc-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>曜日・時限</span>
                    </div>
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 text-zinc-500 transition-transform duration-200 group-open/schedule:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>

                  <div className="p-4">
                    <div className="mb-4 flex items-center justify-between text-xs">
                      <label className="flex cursor-pointer items-center gap-2 text-zinc-600">
                        <input type="checkbox" className="peer sr-only" />
                        <div className="h-4 w-7 rounded-full bg-zinc-200 after:absolute after:mt-[2px] after:ml-[2px] after:h-3 after:w-3 after:rounded-full after:bg-white after:transition-all peer-checked:bg-[#8e1728] peer-checked:after:translate-x-3" />
                        <span>もっと表示</span>
                      </label>

                      <button
                        type="button"
                        className="flex items-center gap-1 font-bold text-amber-700 hover:underline"
                      >
                        <span>× 選択をリセット</span>
                      </button>
                    </div>

                    <div className="flex justify-center">
                      <table className="border-collapse text-center text-xs text-zinc-700">
                        <thead>
                          <tr>
                            <th className="p-1.5 font-normal" />
                            {DAYS.map((day) => (
                              <th
                                key={day}
                                className="px-2.5 py-1.5 font-medium text-zinc-700"
                              >
                                {day}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {PERIODS.map((period) => (
                            <tr key={period}>
                              <td className="py-1.5 pr-3 text-right font-medium text-zinc-700">
                                {period}
                              </td>
                              {DAYS.map((day) => (
                                <td key={`${day}-${period}`} className="p-1.5">
                                  <input
                                    type="checkbox"
                                    aria-label={`${day}曜${period}`}
                                    className="h-4 w-4 cursor-pointer rounded border-zinc-300 accent-[#8e1728]"
                                  />
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </details>
              </div>

              {/* キャンパス */}
              <div className="mt-4 sm:mt-0">
                <label
                  htmlFor="campus-select"
                  className="mb-1.5 block text-xs font-bold text-zinc-700"
                >
                  キャンパス
                </label>
                <select
                  id="campus-select"
                  className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm focus:border-[#8e1728] focus:outline-none"
                >
                  <option>すべて</option>
                  <option>早稲田キャンパス</option>
                  <option>戸山キャンパス</option>
                  <option>西早稲田キャンパス</option>
                  <option>所沢キャンパス</option>
                </select>
              </div>
            </div>
          </div>
        </details>

        {/* 検索ボタン */}
        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#8e1728] py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#721220]"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.5 10.5a7.5 7.5 0 0013.15 6.15z"
            />
          </svg>
          <span>この条件で検索</span>
        </button>
      </div>
    </section>
  );
}