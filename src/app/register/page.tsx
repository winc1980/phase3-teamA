// app/register/page.tsx

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ページ全体コンテンツ */}
      <div className="mx-auto mt-10 w-full max-w-md px-4">
        {/* タブ（ログイン / 新規登録） */}
        <div className="mb-6 flex border-b border-zinc-300">
          <a
            href="/login"
            className="flex-1 py-2 text-center text-zinc-500 hover:text-[#8e1728]"
          >
            ログイン
          </a>
          <span className="flex-1 border-b-2 border-[#8e1728] py-2 text-center font-bold text-[#8e1728]">
            新規登録
          </span>
        </div>

        {/* タイトル */}
        <h1 className="mb-2 text-xl font-bold text-zinc-900">
          アカウント作成ページ（新規登録）
        </h1>

        {/* フォーム */}
        <form className="mt-6 space-y-5">
          {/* ユーザ名 */}
          <div>
            <label
              htmlFor="username"
              className="mb-1 block text-sm font-bold text-zinc-800"
            >
              ユーザ名
            </label>
            <input
              id="username"
              type="text"
              placeholder="ユーザ名を入力"
              className="w-full rounded-lg border border-zinc-300 px-3.5 py-2 text-sm focus:border-[#8e1728] focus:outline-none"
            />
          </div>

          {/* 所属学部（任意） */}
          <div>
            <label
              htmlFor="faculty"
              className="mb-1 block text-sm font-bold text-zinc-800"
            >
              所属学部（任意）
            </label>
            <input
              id="faculty"
              type="text"
              placeholder="所属学部を入力（任意）"
              className="w-full rounded-lg border border-zinc-300 px-3.5 py-2 text-sm focus:border-[#8e1728] focus:outline-none"
            />
          </div>

          {/* パスワード */}
          <div>
            <label
              htmlFor="password"
              className="mb-1 block text-sm font-bold text-zinc-800"
            >
              パスワード
            </label>
            <input
              id="password"
              type="password"
              placeholder="パスワードを入力"
              className="w-full rounded-lg border border-zinc-300 px-3.5 py-2 text-sm focus:border-[#8e1728] focus:outline-none"
            />
          </div>

          {/* ボタン */}
          <button
            type="submit"
            className="w-full rounded-lg bg-[#8e1728] py-2.5 text-sm font-bold text-white hover:bg-[#6e0f1e]"
          >
            アカウントを新規作成
          </button>
        </form>
      </div>
    </div>
  );
}




