"use client";
import { useState } from 'react'

export default function FavButton() {
    const [faviorate, setfaviorate] = useState(false)

    return (
    <div className="col-start-4 row-start-1 row-end-4 flex flex-col items-center justify-center text-center">

        <button onClick={() => setfaviorate(prev => !prev)}>
            {faviorate
                ? <img src="/images/favorite_on_transparent.png" className="w-20 h-25" alt="お気に入り登録済み" />
                : <img src="/images/favorite_off_transparent.png" className="w-20 h-25" alt="お気に入り未登録" />
            }
        </button>

        <div className="text-[#8e1728]">
            {faviorate ? "お気に入り" : "お気に入り解除"}
        </div>

    </div>
)
}