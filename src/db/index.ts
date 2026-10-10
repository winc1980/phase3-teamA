// Neonへの接続。.env.local に DATABASE_URL を書いてから使う。
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

export function getDb() {
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error("DATABASE_URL が設定されていません（.env.local を確認）");
  return drizzle(neon(url));
}
