"use client";
import Link from "next/link";
import {averageEasy ,averageInteresting, courses} from "@/data/dummy";
import Header from "@/app/layout";
import { useState } from 'react'

export default function ClassDetail(){
    const [faviorate, setfaviorate] = useState(false)
    const course = courses.find((course) => course.id === 1);    
    return(
        <div className="min-h-screen bg-gray-100 w-full">
            <div className="flex flex-col gap-y-2">
                <div className="grid grid-cols-4 grid-rows-3 font-bold text-center">
                    <div className="col-span-1 row-start-1 justify-end flex flex-col text-gray-400 w-full">
                        <p>[{course?.faculty}学部]</p>
                    </div>
                    <div className="col-span-1 row-start-2 justify-center flex flex-col text-black-100 text-3xl">
                        <p>{course?.name}</p>
                    </div>
                    <div className="col-span-1 row-start-3 justify-start flex flex-col text-gray-400">
                        担当教員：{course?.teacher}
                    </div>
                    <button onClick={() => setfaviorate(prev => !prev)} className="col-start-4 row-start-1 row-end-3 flex items-center justify-center">
                        {faviorate ? <img src='/images/favorite_on_transparent.png ' className="w-20 h-25 justify-center"/> : <img src='/images/favorite_off_transparent.png' className="w-20 h-25 "/> }
                    </button>
                    <div className="col-start-4 row-start-3 row-end-3 text-center">
                        {faviorate ? <div className="text-[#8e1728]">お気に入り</div> : <div></div> }
                    </div>
                </div>

                <div className="bg-white border rounded-xl border-gray-300 grid grid-cols-2 grid-rows-2 p-4 flex items-center text-center my-1">
                    <div className="col-start-1 col-end-2 text-bold text-xl text-gray-500 flex flex-col justify-start">
                        楽単度
                    </div>
                    <div className="grid grid-cols-2 row-start-2 col-start-1 col-end-2 ">
                            <div className="col-start-2 font-bold text-red-300 text-3xl">{averageEasy(course)}/5</div>
                    </div>
                    <div className="row-start-1 row-span-2 col-start-2 h-20 border-l-2 border-gray-400"></div>
                    <div className="row-start-1 col-end-3 text-bold text-gray-500 text-xl">
                        おもしろさ
                    </div>
                    <div className="grid grid-cols-2 row-start-2 col-start-2 col-end-3 ">
                        <div className="col-start-2 font-bold text-yellow-400 text-3xl">{averageInteresting(course)}/5</div>
                    </div>
                </div>
                <div className="bg-white border rounded-xl border-gray-300 grid grid-cols-5 grid-rows-3 p-4 text-center">
                    <div className="col-start-1 col-end-2 text-bold text-xl text-black">
                        成績評価の割合
                    </div>
                    <div className="row-start-2 col-start-1 col-end-6 bg-red border rounded-xl border-gray-300 grid grid-cols-10 p-4 mx-4">
                        
                    </div>
                    <div className="text-gray-500 text-s row-start-3">対象:{courses[0].faculty}</div>
                    <div className="text-gray-500 text-s row-start-3">学期</div>
                    <div className="text-gray-500 text-s row-start-3">時限:{courses[0].day}曜{courses[0].period}限</div>
                    <div className="text-gray-500 text-s row-start-3">単位</div>
                    <div className="text-gray-500 text-s row-start-3">人数</div>
                </div>
                <div className="grid grid-cols-5 p-4 font-bold ">
                    
                          
                    <div className="col-start-1 col-end-3 text-xl">
                        レビュー・コメント（件）
                    </div>
                        {courses[0].reviews.map((review) => (
                        <div key={review.id} className="bg-white border rounded-xl p-4">
                            <p>楽単度：{review.easy}</p>
                            <p>{review.text}</p>
                            <p>参考になった：{review.helpful}</p>
                        </div>
                        ))}
                </div>

            </div>
        </div>
    );

}