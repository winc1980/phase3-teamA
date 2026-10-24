import Link from "next/link";
import { averageEasy, courses, stars } from "@/data/dummy";
import { max } from "drizzle-orm";


// トップ画面：検索エリア ＋ 授業の一覧
export default function Home() {
  return (
    <div className="flex flex-col gap-3">

        <label
          className=" block text-sm font-bold text-zinc-800 "
        >
          マイページ
        </label>
        <label
          className=" block text-sm font-bold text-zinc-800 "
        >
          user name
        </label>

        <section
        className="w-1/2 rounded-xl border border-zinc-200 bg-white p-5 shadow-sm items-center text-center"
        >
        <label
          className=" block text-sm font-bold text-zinc-800"
        >
          自分のコメント・評価一覧（n件）
        </label>

        <ul className="grid grid-cols-1 gap-3">
          {courses.map((course) => {
            
            const avg = averageEasy(course);
            {/* コースの最helpfulコメントの配列番号を算出 */}
            const index =course.reviews.length;
            const representTextIndexO2 = course.reviews.reduce((maxIndex, currentReviews, currentIndex, array) =>{
              const maxHelpful = array[maxIndex].helpful;
              const currentHelpful = currentReviews.helpful ;
              return(maxHelpful < currentHelpful)
              ? currentIndex
              : maxIndex
            }, 0);
            const representTextIndex = (index > 1 )
            ? representTextIndexO2
            : 0;
            const maxlength = 20;
            const displaytext = course?.reviews?.[representTextIndex]?.text.length > maxlength
            ? course?.reviews?.[representTextIndex]?.text.slice(0, maxlength) + "..."
            : course?.reviews?.[representTextIndex]?.text;
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

                  {/* 星評価の表示 */}
                  <div className="mt-2 flex items-center gap-3 text-sm">
                    {course.reviews.length > 0 && (
                      <>
                        <span className="font-bold text-amber-500">
                          {stars(avg)}{" "}
                          <span className="ml-1 text-zinc-800">
                            {avg.toFixed(1)}
                          </span>
                        </span>
                      </>
                    )}
                  </div>

                    {/* 最有力コメントの表示 */}
                  <div>
                    <span  className="ml-1 text-sm font-normal text-zinc-500">

                            {displaytext}

                          </span>
                  </div>

                    {/* 編集と削除のボタン */}
                  <div>
                    <span className="text-sm font-bold text-zinc-900 bg-zinc-100 px-[5px] py-[2px] rounded ">
                      編集 
                    </span>

                    <span className="text-sm font-bold  px-[5px] py-[2px] ">
                    {     }
                    </span>

                    <span className="text-sm font-bold text-white bg-[#8e1728] px-[5px] py-[2px] rounded">
                      削除
                    </span>
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