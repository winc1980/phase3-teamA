// 開発用のダミーデータ。DB（Neon）につなぐまではここを表示する。
export type Review = {
  id: number;
  easy: number; // 単位の取りやすさ（1〜5）
  text: string;
  helpful: number; // 「役に立った」の数
};

export type Course = {
  id: number;
  name: string;
  teacher: string;
  faculty: string;
  day: string;
  period: number;
  reviews: Review[];
};

export const courses: Course[] = [
  {
    id: 1,
    name: "線形代数A",
    teacher: "山田先生",
    faculty: "基幹理工",
    day: "月",
    period: 2,
    reviews: [
      { id: 1, easy: 4, text: "出欠はゆるい。テストは過去問から多めに出る。", helpful: 8 },
      { id: 2, easy: 5, text: "説明が丁寧で質問しやすい。", helpful: 3 },
    ],
  },
  {
    id: 2,
    name: "プログラミング入門",
    teacher: "佐藤先生",
    faculty: "基幹理工",
    day: "月",
    period: 2,
    reviews: [{ id: 3, easy: 3, text: "毎週の課題が重い。でも力はつく。", helpful: 5 }],
  },
  {
    id: 3,
    name: "英語1",
    teacher: "田中先生",
    faculty: "基幹",
    day: "月",
    period: 2,
    reviews: [],
  },
];

export function averageEasy(course: Course): number {
  if (course.reviews.length === 0) return 0;
  const sum = course.reviews.reduce((total, r) => total + r.easy, 0);
  return sum / course.reviews.length;
}

export function stars(score: number): string {
  const n = Math.round(score);
  return "★".repeat(n) + "☆".repeat(5 - n);
}
