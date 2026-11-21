"use client";

import { useState } from "react";

const REASONS = ["悪口・誹謗中傷", "事実と違う内容", "授業と関係ない", "その他"];

export function ReportButton() {
    const [open, setOpen] = useState(false);
    const [reason, setReason] = useState("");

    const close = () => {
        setOpen(false);
        setReason("");
    };

    return (
        <>
            <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="この口コミを通報する"
                className="float-right flex h-7 w-7 items-center justify-center rounded-full border border-gray-400 text-sm font-bold text-gray-500 hover:border-[#8e1728] hover:text-[#8e1728]"
            >
                ！
            </button>
            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
                    <div className="w-full max-w-sm rounded-2xl bg-white p-6 text-neutral-900 shadow-2xl">
                        <h2 className="mb-4 text-lg font-bold">この口コミを通報する</h2>
                        <div className="mb-6 space-y-2">
                            {REASONS.map((r) => (
                                <label key={r} className="flex items-center gap-2 text-sm">
                                    <input
                                        type="radio"
                                        name="reason"
                                        checked={reason === r}
                                        onChange={() => setReason(r)}
                                    />
                                    {r}
                                </label>
                            ))}
                        </div>
                        <button
                            type="button"
                            onClick={close}
                            disabled={reason === ""}
                            className="w-full rounded-full bg-[#8e1728] py-3 font-bold text-white hover:bg-[#6f1422] disabled:cursor-not-allowed disabled:opacity-40"
                        >
                            通報する
                        </button>
                        <button
                            type="button"
                            onClick={close}
                            className="mt-3 block w-full text-center text-sm text-neutral-400 hover:underline"
                        >
                            キャンセル
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}