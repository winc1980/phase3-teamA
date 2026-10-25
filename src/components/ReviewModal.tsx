"use client";

import { useState } from "react";

const TAGS = [
  "テストあり",
  "レポートあり",
  "出席重視",
  "オンライン併用",
  "グループワーク",
  "過去問あり",
];

export type ReviewInput = {
  easy: number;
  fun: number;
  tags: string[];
  comment: string;
};

type ReviewModalProps = {
  courseTitle?: string;
  onClose?: () => void;
  onSubmit?: (review: ReviewInput) => void;
};

export function ReviewModal({
  courseTitle = "政治学原論",
  onClose,
  onSubmit,
}: ReviewModalProps) {
  const [easy, setEasy] = useState("4.5");
  const [fun, setFun] = useState("4.5");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [comment, setComment] = useState("");

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const handleSubmit = () => {
    const review = {
      easy: Number(easy),
      fun: Number(fun),
      tags: selectedTags,
      comment,
    };
    console.log(review);
    onSubmit?.(review);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 text-neutral-900 shadow-2xl">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-lg font-bold">{courseTitle} のレビュー投稿</h2>
          <button
            type="button"
            onClick={onClose}
            className="text-xl leading-none text-neutral-500 hover:text-neutral-700"
          >
            ✕
          </button>
        </div>

        <div className="mb-5 space-y-4">
          <div>
            <p className="mb-2 text-sm font-bold">楽単度（☆）</p>
            <div className="flex items-center justify-between">
              <input
                type="number"
                min={1}
                max={5}
                step={0.5}
                value={easy}
                onChange={(e) => setEasy(e.target.value)}
                className="w-20 rounded-md border border-neutral-300 px-2 py-1 text-sm"
              />
              <span className="text-sm font-bold text-amber-500">★ {easy}</span>
            </div>
          </div>

          <div>
            <p className="mb-2 text-sm font-bold">面白さ（♡）</p>
            <div className="flex items-center justify-between">
              <input
                type="number"
                min={1}
                max={5}
                step={0.5}
                value={fun}
                onChange={(e) => setFun(e.target.value)}
                className="w-20 rounded-md border border-neutral-300 px-2 py-1 text-sm"
              />
              <span className="text-sm font-bold text-rose-600">♥ {fun}</span>
            </div>
          </div>
        </div>

        <div className="mb-5">
          <p className="mb-2 text-sm font-bold">特徴タグ選択（複数可）</p>
          <div className="flex flex-wrap gap-2">
            {TAGS.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => toggleTag(tag)}
                className={`rounded-full border px-3 py-1 text-sm font-medium ${
                  selectedTags.includes(tag)
                    ? "border-[#8b1a2b] bg-rose-50 text-[#8b1a2b]"
                    : "border-neutral-300 bg-neutral-50 text-neutral-600"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="comment" className="mb-2 block text-sm font-bold">
            コメント・対策アドバイス
          </label>
          <textarea
            id="comment"
            rows={3}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="授業の感想やテスト・レポート対策、先生の人柄など"
            className="w-full resize-none rounded-lg border border-neutral-300 p-3 text-sm"
          />
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="w-full rounded-full bg-[#8b1a2b] py-3 text-base font-bold text-white hover:bg-[#6f1422]"
        >
          投稿を完了する
        </button>
        <button
          type="button"
          onClick={onClose}
          className="mt-3 block w-full text-center text-sm text-neutral-400 hover:underline"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
}