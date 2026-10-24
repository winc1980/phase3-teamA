import Link from "next/link";

export default function LoginPage() {
  return (
      <main className="max-w-md mx-auto mt-20">
          <div className="bg-white p-10 rouded-lg shadow mt-32">
            <div className="flex justify-center gap-16 mb-8">
                  <Link href="/login">
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
            </label>
            
            <input
                type="text"
                className="w-full border border-gray-300 rounded p-2 mb-6"
            />
            
            <label className="block mb-2">
                パスワード
            </label>
            <input
                type="password"
                className="w-full border border-gray-300 rounded p-2 mb-6"
            />
            
            <p className="text-right text-sm text-red-800 mb-6">
                パスワードをお忘れですか？
            </p>

            <button
                className="w-full bg-red-800 text-white py-3 rounded-full">
                ログインする
            　</button>

          </div>
    </main>
  );
}