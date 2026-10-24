import Link from "next/link";
import React from "react";

// 曜日と時限の定義
const DAYS = ["月", "火", "水", "木", "金"];
const PERIODS = [1, 2, 3, 4, 5];

const colorClasses: Record<string, string> = {
  green: "bg-[#dcf2e1] text-[#1d5a2b]",
  purple: "bg-[#e5dcf5] text-[#34235e]",
  lightblue: "bg-[#d6eef5] text-[#1b5360]",
  red: "bg-[#821721] text-white",
};

// 時間割用のデータ
const timetableData = [
  { id: 1, day: "月", period: 1, shortName: "ミクロ", fullName: "[政経] ミクロ経済学（月1）", color: "green", isSaved: true },
  { id: 2, day: "月", period: 2, shortName: "英語", fullName: "[共通] 英語（月2）", color: "purple", isSaved: false },
  { id: 3, day: "水", period: 2, shortName: "統計", fullName: "[共通] 統計学入門（水2）", color: "lightblue", isSaved: true },
  { id: 4, day: "火", period: 3, shortName: "社会学", fullName: "[社会] 社会学概論（火3）", color: "lightblue", isSaved: false },
  { id: 5, day: "木", period: 3, shortName: "政治学", fullName: "[政経] 政治学原論（木3）", color: "red", isSaved: true },
  { id: 6, day: "金", period: 4, shortName: "情報", fullName: "[情報] 情報処理（金4）", color: "green", isSaved: false },
];

// マイページ
export default function Mypage() {

  const savedCourses = timetableData.filter((course) => course.isSaved);

  return (
    <div className="grid grid-cols-2 gap-6">
      {/* 左半分 */}
      <div className="rounded-lg bg-white p-4 shadow-md">
        <p className="font-bold text-gray-800">自分のコメント・評価一覧</p>
        <hr className="my-2 border-t-2 border-gray-200" />
        {/* 左側に入れたい内容をここに書く */}
      </div>

      {/* 右半分 */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <p className="font-bold text-gray-800">お気に入り授業・時間割</p>
        <hr className="my-3 border-t border-gray-200" />

        <div className="mb-6 grid grid-cols-[24px_repeat(5,1fr)] items-center gap-1.5">
          {/* 左上の空白セル */}
          <div></div>

          {/* 曜日ヘッダー（月〜金） */}
          {DAYS.map((day) => (
            <div key={day} className="pb-1 text-center text-xs font-bold text-gray-600">
              {day}
            </div>
          ))}

          {/* 1〜5限の行をループで生成 */}
          {PERIODS.map((period) => (
            <React.Fragment key={period}>
              <div className="text-center text-xs font-bold text-gray-600">
                {period}
              </div>

              {/* 月〜金の各コマを生成 */}
              {DAYS.map((day) => {
                const course = timetableData.find(
                  (c) => c.day === day && c.period === period
                );

                return (
                  <div
                    key={`${day}-${period}`}
                    className={`flex h-12 items-center justify-center rounded-md p-1 text-center text-xs font-bold leading-tight ${
                      course
                        ? colorClasses[course.color] // 授業がある場合は対応する色
                        : "bg-gray-100"              // 空きコマの場合は薄いグレー
                    }`}
                  >
                    {course ? course.shortName : ""}
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>

        {/* --- 保存済みリスト --- */}
        <div>
          <p className="mb-2 text-sm font-bold text-gray-600">保存済みリスト</p>
          <ul className="space-y-1.5 text-sm text-gray-700">
            {savedCourses.map((course) => (
              <li key={course.id}>
                {/* 必要であれば Link で授業詳細ページへ飛ばせます */}
                <Link href={`/courses/${course.id}`} className="hover:underline">
                  ・{course.fullName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}