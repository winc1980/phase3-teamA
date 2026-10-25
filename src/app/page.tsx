import RankingSection from "@/components/RankingSection";
import SearchSection from "@/components/SearchSection";

// トップ画面：検索エリア ＋ ランキング表示
export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <SearchSection />
      <RankingSection />
    </div>
  );
}