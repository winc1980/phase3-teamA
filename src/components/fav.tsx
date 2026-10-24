"use client";
import { useState } from 'react'

export default function FavButton() {
    const [faviorate, setfaviorate] = useState(false)

    return (
        <div className="col-start-4 row-start-1 row-end-3 justify-center flex flex-col text-center">
            <button onClick={() => setfaviorate(prev => !prev)}>
            {faviorate ? <img src='/images/favorite_on_transparent.png ' className="w-20 h-25 justify-center"/> : <img src='/images/favorite_off_transparent.png' className="w-20 h-25 "/> }
            </button>
            <div className="col-start-4 row-start-3 row-end-3 text-center">
                {faviorate ? <div className="text-[#8e1728]">お気に入り</div> : <div></div> }
            </div>
        </div>
    )
}