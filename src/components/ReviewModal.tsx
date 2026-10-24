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
      <div className="w-full max-w-sm rounded-2xl bg-white p-6 text-neutral-900 shadow-2xl">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold">{courseTitle} のレビュー投稿</h2>
          <button
            type="button"
            onClick={onClose}
            className="text-xl leading-none text-neutral-500 hover:text-neutral-700"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}