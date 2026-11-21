"use client";

import { useState } from "react";
import { ReviewModal } from "@/components/ReviewModal";

export function ReviewButton({ courseTitle }: { courseTitle: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="justify-self-end rounded-full bg-[#8e1728] px-5 py-2 font-bold text-white hover:bg-[#6f1422]"
      >
        レビューを投稿する
      </button>
      {open && (
        <ReviewModal
          courseTitle={courseTitle}
          onClose={() => setOpen(false)}
          onSubmit={() => setOpen(false)}
        />
      )}
    </>
  );
}