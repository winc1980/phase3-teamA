"use client";

type ReviewModalProps = {
  courseTitle?: string;
  onClose?: () => void;
};

export function ReviewModal({
  courseTitle = "政治学原論",
  onClose,
}: ReviewModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="w-full max-w-sm rounded-2xl bg-white p-5 text-neutral-800 shadow-2xl">
        <div className="mb-4 flex items-center justify-between border-b border-neutral-100 pb-2">
          <h2 className="text-sm font-bold">{courseTitle} のレビュー投稿</h2>
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-lg leading-none text-neutral-400 hover:text-neutral-600"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}