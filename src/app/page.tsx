import Link from "next/link";
import { courses, averageEasy, stars } from "@/data/dummy";

// トップ画面：授業の一覧（今はダミーデータ）
export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-bold">授業を探す</h1>
      <p className="text-sm text-zinc-500">
        今はダミーデータを表示しています。検索・カテゴリ絞り込みはこれから作ります。
      </p>
      <ul className="divide-y divide-zinc-200 rounded-lg border border-zinc-200 bg-white">
        {courses.map((course) => (
          <li key={course.id}>
            <Link href={`/courses/${course.id}`} className="block px-4 py-3 hover:bg-zinc-50">
              <div className="font-medium">
                {course.name} <span className="text-sm text-zinc-500">{course.teacher}</span>
              </div>
              <div className="text-sm">
                {course.reviews.length > 0 ? (
                  <>
                    <span className="text-amber-600">{stars(averageEasy(course))}</span>{" "}
                    <span className="text-zinc-500">（{course.reviews.length}件）</span>
                  </>
                ) : (
                  <span className="text-zinc-500">口コミなし</span>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
