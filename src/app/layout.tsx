import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "早大単位ナビ（仮）",
  description: "早稲田の授業の口コミ・評価サイト",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-zinc-100 text-zinc-900">
        {/* ヘッダーをえんじ色(#8e1728)に変更 */}
        <header className="bg-[#8e1728] text-white shadow-sm">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 gap-4">
            <Link href="/" className="font-bold text-lg tracking-wide whitespace-nowrap">
              ◆ 早大単位ナビ
            </Link>

            {/* ヘッダー内の検索バーを追加 */}
            <div className="hidden sm:block flex-1 max-w-xs">
              <input
                type="text"
                placeholder="🔍 授業名・教員名で検索"
                className="w-full rounded bg-white px-3 py-1 text-xs text-zinc-800 placeholder-zinc-400 focus:outline-none"
              />
            </div>

            {/* ヘッダーの右にあるログインボタンなどを追加 */}
            <div className="flex items-center gap-2 text-xs font-bold">
              <Link href="/mypage" className="cursor-pointer rounded px-2.5 py-1.5 hover:bg-white/10">
                マイページ
              </Link>
              <span className="cursor-pointer rounded px-2.5 py-1.5 hover:bg-white/10">
                ログイン
              </span>
              <span className="cursor-pointer rounded bg-white px-3 py-1.5 text-[#8e1728] shadow-sm">
                新規登録
              </span>
            </div>
          </div>
        </header>

        {/* メイン画面（ここに page.tsx の中身が入る） */}
        <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-6">
          {children}
        </main>
      </body>
    </html>
  );
}