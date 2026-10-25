import Link from "next/link";

export default function LoginPage() {
  return (
      <main className="max-w-md mx-auto mt-20">
          <Link
              href="/"
              className="text-sm text-gray-600"
          >
              ← 授業一覧に戻る
          </Link>
          <div className="bg-white p-10 rouded-lg shadow">
            <div className="flex justify-center gap-16 mb-8">
                  <Link
                      href="/login"
                      className="text-center w-24 border-b-4 border-red-800 pb-2 font-bold text-red-800"
                  >
                      ログイン
                  </Link>
                
                  <Link
                      href="#"
                      className="pb-2 text-gray-500"
                  >
                      新規登録
                  </Link>
            </div>
            
            <h1 className="text-3xl font-bold mb-8">
                ログイン
            </h1>
            
            <label className="block mb-2">
                ユーザー名        
            <input
                type="text"
                className="w-full border border-gray-300 rounded p-2 mb-6"
            />
            </label>
            
            <label className="block mb-2">
                パスワード
            <input
                type="password"
                className="w-full border border-gray-300 rounded p-2 mb-6"
            />
            </label>
            
            <p className="text-right text-sm text-red-800 mb-6">
                パスワードをお忘れですか？
            </p>

            <button type="submit"
                className="w-full bg-red-800 text-white py-3 rounded-full">
                ログインする
            </button>

          </div>
    </main>
  );
}