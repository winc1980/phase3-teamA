import Link from "next/link";
import {averageEasy ,averageInteresting, courses} from "@/data/dummy";
import Header from "@/app/layout";
import FavButton from "@/components/fav";
import { notFound } from "next/navigation";
import {stars } from "@/data/dummy";

export function generateStaticParams() {
  return courses.map((c) => ({ id: String(c.id) }));
}

function Stars({ rating }: { rating: number }) {
    const roundedRating = Math.round(rating);

    return (
        <div className="flex text-yellow-500 text-2xl">
            {Array.from({ length: 5 }, (_, i) => (
                <span key={i} style={{ color: "#eab308" }}>
                    {i < roundedRating ? "★" : "☆"}
                </span>
            ))}
        </div>
    );
}

function Hearts({ rating }: { rating: number }) {
    const roundedRating = Math.round(rating);

    return (
        <div className="flex text-red-800 text-3xl">
            {Array.from({ length: 5 }, (_, i) => (
                <span key={i} style={{ color: "#f22323" }}>
                    {i < roundedRating ? "♥" : "♡"}
                </span>
            ))}
        </div>
    );
}

export default async function ClassDetail({ params }: { params: Promise<{ id: string }> }){
    const { id } = await params;
    const course = courses.find((course) => course.id === Number(id));
    if (!course) notFound();
    return(
        <div className="min-h-screen bg-gray-100 w-full">
            <div className="flex flex-col gap-y-2 mx-6">
                <div className="grid grid-cols-4 grid-rows-3 font-bold text-center">
                    <div className="col-span-1 row-start-1 justify-end flex flex-col text-gray-400 w-full">
                        <p>[{course?.faculty}学部]</p>
                    </div>
                    <div className="col-span-1 row-start-2 justify-center flex flex-col text-black-100 text-3xl">
                        <p className ="text-zinc-900">{course?.name}</p>
                    </div>
                    <div className="col-span-1 row-start-3 justify-start flex flex-col text-gray-400">
                        担当教員：{course?.teacher}
                    </div>
                    <FavButton/>
                </div>

                <div className="bg-white border rounded-xl border-gray-300 grid grid-cols-2 grid-rows-2 p-4 flex items-center text-center my-1">
                    <div className="col-start-1 col-end-2 text-bold text-xl text-gray-500 flex flex-col justify-start">
                        楽単度
                    </div>
                    <div className="grid grid-cols-2 row-start-2 col-start-1 col-end-2 w-full">
                        <div className="flex text-yellow-500 text-3xl justify-center">
                            <Stars rating={averageEasy(course)} />
                        </div>
                        <div className="col-start-2 text-yellow-500 font-bold text-3xl">
                            {averageEasy(course)}/5
                        </div>
                    </div>
                    <div className="row-start-1 row-span-2 col-start-2 h-20 border-l-2 border-gray-400"></div>
                    <div className="row-start-1 col-end-3 text-bold text-gray-500 text-xl">
                        おもしろさ
                    </div>
                    <div className="grid grid-cols-2 row-start-2 col-start-2 col-end-3 justify-center">
                        <div className="flex text-red-300 text-3xl justify-center">
                            <Hearts rating={averageInteresting(course)} />
                        </div>
                        <div className="col-start-2 font-bold text-red-600 text-3xl justify-center">
                            {averageInteresting(course)}/5
                        </div>
                    </div>
                </div>
                <div className="bg-white border rounded-xl border-gray-300 grid grid-cols-5 grid-rows-3 p-4 text-center">
                    <div className="col-start-1 col-end-2 text-bold text-xl text-black">
                        成績評価の割合
                    </div>
                    <div className="row-start-2 col-start-1 col-end-6 bg-red border rounded-xl border-gray-300 grid grid-cols-10 p-4 mx-4">
                        
                    </div>
                    <div className="text-gray-500 text-s row-start-3">対象:{course?.faculty}</div>
                    <div className="text-gray-500 text-s row-start-3">学期</div>
                    <div className="text-gray-500 text-s row-start-3">時限:{course?.day}曜{course?.period}限</div>
                    <div className="text-gray-500 text-s row-start-3">単位</div>
                    <div className="text-gray-500 text-s row-start-3">人数</div>
                </div>
                <div className="grid grid-cols-1 gap-3">
                    <p className="text-lg font-bold text-zinc-900">レビュー・コメント（{course.reviews.length} 件）</p>
                    {course?.reviews.map((review) => (
                    <div key={review.id} className="bg-white border rounded-xl p-4">
                        <span className="font-bold text-amber-500">
                            {stars(review.easy)}{" "}
                            <span className="ml-1 text-zinc-800">
                            {review.easy.toFixed(1)}
                            </span>
                        </span>
                        <p className="text-zinc-900">{review.text}</p>
                        <button className="block ml-auto text-black py-2 px-4 rounded-3xl border border-gray-500 duration-300 ">
                            ↑参考になった：{review.helpful}
                        </button>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
}