import Link from "next/link";
import { notFound } from "next/navigation";
import { averageEasy, courses, stars } from "@/data/dummy";
  
// ダミーデータの授業IDを、ビルド時に全部ページにしておく
export function generateStaticParams() {
  return courses.map((c) => ({ id: String(c.id) }));
}

// 授業の詳細画面：ログインなしで誰でも見られる
export default async function CoursePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const course = courses.find((c) => c.id === Number(id));
  if (!course) notFound();

  return (
    <div className="flex flex-col gap-4">
      <Link href="/" className="text-sm text-teal-700">
        ← 一覧に戻る
      </Link>
      <div>
        <h1 className="text-xl font-bold">{course.name}</h1>
        <p className="text-sm text-zinc-500">
          {course.teacher}・{course.faculty}・{course.day}曜{course.period}限
        </p>
      </div>

      {course.reviews.length > 0 ? (
        <>
          <div className="rounded-lg bg-white p-4 border border-zinc-200">
            単位の取りやすさ <span className="text-amber-600">{stars(averageEasy(course))}</span>
          </div>
          <ul className="flex flex-col gap-3">
            {course.reviews.map((review) => (
              <li key={review.id} className="rounded-lg border border-zinc-200 bg-white p-4">
                <p>{review.text}</p>
                <p className="mt-2 text-sm text-zinc-500">
                  <span className="text-amber-600">{stars(review.easy)}</span>　役に立った {review.helpful}
                </p>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div className="rounded-lg border border-zinc-200 bg-white p-4 text-center text-zinc-500">
          まだ口コミがありません
        </div>
      )}
    </div>
  );
}
